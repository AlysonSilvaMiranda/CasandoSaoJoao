

$(document).ready(function () {

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

// Only for mobile devices
function GetIEVersion() {
    var sAgent = window.navigator.userAgent;
    var Idx = sAgent.indexOf("MSIE");

    // If IE, return version number.
    if (Idx > 0)
        return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));

    // If IE 11 then look for Updated user agent string.
    else if (!!navigator.userAgent.match(/Trident\/7\./))
        return 11;

    else
        return 0; //It is not IE
}
var ieVersion = GetIEVersion();
var md = new MobileDetect(window.navigator.userAgent);
if (ieVersion === 0 || ieVersion >= 10)
{
    $('head').append('<link href="assets/css/animate.css" rel="stylesheet">');
    $.getScript("assets/js/wow.js", function () {
        $(document).ready(function () {
            wow = new WOW(
                    {
                        animateClass: 'animated',
                        offset: 100,
                        callback: function (box) {
                            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
                        }
                    });
            wow.init();
        });
    });

}
 

 