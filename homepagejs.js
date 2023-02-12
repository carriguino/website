window.onload = newIntro;
function newIntro() {
  var intros =
    ['Welcome!',
      'go back just trust me',
      'Minceraft',
      'hi u///u',
      'Hey, you\'re finally awake.',
      'Welcome to my site!',
      'oh, hey i guess...',
      '👁️  👁️',
      'Have a nice stay!',
      'Welcome to tha site :O',
      'Good website choice, I like your style.',
      'Catgirls only',
      'LGBTQ+ safespace',
      'A homophobe\'s unsafespace.',
      'teehee',
      '*various whispers*',
      'Like what you see?',
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
      ':3',
      ':3c',
      '>:3c',
      '<a target="_blank" href="https://twitlonger.com/show/n_1ss870u">Fun Fact</a>',
      'updates every bicentennial',
      'updates every score',
      'updates biennially',
      'updates bimonthly',
      'updates bihourly',
      'updates biminutely',
      'updates bisecondly',
      'updates ever bimicrosecond',
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
      'web design is so hard',
      'Non-binary',
      'Enby\'s Paradise',
      'they/theminium infused',
      '<a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">1000 Free Robux</a>',
      'You thought your header would but funny, but it was me, Dio!<image src="https://carriganreilly.com/imgsforhosting/dio.png" style="width:75px; vertical-align:-10%;"></image>', //dont worry im aware how painfully cringe this is
      'If you click some of these buttons, they will do things!',
      'itch.io more like itch.thanksforlettingmehostmygamesforfree',
      'what?',
      'My name is Walter Hartwell White. I live at 308 Negra Arroyo Lane Albuquerque New Mexico 87104.',
      'sshh. im sleeping rn',
      'BREAKING NEWS:',
      'hi there my friend :)',
      'ah... right on time.',
      'ubisoft did the exact same things as actiblizz and still got away with it.',
      'kill',
      'water under the bridge more like water in my mouth #hydration',
      'cats are so cute, i wish they were real',
      'santa is real',
      'santa is fake',
      'santa is a capitalist\'s dream',
      'tax the rich',
      'acab',
      '1312',
      '\"I am Error\" is actually intentional, but \"I am Bagu\" is a typo',
      'touch grass?',
      'chicken is vegan?',
      'We have blueberry, raspberry, ginseng, sleepy time, green tea, green tea with lemon, green tea with lemon and honey, liver disaster, ginger with honey, ginger without honey, vanilla almond, white truffel, blueberry chamomile, vanilla walnut, constant comment and... earl grey.',
      'Breaking out the L word',
      'I\'m in lesbians with you.',
      'Scott Pilgrim is dating a high schooler!',
      'admit it, cookie clicker rules'
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

  const newsfeed = document.querySelector("div.newsfeed");
  let animSpeed = 20;
  let animTime = animSpeed.toString()+"s";
  function speedUpAnim() {
    animSpeed = animSpeed - (animSpeed/16);
    animTime = animSpeed.toString()+"s";
    document.getElementById("introDisplay").style.animationDuration = animTime;
    console.log("registered : " + animTime);
  }

  newsfeed.addEventListener("click", speedUpAnim);
}
