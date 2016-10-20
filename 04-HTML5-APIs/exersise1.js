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





 function handleFileSelect(evt) {
  evt.stopPropagation();
  evt.preventDefault();

  var files = evt.dataTransfer.files; // FileList object.

  // files is a FileList of File objects. List some properties.
  var output = [];
  for (var i = 0, f; f = files[i]; i++) {
    output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                f.size, ' bytes, last modified: ',
                f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                '</li>');
  }
  document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
}

function handleDragOver(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

// Setup the dnd listeners.
var dropZone = document.getElementById('drop_zone');
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('drop', handleFileSelect, false);
