export const useCustomContent = () => {
  const customImageTextBlock_himmiBombContent = {
    image: {
      url: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/HimmiBomb_Kornfetti_Himmbeer_Likoer.jpg',
      mobileUrl:
        'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/HimmiBomb_Kornfetti_Himmbeer_Likoer.jpg',
      alt: 'Himmi Bomb',
    },
    title: { text: 'Himmi Bomb', color: '#e60073' },

    subtitle: { text: 'Die Himmi Bomb ist da! ', color: '#fff' },
    description: {
      text: 'Ein kleiner Kick für den Gaumen aus unserem Himmi und Prosecco, der dich genauso aus den Socken haut wie ein guter Shot, aber mit der Leichtigkeit eines richtig guten Drinks.',
      color: '#fff',
    },
    cta: {
      text: 'Jetzt entdecken',
      color: '#fff',
      bgColor: '#e60073',
      link: '/products/himmi',
    },
    bgColor: '#000000',
  };

  const customImageTextBlock_pinkRiotSquadContent = {
    image: {
      url: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Pink_Riot_Squad2.jpg',
      mobileUrl:
        'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/Image_Startseite/NEW2025/Himmi_Pink_Riot_Squad2.jpg',
      alt: 'Pink Riot Squad',
    },
    title: { text: 'Pink Riot Squad', color: '#000' },
    subtitle: { text: 'Freundschaft  Freiheit  Feiern', color: '#fff' },
    description: {
      text: 'Das Pink Riot Squad ist die perfekte Mischung aus Verrücktheit und Stil – und sie kommen, um die Reeperbahn auf den Kopf zu stellen! Also macht euch bereit und schließt euch dem Pink Riot Squad an! Es wird wild, es wird laut und es wird unvergesslich!',
      color: '#fff',
    },
    cta: {
      text: 'Jetzt entdecken',
      color: '#fff',
      bgColor: '#000',
      link: '/products/himmi',
    },
    bgColor: '#e60073',
  };

  return {
    customImageTextBlock_himmiBombContent,
    customImageTextBlock_pinkRiotSquadContent,
  };
};
