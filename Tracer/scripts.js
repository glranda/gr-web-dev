// $(function(data) {
//   fetch('https://jsonplaceholder.typicode.com/albums/1')
//     .then(responseOne => responseOne.json())
//     .then(jsonOne => console.log(jsonOne))
//
//     $('.test-id').html(data);
// });

$.get('https://jsonplaceholder.typicode.com/albums/1', function(data) {
  $('.test-id').html(data.id);
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
