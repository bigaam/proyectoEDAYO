// INICIO MENU DESPLEGABLE//
$(document).ready(function() {
    // Menú desplegable
    $('#btnmenu').click(function() {
        if ($('#btnmenu').hasClass('fa-bars')) {
            $('#btnmenu').removeClass('fa-bars').addClass('fa-times');
            $('.navegacion .menu').css({'left':'0px'});
            $('.navegacion').css({'width':'100%','background':'rgba(0,0,0,0.3)'});
        } else {
            $('#btnmenu').removeClass('fa-times').addClass('fa-bars');
            $('.navegacion .menu').css({'left':'-320px'});
            $('.navegacion').css({'width':'100%','background':'rgba(0,0,0,0.0)'});
            $('.navegacion .submenu').css({'left':'-320px'});
        }
    });

    // Submenús
    $('.navegacion .menu .itemsubmenu a').click(function() {
        var postmenu = $(this).parent().attr('vmenu');
        $('.itemsubmenu[vmenu='+postmenu+'] .submenu').css({'left':'0px'});
    });

    $('.navegacion .submenu li.regresa').click(function() {
        $(this).parent().css({'left':'-320px'});
    });

    // Carrusel
    var numimg = $('.slider li').length;
    var imgpos = 1;

    for (i = 1; i <= numimg; i++) {
        $('.paginacion').append('<li><span class="fa fa-circle"></span></li>');
    }

    $('.slider li').hide();
    $('.slider li:first').show();
    $('.paginacion li:first').css({'color':'#c06e2e'});

    $('.paginacion li').click(paginacion);
    $('.derecha span').click(siguienteimg);
    $('.izquierda span').click(anteriorimg);

    setInterval(siguienteimg, 4000);

    function paginacion() {
        var paginacionpos = $(this).index() + 1;
        $('.slider li').hide();
        $('.slider li:nth-child('+paginacionpos+')').fadeIn();
        $('.paginacion li').css({'color':'#666'});
        $(this).css({'color':'#c06e2e'});
    }

    function siguienteimg() {
        imgpos = (imgpos >= numimg) ? 1 : imgpos + 1;
        $('.paginacion li').css({'color':'666'});
        $('.paginacion li:nth-child('+imgpos+')').css({'color':'#c06e2e'});
        $('.slider li').hide();
        $('.slider li:nth-child('+imgpos+')').fadeIn();
    }

    function anteriorimg() {
        imgpos = (imgpos <= 1) ? numimg : imgpos - 1;
        $('.paginacion li').css({'color':'666'});
        $('.paginacion li:nth-child('+imgpos+')').css({'color':'#c06e2e'});
        $('.slider li').hide();
        $('.slider li:nth-child('+imgpos+')').fadeIn();
    }
});