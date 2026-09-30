export const useBombs = () => {
  const bombs = [
    {
      id: 1,
      title: 'Himmi Bomb',
      subTitle: 'Himmi, Prosecco',
      link: '/rezepte/bombs/1',
      zutaten: '2 cl Himmi<br>2 cl Prosecco',
      zubereitung: '1. Himmi in die Mitte des Bomb Glases eingießen<br><br>2. Prosecco außenrum eingießen',
      dasBrauchstDu: 'Kornfetti Bomb Glas',
      image: 'https://cdn02.plentyone.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Bomb.jpeg',
    },
    {
      id: 2,
      title: 'Spliti Bomb',
      subTitle: 'Spliti, Prosecco',
      link: '/rezepte/bombs/2',
      zutaten: '2 cl Spliti<br>2 cl Prosecco',
      zubereitung: '1. Spliti in die Mitte des Bomb Glases eingießen<br><br>2. Prosecco außenrum eingießen',
      dasBrauchstDu: 'Kornfetti Bomb Glas',
      image: 'https://cdn02.plentyone.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Spliti_Bomb.jpg',
    },
    {
      id: 3,
      title: 'Corni Colada Bomb',
      subTitle: 'Spliti, Corni',
      link: '/rezepte/bombs/3',
      zutaten: '2 cl Spliti<br>2 cl Corni',
      zubereitung: '1. Corni in die Mitte des Bomb Glases eingießen<br><br>2. Spliti außenrum eingießen',
      dasBrauchstDu: 'Kornfetti Bomb Glas',
      image: 'https://cdn02.plentyone.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Cornicolada-Bundle2.png',
    },
    {
      id: 4,
      title: 'Himmi Pops Bomb',
      subTitle: 'Himmi, Corni',
      link: '/rezepte/bombs/4',
      zutaten: '2 cl Himmi<br>2 cl Corni',
      zubereitung: '1. Himmi in die Mitte des Bomb Glases eingießen<br><br>2. Corni außenrum eingießen',
      dasBrauchstDu: 'Kornfetti Bomb Glas',
      image: 'https://cdn02.plentyone.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Pops.png',
    },
    {
      id: 5,
      title: 'Tutti Frutti Bomb',
      subTitle: 'Himmi, Spliti',
      link: '/rezepte/bombs/5',
      zutaten: '2 cl Himmi<br>2 cl Spliti',
      zubereitung: '1. Himmi in die Mitte des Bomb Glases eingießen<br><br>2. Spliti außenrum eingießen',
      dasBrauchstDu: 'Kornfetti Bomb Glas',
      image: 'https://cdn02.plentyone.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Tutti_Frutti_Bomb.jpg',
    },
    {
      id: 6,
      title: 'Krautdudler Bomb',
      subTitle: 'Krauti, Almdudler',
      link: '/rezepte/bombs/6',
      zutaten: '2 cl Krauti<br>2 cl Almdudler',
      zubereitung: '1. Krauti in die Mitte des Bomb Glases eingießen<br><br>2. Almdudler außenrum eingießen',
      dasBrauchstDu: 'Kornfetti Bomb Glas',
      image: 'https://cdn02.plentyone.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Krautdudler_Bomb.png',
    },
    {
      id: 7,
      title: 'Himmi Sunrise Bomb',
      subTitle: 'Himmi, Fanta',
      author: 'Lukas von der Domschänke',
      link: '/rezepte/bombs/7',
      zutaten: '2 cl Himmi<br>2 cl Fanta',
      zubereitung: '1. Himmi in die Mitte des Bomb Glases eingießen<br><br>2. Fanta außenrum eingießen',
      dasBrauchstDu: 'Kornfetti Bomb Glas',
      image: 'https://cdn02.plentyone.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Sunrise_Bomb.png',
    },
    {
      id: 8,
      title: 'Corni Cola Bomb',
      subTitle: 'Corni, Fritz Kola',
      link: '/rezepte/bombs/8',
      zutaten: '2 cl Corni<br>2 cl Fritz Kola',
      zubereitung: '1. Corni in die Mitte des Bomb Glases eingießen<br><br>2. Fritz Kola außenrum eingießen',
      dasBrauchstDu: 'Kornfetti Bomb Glas',
      image: 'https://cdn02.plentyone.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Corni_Cola.png',
    },
    {
      id: 9,
      title: 'Corni Coffee Bomb',
      subTitle: 'Corni, Espresso',
      link: '/rezepte/bombs/9',
      zutaten: '2 cl Corni<br>2 cl Espresso',
      zubereitung: '1. Corni in die Mitte des Bomb Glases eingießen<br><br>2. Espresso außenrum eingießen',
      dasBrauchstDu: 'Kornfetti Bomb Glas',
      image: 'https://cdn02.plentyone.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Corni_Coffee_Bomb.png',
    },
  ];

  const findBombById = (id: number) => {
    return bombs.find((bomb) => bomb.id === id);
  };

  return {
    bombs,
    findBombById,
  };
};
