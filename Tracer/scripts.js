$(function() {
  fetch('https://jsonplaceholder.typicode.com/albums')
    .then(responseOne => responseOne.json())
    .then(jsonOne => console.log(jsonOne))
});

////// -- Drag and Drop Functions

var dropContainer = $(".table__row");

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.after(dropContainer);
}

////// -- Build and Pop rows

$.get('https://jsonplaceholder.typicode.com/albums?userId=1', function(data1) {
  var container = $(".table-one");

  for(var i = 0; i < data1.length; i++) {
    let newRow = '<div draggable="true" class="table__row"><div class="user-id1 table__cell table__cell--short"></div><div class="album-name1 table__cell"></div></div>';
    container.after(newRow);
  }

  let ids = $(".user-id1");
  let albums = $(".album-name1");
  for(var j = 0; j < albums.length; j++) {
    ids[j].innerHTML = data1[j].userId;
    albums[j].innerHTML = data1[j].title;
  }

});

$.get('https://jsonplaceholder.typicode.com/albums?userId=2', function(data2) {
  var container = $(".table-two");

  for(var i = 0; i < data2.length; i++) {
    let newRow = '<div draggable="true" class="table__row"><div class="user-id2 table__cell table__cell--short"></div><div class="album-name2 table__cell"></div></div>';
    container.after(newRow);
  }

  let ids = $(".user-id2");
  let albums = $(".album-name2");
  for(var j = 0; j < albums.length; j++) {
    ids[j].innerHTML = data2[j].userId;
    albums[j].innerHTML = data2[j].title;
  }

});
