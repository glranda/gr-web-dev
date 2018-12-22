$(function(data) {
  fetch('https://jsonplaceholder.typicode.com/albums/1')
    .then(responseOne => responseOne.json())
    .then(jsonOne => console.log(jsonOne))

    $('.test-id').html(data);
});

$.get('https://jsonplaceholder.typicode.com/albums/1', function(data) {
  console.log(data);
  $('.user-one-id').html(data.id);
  $('.user-one-title').html(data.title);
});

$.get('https://jsonplaceholder.typicode.com/albums/2', function(data) {
  console.log('album 2 = ' + data);
  $('.user-two-id').html(data.id);
  $('.user-two-title').html(data.id);
});


// var $li = $('<li/>', {
//   'class': 'bigger',
//   id: uniqId()
// });
//
// var $span = $('<span/>', {
//   'class': 'Sp icon icon-color icon-plus',
//   title: 'Remove from list',
//   text: 'I\'m a span',
//   click: function() {
//     alert( $(this).parent().attr('id') );
//   }
// });
//
// $('body').append( $li.append( $span ) );
