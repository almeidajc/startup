// exercise 6
function show(){
<<<<<<< Updated upstream
    let obj = document.getElementById("hidden");
    obj.style.visibility ="visible";
=======
    document.getElementById("hiddenSection").className = "showIt";
>>>>>>> Stashed changes
}

function DoAJoke() {
  let xhttp = new XMLHttpRequest();

  xhttp.open("GET", "http://api.icndb.com/jokes/random", true);

  xhttp.onreadystatechange = function(event) {
        if (xhttp.readyState === XMLHttpRequest.DONE) {
          let response = JSON.parse(event.target.response);
<<<<<<< Updated upstream
          document.getElementById("hidden").innerHTML = response.value.joke;
=======
          document.getElementById("hiddenSection").innerHTML = response.value.joke;
>>>>>>> Stashed changes
        }
   }

   xhttp.send();
}


// exercise 7
function secondJoke(){
 let config = {
<<<<<<< Updated upstream
   url: "http://api.icndb.com/jokes/random"
=======
   url: "http://api.icndb.com/jokes/random",
   method: "GET"

>>>>>>> Stashed changes
 }

 let xhttp = new XMLHttpRequest();

 function resolve(xhttp) {

    let response = JSON.parse(event.target.response);

<<<<<<< Updated upstream
     document.getElementById("hidden").innerHTML = response.value.joke;

     if (xhttp.readyState === XMLHttpRequest.DONE) {
       if (xhttp.responseText.value) {
         document.getElementById("hidden").innerHTML  = xhttp.responseText.value.joke;
=======
     document.getElementById("hiddenSection").innerHTML = response.value.joke;

     if (xhttp.readyState === XMLHttpRequest.DONE) {
       if (xhttp.responseText.value) {
         document.getElementById("hiddenSection").innerHTML  = xhttp.responseText.value.joke;
>>>>>>> Stashed changes
       }
     }
 }

 function reject() {
   //exercise 8
<<<<<<< Updated upstream
   let obj = document.getElementById("hidden");
   obj.style.color ="red";
=======
   document.getElementById("hiddenSection").className= "showError";
>>>>>>> Stashed changes
 }

 eventRequestReusable(config).then(resolve,reject);
}

function configAjax (methodHttp, url, asyncronic){
<<<<<<< Updated upstream
 this.methodHttp = methodHttp;
 this.url = url;
 this.asyncronic = asyncronic;
=======
  let config {
    method= methodHttp,
    url = url,
    asyncronic = asyncronic
  };

  return config;
>>>>>>> Stashed changes
}

function eventRequestReusable(object) {
 let promise = new Promise( function (resolve, reject) {
   let xhttp = new XMLHttpRequest();

<<<<<<< Updated upstream
   xhttp.open("GET", object.url);
=======
   xhttp.open(object.method, object.url);
>>>>>>> Stashed changes
   xhttp.send();
   xhttp.onload = function () {
     if (this.readyState ===4 && this.status == 200) {
       resolve(xhttp.response);
     } else {
       reject(this.statusText);
     }
   };
   xhttp.onerror = function () {
    reject(this.statusText);
   };
 });
 return promise;
};




// exercise 9


function showRepositories() {
<<<<<<< Updated upstream
  let xhttp = new configAjax("GET", "https://api.github.com/search/repositories?q=javascript", true);
   eventRequestReusable(xhttp).then( function (response) {
     elements = JSON.parse(response);
     for (var i = 0; i < elements.items.length; i++){
       var columnNode = document.createElement("li");
       var textNode = document.createTextNode(elements.items[i].full_name);
       columnNode.appendChild(textNode);
       document.getElementById("elementList").appendChild(columnNode);
     }
=======
  let xhttp = configAjax("GET", "https://api.github.com/search/repositories?q=javascript", true);
  let indexI;
  let columnNode = document.createElement("li");
  let textNode = document.createTextNode(elements.items[indexI].full_name);
   eventRequestReusable(xhttp).then( function (response) {
     elements = JSON.parse(response);
      elements.items.maps(function (item){
       columnNode = document.createElement("li");
       textNode = document.createTextNode(elements.items[indexI].full_name);
       columnNode.appendChild(textNode);
       document.getElementById("elementList").appendChild(columnNode);
     });
>>>>>>> Stashed changes
   }, function(error) {
     document.getElementById("changeclass").innerHTML = "404 not found";
     document.getElementById("changeclass").style.color = "red";
 });
}


// exercise 10

  function enterAnAPI(search){
<<<<<<< Updated upstream
    let xhttp = new configAjax("GET", "https://api.github.com/search/repositories?q="+search, true);

    eventRequestReusable(xhttp).then( function (response) {
      elements = JSON.parse(response);
      for (var i = 0; i < elements.items.length; i++){
        var columnNode = document.createElement("li");
        var textNode = document.createTextNode(elements.items[i].full_name);
        columnNode.appendChild(textNode);
        document.getElementById("elementList").appendChild(columnNode);
      }
    }, function(error) {
      document.getElementById("changeclass").innerHTML = "404 not found";
      document.getElementById("changeclass").style.color = "red";
=======
    let xhttp = configAjax("GET", "https://api.github.com/search/repositories?q="+search, true);
    let indexI;
    let columnNode = document.createElement("li");
    let textNode = document.createTextNode(elements.items[indexI].full_name);
    eventRequestReusable(xhttp).then( function (response) {
      elements = JSON.parse(response);
      elements.items.maps(function (item){
        columnNode = document.createElement("li");
        textNode = document.createTextNode(elements.items[indexI].full_name);
        columnNode.appendChild(textNode);
        document.getElementById("elementList").appendChild(columnNode);
      });
    }, function(error) {
      document.getElementById("changeclass").innerHTML = "404 not found";
      document.getElementById("changeclass").className= "showError";
>>>>>>> Stashed changes
  });

  }
