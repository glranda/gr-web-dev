// $(function() {
//   fetch('https://jsonplaceholder.typicode.com/albums/1')
//     .then(responseOne => responseOne.json())
//     .then(jsonOne => console.log(jsonOne))
// });

$.get('https://jsonplaceholder.typicode.com/albums/1', function(data1) {
  console.log(data1);
  $('.user-one-id').html(data1.id);
  $('.user-one-title').html(data1.title);
});

$.get('https://jsonplaceholder.typicode.com/albums/2', function(data2) {
  console.log(data2);
  $('.user-two-id').html(data2.id);
  $('.user-two-title').html(data2.id);
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
