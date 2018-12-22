// $(function() {
//   fetch('https://jsonplaceholder.typicode.com/albums')
//     .then(responseOne => responseOne.json())
//     .then(jsonOne => console.log(jsonOne))
// });

// $.get('https://jsonplaceholder.typicode.com/albums?userId=1', function(data1) {
//   console.log(data1);
//
// });

$.get('https://jsonplaceholder.typicode.com/albums?userId=2', function(data2) {
  console.log(data2.length);
  var container = $(".table-one")[0];
  console.log(container);

  for(var i = 0; i < data2.length; i++){
    //var idDiv1 = $( "<div class='table__cell table__cell--short'></div>" );
    container.append("<div class='table__cell table__cell--short'></div>"");
  }
  //document.appendChild(container);

});
