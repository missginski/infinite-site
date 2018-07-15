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


      $('.grid').isotope({
        itemSelector: '.grid-item',
        masonry: {
          // columnWidth: 100
        }
      });

      


  	// Portfolio isotope filter
    // $(window).load(function() {
    //     var $container = $('.gallery-items');
    //     $container.isotope({
    //         filter: '*',
    //         animationOptions: {
    //             duration: 750,
    //             easing: 'linear',
    //             queue: false
    //         }
    //     });
    //     $('.cat a').click(function() {
    //         $('.cat .active').removeClass('active');
    //         $(this).addClass('active');
    //         var selector = $(this).attr('data-filter');
    //         $container.isotope({
    //             filter: selector,
    //             animationOptions: {
    //                 duration: 750,
    //                 easing: 'linear',
    //                 queue: false
    //             }
    //         });
    //         return false;
    //     });
    //
    // });


    // Nivo Lightbox
    $('.grid-item a').nivoLightbox({
            effect: 'slideDown',
            keyboardNav: true,
        });


		$('.carousel-item:first-child').addClass('active');


}());

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
