// exercise 6
function show(){
    let obj = document.getElementById("hidden");
    obj.style.visibility ="visible";
}

function DoAJoke() {
  let xhttp = new XMLHttpRequest();

  xhttp.open("GET", "http://api.icndb.com/jokes/random", true);

  xhttp.onreadystatechange = function(event) {
        if (xhttp.readyState === XMLHttpRequest.DONE) {
          let response = JSON.parse(event.target.response);
          document.getElementById("hidden").innerHTML = response.value.joke;
        }
   }

   xhttp.send();
}


// exercise 7
function secondJoke(){
 let config = {
   url: "http://api.icndb.com/jokes/random"
 }

 let xhttp = new XMLHttpRequest();

 function resolve(xhttp) {

    let response = JSON.parse(event.target.response);

     document.getElementById("hidden").innerHTML = response.value.joke;

     if (xhttp.readyState === XMLHttpRequest.DONE) {
       if (xhttp.responseText.value) {
         document.getElementById("hidden").innerHTML  = xhttp.responseText.value.joke;
       }
     }
 }

 function reject() {
   //exercise 8
   let obj = document.getElementById("hidden");
   obj.style.color ="red";
 }

 eventRequestReusable(config).then(resolve,reject);
}

function configAjax (methodHttp, url, asyncronic){
 this.methodHttp = methodHttp;
 this.url = url;
 this.asyncronic = asyncronic;
}

function eventRequestReusable(object) {
 let promise = new Promise( function (resolve, reject) {
   let xhttp = new XMLHttpRequest();

   xhttp.open("GET", object.url);
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
  let xhttp = new configAjax("GET", "https://api.github.com/search/repositories?q=javascript", true);
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
 });
}


// exercise 10

  function enterAnAPI(search){
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
  });

  }
