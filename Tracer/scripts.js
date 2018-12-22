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
  var container = $(".table-one")[0];

  // for(var i = 0; i < data2.length; i++){
  //   var newDiv1 = document.createElement('div');
  //   var newDiv2 = document.createElement('div');
  //   newDiv1.className = 'table__cell table__cell--short';
  //   newDiv2.className = 'table__cell table__cell';
  //   container.append(newDiv1);
  //   container.append(newDiv2);
  // }

  for(var i = 0; i < data2.length; i++){

    let newRow = '<div class="table__row">' +
                        '<div class="table__cell table__cell--short"></div>' +
                        '<div class="table__cell table__cell"></div>' +
                      '</div>';

    container.append(newRow);
  }

});
