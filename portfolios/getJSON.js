var artLog;

$(document).ready(function(){
    $.getJSON('../2023art.json', function(data){
      console.log(data);
      var json = JSON.stringify(data);
      var parsed = JSON.parse(json);
      console.log(Object.keys(parsed).length)
      for(const property in parsed)
      {
        console.log(parsed[property]);
        var img = document.createElement("img");
        img.className = "myImg";
        img.src = parsed[property].image;
        img.style = "height:100%; max-height:300px";
        img.alt = parsed[property].title + " - " + parsed[property].type + " - " + parsed[property].date;
        document.getElementById("artDIV").appendChild(img);
      }
      
    }).fail(function(){
      console.log("check your code")
    })
  })
