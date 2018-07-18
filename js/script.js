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
      // masonry: {
      //   columnWidth: '.grid-sizer'
      // }
    });
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress( function() {
      $grid.isotope('layout');
    });





      // Isotope layout and filters
      // let $grid = $('.grid').isotope({
      //   itemSelector: '.grid-item',
      //   layoutMode: 'masonry'
      // });
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





		$('.carousel-item:first-child').addClass('active');


}());


// render clients section
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







// render gear section
function getThisGear(obj) {
  let mixSum = obj[0].mixersSumming;
  let monitoring = obj[1].monitoring;
  let conversion = obj[2].conversion;
  let microphones = obj[3].microphones;
  let preamps = obj[4].preamps;
  let diBoxes = obj[5].direct_boxes;
  let tbp = obj[6].tbp;
  let eq = obj[7].eq;
  let fx = obj[8].fx;
  let plugins = obj[9].plugins;

  console.log(obj)
  appendGear(mixSum, monitoring, conversion, microphones, preamps, diBoxes, tbp, eq, fx, plugins)
}
getThisGear(gear)

function appendGear(arr, arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9) {
  let mixSumList = $('.mix-sum');
  let monList = $('.monitoring');
  let conversionList = $('.conversion');
  let micList = $('.microphones');
  let preampsList = $('.preamps');
  let diBoxesList = $('.direct-boxes');
  let tbpList = $('.tbp');
  let eqList = $('.eq');
  let fxList = $('.fx');
  let pluginsList = $('.plugins')

  arr.forEach(function(gear) {
    let mixSumGear = $('<li>');
    mixSumGear.append(gear);
    mixSumList.append(mixSumGear)
  })
  arr1.forEach(function(gear) {
    let monGear = $('<li>');
    monGear.append(gear);
    monList.append(monGear)
  })
  arr2.forEach(function(gear) {
    let conversionGear = $('<li>');
    conversionGear.append(gear);
    conversionList.append(conversionGear)
  })
  arr3.forEach(function(gear) {
    let mic = $('<li>');
    mic.append(gear);
    micList.append(mic)
  })
  arr4.forEach(function(gear) {
    let preampsGear = $('<li>');
    preampsGear.append(gear);
    preampsList.append(preampsGear)
  })
  arr5.forEach(function(gear) {
    let diGear = $('<li>');
    diGear.append(gear);
    diBoxesList.append(diGear)
  })
  arr6.forEach(function(gear) {
    let tbpGear = $('<li>');
    tbpGear.append(gear);
    tbpList.append(tbpGear)
  })
  arr7.forEach(function(gear) {
    let eqGear = $('<li>');
    eqGear.append(gear);
    eqList.append(eqGear)
  })
  arr8.forEach(function(gear) {
    let fxGear = $('<li>');
    fxGear.append(gear);
    fxList.append(fxGear)
  })
  arr9.forEach(function(gear) {
    let pluginsGear = $('<li>');
    pluginsGear.append(gear);
    pluginsList.append(pluginsGear)
  })
}

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
