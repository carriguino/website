window.onload=newIntro;
function newIntro() {
  var intros = ['Welcome!', 'go back just trust me', 'Minceraft', 'Carri\'s Domain', 'Carri\'s Artsite!', 'hi u///u', '\'sup.', 'Hey! You\'re finally awake!', 'Welcome to my site!', 'oh, hey i guess...', 'Thank\'s for coming!'];
  var randomIntro = Math.floor(Math.random() * intros.length);
  document.getElementById('introDisplay').innerHTML = intros[randomIntro];
}
