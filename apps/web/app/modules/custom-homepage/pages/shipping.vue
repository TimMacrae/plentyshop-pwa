<template>
  <div class="custom-kontakt-page">
    <h1>Versand und Lieferung</h1>

    <section>
      <h2>Liefergebiet</h2>
      <p>Wir liefern ausschließlich innerhalb Deutschlands.</p>
    </section>

    <section>
      <h2>Versandkosten</h2>
      <p>
        Für Bestellungen mit einem Warenwert unter 30,00 € berechnen wir eine Versandkostenpauschale von 4,90 €
        inklusive gesetzlicher Umsatzsteuer.
      </p>
      <p>Ab einem Warenwert von 30,00 € liefern wir innerhalb Deutschlands versandkostenfrei.</p>
      <p>
        Die jeweils anfallenden Versandkosten werden im Warenkorb und vor Abschluss der Bestellung nochmals angezeigt.
      </p>
    </section>

    <section>
      <h2>Versanddienstleister und Lieferzeit</h2>
      <p>Der Versand erfolgt nachhaltig als DHL-Paket Go Green Plus mit Sendungsverfolgung.</p>
      <p>
        Die Lieferzeit beträgt in der Regel 2-3 Werktage nach Vertragsschluss. Bei Zahlung per Vorkasse beginnt die
        Lieferzeit am Tag nach Erteilung des Zahlungsauftrags an das überweisende Kreditinstitut.
      </p>
      <p>
        Sollte für einen Artikel eine abweichende Lieferzeit gelten, wird diese auf der jeweiligen Produktseite
        angegeben.
      </p>
    </section>

    <section>
      <h2>Jugendschutz und Alterssichtprüfung</h2>
      <p>
        Wir verkaufen und liefern alkoholische Getränke ausschließlich an Personen, die das 18. Lebensjahr vollendet
        haben.
      </p>
      <p>
        Alle Sendungen werden mit der DHL-Alterssichtprüfung 18+ verschickt. Die Übergabe erfolgt nur an den Empfänger
        oder an eine empfangsberechtigte Person aus dessen Haushalt, die mindestens 18 Jahre alt ist.
      </p>
      <p>
        Wenn das erforderliche Mindestalter für den DHL-Zusteller nicht eindeutig erkennbar ist, muss die empfangende
        Person ihr Alter durch einen gültigen amtlichen Lichtbildausweis nachweisen. Bitte halten Sie daher bei der
        Zustellung einen Personalausweis oder Reisepass bereit.
      </p>
      <p>Eine Lieferung an DHL-Packstationen ist aufgrund der Alterssichtprüfung nicht möglich.</p>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
  pageType: 'static',
});

// Fetch all Shop Builder content on mount
onMounted(async () => {});
</script>

<style>
.custom-kontakt-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;

  h1 {
    margin: 0 0 1.5rem;
    font-family: 'kornfetti-font', sans-serif;
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 700;
    line-height: 1.1;
  }

  section {
    margin-bottom: 1.75rem;
  }

  h2 {
    margin: 0 0 0.5rem;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
  }

  p {
    margin: 0 0 0.75rem;
    line-height: 1.6;
  }
}
</style>
