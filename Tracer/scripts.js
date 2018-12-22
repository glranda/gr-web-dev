$(function(data) {
  fetch('https://jsonplaceholder.typicode.com/albums/1')
    .then(responseOne => responseOne.json())
    .then(jsonOne => console.log(jsonOne))

    $('.test-id').html(data);
});
