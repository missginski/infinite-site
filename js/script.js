(function () {
   'use strict';

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 900);
            return false;
          }
        }
      });

      let $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'masonry'
      });
      let filterFns = {};
      // bind filter button click
      $('.filters-button-group').on( 'click', 'button', function() {
        let filterValue = $( this ).attr('data-filter');
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
      });
      // change is-checked class on buttons
      $('.button-group').each( function( i, buttonGroup ) {
        let $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $( this ).addClass('is-checked');
        });
      });



    // Nivo Lightbox
    // $('.grid-item a').nivoLightbox({
    //         effect: 'slideDown',
    //         keyboardNav: true,
    //     });


		$('.carousel-item:first-child').addClass('active');


}());


// render clients
function getClients(obj) {
  let recording = obj[0].recording;
  let mixing = obj[1].mixing;
  let mastering = obj[2].mastering;

  appendData(recording, mixing, mastering)
}
getClients(clients)

function appendData(items, items2, items3) {
  let recList = $('.recording');
  let mixList = $('.mixing');
  let masList = $('.mastering');
  items.forEach(function(client) {
    let recClient = $('<li>');
    recClient.append(client);
    recList.append(recClient)
  })
  items2.forEach(function(client) {
    let mixClient = $('<li>');
    mixClient.append(client);
    mixList.append(mixClient)
  })
  items3.forEach(function(client) {
    let masClient = $('<li>');
    masClient.append(client);
    masList.append(masClient)
  })
}
