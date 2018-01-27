// event pada saat di klik

$('.page-scroll').on('click', function(e){
    //ambil isi href
    var Tujuan = $(this).attr('href');
    // tangkap elemen tsb
    var elemenTujuan = $(Tujuan);


    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');



e.preventDefault();

});


// paralaxx
//ABOUT
$(window).on('load', function(){
  $('.pKiri').addClass('pMuncul');
});

$(window).on('load', function(){
  $('.pKanan').addClass('pMuncul');
});


$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
      'transform' : 'translate(0px, '+ wScroll/4 +'% )'
    });


    $('.jumbotron h1').css({
      'transform' : 'translate(0px, '+ wScroll/2 +'% )'
    });

    $('.jumbotron h4').css({
      'transform' : 'translate(0px, '+ wScroll/1 +'% )'
    });


    // portfolio
     if( wScroll > $('.portfolio').offset().top - 350 ) {
        $('.portfolio .img-thumbnail').each(function(i){
            setTimeout(function(){
              $('.portfolio .img-thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));

        });

    }



});

// console.log(wScroll);
