// exercise 6
function show(){
    document.getElementById("hiddenSection").className = "showIt";
}

function DoAJoke() {
  let xhttp = new XMLHttpRequest();

  xhttp.open("GET", "http://api.icndb.com/jokes/random", true);

  xhttp.onreadystatechange = function(event) {
        if (xhttp.readyState === XMLHttpRequest.DONE) {
          let response = JSON.parse(event.target.response);
          document.getElementById("hiddenSection").innerHTML = response.value.joke;

        }
   }

   xhttp.send();
}


// exercise 7
function secondJoke(){
 let config = {
   url: "http://api.icndb.com/jokes/random",
   method: "GET"
 }

 let xhttp = new XMLHttpRequest();

 function resolve(xhttp) {

    let response = JSON.parse(event.target.response);
     document.getElementById("hiddenSection").innerHTML = response.value.joke;
     if (xhttp.readyState === XMLHttpRequest.DONE) {
       if (xhttp.responseText.value) {
         document.getElementById("hiddenSection").innerHTML  = xhttp.responseText.value.joke;

       }
     }
 }

 function reject() {
   //exercise 8
   document.getElementById("hiddenSection").className= "showError";
 }

 eventRequestReusable(config).then(resolve,reject);
}

function configAjax (methodHttp, url, asyncronic){
  let config {
    method= methodHttp,
    url = url,
    asyncronic = asyncronic
  };

  return config;

}

function eventRequestReusable(object) {
 let promise = new Promise( function (resolve, reject) {
   let xhttp = new XMLHttpRequest();
   xhttp.open(object.method, object.url);
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
   }, function(error) {
     document.getElementById("changeclass").innerHTML = "404 not found";
     document.getElementById("changeclass").style.color = "red";
 });
}


// exercise 10

  function enterAnAPI(search){
    let xhttp = configAjax("GET", "https://api.github.com/search/repositories?q="+search, true);
    let indexI;
    let columnNode = document.createElement("li");
    let textNode = document.createTextNode(elements.items[indexI].full_name);
    eventRequestReusable(xhttp).then( function (response) {
      elements = JSON.parse(response);
      elements.items.maps(function (item){
        textNode = document.createTextNode(elements.items[indexI].full_name);
        columnNode.appendChild(textNode);
        document.getElementById("elementList").appendChild(columnNode);
      });
    }, function(error) {
      document.getElementById("changeclass").innerHTML = "404 not found";
      document.getElementById("changeclass").className= "showError";
  });

  }
