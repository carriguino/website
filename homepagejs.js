(function newIntro() {
  var intros = ['Fact fsdsfd', 'Fact 2', 'Fact 183'];
  var randomIntro = Math.floor(Math.random() * intros.length);
  document.getElementById('introDisplay').innerHTML = intros[randomIntro];
})(); 
window.onload = newIntro;
alert('ok');
