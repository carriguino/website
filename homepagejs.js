window.onload=newIntro;
function newIntro() {
  var intros = ['Welcome!', 'go back just trust me', 'Minceraft', 'Carri\'s Domain',
   'Carri\'s Artsite!', 'hi u///u', '\'sup.', 'Hey! You\'re finally awake!', 'Welcome to my site!',
   'oh, hey i guess...', 'Thank\'s for comin\'g!', '👁️  👁️', 'Have a nice stay!', 'Welcome to tha site :O', 'Good website choice, I like your style.',
   'Humans only', 'Robots only', 'Catgirls only', 'LGBTQ+ safespace', 'A homophobe\'s unsafespace.', 'teehee', '*various whispers*', 'Like what you see?',
   'Gamers only', 'lol', 'Thanks for coming!', 'Welcome friend :)', 'Heya, welcome', 'Not Spyware', 'Don\'t look at my code, baka! O//O'];
   
  var randomIntro = Math.floor(Math.random() * intros.length);
  document.getElementById('introDisplay').innerHTML = intros[randomIntro];
}
