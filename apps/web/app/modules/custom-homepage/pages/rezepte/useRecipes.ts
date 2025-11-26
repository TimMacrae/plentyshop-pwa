export const useRecipes = () => {
  const recipes = [
    {
      id: 1,
      title: 'Kornfetti Mule',
      subTitle: 'Limette, Gurke, Ginger Beer',
      link: '/rezepte/1',
      zutaten: '5 cl Kornfetti<br>1,5 cl Limettensaft<br>Ginger Beer',
      zubereitung:
        '1. Kornfetti und Limettensaft in ein Longdrinkglas einfüllen<br><br>2. Das Glas mit Eiswürfeln füllen und mit Ginger Beer auffüllen<br><br>3. Mit einer Gurke garnieren',
      dasBrauchstDu: 'Longdrinkglas',
      image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/rezepte/Kornfetti_Mule_Cocktail_Rezept.jpeg',
    },
    {
      id: 2,
      title: 'Kornfetti Strawberry Punch',
      subTitle: 'Erdbeere, Limette, Prosecco',
      link: '/rezepte/2',
      zutaten: '3 cl Kornfetti<br>2 cl Erdbeersirup<br>2,5 cl Limettensaft<br>Prosecco',
      zubereitung:
        '1. Kornfetti, Erdbeersirup, Limettensaft in den Shaker geben<br><br>2. Eiswürfel dazu geben (ca. 5 Stück) und ordentlich shaken<br><br>3. Durch den Strainer in euer Weinglas abseihen.<br><br>4. ca. 5 Eiswürfel hinzugeben.<br><br>5. Mit Prosecco auffüllen und mit einer Erdbeerrose dekorieren',
      dasBrauchstDu: 'Strainer, Shaker, Jigger, Weinglas (oder ähnliches)',
      image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/rezepte/Kornfetti_Strawberry_Punch.jpeg',
    },
    {
      id: 3,
      title: 'Himmi Kräutergarten',
      subTitle: 'Basilikum, Himbeeren',
      link: '/rezepte/3',
      zutaten: '8 cl Himmi<br>Basilikum Limonade<br>Himbeeren<br>Basilikum',
      zubereitung:
        '1. Den Himmi in eine Longdrink Glas füllen und Eis hinzugeben<br><br>2. Mit Basilikum Limonade auffüllen<br><br>3. Mit Himbeeren und einer Hand voll Basilikum dekorieren',
      dasBrauchstDu: 'Longdrinkglas',
      image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/rezepte/Himmi_Basilikum_Kornfetti_Rezept_Korn.jpeg',
    },
    {
      id: 4,
      title: 'Himmi Spritz',
      subTitle: 'Prosecco, Himbeeren, Minze',
      link: '/rezepte/4',
      zutaten: '3 cl Himmi<br>Prosecco<br>Himbeeren<br>Minze<br>Eiswürfel',
      zubereitung:
        '1. Prosecco in ein Weinglas geben, Eiswürfel vorsichtig hinzugeben<br><br>2. Den Himmi hinzugeben<br><br>3. Mit vielen Himbeeren und etwas Minze garnieren',
      dasBrauchstDu: 'Weinglas',
      image:
        'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/rezepte/Himmi_Spritz_Kornfetti_Rezept_Prosecco.jpeg',
    },
    {
      id: 5,
      title: 'Kornfetti Flipper',
      subTitle: 'Banane, Sahne',
      link: '/rezepte/5',
      zutaten: '5 cl Kornfetti<br>4 cl Sahne<br>5 cl Bananensaft<br>etwas Kirschsaft<br>eine Banane',
      zubereitung:
        '1. Kornfetti, Sahne und Bananensaft in einen Shaker füllen, Eiswürfel dazu geben und ordentlich shaken<br><br>2. Eiswürfel in ein Glas einfüllen und den Drink abseihen<br><br>3. Mit etwas Kirschsaft floaten<br><br>4. Mit einem Bananen-Delfin dekorieren',
      dasBrauchstDu: 'Strainer, Shaker, Jigger, Tumbler Glas',
      image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/rezepte/Kornfetti_Flipper.jpeg',
    },
    {
      id: 6,
      title: 'Himmi Mojito',
      subTitle: 'Himbeer, Limette, Minze',
      link: '/rezepte/6',
      zutaten: '6 cl Kornfetti Himmi<br>2,5 cl Limettensaft<br>Sodawasser<br>Minzblätter',
      zubereitung:
        '1. Kornfetti Himmi, Limettensaft, Minzblätter und Sodawasser in den Shaker geben<br><br>2. Eiswürfel dazu geben und shaken<br><br>3. Durch den Strainer in euer Eisglas abseihen<br><br>4. Mit Himbeermännchen und Minze dekorieren',
      dasBrauchstDu: 'Strainer, Shaker, Jigger, Longdrinkglas',
      image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/rezepte/Himmi_Mojito_.jpeg',
    },
    {
      id: 7,
      title: 'Harvey dreht durch',
      subTitle: 'Vanillezucker, Orangensaft',
      link: '/rezepte/7',
      zutaten: '5 cl Kornfetti<br>4 cl Orangensaft<br>2 cl Limettensaft<br>Vanillezucker',
      zubereitung:
        '1. Kornfetti, Orangensaft, Limettensaft und Vanillezucker in den Shaker geben<br><br>2. Eiswürfel dazu geben (ca. 5 Stück) und ordentlich shaken<br><br>3. Durch den Strainer in euer mit Eis gefülltes Longdrinkglas abseihen<br><br>4. Mit Sodawasser auffüllen und mit einem Himbeermännchen und Minzblättern dekorieren',
      dasBrauchstDu: 'Strainer, Shaker, Jigger, Martini-Glas (oder ähnliches)',
      image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/rezepte/Kornfetti_Harvey_dreht_durch.jpeg',
    },
    {
      id: 8,
      title: 'Bunny Möhry',
      subTitle: 'Möhrensaft, Tomatensaft',
      link: '/rezepte/8',
      zutaten: '5 cl Kornfetti<br>6 cl Möhrensaft<br>4 cl Tomatensaft<br>Tabasco<br>Worcestersauce<br>Pfeffer<br>Salz',
      zubereitung:
        '1. Kornfetti, Möhrensaft, Tomatensaft, Tabasco, Worcestersauce, Pfeffer und Salz in einen Shaker füllen. Eiswürfel vorsichtig dazu geben und ordentlich shaken<br><br>2. Eiswürfel in ein mittelgroßes Glas geben und den Drink abseihen<br><br>3. Mit einer abgebissenen Möhre dekorieren',
      dasBrauchstDu: 'Strainer, Shaker, Jigger, Tumbler Glas',
      image:
        'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/rezepte/Kornfetti_Bunny_Moehry_Kornrezept_Korn-1536x1536.jpeg',
    },
    {
      id: 9,
      title: 'Blaubeer Kornjito',
      subTitle: 'Blaubeeren, Limettensaft',
      link: '/rezepte/9',
      zutaten: '3 cl Limettensaft<br>1,5 cl Zuckersirup<br>6 cl Kornfetti<br>Blaubeeren<br>Sodawasser',
      zubereitung:
        '1. Eine Hand voll Blaubeeren, Limettensaft, Zuckersirup und Kornfetti in ein Longdrinkglas geben<br><br>2. Alles zusammen muddeln<br><br>3. Das Glas mit Eiswürfeln füllen und mit Sodawasser auffüllen<br><br>4. Vorsichtig umrühren<br><br>5. Mit einer Blaubeer-Raupe garnieren',
      dasBrauchstDu: 'Longdrinkglas, Muddler, Barlöffel',
      image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/rezepte/Kornfetti_Blaubeer_Mojito.jpeg',
    },
    {
      id: 10,
      title: 'Ingwer geht noch',
      subTitle: 'Ingwer, Limette, Honig',
      link: '/rezepte/10',
      zutaten: '5 cl Kornfetti<br>3 cl Limette<br>2 cl Ingwersaft<br>2 TL Honig',
      zubereitung:
        '1. Kornfetti, Limette, Ingwersaft und Honig in den Shaker geben und umrühren<br><br>2. Eiswürfel dazu geben und ordentlich shaken<br><br>3. Durch den Strainer in euer Glas abseihen<br><br>4. Mit etwas Ingwer dekorieren',
      dasBrauchstDu: 'Strainer, Shaker, Jigger, Martini-Glas',
      image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/rezepte/Kornfetti_Ingwer_geht_noch.jpeg',
    },
    {
      id: 11,
      title: 'Kornfetti Royal Sahne TS',
      subTitle: 'Kaffelikör, Sahne',
      link: '/rezepte/11',
      zutaten: '3 cl Kornfetti<br>6 cl Kaffeelikör<br>Sahne',
      zubereitung:
        '1. Kornfetti und Kaffeelikör in ein Martini-Glas füllen<br><br>2. Eiswürfel dazu geben (ca. 2 Stück)<br><br>3. Mit viel Sahne toppen',
      dasBrauchstDu: 'Martini-Glas',
      image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/rezepte/Korfetti_Korn_Royal_Sahne_TS.jpeg',
    },
    {
      id: 12,
      title: 'Kornfetti KoGra',
      subTitle: 'Grapefruit, Cranberry',
      link: '/rezepte/12',
      zutaten: '5 cl Kornfetti<br>3 cl Grapefruitsaft<br>3 cl Cranberrysaft<br>Sodawasser<br>Schlange',
      zubereitung:
        '1. Kornfetti in ein Longdrinkglas füllen<br><br>2. Das Glas mit Eiswürfeln füllen<br><br>3. Grapefruitsaft und Cranberrysaft zugeben<br><br>4. Mit Sodawasser auffüllen<br><br>5. Mit einer Limettenschlangen-Garnitur dekorieren',
      dasBrauchstDu: 'Longdrinkglas, Jigger, Barlöffel',
      image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/rezepte/Kornfetti_Kogra.jpeg',
    },
    {
      id: 13,
      title: 'Hokuspokus Kokosnuss',
      subTitle: 'Kokosnuss, Orangensaft, Kiwi, Limette',
      link: '/rezepte/13',
      zutaten:
        '6 cl Kornfetti<br>Saft einer Orange (8–10 cl)<br>Saft einer Kiwi (ca. 5 cl)<br>Saft einer Limette (ca. 8 cl)<br>100 ml Kokosnusswasser',
      zubereitung:
        '1. Kokosnuss öffnen und 100 ml Wasser darin lassen<br><br>2. Kornfetti, Orangensaft, Kiwisaft und Limettensaft zugeben<br><br>3. Mit dem Zauberstab umrühren<br><br>4. Hinweis: Die Kokosnuss brennt nicht – Video-Trick!',
      dasBrauchstDu: 'Kokosnuss, Machete, Zauberstab, Krone',
      image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/rezepte/Kornfetti_Hokuspokus.jpeg',
    },
    {
      id: 14,
      title: 'Rote Bete Sour',
      subTitle: 'Rote Bete, Limette',
      link: '/rezepte/14',
      zutaten: '6 cl Kornfetti<br>4 cl Rote Bete Saft<br>3 cl Limette<br>2 cl Zucker',
      zubereitung:
        '1. Kornfetti, Rote Bete Saft, Limette und Zucker in Shaker geben<br><br>2. Eis zugeben und shaken<br><br>3. Durch Strainer abseihen<br><br>4. Mit einem Limetten-Segelschiff dekorieren',
      dasBrauchstDu: 'Strainer, Shaker, Jigger, Glas',
      image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/rezepte/Kornfetti_Rote_Bete_Sour_Kornrezept.jpeg',
    },
    {
      id: 15,
      title: '75er Kornfetti',
      subTitle: 'Limette, Prosecco',
      link: '/rezepte/15',
      zutaten: '6 cl Kornfetti<br>1,5 cl Zuckersirup<br>3 cl Limettensaft<br>Prosecco',
      zubereitung:
        '1. Kornfetti, Zuckersirup und Limettensaft in Shaker geben<br><br>2. Eiswürfel dazu geben und shaken<br><br>3. Abseihen<br><br>4. Mit Prosecco auffüllen und dekorieren',
      dasBrauchstDu: 'Strainer, Shaker, Jigger, Martini-Glas',
      image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/rezepte/Kornfetti-75-Korn-Cocktail-Rezept-1.jpeg',
    },
    {
      id: 16,
      title: 'Kornfetti Schießerei',
      subTitle: 'Rosa-Pfeffer, Agave, Limette',
      link: '/rezepte/16',
      zutaten: '5 cl Kornfetti<br>3 cl Limette<br>1,5 cl Agavendicksaft<br>Rosa-Pfeffer',
      zubereitung:
        'Rosa Pfefferrand:<br><br>1. Rosa Pfeffer auf Teller geben, daneben Limette + Agave mischen<br><br>2. Glasrand zuerst in Limette/Agave, dann in Pfeffer tauchen<br><br>Drink:<br><br>1. Kornfetti, Limette, Agave in Shaker geben, Eis zugeben & shaken<br><br>2. In Glas mit Pfefferrand abseihen<br><br>3. Mit Limetten-Schnurrbart dekorieren',
      dasBrauchstDu: 'Strainer, Shaker, Jigger, Martini-Glas',
      image:
        'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/rezepte/Kornfetti-Korn-Schiesserei-Kornrezept-1-1536x1536.jpeg',
    },
    {
      id: 17,
      title: 'Kornfetti Bunte Tüte',
      subTitle: 'Cranberrysaft, Naschi',
      link: '/rezepte/17',
      zutaten:
        '5 cl Kornfetti<br>Früchte eurer Wahl<br>1 cl Zitronensaft<br>2 cl Cranberrysaft<br>Sodawasser<br>Süßigkeiten',
      zubereitung:
        '1. Kornfetti in Glas geben<br><br>2. Früchte zugeben und muddeln<br><br>3. Schuss Zitrone zugeben<br><br>4. Eiswürfel dazu geben<br><br>5. Cranberrysaft zugeben<br><br>6. Mit Sodawasser auffüllen und Süßigkeiten garnieren',
      dasBrauchstDu: 'Muddler, Tumbler Glas',
      image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/rezepte/Kornfetti_Bunte_Tu_te.jpeg',
    },
    {
      id: 18,
      title: 'Kornfetti KoLiSpri',
      subTitle: 'Sprite, Limette, Cranberrysaft',
      link: '/rezepte/18',
      zutaten: '5 cl Kornfetti<br>2 cl Limettensaft<br>2 cl Cranberrysaft<br>Sprite',
      zubereitung:
        '1. Kornfetti in ein Glas geben<br><br>2. Eiswürfel dazu geben<br><br>3. Limette & Cranberrysaft zugeben<br><br>4. Mit Sprite auffüllen und mit Ananas-Vogel dekorieren',
      dasBrauchstDu: 'Longdrinkglas',
      image: 'https://cdn02.plentymarkets.com/f4vqow9g5sio/frontend/rezepte/Kornfetti_Kolispri.jpeg',
    },
  ];

  const findRecipeById = (id: number) => {
    return recipes.find((recipe) => recipe.id === id);
  };

  return {
    recipes,
    findRecipeById,
  };
};
