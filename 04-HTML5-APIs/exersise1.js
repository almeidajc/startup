function saveText(){
  let index = document.getElementById("textToSave");
  localStorage.setItem("data", index.value);
  let localElement = localStorage.getItem("data");

}

window.onload = function () {
 let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
 dataBase = indexedDB.open("DataBase", 1);

 dataBase.onupgradeneeded = function (e) {
   let db = event.target.result;
   object = db.createObjectStore("textId", { keyPath : "id", autoIncrement : true  });
   let text =object.createIndex("textToSave","textToSave", { unique : true });
 };

 dataBase.onsuccess = function (e) {
   alert('DB Works');
 };

 dataBase.onerror = function (e)  {
   alert('DB didnt work');
 };
}

function indexedDBSave () {
  let active = dataBase.result;
  let data = active.transaction("textId", "readwrite").objectStore("textId");
  let request = data.put( {
    text: document.querySelector("#textToSave").value
  });
  request.onerror = function (e) {
                    console.log("Error");
  };

  data.oncomplete = function (e) {
                   document.querySelector("#textToSave").value = '';
                   alert("the object has saved");
               };
 }

 function clearIndexedDB (){
  let active = dataBase.result;
  let request = active.transaction("textId", "readwrite").objectStore("textId").clear();
 }




 // function allowDrop(ev) {
 //     ev.preventDefault();
 // }
 //
 // function drag(ev) {
 //     ev.dataTransfer.setData("drop", ev.target.id);
 // }
 //
 // function drop(ev) {
 //     ev.preventDefault();
 //     var data = ev.dataTransfer.getData("drop");
 //     ev.target.appendChild(document.getElementById(drop));
 // }

 let drop = document.getElementById("drop");

 drop.ondragenter = function(event) {
   drop.textContent = "";
   event.stopPropagation();
   event.preventDefault();
 }

 drop.ondragover = function(event) {
   event.stopPropagation();
   event.preventDefault();
 }

 drop.ondrop = function(event) {
   event.stopPropagation();
   event.preventDefault();
   dodrop(event);
 }

 function dodrop(event) {
   let dt = event.dataTransfer;
   let file = dt.files[0];

   let fileReader = new FileReader();
   fileReader.readAsText(file);

   fileReader.onloadend = function() {
     document.getElementById("output").innerHTML = fileReader.result;
     drop.innerHTML = "File " + file.name + " opened";
   };
 }
