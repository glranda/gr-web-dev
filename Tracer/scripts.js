// $(function() {
//   fetch('https://jsonplaceholder.typicode.com/albums')
//     .then(responseOne => responseOne.json())
//     .then(jsonOne => console.log(jsonOne))
// });

$.get('https://jsonplaceholder.typicode.com/albums?userId=2', function(data2) {
  //console.log(data2);
  var container = $(".table-one");

  for(var i = 0; i < data2.length; i++){
    let newRow = '<div class="table__row"><div class="user-id table__cell table__cell--short"></div><div class="album-name table__cell"></div></div>';
    container.after(newRow);

    let ids = $(".user-id");
    let idArray = [];
    idArray.push(ids);
    console.log(idArray)
  }


  console.log(ids.length)
  for(var i = 0; i < ids.length; i++){
    ids.text(data2[i].id);
  }

});
