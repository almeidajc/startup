function saveText(){
  let index = document.getElementById("textToSave");
  localStorage.setItem("data", index.value);
  let localElement = localStorage.getItem("data");
}




// function indexedSave(){
//
//   let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
//   let request = indexedDB.open("textToSave");
//
//   textToSave = document.getElementById("textToSave");
//
//   request.onupgradeneeded = function() {
//   alert("gil");
//   let db = request.result;
//   let object = db.createObjectStore("indexText", {keyPath : "id", autoIncrement : true });
//   let text =object.createIndex("by_text","textToSave", { unique : true });
//
//
//   alert("gil");
//   request.objectStore("01").add({ text: textToSave});
//   read();
//
//
//   }



function indexedSave () {
  let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  let dataBase = null;
  dataBase = indexedDB.open("TextDataBase", 1);

  startDB ();
  function startDB () {
    dataBase.onupgradeneeded = function (e) {
      dataBase = indexedDB.open("TextDataBase", 1);
      active = dataBase.result;
      object = active.createObjectStore("textId", { keyPath : "id", autoIncrement : true });
      object.createIndex("text", "textToSave", { unique : false });
    };

    dataBase.onsuccess = function (event) {
      // alert("Base de datos cargada correctamente");
      add();

    };

    dataBase.onerror = function (event)  {
      alert("Error cargando la base de datos");
    };

  }
}

let dataBase = indexedDB.open("TextDataBase", 1);

function add () {
    let active = dataBase.result;
    let data = active.transaction("textId", "readwrite");
    let object = data.objectStore("textId");


    let request = object.put( {
        text: document.querySelector("#textToSave").value
    } );

    data.oncomplete = function (event) {
      document.querySelector("#textToSave").value = "";
      // alert("Object successfully added");
      loadAll();
    };
}
function loadAll() {
  let active = dataBase.result;
  let data = active.transaction("textId", "readonly");
  let object = data.objectStore("textId");

  let elements = [];

  object.openCursor().onsuccess = function (event) {

      let result = event.target.result;

      if (result === null) {
          return;
      }

      elements.push(result.value);
      result.continue();

    }
}

function showDataBase() {
  // alert("sa");
  let dataBase = indexedDB.open("TextDataBase", 1);
  let active = dataBase.result;
  let data = active.transaction("textId","readonly");
  let objectStore = data.objectStore("textId");
  let request = objectStore.get("00-03");

 request.onerror = function(event) {
    alert("Unable to retrieve daa from database!");
 };

  request.onsuccess = function(event) {
    if(request.result) {
       alert("id: " + request.result.textId + ", text: " + request.result.textToSave);
    }
    else {
       alert("Kenny couldn't be found in your database!");
    }
 };
}
