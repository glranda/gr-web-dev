$(function() {
  fetch('https://jsonplaceholder.typicode.com/albums')
    .then(responseOne => responseOne.json())
    .then(jsonOne => console.log(jsonOne))
});

$.get('https://jsonplaceholder.typicode.com/albums?userId=1', function(data1) {
  console.log(data1);
  $('.user-one-id').html(data1.id);
  //$('.user-one-title').html(data1.title);
});

$.get('https://jsonplaceholder.typicode.com/albums?userId=2', function(data2) {
  console.log(data2);
  $('.user-two-id').html(data2.title);
  //$('.user-two-title').html(data2.title);
});
