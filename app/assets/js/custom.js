

$(document).ready(function () {

    //Inicio menu
    function normalizeMenuAligment (menuItem) {
        var $popup=$(menuItem).find(".popup");
        if ($popup) {
            var itemLeft = $(menuItem).position().left;
            var pageOffset = $(".site").offset().left;
            var pageWidth = $(".site").width();
            var limite =  pageOffset + pageWidth;
            var popupWidth = $popup.width();
            var windWidth = $(window).width();
            if(itemLeft + popupWidth > limite){
                $popup.addClass('menucontent_right');
            }
            else {
                $popup.removeClass('menucontent_right');
            }
        }
    }
    
    function normalizeSubMenuAligment (menuItem) {
        var $popup= $(menuItem).find(".sub_popup");
        if ($popup) {
            var itemLeft = $(menuItem).parent().parent().position().left;
            var pageOffset = $(".site").offset().left;
            var pageWidth = $(".site").width();
            var limite =  pageOffset + pageWidth;
            var popupWidth = $popup.width();
            var windWidth = $(window).width();
            if(itemLeft + popupWidth > limite){
                $popup.addClass('sub_popup_right');
            }
            else {
                $popup.removeClass('sub_popup_right');
            }
        }
    }
    
    var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod|Android)/g) ? true : false );
    var method;
    if(iOS){



       $('ul.menu > li > a[href="#"]').click( function(event){

        normalizeMenuAligment($(this).closest("li"));
        event.stopPropagation();
        event.preventDefault();
        
        var $popup = $(this).closest("li").find(".popup");
        var toggle = ($popup.css('display') != 'table') ? true : false;
        $('.popup').hide();
        
        if(toggle){
            $popup.css('opacity','0')
            .css('display','table')
            .animate({
                opacity:1
            },150);
        }

    });

       $('.site').click( function(){
           $('.popup').hide();
           $('.sub_popup').hide();
       });

   }

    else {
        // Previne ancoras de ir para o top
        $('ul.menu a[href="#"]').click( function(event){
            event.stopPropagation();
            event.preventDefault();
            return false;

        });
        var timeOut;
        $('ul.menu > li').hover( function(event){
            var $popup=$(this).find(".popup");

            event.stopPropagation();
            event.preventDefault();
            $('.popup').hide();

            if(timeOut){
                clearTimeout(timeOut);
            }
            normalizeMenuAligment(this);
            timeOut = setTimeout((function() {
                $popup.css('opacity','0').css('display','table').animate({
                    opacity:1},150);
            }), 200);
        }, function(event){
            var $popup=$(this).find(".popup");
            $popup.css('display','table');
            $popup.hide();
            $popup.find('.sub_popup').hide();
            clearTimeout(timeOut);
        });

    }
    //fim Menu

    wow = new WOW(
    {
    animateClass: 'animated',
    offset: 100,
    callback: function (box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
    });
    wow.init();

    //  INICIO scripts menu   
    // TinyNav.js 1
    $('#nav').tinyNav({
        active: 'selected',
        roots: ["/", "default.asp", "index.php", "index.htm", "index.html"] //Adicionado um array para as possíveis páginas iniciais padrão(ASP.NET/ASP/PHP/HTML).
    });

    //INICIO banner
    // You can also use "$(window).load(function() {"
    $("#slider4").responsiveSlides({
        namespace: "callbacks"
    });

    //<!-- INICIO menu suspenso -->
    var nav = $('.menubg');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 180) {
            nav.addClass("topo_fixo_view").fadeIn();
            $(".voltar_fixo, .topo_fixo").css({'display': 'block'});
            $(".menubg > select").css({'width': '50%'});
            $(".menu").css({'background-position': 'center top'});
        } else {
            nav.removeClass("topo_fixo_view");
            $(".voltar_fixo, .topo_fixo").css({'display': 'none'});
            $(".menubg > select").css({'width': '100%'});
            $(".menu").css({'background-position': 'center bottom'});
        }
    });

    //<!-- Slider anúncios -->
    $('.bxslider').bxSlider({
        slideWidth: 300,
        minSlides: 1,
        maxSlides: 4,
        slideMargin: 10
    });

});



