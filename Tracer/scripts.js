// $(function() {
//   fetch('https://jsonplaceholder.typicode.com/albums')
//     .then(responseOne => responseOne.json())
//     .then(jsonOne => console.log(jsonOne))
// });

$.get('https://jsonplaceholder.typicode.com/albums?userId=1', function(data1) {
  var container = $(".table-one");

  for(var i = 0; i < data1.length; i++) {
    let newRow = '<div class="table__row"><div class="user-id1 table__cell table__cell--short"></div><div class="album-name1 table__cell"></div></div>';
    container.after(newRow);
  }

  let albums = $(".album-name1");
  for(var j = 0; j < albums.length; j++) {
    albums[j].innerHTML = data1[j].title;
  }

});

$.get('https://jsonplaceholder.typicode.com/albums?userId=2', function(data2) {
  var container = $(".table-two");

  for(var i = 0; i < data2.length; i++) {
    let newRow = '<div class="table__row"><div class="user-id2 table__cell table__cell--short"></div><div class="album-name2 table__cell"></div></div>';
    container.after(newRow);
  }

  let albums = $(".album-name2");
  for(var j = 0; j < albums.length; j++) {
    albums[j].innerHTML = data2[j].title;
  }

});
