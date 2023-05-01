// modal code adapted from w3Schools and jquery code from user ab29007 on StackOverflow
var modal = document.getElementById('myModal');
window.onload = function () { //loads modal after the page is loaded so that getJSON.js is run first and the click event attaches to created elements
  var img = $('.myImg');
  var modalImg = $("#img01");
  var captionText = document.getElementById("caption");
  $('.myImg').click(function () {
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
  });
}


var span = document.getElementsByClassName("modal")[0];

span.onclick = function () {
  modal.style.display = "none";
}