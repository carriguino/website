window.onload = newIntro;
function newIntro() {
  var intros =
    ['Welcome!',
      'go back just trust me',
      'Minceraft',
      'Carri\'s Domain',
      'Carri\'s Artsite!',
      'hi u///u',
      '\'sup.',
      'Hey! You\'re finally awake!',
      'Welcome to my site!',
      'oh, hey i guess...',
      'Thank\'s fo\'r comin\'g!',
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
      '<3',
      'Welcome to the site!',
      'Yo, haha you\'re here, cool... yeah',
      'Despite everything, it\'s still you.',
      'I can\'t go to hell. I\'m all out of vacation days.',
      ':3c',
      '<a target="_blank" href="https://twitlonger.com/show/n_1ss870u">Fun Fact<a>',
      'updates bi-yearly',
      'updates bi-monthly',
      'updates bi-hourly',
      'wait this website updates?',
      'BLM',
      'man if you see this one youre kinda lucky, theres like... a lot of these',
      'Randomized Intros!',
      'Eats Spicy Goodness, Like a Bo-',
      '1-900-490-FREAK',
      'Owo?',
      'This website is in development hell.',
      'Welcome back!',
      'These intros are hard to think of',
      'Can love bloom on a battlefield?',
      'How proffesional is this amirite',
      'funny text makes you haha',
      'Newgrounds! Rise from the dead!',
      'Go home and be a family man',
      'A sound soul dwells within a sound mind and a sound body',
      'What is a man? A miserable little pile of secrets! But enough talk! Have at you!',
      'please send me funny ideas for these, i need as many as possible!',
      'Free to Start',
      'web design is hard im sorry babe',
      'Non-binary',
      'Enby\'s Paradise',
      'they/theminium infused'
    ];
	
	function loadIntro(){
    var randomIntro = Math.floor(Math.random() * intros.length);
		document.getElementById('introDisplay').innerHTML = intros[randomIntro];
	}
	
	loadIntro();

  const animated = document.querySelector('h1.marquee');
  
  animated.addEventListener("animationiteration", () => {
    loadIntro();
  });
}
