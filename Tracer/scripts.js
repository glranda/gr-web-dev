$(function() {
  fetch('https://jsonplaceholder.typicode.com/albums/1')
    .then(response => response.json())
    .then(json => console.log(json))
});

//User 1 Random ID
function uniqId() {
  return Math.round(new Date().getTime() + (Math.random() * 100));
}

var $li = $('<li/>', {
  'class': 'bigger',
  id: uniqId()
});

var $span = $('<span/>', {
  'class': 'Sp icon icon-color icon-plus',
  title: 'Remove from list',
  text: 'I\'m a span',
  click: function() {
    alert( $(this).parent().attr('id') );
  }
});

$('body').append( $li.append( $span ) );
