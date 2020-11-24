window.onload=newIntro;
function newIntro() {
  var intros =
  ['Welcome!',
  'go back just trust me',
  'Minceraft',
  'Carri\'s Domain',
  'Carri\'s Artsite!',
  'hi u///u', '\'sup.',
  'Hey! You\'re finally awake!',
  'Welcome to my site!',
  'oh, hey i guess...',
  'Thank\'s for comin\'g!',
  '👁️  👁️',
  'Have a nice stay!',
  'Welcome to tha site :O',
  'Good website choice, I like your style.',
  'Humans only',
  'Robots only',
  'Catgirls only',
  'LGBTQ+ safespace',
  'A homophobe\'s unsafespace.',
  'teehee',
  '*various whispers*',
  'Like what you see?',
  'Gamers only',
  'lol',
  'Thanks for coming!',
  'Welcome friend :)',
  'Heya, welcome',
  'Not Spyware',
  'Don\'t look at my code, baka! O//O',
  'Swag',
  '<3',
  'ʎluO suɐᴉlɐɹʇsn∀',
  'Welcome to the site!',
  'Yo, haha you\'re here, cool... yeah',
  'Despite everything, it\'s still you.',
  'I can\'t go to hell. I\'m all out of vacation days.',
  ':3c',
  'I don\'t have a limit to the amount of characters I can use as this header so hey that\'s a cool thought isn\'t it? Did you know that in 1855 Jefferson Davis convinced the US Military to import camels for use of transportation but then once the civil war started a lot of them were set loose or escaped, at which point the state of Arizona declared it illegal to hunt camels?'
  ];

  var randomIntro = Math.floor(Math.random() * intros.length);
  document.getElementById('introDisplay').innerHTML = intros[randomIntro];
}
