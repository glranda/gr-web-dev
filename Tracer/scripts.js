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

  // for(var i = 0; i < data2.length; i++){
  //   buttons[i].classList.add('hidden');
  // }
});
