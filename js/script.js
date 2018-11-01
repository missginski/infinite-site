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

// instafeed
var userFeed = new Instafeed({
    get: 'user',
    userId: '43423668',
    clientId: '3e5bd54f86d34ad6b92a8da63bd3cbf7',
    accessToken: '43423668.1677ed0.aedf2b31b6a54e12870a1556c0a803e1',
    // template: '<a href="{{link}}" target="_blank" id="{{id}}"><img class="insta-pic" src="{{image}}" /></a>',
    template: '<a href="{{link}}" class="instapic" target="_blank" id="{{id}}"><img class="img-responsive" src="{{image}}" /></a>',
    resolution: 'standard_resolution',
    sortBy: 'most-recent',
    limit: 20,
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
