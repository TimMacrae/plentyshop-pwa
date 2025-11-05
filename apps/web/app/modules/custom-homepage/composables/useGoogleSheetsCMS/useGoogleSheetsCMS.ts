import type { UseGoogleSheetsCMSReturn, Banner } from './types';

/**
 * Composable for fetching a single "hero" banner from Google Sheets
 * It selects the banner whose [start_date, end_date] interval contains "now".
 */
export const useGoogleSheetsCMS = (sheetId: string, sheetName: string): UseGoogleSheetsCMSReturn => {
  const state = useState<{
    loading: boolean;
    data: Banner | null;
    error: Error | null;
  }>(`google-sheets-${sheetId}-${sheetName}`, () => ({
    loading: false,
    data: null,
    error: null,
  }));

  const fetchContent = async (): Promise<void> => {
    if (!sheetId) {
      console.error('[useGoogleSheetsCMS] Missing sheetId');
      state.value.error = new Error('Sheet ID is required');
      return;
    }

    if (!sheetName) {
      console.error('[useGoogleSheetsCMS] Missing sheetName');
      state.value.error = new Error('Sheet name is required');
      return;
    }

    state.value.loading = true;
    state.value.error = null;

    try {
      const runtimeConfig = useRuntimeConfig();
      const apiKey = runtimeConfig.public.googleSheetsApiKey;

      if (!apiKey) {
        throw new Error('Google Sheets API key not configured in environment variables');
      }

      const encodedSheetName = encodeURIComponent(sheetName);
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodedSheetName}?key=${apiKey}`;

      const response = await $fetch<{ values: string[][] }>(url, {
        method: 'GET',
        headers: { Accept: 'application/json' },
      });

      if (!response.values || response.values.length < 2) {
        console.warn('[useGoogleSheetsCMS] Sheet is empty or has no data rows');
        state.value.data = null;
        return;
      }

      const [headers, ...rows] = response.values;

      const activeBanner = selectActiveBanner(headers || [], rows);

      state.value.data = activeBanner;
    } catch (error: unknown) {
      let errorObj: Error;

      if (error instanceof Error) {
        errorObj = error;
      } else if (typeof error === 'object' && error !== null && 'message' in error) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        errorObj = new Error((error as any).message || 'Unknown error');
      } else {
        errorObj = new Error('Failed to fetch Google Sheets content');
      }

      console.error(`[useGoogleSheetsCMS] Error fetching sheet '${sheetName}':`, errorObj);
      state.value.error = errorObj;
      state.value.data = null;
    } finally {
      state.value.loading = false;
    }
  };

  /**
   * Selects the banner whose [start_date, end_date] contains "now".
   * If multiple match, returns the one with the latest start_date.
   */
  const selectActiveBanner = (headers: string[], rows: string[][]): Banner | null => {
    const now = new Date();
    let activeBanner: Banner | null = null;
    let activeStart: Date | null = null;

    rows.forEach((row, rowIndex) => {
      if (!row || row.length === 0) {
        console.warn(`[useGoogleSheetsCMS] Skipping empty row ${rowIndex + 2}`);
        return;
      }

      const rowData: Record<string, string> = {};
      headers.forEach((header, colIndex) => {
        rowData[header.trim()] = row[colIndex]?.trim() || '';
      });

      const startDate = parseDateTime(rowData.start_date);
      const endDate = parseDateTime(rowData.end_date);

      if (!startDate || !endDate) {
        console.warn(`[useGoogleSheetsCMS] Skipping row ${rowIndex + 2}: invalid start_date or end_date`);
        return;
      }

      // Check if this banner is active at "now"
      if (startDate <= now && now <= endDate) {
        const banner: Banner = {
          image: {
            mobile: rowData.image_mobile || '',
            tablet: rowData.image_tablet || rowData.image_mobile || '',
            desktop: rowData.image_desktop || rowData.image_tablet || rowData.image_mobile || '',
            wideScreen: rowData.image_wideScreen || rowData.image_desktop || rowData.image_mobile || '',
            alt: rowData.image_alt || '',
            brightness: parseFloat(rowData.image_brightness || '1'),
          },
          text: {
            pretitle: rowData.text_pretitle || '',
            title: rowData.text_title || '',
            subtitle: rowData.text_subtitle || '',
            htmlDescription: rowData.text_htmlDescription || '',
            color: rowData.text_color || '#FFFFFF',
            bgcolor: rowData.text_bgcolor || '#000000',
            bgopacity: parseFloat(rowData.text_bgopacity || '0.7'),
            background: parseBoolean(rowData.text_background || 'true', true),
            align: parseAlign(rowData.text_align || ''),
            justify: parseJustify(rowData.text_justify || ''),
            textAlignment: parseTextAlignment(rowData.text_textAlignment || ''),
          },
          button: {
            label: rowData.button_label || '',
            link: rowData.button_link || '',
            variant: parseVariant(rowData.button_variant || ''),
          },
        };

        // If we don't have an active banner yet, or this one has a later start date, pick it.
        if (!activeBanner || (activeStart && startDate > activeStart)) {
          activeBanner = banner;
          activeStart = startDate;
        }
      }
    });

    return activeBanner;
  };

  /**
   * Parse string to Date; returns null if invalid
   */
  const parseDateTime = (value?: string): Date | null => {
    if (!value) return null;
    const d = new Date(value);
    return Number.isNaN(d.getTime()) ? null : d;
  };

  const parseBoolean = (value: string, defaultValue: boolean): boolean => {
    if (!value) return defaultValue;
    const lower = value.toLowerCase();
    if (lower === 'true' || lower === '1' || lower === 'yes') return true;
    if (lower === 'false' || lower === '0' || lower === 'no') return false;
    return defaultValue;
  };

  const parseAlign = (value: string): 'left' | 'center' | 'right' => {
    const lower = value.toLowerCase();
    if (lower === 'start' || lower === 'left') return 'left';
    if (lower === 'end' || lower === 'right') return 'right';
    return 'center';
  };

  const parseJustify = (value: string): 'top' | 'center' | 'bottom' => {
    const lower = value.toLowerCase();
    if (lower === 'start' || lower === 'top') return 'top';
    if (lower === 'end' || lower === 'bottom') return 'bottom';
    return 'center';
  };

  const parseTextAlignment = (value: string): 'left' | 'center' | 'right' => {
    const lower = value.toLowerCase();
    if (lower === 'left') return 'left';
    if (lower === 'right') return 'right';
    return 'center';
  };

  const parseVariant = (value: string): 'primary' | 'secondary' => {
    const lower = value.toLowerCase();
    if (lower === 'secondary') return 'secondary';
    return 'primary';
  };

  return {
    loading: toRef(state.value, 'loading'),
    data: toRef(state.value, 'data'), // single banner or null
    error: toRef(state.value, 'error'),
    fetchContent,
  };
};
