(function () {
   'use strict';

  	// $('a.page-scroll').click(function() {
    //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //       var target = $(this.hash);
    //       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //       if (target.length) {
    //         $('html,body').animate({
    //           scrollTop: target.offset().top
    //         }, 900);
    //         return false;
    //       }
    //     }
    //   });
    // Nivo Lightbox
    // $('.grid-item a').nivoLightbox({
    //         effect: 'slideDown',
    //         keyboardNav: true,
    //     });

    // init Isotope
    let $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'masonry'
    });

    $grid.imagesLoaded().progress( function() {
      $grid.isotope('layout');
    });

    let filterFns = {};
    $('.filters-button-group').on( 'click', 'button', function() {
      let filterValue = $( this ).attr('data-filter');
      filterValue = filterFns[ filterValue ] || filterValue;
      $grid.isotope({ filter: filterValue });
    });
    $('.button-group').each( function( i, buttonGroup ) {
      let $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
      });
    });

    // activate carousel
		$('.carousel-item:first-child').addClass('active');

    // dropdown hover
    if($(window).width()>769){
      $('.navbar .dropdown').hover(function() {
          $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
      }, function() {
          $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
      });
      $('.navbar .dropdown > a').click(function(){
          location.href = this.href;
      });
    }




}());

var userFeed = new Instafeed({
    get: 'user',
    userId: '578062',
    clientId: '3e5bd54f86d34ad6b92a8da63bd3cbf7',
    accessToken: '578062.3e5bd54.32cb209554484209bac43de5c05cd9a9',
    template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
    // template: '',
    resolution: 'low_resolution',
    sortBy: 'most-recent',
    limit: 32,
    links: false
  });
  userFeed.run();




// render clients section
function getAllClients(arr) {
  let currentNames,
      currentList,
      listItem;

  arr.forEach(function(e, i) {
    currentNames = arr[i];
    currentList = $('#clients' + i);

    currentNames.forEach(function(name) {
      listItem = $('<li>');
      listItem.text(name);
      currentList.append(listItem);
    })
  })
  // console.log(arr)
}
getAllClients(clients)

// render gear section
function getGear(arr) {
  let currentNames,
      currentList,
      listItem;

  arr.forEach(function(e, i) {
    currentNames = arr[i]
    currentList = $('#gear' + i)

    currentNames.forEach(function(name) {
      listItem = $('<li>');
      listItem.text(name);
      currentList.append(listItem);
    })
  })
  console.log(currentNames)
}
getGear(newGear)
