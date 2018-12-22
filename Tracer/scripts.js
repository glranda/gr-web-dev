$(function() {
  fetch('https://jsonplaceholder.typicode.com/albums')
    .then(responseOne => responseOne.json())
    .then(jsonOne => console.log(jsonOne))
});

/////////

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

let newRow = '<div class="table__row"><div ondragstart="drag(event)" draggable="true" class="user-id1 table__cell table__cell--short"></div><div ondragstart="drag(event)" draggable="true" class="album-name1 table__cell"></div></div>';
var containerOne = $(".table-one");
var containerTwo = $(".table-two");

$.get('https://jsonplaceholder.typicode.com/albums?userId=1', function(data1) {
  for(var i = 0; i < data1.length; i++) {
    containerOne.after(newRow);
  }

  let ids = $(".user-id1");
  let albums = $(".album-name1");
  for(var j = 0; j < albums.length; j++) {
    ids[j].innerHTML = data1[j].userId;
    albums[j].innerHTML = data1[j].title;
  }
});

$.get('https://jsonplaceholder.typicode.com/albums?userId=2', function(data2) {
  for(var i = 0; i < data2.length; i++) {
    containerTwo.after(newRow);
  }

  let ids = $(".user-id2");
  let albums = $(".album-name2");
  for(var j = 0; j < albums.length; j++) {
    ids[j].innerHTML = data2[j].userId;
    albums[j].innerHTML = data2[j].title;
  }
});
