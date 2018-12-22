$(function() {
  fetch('https://jsonplaceholder.typicode.com/albums')
    .then(responseOne => responseOne.json())
    .then(jsonOne => console.log(jsonOne))
});

let selectUser1 = document.getElementById("select1");
let selectUser2 = document.getElementById("select2");
let newUser1 = selectUser1.options[selectUser1.selectedIndex].value;
let newUser2 = selectUser2.options[selectUser2.selectedIndex].value;

let x = newUser1;
let y = newUser2;

////// -- Drag and Drop Functions

let _el;

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

function updateUserX() {
  newUser1 = selectUser1.options[selectUser1.selectedIndex].value;
  x = newUser1;
  console.log('update ' + x);
  doSomething();
}

function updateUserY() {
  newUser2 = selectUser2.options[selectUser2.selectedIndex].value;
  y = newUser2;
}

console.log(x);


////// -- Build and Populate rows

function doSomething() {
  $.get('https://jsonplaceholder.typicode.com/albums?userId=' + x, function(data1) {
    let container = $(".table-one");
    let ids = $(".user-id1");
    let albums = $(".album-name1");
    ids.remove();
    albums.remove();

    for(var i = 0; i < data1.length; i++) {
      let newRow = '<div draggable="true" ondragend="dragEnd()" ondragover="dragOver(event)" ondragstart="dragStart(event)" class="table__row"><div class="user-id1 table__cell table__cell--short"></div><div class="album-name1 table__cell"></div></div>';
      container.after(newRow);
    }


    for(var j = 0; j < albums.length; j++) {
      ids[j].innerHTML = data1[j].userId;
      albums[j].innerHTML = data1[j].title;
    }

  });
}

$.get('https://jsonplaceholder.typicode.com/albums?userId=' + x, function(data2) {
  let container = $(".table-two");
  let ids = $(".user-id2");
  let albums = $(".album-name2");

  for(var i = 0; i < data2.length; i++) {
    let newRow = '<div draggable="true" ondragend="dragEnd()" ondragover="dragOver(event)" ondragstart="dragStart(event)" class="table__row"><div class="user-id2 table__cell table__cell--short"></div><div class="album-name2 table__cell"></div></div>';
    container.after(newRow);
  }


  for(var j = 0; j < albums.length; j++) {
    ids[j].innerHTML = data2[j].userId;
    albums[j].innerHTML = data2[j].title;
  }

});

window.onload = function() {
  doSomething();
}
