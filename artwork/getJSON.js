//just copy and paste with minor edits to add another year!

//checking for 2026 ID
if (document.getElementById("2026") != null) {
  $.getJSON('/json/2026.json', function (data) {
    console.log(data);
    var json = JSON.stringify(data);
    var parsed = JSON.parse(json);
    console.log(Object.keys(parsed).length)
    for (const property in parsed) {
      console.log(parsed[property]);
      var img = document.createElement("img");
      img.className = "myImg";
      img.src = parsed[property].image;
      img.alt = parsed[property].title + " - " + parsed[property].type + " - " + parsed[property].date;
      img.loading = "lazy";
      img.style = "height:100%; max-height:300px";
      document.getElementById("2026").appendChild(img);
    }
  }).fail(function () {
    console.log("2026 | check your code")
  })
}

//checking for 2025 ID
if (document.getElementById("2025") != null) {
  $.getJSON('/json/2025.json', function (data) {
    console.log(data);
    var json = JSON.stringify(data);
    var parsed = JSON.parse(json);
    console.log(Object.keys(parsed).length)
    for (const property in parsed) {
      console.log(parsed[property]);
      var img = document.createElement("img");
      img.className = "myImg";
      img.src = parsed[property].image;
      img.alt = parsed[property].title + " - " + parsed[property].type + " - " + parsed[property].date;
      img.loading = "lazy";
      img.style = "height:100%; max-height:300px";
      document.getElementById("2025").appendChild(img);
    }
  }).fail(function () {
    console.log("2025 | check your code")
  })
}

//checking for 2024 ID
if (document.getElementById("2024") != null) {
  $.getJSON('/json/2024.json', function (data) {
    console.log(data);
    var json = JSON.stringify(data);
    var parsed = JSON.parse(json);
    console.log(Object.keys(parsed).length)
    for (const property in parsed) {
      console.log(parsed[property]);
      var img = document.createElement("img");
      img.className = "myImg";
      img.src = parsed[property].image;
      img.alt = parsed[property].title + " - " + parsed[property].type + " - " + parsed[property].date;
      img.loading = "lazy";
      img.style = "height:100%; max-height:300px";
      document.getElementById("2024").appendChild(img);
    }
  }).fail(function () {
    console.log("2024 | check your code")
  })
}

//checking for 2023 ID
if (document.getElementById("2023") != null) {
  $.getJSON('/json/2023.json', function (data) {
    console.log(data);
    var json = JSON.stringify(data);
    var parsed = JSON.parse(json);
    console.log(Object.keys(parsed).length)
    for (const property in parsed) {
      console.log(parsed[property]);
      var img = document.createElement("img");
      img.className = "myImg";
      img.src = parsed[property].image;
      img.alt = parsed[property].title + " - " + parsed[property].type + " - " + parsed[property].date;
      img.loading = "lazy";
      img.style = "height:100%; max-height:300px";
      document.getElementById("2023").appendChild(img);
    }
  }).fail(function () {
    console.log("2023 | check your code")
  })
}

//checking for 2022 ID
if (document.getElementById("2022") != null) {
  $.getJSON('/json/2022.json', function (data) {
    console.log(data);
    var json = JSON.stringify(data);
    var parsed = JSON.parse(json);
    console.log(Object.keys(parsed).length)
    for (const property in parsed) {
      console.log(parsed[property]);
      var img = document.createElement("img");
      img.className = "myImg";
      img.src = parsed[property].image;
      img.alt = parsed[property].title + " - " + parsed[property].type + " - " + parsed[property].date;
      img.loading = "lazy";
      img.style = "height:100%; max-height:300px";
      document.getElementById("2022").appendChild(img);
    }

  }).fail(function () {
    console.log("2022 | check your code")
  })
}


//checking for 2021 ID
if (document.getElementById("2021") != null) {
  $.getJSON('/json/2021.json', function (data) {
    console.log(data);
    var json = JSON.stringify(data);
    var parsed = JSON.parse(json);
    console.log(Object.keys(parsed).length)
    for (const property in parsed) {
      console.log(parsed[property]);
      var img = document.createElement("img");
      img.className = "myImg";
      img.src = parsed[property].image;
      img.alt = parsed[property].title + " - " + parsed[property].type + " - " + parsed[property].date;
      img.loading = "lazy";
      img.style = "height:100%; max-height:300px";
      document.getElementById("2021").appendChild(img);
    }

  }).fail(function () {
    console.log("2021 | check your code")
  })
}


//checking for 2020 ID
if (document.getElementById("2020") != null) {
  $.getJSON('/json/2020.json', function (data) {
    console.log(data);
    var json = JSON.stringify(data);
    var parsed = JSON.parse(json);
    console.log(Object.keys(parsed).length)
    for (const property in parsed) {
      console.log(parsed[property]);
      var img = document.createElement("img");
      img.className = "myImg";
      img.src = parsed[property].image;
      img.alt = parsed[property].title + " - " + parsed[property].type + " - " + parsed[property].date;
      img.loading = "lazy";
      img.style = "height:100%; max-height:300px";
      document.getElementById("2020").appendChild(img);
    }

  }).fail(function () {
    console.log("2020 | check your code")
  })
}


//checking for 2019 ID
if (document.getElementById("2019") != null) {
  $.getJSON('/json/2019.json', function (data) {
    console.log(data);
    var json = JSON.stringify(data);
    var parsed = JSON.parse(json);
    console.log(Object.keys(parsed).length)
    for (const property in parsed) {
      console.log(parsed[property]);
      var img = document.createElement("img");
      img.className = "myImg";
      img.src = parsed[property].image;
      img.alt = parsed[property].title + " - " + parsed[property].type + " - " + parsed[property].date;
      img.loading = "lazy"
      img.style = "height:100%; max-height:300px";
      document.getElementById("2019").appendChild(img);
    }

  }).fail(function () {
    console.log("2019 | check your code")
  })
}

//checking for 2018 ID
if (document.getElementById("2018") != null) {
  $.getJSON('/json/2018.json', function (data) {
    console.log(data);
    var json = JSON.stringify(data);
    var parsed = JSON.parse(json);
    console.log(Object.keys(parsed).length)
    for (const property in parsed) {
      console.log(parsed[property]);
      var img = document.createElement("img");
      img.className = "myImg";
      img.src = parsed[property].image;
      img.alt = parsed[property].title + " - " + parsed[property].type + " - " + parsed[property].date;
      img.loading = "lazy"
      img.style = "height:100%; max-height:300px";
      document.getElementById("2018").appendChild(img);
    }

  }).fail(function () {
    console.log("2018 | check your code")
  })
}

//checking for 2016/2017 ID
if (document.getElementById("20162017") != null) {
  $.getJSON('/json/20162017.json', function (data) {
    console.log(data);
    var json = JSON.stringify(data);
    var parsed = JSON.parse(json);
    console.log(Object.keys(parsed).length)
    for (const property in parsed) {
      console.log(parsed[property]);
      var img = document.createElement("img");
      img.className = "myImg";
      img.src = parsed[property].image;
      img.alt = parsed[property].title + " - " + parsed[property].type + " - " + parsed[property].date;
      img.style = "height:100%; max-height:300px";
      img.loading = "lazy"
      document.getElementById("20162017").appendChild(img);
    }

  }).fail(function () {
    console.log("201617 | check your code")
  })
}


