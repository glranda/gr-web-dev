$(function() {
  fetch('https://jsonplaceholder.typicode.com/albums')
    .then(responseOne => responseOne.json())
    .then(jsonOne => console.log(jsonOne))
});

var userId1 = 'https://jsonplaceholder.typicode.com/albums?userId=1';
var userId2 = 'https://jsonplaceholder.typicode.com/albums?userId=2';
var userId3 = 'https://jsonplaceholder.typicode.com/albums?userId=3';
var userId4 = 'https://jsonplaceholder.typicode.com/albums?userId=4';
var userId5 = 'https://jsonplaceholder.typicode.com/albums?userId=5';
var userId6 = 'https://jsonplaceholder.typicode.com/albums?userId=6';
var userId7 = 'https://jsonplaceholder.typicode.com/albums?userId=7';
var userId8 = 'https://jsonplaceholder.typicode.com/albums?userId=8';
var userId9 = 'https://jsonplaceholder.typicode.com/albums?userId=9';
var userId10 = 'https://jsonplaceholder.typicode.com/albums?userId=10';

let x;
let y;

////// -- Drag and Drop Functions

var _el;

function dragOver(e) {
  if (isBefore(_el, e.target))
    e.target.parentNode.insertBefore(_el, e.target);
  else
    e.target.parentNode.insertBefore(_el, e.target.nextSibling);
}

function dragEnd() {
  _el = null;

}

function dragStart(e) {
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", null);
  _el = e.target;
}

function isBefore(el1, el2) {
    if (el2.parentNode === el1.parentNode)
        for (var cur = el1.previousSibling; cur; cur = cur.previousSibling)
            if (cur === el2)
                return true;
    return false;
}

////// -- User Select

let selecters = $( "select" );
console.log(selecters);

selecters.onchange = function() {
  alert('ahh! fuck im dying');
}





////// -- Build and Populate rows

$.get(userId1, function(data1) {
  var container = $(".table-one");

  for(var i = 0; i < data1.length; i++) {
    let newRow = '<div draggable="true" ondragend="dragEnd()" ondragover="dragOver(event)" ondragstart="dragStart(event)" class="table__row"><div class="user-id1 table__cell table__cell--short"></div><div class="album-name1 table__cell"></div></div>';
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
    let newRow = '<div draggable="true" ondragend="dragEnd()" ondragover="dragOver(event)" ondragstart="dragStart(event)" class="table__row"><div class="user-id2 table__cell table__cell--short"></div><div class="album-name2 table__cell"></div></div>';
    container.after(newRow);
  }

  let ids = $(".user-id2");
  let albums = $(".album-name2");
  for(var j = 0; j < albums.length; j++) {
    ids[j].innerHTML = data2[j].userId;
    albums[j].innerHTML = data2[j].title;
  }

});
