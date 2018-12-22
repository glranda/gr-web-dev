$(function() {
  fetch('https://jsonplaceholder.typicode.com/albums/1')
    .then(responseOne => responseOne.json())
    .then(jsonOne => console.log(jsonOne))

    fetch('https://jsonplaceholder.typicode.com/albums/2')
      .then(responseTwo => responseTwo.json())
      .then(jsonTwo => console.log(jsonTwo))
});

//User 1 Random ID
function uniqId1() {
  return Math.round(new Date().getTime() + (Math.random() * 100));
}

$(function() {
  let newID = document.querySelectorAll('.table__cell--short');

  newID.attr('id', uniqId1());

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
