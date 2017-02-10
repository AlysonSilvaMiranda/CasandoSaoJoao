$(document).ready(function() {
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

 /*$('ul.popup li').click( function(event){
	 
        event.stopPropagation();
		event.preventDefault();
		normalizeSubMenuAligment(this);
		
		var $popup = $(this).find(".sub_popup");
		var toggle = ($popup.css('display') != 'table') ? true : false;
		
        $('.sub_popup').hide();
		if(toggle){
        	$popup.css('opacity','0').css('display','table').animate({
				opacity:1},150);
		}
    });*/
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
		
/*$('ul.popup > li').hover( function(event){
	 			var $sub_popup=$(this).find(".sub_popup");
				normalizeSubMenuAligment(this);
        		event.stopPropagation();
				$('.sub_popup').hide();
				
				if(timeOut){
                clearTimeout(timeOut);
				}
				normalizeMenuAligment(this);
				timeOut = setTimeout((function() {
					$sub_popup.css('opacity','0').css('display','table').animate({
					opacity:1},150);
				}), 200);
            }, function(event){
				var $sub_popup=$(this).find("sub_.popup");
				$sub_popup.css('display','table');
                    $sub_popup.hide();
					clearTimeout(timeOut);
        });*/
	}
});