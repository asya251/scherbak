;(function ($) {

    // onmouseenter фон с рамкой - задать класс для ховэра

    $('.m-nav-li a').click(function() {
        var elementClick = $(this).attr("href"),
            destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1800);
        return false;
    });
    $('a.svgInner').click(function() {
        var elementClick = $(this).attr("href"),
            destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 500);
        return false;
    });


    // external js: isotope.pkgd.js

    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item'
    });
    $('#filters').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
    });
    $(function () {
        $('.slider1').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            dots: true,
            arrows: false,
            slidesToScroll: 1,
            infinite: true
        });
    });
    $(function () {
        $('.slider2').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            dots: true,
            arrows: false,
            slidesToScroll: 1,
            infinite: true
        });
    });
    $(function () {
        var map,
            point = {lat: 49.568971, lng: 34.585907},
            infoWindow = $('#googleMap').html();
        map = new google.maps.Map(document.getElementById('googleMap'), {
            center: point,
            fullscreenControl: false,
            zoom: 16 /*а точнее надо 15,78*/
        });
        var img = new google.maps.MarkerImage(
            // './images/favicon.jpg', //эта отображается
            './images/faviconBeetroot.svg',
            null,
            null,
            null,
            new google.maps.Size(80, 80)
        );
        var marker = new google.maps.Marker({
            position: point,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: img
        });
        var marker2 = new google.maps.Marker({
            position: {lat: 49.570411, lng: 34.587430},
            animation: google.maps.Animation.DROP,
            map: map
        });
        var infowindow = new google.maps.InfoWindow({
            content: infoWindow
        });
        // marker.addListener('click', function() {
        //     infowindow.open(map, marker);
        // });
        google.maps.event.addDomListener(window, 'resize', function() {
            map.setCenter(point);
        });


    });
    $('#logoFooter').hover(
        function() {
            $(this).animate({opacity: '0.7'}, 500);
        }, function() {
            $(this).animate({opacity: '1'}, 500);
        }
    );

    $('.gm-style div:nth-child(2)').css('display','none'); /*хотела скрыть логотип google*/

    $('.svgInner .svgI').hover(
        function() {
            $('svg').animate({rotate: '+180deg'}, 1000); //почему не работает поворот?
        }, function() {
            $('svg').animate({rotate: '0'}, 1000); //прозрачность-то здесь срабатывает
        }
    );
})(jQuery);
