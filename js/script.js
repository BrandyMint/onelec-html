$(document).ready(function(){
	if ($("p.prod-table__date-text").hasClass("prod-table__date-text_active")) {
		$(".prod-table__date-text_active").parent().find(".prod-table__date-up").addClass("prod-table__date-up_none");
	}
});

function btnNav(i, btn) {
  $('.personal__toggle').removeClass("personal__toggle_active");
  $('.personal__item').removeClass("personal__item_active");
  btn.classList.add("personal__toggle_active");
  $('.personal__item')[i].classList.add("personal__item_active");
};

$(".personal__orders").click(function() {
	btnNav(0, this);
});
$(".personal__counterparties").click(function() {
	btnNav(1, this);
});
$(".personal__personal_data").click(function() {
	btnNav(3, this);
});
$(".personal__change_pass").click(function() {
	btnNav(5, this);
});

$(".quantity__btn-minus").click(function() {
	var $quantityNum = $(this).parent().find(".quantity__numb");
	if ($quantityNum.val() > 1) {
    	$quantityNum.val(+$quantityNum.val() - 1);
  	}
});

$(".quantity__btn-plus").click(function() {

	var $quantityNum = $(this).parent().find(".quantity__numb");
	$quantityNum.val(+$quantityNum.val() + 1);
});

$(".basket-info__btn-word-container").click(function() {
	if ($(".personal__info-wrap").hasClass("personal__info-wrap_active")) {
		$(".personal__info-wrap").removeClass("personal__info-wrap_active");
		$(".basket-info__arrow-dd").removeClass("basket-info__arrow-dd_active");
	}
	else {
		$(".personal__info-wrap").addClass("personal__info-wrap_active");
		$(".basket-info__arrow-dd").addClass("basket-info__arrow-dd_active");
	}
	
});

$(function(){
  $(".input-phone").mask("+7 (999) 999-99-99");
});

var pictW,imgW,n,pict,img,currentM,end=true;
pict = $('.carousel-hider .one-new_carousel-img');
img = $('.carousel-hider .carousel-list');
pictW = parseInt(pict.innerWidth());
n = pict.length;
currentM = 0;

$('.one-new__switch .one-new__switch-img_right').click(function(event){

    if(end) {
        end=false;
        currentM = currentM - pictW;
        img.animate({ marginLeft: currentM }, 500,  function () {
            end = true;
            $('.carousel-hider .one-new_carousel-img:first').appendTo('.carousel-list');
            currentM = currentM + pictW;
            img.css('marginLeft',currentM);
        });
    }

    var item = $('.carousel-hider .one-new_carousel-img').eq(0).attr('class').split(" ")[0]
    item = parseInt(item.replace('one-new_carousel-img_', ''));
    $('.one-new__switch-point').removeClass('one-new__switch-point_active');
    if (item == 5) {
    	item = 0;
    }
	
    $('.one-new__switch-point').eq(item).addClass('one-new__switch-point_active');
});

$('.one-new__switch .one-new__switch-img_left').click(function(event){
    if(end) {
        end=false;
        currentM = currentM + pictW;
        img.animate({ marginLeft: currentM }, 500,  function () {
            end = true;
            $('.carousel-hider .one-new_carousel-img:last').prependTo('.carousel-list');
            currentM = currentM - pictW;
            img.css('marginLeft',currentM);
        });
    }

    var item = $('.carousel-hider .one-new_carousel-img').eq(0).attr('class').split(" ")[0]
    item = parseInt(item.replace('one-new_carousel-img_', ''));
    $('.one-new__switch-point').removeClass('one-new__switch-point_active');
    $('.one-new__switch-point').eq(item - 2).addClass('one-new__switch-point_active');
});