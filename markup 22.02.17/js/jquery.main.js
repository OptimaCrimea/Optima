/*$(document).ready(function() {
 $('.slide-link').click(function(event) {
 event.preventDefault();
 $('.slide-box.cabinet').toggleClass('active');
 $('.cabinet .slide-list').toggleClass('active');
 });
 });*/

/*$(document).ready(function() {
 var substringMatcher = function(strs) {
 return function findMatches(q, cb) {
 var matches, substringRegex;

 // an array that will be populated with substring matches
 matches = [];

 // regex used to determine if a string contains the substring `q`
 substrRegex = new RegExp(q, 'i');

 // iterate through the pool of strings and for any string that
 // contains the substring `q`, add it to the `matches` array
 $.each(strs, function(i, str) {
 if (substrRegex.test(str)) {
 matches.push(str);
 }
 });

 cb(matches);
 };
 };


 var states = ['Должность', 'Должность2', 'водитель', 'букмекер', 'автор', 'автор2', 'автор3', 'автор4'];
 var cities = ['анапа', 'харьков', 'киев', 'хермон', 'ялта', 'автор2', 'автор3', 'автор4'];

 $('.the-basics .position').typeahead({
 hint: true,
 highlight: true,
 minLength: 1
 }, {
 name: 'states',
 source: substringMatcher(states)
 });
 $('.the-basics .cities').typeahead({
 hint: true,
 highlight: true,
 minLength: 1
 }, {
 name: 'cities',
 source: substringMatcher(cities)
 });
 });*/

$(document).ready(function () {
	$('.block-item').click(function (event) {
		event.preventDefault();
		$('.view-checked a').removeClass('active');
		$(this).addClass('active');
		$('.block-view').addClass('active');
		$('.list-view').removeClass('active');
		$('.table-view').removeClass('active');
	});
	$('.list-item').click(function (event) {
		event.preventDefault();
		$('.view-checked a').removeClass('active');
		$(this).addClass('active');
		$('.list-view').addClass('active');
		$('.block-view').removeClass('active');
		$('.table-view').removeClass('active');
	});
	$('.table-item').click(function (event) {
		event.preventDefault();
		$('.view-checked a').removeClass('active');
		$(this).addClass('active');
		$('.table-view').addClass('active');
		$('.block-view').removeClass('active');
		$('.list-view').removeClass('active');
	});
});

//page init
$(function () {
	initFancybox();
	$('input, textarea').placeholder();
	$("select:not('.search-select2,.search-select-position')").select2({
		minimumResultsForSearch: -1
	});
	initGallery();
	initSlideDrop();
	initOpenClose();
	initTabs();
});

$(function () {
	$(".search-select2").select2({
		minimumResultsForSearch: 1,
		placeholder: "Выберите из списка"
	});

});
$(document).ready(function () {
	if ($('#position').length) {
		$('#position').scombobox({
			fullMatch: true,
			placeholder: 'Выберите из списка',
		});
	}
});
//spinner init

$(function () {
	var spinner = $(".spinner").spinner();
	$("#disable").click(function () {
		if (spinner.spinner("option", "disabled")) {
			spinner.spinner("enable");
		} else {
			spinner.spinner("disable");
		}
	});
	$("#destroy").click(function () {
		if (spinner.data("ui-spinner")) {
			spinner.spinner("destroy");
		} else {
			spinner.spinner();
		}
	});
	$("#getvalue").click(function () {
		alert(spinner.spinner("value"));
	});
	$("#setvalue").click(function () {
		spinner.spinner("value", 5);
	});
	$("button").button();
});

// galleries init

function initGallery() {

	jQuery('.compare-page .differences .gallery').slick({
		//infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 4000,
		speed: 300
	});
	jQuery('.compare-page .compare-reviewed .gallery').slick({
		//infinite: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 4000,
		speed: 300
	});
	jQuery('.gallery').slick({
		//infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 4000,
		speed: 300
	});
	jQuery('.dots-gallery').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 4000,
		speed: 300
	});
	jQuery('.main-gallery').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: false
	});
}

// modal window init
function initFancybox() {
	jQuery("a.popup-link").fancybox();
	jQuery(".fancybox").fancybox({
		afterShow: function () {
			$('#product-gallery-popup h2').dotdotdot();
		}
	});
	helpers: {
		overlay: {
			locked: false
		}
	}
}

//slide drop init
function initSlideDrop() {
	jQuery('div.slide-box').slideDrop({
		opener: '.slide-link a',
		slide: '.slide-list',
		active: 'active',
		selectMode: true
	});
	jQuery('.slide-box.mobile').slideDrop({
		selectMode: true
	});
	jQuery('.slide-box.lang').slideDrop({
		opener: '.slide-link',
		slide: '.slide-list',
		items: 'li',
		active: 'active',
		selectMode: true
	});
}

// open-close init
function initOpenClose() {
	jQuery('div.slide-hold').openClose({
		activeClass: 'active',
		opener: 'span.all',
		slider: '.slide-content',
		animSpeed: 400,
		effect: 'slide'
	});
	jQuery('div.comments-row').openClose({
		activeClass: 'active',
		opener: '.opener',
		slider: '.slide',
		animSpeed: 400,
		effect: 'slide'
	});
}

// content tabs init
function initTabs() {
	jQuery('#tabs, #tabspr, #detail-tabset1, #detail-tabset2, #detail-tabset3,#detail-tabset4, #detail-tabset5, #inner-tabs,#sort-list-tab, #sort-list-tab-1, #all-accessory-tabs').contentTabs({
		tabLinks: '.tab'
	});
	jQuery('#tabset, #tabset2').contentTabs({
		tabLinks: '.tab',
		event: 'hover'
	});
}
//accordion init
$(function () {
	$(".accordion").accordion({
		heightStyle: "content"
	});
});
$(function () {
	$(".questions-block").accordion({
		heightStyle: "content",
		active: 0,
		header: ".question",
		collapsible: true
	});
});

// slider init
$(document).ready(function () {
	$("#slider").slider({
		range: true,
		min: 0,
		max: 100,
		step: 1,
		values: [10, 90],
		slide: function (event, ui) {
			for (var i = 0; i < ui.values.length; ++i) {
				$("input.sliderValue[data-index=" + i + "]").val(ui.values[i]);
			}
		}
	});

	$("input.sliderValue").change(function () {
		var $this = $(this);
		$("#slider").slider("values", $this.data("index"), $this.val());
	});
});

$(document).ready(function () {
	$('.your-class').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		centerPadding: '60px',
		focusOnSelect: true,
		centerMode: true,
		autoplay: true,
		autoplaySpeed: 2000
	});
});
$(window).load(function () {
	$('.set').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3
	});
});

// table-product-gallery
$(document).ready(function () {
	$('.table-product-gallery').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.table-product-gallery-nav'
	});
	$('.table-product-gallery-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.table-product-gallery',
		centerMode: true,
		focusOnSelect: true
	});
});
// test-popup fancybox
$(document).ready(function () {
	$(".test-popup").fancybox({
		wrapCSS: 'test-popup-holder',
		helpers: {
			overlay: {
				locked: false,
				css: {
					'background': 'transparent'
				}
			}
		}
	});
});

// inner-recall-popup fancybox
$(document).ready(function () {
	$(".inner-recall-popup").fancybox({
		wrapCSS: 'recall-popup-holder',
		helpers: {
			overlay: {
				locked: false,
				css: {
					'background': 'transparent'
				}
			}
		}
	});
});
// all-color
$(document).ready(function () {
	$(".all-color").on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();

		$(this).next().fadeIn('fast');

		setTimeout(function () {
			$(".all-color-popup").addClass('active');
		}, 12);
	});
	$(".all-color-popup").find('.close-btn').on('click', function () {
		$(this).parent().fadeOut('fast');
		$(this).parent().removeClass('active');
	});
	$(document).on('click touchstart', function (event) {
		if (!$(event.target).hasClass("all-color-popup") && !$(event.target).closest('.all-color-popup').length) {
			$(".all-color-popup").removeClass('active');
			$(".all-color-popup").fadeOut('fast');
		}
	});
	$(".configurator .has-choice").on('mouseenter touchstart', function (e) {
		e.preventDefault();
		e.stopPropagation();
		$(this).find('.btn-choice').fadeIn('fast');
	});
	$(".configurator .has-choice").on('mouseleave', function () {
		$(this).find('.btn-choice').fadeOut('fast');
	});
	$(document).on('click touchstart', function (event) {
		event.stopPropagation();
		if (!$(event.target).hasClass("has-choice") && !$(event.target).closest('.has-choice').length) {
			$('.btn-choice').fadeOut('fast');
		}
	});
	$(".configurator .description-ref").on('mouseenter touchstart', function () {
		$(this).next().fadeIn('fast');
	});
	$(".configurator .description-ref").on('mouseleave', function () {
		$(this).next().fadeOut('fast');
	});
	$(document).on('click touchstart', function (event) {
		if (!$(event.target).hasClass("description-ref") && !$(event.target).closest('.product-tooltip').length) {
			$('.product-tooltip').fadeOut('fast');
		}
	});
});

// owl-carousel
$(document).ready(function () {
	if ($('.owl-item, .owl-carousel').length) {

		var sync1 = $("#sync1");
		var sync2 = $("#sync2");

		sync1.owlCarousel({
			singleItem: true,
			slideSpeed: 1000,
			//navigation: true,
			pagination: false,
			afterAction: syncPosition
		});

		sync2.owlCarousel({
			items: 5,
			pagination: false,
			navigation: true,
			afterInit: function (el) {
				el.find(".owl-item").eq(0).addClass("synced");
			}
		});

		function syncPosition(el) {
			var current = this.currentItem;
			$("#sync2")
				.find(".owl-item")
				.removeClass("synced")
				.eq(current)
				.addClass("synced");
			if ($("#sync2").data("owlCarousel") !== undefined) {
				center(current);
			}
		}

		$("#sync2").on("click", ".owl-item", function (e) {
			e.preventDefault();
			var number = $(this).data("owlItem");
			sync1.trigger("owl.goTo", number);
		});

		function center(number) {
			var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
			var num = number;
			var found = false;
			for (var i in sync2visible) {
				if (num === sync2visible[i]) {
					var found = true;
				}
			}

			if (found === false) {
				if (num > sync2visible[sync2visible.length - 1]) {
					sync2.trigger("owl.goTo", num - sync2visible.length + 2)
				} else {
					if (num - 1 === -1) {
						num = 0;
					}
					sync2.trigger("owl.goTo", num);
				}
			} else if (num === sync2visible[sync2visible.length - 1]) {
				sync2.trigger("owl.goTo", sync2visible[1]);
			} else if (num === sync2visible[0]) {
				sync2.trigger("owl.goTo", num - 1);
			}
		}
	}

});

// owl-carousel
$(document).ready(function () {
	if ($('.owl-item, .owl-corousel').length) {

		var sync11 = $("#sync11");
		var sync22 = $("#sync22");

		sync11.owlCarousel({
			singleItem: true,
			slideSpeed: 1000,
			navigation: true,
			pagination: false,
			afterAction: syncPosition
		});

		sync22.owlCarousel({
			items: 5,
			pagination: false,
			navigation: true,
			afterInit: function (el) {
				el.find(".owl-item").eq(0).addClass("synced");
			}
		});

		function syncPosition(el) {
			var current = this.currentItem;
			$("#sync22")
				.find(".owl-item")
				.removeClass("synced")
				.eq(current)
				.addClass("synced")
			if ($("#sync22").data("owlCarousel") !== undefined) {
				center(current)
			}
		}

		$("#sync22").on("click", ".owl-item", function (e) {
			e.preventDefault();
			var number = $(this).data("owlItem");
			sync11.trigger("owl.goTo", number);
		});

		function center(number) {
			var sync22visible = sync22.data("owlCarousel").owl.visibleItems;
			var num = number;
			var found = false;
			for (var i in sync22visible) {
				if (num === sync22visible[i]) {
					var found = true;
				}
			}

			if (found === false) {
				if (num > sync22visible[sync22visible.length - 1]) {
					sync22.trigger("owl.goTo", num - sync22visible.length + 2)
				} else {
					if (num - 1 === -1) {
						num = 0;
					}
					sync22.trigger("owl.goTo", num);
				}
			} else if (num === sync22visible[sync22visible.length - 1]) {
				sync22.trigger("owl.goTo", sync22visible[1])
			} else if (num === sync22visible[0]) {
				sync22.trigger("owl.goTo", num - 1)
			}
		}
	}
});

// owl-carousel
$(document).ready(function () {
	if ($('.owl-item').length) {
		$("#owl-demo").owlCarousel({
			items: 5,
			navigation: true,
			addClassActive: true,
			afterAction: function (el) {
				this
					.$owlItems
					.removeClass('synced2')
				this
					.$owlItems
					.eq(this.currentItem)
					.addClass('synced2')
			}
		});
		var items = $('.owl-item');
		items.on("click", function (e) {
			items.removeClass('synced2');
			$(this).addClass('synced2');
		});
	}
});

// owl-carousel
$(document).ready(function () {
	if ($('.owl-item').length) {
		$("#all-color-gallery").owlCarousel({
			navigation: true,
			items: 3
		});
	}
});

// color-product
$(document).ready(function () {
	var items = $('.color-product li a');
	items.on('click', function (event) {
		event.preventDefault();
		items.parent().removeClass('active');
		$(this).parent().addClass('active');
	})
});

//suggestion box
$(function () {
	$('.test').click(function () {
		$(".header-search-suggest").slideDown('slow');
		var $message = $('.header-search-suggest');
		var firstClick = true;
		$(document).bind('click.myEvent', function (e) {
			if (!firstClick && $(e.target).closest('.header-search-suggest').length == 0) {
				$message.slideUp("slow");
				$(document).unbind('click.myEvent');
			}
			firstClick = false;
		});
	});
});

// slideDrop home page
//-----------
$(function () {
	/* выбор города */
	var map = $(".map-list"),
		mapList = $(".slide-list-map"),
		street = $(".street-list"),
		streetList = $(".slide-list-street");
	$('.map-list a').click(function () {
		$(".slide-list-mobile").slideUp('fast');
		$(".slide-list-currency").slideUp('fast');
		mapList.slideToggle('fast');
		map.toggleClass('map-active');
	});
	$('ul.slide-list-map li').click(function () {
		var tx = $(this).html();
		mapList.slideUp('fast');
		$(".map-list a").html(tx);
		map.removeClass('map-active');
	});
	$(document).on('click touchstart', function (event) {
		if (event.target !== map[0] && !map.has(event.target).length) {
			map.removeClass('map-active');
			mapList.slideUp('fast');
		}
	});

	$('.street-list a').click(function () {
		$(".slide-list-mobile").slideUp('fast');
		$(".slide-list-currency").slideUp('fast');
		streetList.slideToggle('fast');
		street.toggleClass('map-active');
	});
	$('ul.slide-list-street li').click(function () {
		var tx = $(this).html();
		streetList.slideUp('fast');
		$(".street-list a").html(tx);
		street.removeClass('street-active');
	});
	$(document).on('click touchstart', function (event) {
		if (event.target !== street[0] && !street.has(event.target).length) {
			street.removeClass('street-active');
			streetList.slideUp('fast');
		}
	});
});
//-----------
//-----------
$(function () {
	/* выбор телефона */

	var mobieList = $(".mobile-list"),
		mobList = $(".slide-list-mobile");
	$('.mobile-list a').click(function () {
		$(".slide-list-map").slideUp('fast');
		$(".slide-list-currency").slideUp('fast');
		mobList.slideToggle('fast');
		mobieList.toggleClass('mobile-active');
	});
	$('ul.slide-list-mobile li').click(function () {
		var tx = $(this).html();
		mobList.slideUp('fast');
		$(".mobile-list a").html(tx);
		mobieList.removeClass('mobile-active');
	});
	$(document).on('click touchstart', function (event) {
		if (event.target !== mobieList[0] && !mobieList.has(event.target).length) {
			mobieList.removeClass('mobile-active');
			mobList.slideUp('fast');
		}
	});
});
//-----------
$(function () {
	/* выбор валюты */
	var curLust = $(".currency-list"),
		curList = $(".slide-list-currency");
	$('.currency-list a').click(function () {
		$(".slide-list-mobile").slideUp('fast');
		$(".slide-list-map").slideUp('fast');
		curList.slideToggle('fast');
		curLust.addClass('currency-active');
	});
	$('ul.slide-list-currency li').click(function () {
		var tx = $(this).html();
		curList.slideUp('fast');
		$(".currency-list a").html(tx);
		curLust.removeClass('currency-active');
	});
	$(document).on('click touchstart', function (event) {
		if (event.target !== curLust[0] && !curLust.has(event.target).length) {
			curLust.removeClass('currency-active');
			curList.slideUp('fast');
		}
	});
});

//-----------
// tooltip
$(function () {
	$('.tooltip-hold').click(function (e) {
		e.stopPropagation();
		e.preventDefault();
		var $tolltip = $(this).find('.tooltip');
		if ($tolltip.hasClass('active')) {
			$('.tooltip-hold')
				.find('.tooltip')
				.removeClass('active');
		} else {
			$(this).closest('.table-product')
				.find('.tooltip')
				.removeClass('active');
			$(this).parents('.table-product').siblings('.table-product')
				.find('.tooltip')
				.removeClass('active');
			$tolltip.addClass('active');
		}
	});
	$('.col-slide-holder .sale-text').click(function (e) {
		e.stopPropagation();
		e.preventDefault();
		var $tolltip = $(this).find('.tooltip')
		if ($tolltip.hasClass('active')) {
			$('.table-product')
				.find('.tooltip')
				.removeClass('active');
		} else {
			$(this).closest('.table-product')
				.find('.tooltip')
				.removeClass('active');
			$(this).parents('.table-product').siblings('.table-product')
				.find('.tooltip')
				.removeClass('active');
			$tolltip.addClass('active');
		}
	});
	$('.promo-list li').click(function (e) {
		e.stopPropagation();
		e.preventDefault();
		var $tolltip = $(this).find('.tooltip');
		if ($tolltip.hasClass('active')) {
			$('.promo-list')
				.find('.tooltip')
				.removeClass('active');
		} else {
			$(this).closest('.promo-list')
				.find('.tooltip')
				.removeClass('active');
			$tolltip.addClass('active');
		}
	});
	$(document).on('click touchstart', function (event) {
		event.stopPropagation();
		if ($(event.target).parents(".promo-list li").length) return;
		$('.promo-list .tooltip').removeClass('active');
	});

	$('.sort-list li mark').click(function (e) {
		e.stopPropagation();
		e.preventDefault();
		var $tolltip = $(this).parents('li').find('.tooltip');
		if ($tolltip.hasClass('active')) {
			$('.sort-list')
				.find('.tooltip')
				.removeClass('active');
		} else {
			$(this).closest('.sort-list')
				.find('.tooltip')
				.removeClass('active');

			$tolltip.addClass('active');
		}
	});
	$(document).on('click touchstart', function (event) {
		event.stopPropagation();
		if ($(event.target).closest(".sort-list li").length) return;
		$('.tooltip').removeClass('active');
	});

	$('.sale-box .sale-text').on('click touchstart', function (e) {
		e.stopPropagation();
		e.preventDefault();
		var $tolltip = $(this).find('.tooltip');
		var $holder = $(this).parents('.sale-box');
		var $holder_item = $(this).parents('.sale-box');
		if ($tolltip.hasClass('active')) {
			$('.sale')
				.find('.tooltip')
				.removeClass('active');
			$tolltip.removeClass('active');
		} else {
			$(this).closest('.sale')
				.find('.tooltip')
				.removeClass('active');
			$tolltip.addClass('active');
		}
		if ($('.bonus-card_popup').hasClass('active-card')) {
			$('.bonus-card_popup').removeClass('active-card');
		}

		if ($holder.hasClass('active')) {
			$('.sale')
				.find('.sale-item')
				.removeClass('active');

		} else {
			$(this).parents('.sale')
				.find('.sale-item')
				.removeClass('active');
		}

		if ($(this).parents('.sale-item').siblings('.sale-item').hasClass('no-active')) {
			$('.sale')
				.find('.sale-item')
				.removeClass('no-active');
		} else {
			$(this).parents('.sale')
				.find('.sale-item')
				.removeClass('no-active');
			$(this).parents('.sale-item').siblings('.sale-item').addClass('no-active')
		}
	});

	$('.sale-box .sale-text').on('click touchstart', function (e) {
		e.stopPropagation();
		e.preventDefault();
		var $saleBoxActive = $(this).parents('.sale-box');
		var $saleBoxActiveCard = $(this).parents('.sale-box');

		if (!$saleBoxActive.hasClass('active')) {
			$(this).closest('.sale')
				.find('.sale-box')
				.removeClass('active');
			$saleBoxActive.addClass('active');
		}
		if (!$saleBoxActiveCard.hasClass('active-box')) {
			$(this).closest('.sale')
				.find('.sale-box')
				.removeClass('active-box');
			console.log('active-box');
			// $saleBoxActive.addClass('active');
		}
	});

	// sort-list mark info tooltip
	$('.sort-list mark').click(function (e) {
		if ($('.bonus-card_popup').hasClass('active-card')) {
			$('.bonus-card_popup').removeClass('active-card');
		}
		if ($('.sale-box').hasClass('active-box')) {
			$('.sale-box').removeClass('active-box');
		}
	});
	$(document).on('click touchstart', function (event) {
		event.stopPropagation();
		if ($(event.target).closest(".sale-box .sale-text").length) return;
		$('.sale-box .sale-text .tooltip').removeClass('active');
		$('.sale-box').removeClass('active, card-active');
		$('.sale-item').removeClass('no-active');
	});

	// product table sale text tolltip
	$('.product-table .sale-text').click(function (e) {
		e.stopPropagation();
		e.preventDefault();
		var $tolltip = $(this).find('.tooltip');
		if ($tolltip.hasClass('active')) {
			$('.sale')
				.find('.tooltip')
				.removeClass('active');
		} else {
			$(this).closest('.sale')
				.find('.tooltip')
				.removeClass('active');

			$tolltip.addClass('active');
		}
	});

	// product-table tooltip
	$(document).on('click touchstart', function (event) {
		event.stopPropagation();
		if ($(event.target).closest(".product-table .sale-text").length) return;
		$('.product-table .sale-text .tooltip').removeClass('active');
	});
	$(document).on('click touchstart', function (event) {
		$('.tooltip-hold')
			.children('.tooltip')
			.removeClass('active');
	});
});

// sale-text hover
$(function () {
	$('.sale-text').hover(function () {
		$(this)
			.parents('.sale-img ')
			.siblings('.product-tooltip')
			.addClass('active');
	}, function () {
		$(this)
			.parents('.sale-img ')
			.find('.product-tooltip')
			.removeClass('active');
	});
});

// sort list tooltip
$(function () {
	$('.sale-text').click(function (event) {
		$('.sort-list').find('.tooltip').removeClass('active');
	});
	$('.sort-list mark').click(function (event) {
		$('.sale-box').find('.tooltip').removeClass('active');
	});
	$('.sort-list mark').click(function (event) {
		$('.sale-text').find('.tooltip').removeClass('active');
	});
});
// all-review
$(function () {
	$(".all-review").click(function (e) {
		$(".target-tab").trigger("click");
	});
});
// all-characteristics
$(function () {
	$(".all-characteristics").click(function (e) {
		$(".target-all-characteristics").trigger("click");
	});
});
// inputmask
$(function () {
	if ($('.sign-in, .ordering-item, #hause-number, #housing-number, #office-number, #date').length) {
		$('.sign-in').find('input[type=text]').inputmask("+7 (999) 999-99-99");
		$('.ordering-item').find('input[type=text]').inputmask("+7 (999) 999-99-99");
		$('#hause-number').inputmask("дом № 99", {
			"placeholder": ""
		});
		$('#housing-number').inputmask("Корпус № 99", {
			"placeholder": ""
		});
		$('#office-number').inputmask("999", {
			"placeholder": ""
		});
		$("#date").inputmask("dd/mm/yyyy", {
			"placeholder": "__/__/____"
		});
	}
});

function ua() {
	var el = document.getElementById("mob-tel");
	el.placeholder = "+380 (__) ___-__-__";
	$('.sign-in').find('input[type=text]').inputmask("+380 (99) 999-99-99");
	$('.sign-in').find('input[type=text]').val('');
	$('.ordering-item').find('input[type=text]').inputmask("+380 (99) 999-99-99");
	$('.ordering-item').find('input[type=text]').val('');
};

function ru() {
	var el = document.getElementById("mob-tel");
	el.placeholder = "+7 (___) ___-__-__";
	$('.sign-in').find('input[type=text]').inputmask("+7 (999) 999-99-99");
	$('.sign-in').find('input[type=text]').val('');
	$('.ordering-item').find('input[type=text]').inputmask("+7 (999) 999-99-99");
	$('.ordering-item').find('input[type=text]').val('');
};

// switcher user or organisation
$(function () {
	$('#rad1').click(function () {
		$(".private-person").show();
		$(".organisation-holder").hide();
	});
	$('#rad2').click(function () {
		$(".organisation-holder").show();
		$(".private-person").hide();
	});
});

// switcher delivery option
$(function () {
	$("#delivery-select").change(function () {
		var val = $(this).val();
		if (val === "pilot_graph_form") {
			$(".delivery-holder").show();
			$(".point-delivery-holder").hide();
		} else if (val === "client_form") {
			$(".point-delivery-holder").show();
			$(".delivery-holder").hide();
		}
	});
});

// select2-container
$(function () {
	$('#dd  .select2-container, #dd  .select2-choice').hover(function (event) {
		var selectText = $("#dd  .select2-container").find('.select2-chosen').text();
		var jttip = $(".jttipcontent p");
		var jttip2 = $(".jttip");
		jttip.text(selectText);
		jttip2.css('display', 'block');
		event.preventDefault();
	}, function () {
		var jttip2 = $(".jttip");
		jttip2.css('display', 'none');
	});
});

// new-opener
$(function () {
	$('.new-opener').click(function () {
		$('.new-attempt').show();
		$('.delivery-info').hide();
		$('.new-opener span').hide();
		$('.back').show();
		return false;
	});
	$('.back').click(function () {
		$('.new-attempt').hide();
		$('.delivery-info').show();
		$('.new-opener span').show();
		$('.back').hide();
		return false;
	});
});

//popup maps
$(document).ready(function () {
	$("#show-map").fancybox({
		//wrapCSS : 'all-color-popup-holder',
		//margin: 5,
		//helpers : {
		//    overlay : {
		//        locked: true,
		//        css : {
		//            'background' : 'transparent'
		//        }
		//    }
		//}
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
});

//popup contact page
jQuery(document).ready(function ($) {
	$("#ch1").on("click", function () {
		if ($(this).is(":checked")) {
			$('#popup-messages').attr('href', '#popup-message2');
			$('#popup-messages').text('Отправить с ответом');
		} else {
			$('#popup-messages').attr('href', '#popup-message');
			$('#popup-messages').text('Отправить без ответа');
		}
	})
});

// contact gallery
$(document).ready(function () {
	if ($('.owl-item').length) {

		var sync1 = $(".top");
		var sync2 = $(".bottom");

		sync1.owlCarousel({
			singleItem: true,
			slideSpeed: 1000,
			//navigation: true,
			pagination: false,
			afterAction: syncPosition
		});

		sync2.owlCarousel({
			items: 3,
			pagination: false,
			navigation: true,
			loop: true,
			margin: 10,
			autoPlay: true,
			autoPlayTimeout: 1000,
			autoPlayHoverPause: true,
			afterInit: function (el) {
				el.find(".owl-item").eq(0).addClass("synced");
			}
		});

		function syncPosition(el) {
			var current = this.currentItem;
			$(".bottom")
				.find(".owl-item")
				.removeClass("synced")
				.eq(current)
				.addClass("synced")
			if ($(".bootm").data("owlCarousel") !== undefined) {
				center(current)
			}
		}

		$(".bottom").on("click", ".owl-item", function (e) {
			e.preventDefault();
			var number = $(this).data("owlItem");
			sync1.trigger("owl.goTo", number);
		});

		function center(number) {
			var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
			var num = number;
			var found = false;
			for (var i in sync2visible) {
				if (num === sync2visible[i]) {
					var found = true;
				}
			}

			if (found === false) {
				if (num > sync2visible[sync2visible.length - 1]) {
					sync2.trigger("owl.goTo", num - sync2visible.length + 2)
				} else {
					if (num - 1 === -1) {
						num = 0;
					}
					sync2.trigger("owl.goTo", num);
				}
			} else if (num === sync2visible[sync2visible.length - 1]) {
				sync2.trigger("owl.goTo", sync2visible[1])
			} else if (num === sync2visible[0]) {
				sync2.trigger("owl.goTo", num - 1)
			}

		}
	}

});

// fancybox
$(document).ready(function () {
	$(".contact-gallery").fancybox({
		openEffect: 'none',
		closeEffect: 'none'
	});
});

//datepicker
$(function () {
	if ($('#date').length) {
		console.log(1);
		$.datepicker.setDefaults(
			$.extend($.datepicker.regional["ru"])
		);
		$("#date").datepicker({
			showOn: "button",
			buttonImage: "images/ico-calendar.png",
			buttonImageOnly: true,
			changeMonth: true,
			changeYear: true,
			buttonText: "Select date"
		});
	}
});

// change map in popup
$(function () {
	$('.simferopol-map').click(function () {
		$('.jalta').hide();
		$('.sevastopol').hide();
		$('.saki').hide();
		$('.belogorsk').hide();
		var iframe = document.getElementById('test')
		iframe.innerHTML = iframe.innerHTML;
		$('.simferopol').fadeIn('slow');
		return false;
	});
	$('.jalta-map').click(function () {
		$('.simferopol').hide();
		$('.sevastopol').hide();
		$('.saki').hide();
		$('.belogorsk').hide();
		var iframe = document.getElementById('test')
		iframe.innerHTML = iframe.innerHTML;
		$('.jalta').fadeIn('slow');
		return false;
	});
	$('.sevastopol-map').click(function () {
		$('.simferopol').hide();
		$('.jalta').hide();
		$('.saki').hide();
		$('.belogorsk').hide();
		var iframe = document.getElementById('test')
		iframe.innerHTML = iframe.innerHTML;
		$('.sevastopol').fadeIn('slow');
		return false;
	});
	$('.saki-map').click(function () {
		$('.simferopol').hide();
		$('.jalta').hide();
		$('.sevastopol').hide();
		$('.belogorsk').hide();
		var iframe = document.getElementById('test')
		iframe.innerHTML = iframe.innerHTML;
		$('.saki').fadeIn('slow');
		return false;
	});
	$('.belogorsk-map').click(function () {
		$('.simferopol').hide();
		$('.jalta').hide();
		$('.sevastopol').hide();
		$('.saki').hide();
		var iframe = document.getElementById('test')
		iframe.innerHTML = iframe.innerHTML;
		$('.belogorsk').fadeIn('slow');
		return false;
	});

});

/*grid*/
$(document).ready(function () {
	//$('.sale-title').responsiveEqualHeightGrid();// /*todo not work!*/
});
$(document).ready(function () {
	$(".down").click(function () {
		$('html, body').animate({
			scrollTop: $(".page-text").offset().top
		}, 1500);
	});
});

// new from 23.10.2015
// $(function(){
//     var activeTabHeight;
//     var tab = $('div.drop-content');
//     $('.drop-list li a').hover(function() {
//         tab.filter(this.hash).addClass('tab-active');
//         activeTabHeight = $('div.drop-content.tab-active').height();
//         $('ul.drop-list').css('height', activeTabHeight);
//         console.log(activeTabHeight);
//     }, function() {
//         tab.filter(this.hash).removeClass('tab-active');
//     });
// });

$(function () {
	'use strict';
	// if($('ul.main-nav > li').length){
	$('ul.main-nav > li').hover(function (e) {
		var dropList = $(e.currentTarget).find('.drop-list'),
			// dropListHeight = dropList.height() - parseInt(dropList.css('padding-bottom'));
			dropListHeight = dropList.height();
		if (dropList.data('processed-separating-columns')) {
			return;
		}
		if (dropListHeight < 50) {
			console.error('too small');
			return;
		}
		var tabs = dropList.siblings('div.drop-content.tab');
		// tabs.css('height', dropListHeight);
		if (tabs.css('min-height') === dropListHeight + 'px') { // полная чушь
			// tabs.css('height', dropListHeight + 10);
			tabs.css({
				height: dropListHeight + 10,
				'padding-bottom': "" + parseInt(dropList.css('padding-bottom')) - 10 + 'px'
			});
		} else {
			// tabs.css('height', dropListHeight);
			tabs.css('height', dropListHeight);
		}
		// dropList.find('a.active')
		tabs.each(function (tabIndex, tab) {
			tab = $(tab);
			tab.mCustomScrollbar({
				axis: "x",
				mouseWheelPixels: 500,
				advanced: {
					autoExpandHorizontalScroll: true
				}
			});
			tab = tab.find('.mCSB_container');
			tab.css('width', '20000px', 'important'); //удалить тоже, после избавления от проблем ширины
			var uls = tab.find('> ul'),
				ulCounter = uls.size(),
				ulIndex = 0,
				ulWidth = uls.outerWidth();
			for (; ulIndex < ulCounter; ulIndex++) {
				if (ulIndex > 10) {
					console.error('too much');
					break;
				}
				var newUl = $(uls[ulIndex + 1]);
				$(uls[ulIndex]).find(' > li').each(function () {
					var liItem = $(this);
					if (this.offsetTop + liItem.outerHeight() > dropListHeight) {
						if (newUl.size() <= 0) {
							tab.append(newUl = $('<ul/>'));
							if (newUl[0].offsetTop > dropListHeight) {
								console.log('too much li, can\'t continue', tab.css('width'));
								ulIndex = ulCounter;
								return; //break;
							}
							uls[ulIndex + 1] = newUl[0];
							ulCounter++;
						}
						liItem.remove();
						newUl.append(liItem);
					}
				});
			}
			//изменить это в будущем, и найти кто ставит 490 = 2*245, тошо это хуйня
			var width = 0;
			$.each(['padding-left', 'padding-right'], function (i, css) {
				width += parseInt(tab.css(css)); //скрипт ёбнется если будет ем а не пиксель
			});
			width += ulCounter * ulWidth;
			tab.css('width', width, 'important');
		});
		dropList.data('processed-separating-columns', true);
	}, function () {
	});
	// }
});

$(function () {
	if ($('strong.sale-title.overflow-title').length) {
		$('strong.sale-title').matchHeight();
		if ($('.shops-holder').find('.slide').length > 3) {
			$('.shops-holder').slick({
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 3
			});
		}
		$('.greeting .close-btn').on('click', function () {
			$('.greeting').fadeOut('fast');
		});

		$(".wide .product-more-description p:first-of-type").dotdotdot({
			ellipsis: ' ... '
		});

		$('#view-checked a').on('click', function () {
			$(".wide .product-more-description p:first-of-type").dotdotdot({
				ellipsis: ' ... '
			});
		});
		$('.sale-box').on('hover', function () {
			$(".product-more p:first-of-type").dotdotdot({
				ellipsis: ' ... '
			});
		});

		$(".block-view .product-more p:first-of-type, .sale-title").dotdotdot({
			ellipsis: ' ... '
		});

		$(".wide .sale-title").dotdotdot({
			ellipsis: ' ... '
		});

		$('#view-checked a').on('click', function () {
			$(".wide .sale-title").dotdotdot({
				ellipsis: ' ... '
			});
		});
	}
});

// end new from 23.10.2015

/*product description overflow*/

$(document).ready(function () {
	$('.tab').on('click', function () {
		if ($('.product-more-description').length) {
			$(".product-more-description p").first().dotdotdot();
		}
	});
});

/* end product description overflow*/

/*self cab popups*/

$(document).ready(function () {
	/*login popup*/
	$('.non-login_state').on('click', function () {
		$('.social-popup').addClass('active');
	});
	$('.social-popup .close').on('click', function () {
		$('.social-popup').removeClass('active');
	});
});

$(function () {
	var comparePopup = $(".compare-box"),
		mapList = $(".compare-popup"),
		basketPopup = $(".basket-popup"),
		resisteredUserPopup = $(".top-info .registered-user-popup"),
		followBox = $(".top-info .follow-box"),
		followEmptyMessage = $('.follow-empty'),
		compareEmptyMessage = $('.compare-empty'),
		basketEmptyMessage = $('.basket-empty');

	/*bottom-links popups, registered popup show*/

	$('.compare-box.active').mouseover(function () {
		mapList.slideDown('fast').delay(100);
	});
	$('.cart-box.active').mouseover(function () {
		basketPopup.slideDown('fast').delay(100);
	});

	/*bottom-links, registered states*/

	$('.compare-box').mouseover(function () {
		$(this).addClass('border-active');
	});
	$('.cart-box').mouseover(function () {
		$(this).addClass('border-active');
	});
	$('.follow-box').mouseover(function () {
		$(this).addClass('border-active');
	});
	$('.in-login_state').mouseover(function () {
		$(this).addClass('vector-rotate');
		resisteredUserPopup.slideDown('fast');
	});

	/*bottom-links empty-message popups show*/

	$('.follow-box:not(.active)').mouseover(function () {
		followEmptyMessage.slideDown(1);
	});
	$('.compare-box:not(.active)').mouseover(function () {
		compareEmptyMessage.slideDown(1);
	});
	$('.cart-box:not(.active)').mouseover(function () {
		basketEmptyMessage.slideDown(1);
	});

	/*bottom-links popups, registered popup hide*/

	$('.wrapper').mouseover(function (event) {
		var ancCompare = $(event.target).closest('.compare-popup, .compare-box.active'),
			ancBasket = $(event.target).closest('.basket-popup, .cart-box.active'),
			resisteredUserPopup = $(event.target).closest('.top-info .registered-user-popup, .in-login_state'),
			loginLink = $('.in-login_state'),
			ancFollowMessage = $(event.target).closest('.follow-empty, .follow-box'),
			ancCompareMessage = $(event.target).closest('.compare-empty, .compare-box'),
			ancBasketMessage = $(event.target).closest('.basket-empty, .cart-box');

		if (!ancCompare.length)
			$('.compare-popup').slideUp(200);
		if (!ancBasket.length)
			$('.basket-popup').slideUp(200);
		if (!resisteredUserPopup.length)
			$('.top-info .registered-user-popup').slideUp(200);
		if (!ancFollowMessage.length)
			$('.follow-empty').slideUp(1);
		if (!ancCompareMessage.length)
			$('.compare-empty').slideUp(1);
		if (!ancBasketMessage.length)
			$('.basket-empty').slideUp(1);
	});

	/*bottom links, registered states*/

	$('.wrapper').mouseover(function (event) {
		var ancRegistered = $(event.target).closest('.in-login_state, .top-info .registered-user-popup'),
			loginLink = $('.in-login_state'),
			ancCompare = $(event.target).closest('.compare-popup, .compare-box, .compare-empty'),
			ancBasket = $(event.target).closest('.basket-popup, .cart-box, .basket-empty'),
			ancFollowMessage = $(event.target).closest('.follow-empty, .follow-box'),
			compareBox = $('.compare-box'),
			cartBox = $('.cart-box'),
			followBox = $('.follow-box');

		if (!ancRegistered.length)
			loginLink.removeClass('vector-rotate');
		if (!ancCompare.length)
			compareBox.removeClass('border-active');
		if (!ancBasket.length)
			cartBox.removeClass('border-active');
		if (!ancFollowMessage.length)
			followBox.removeClass('border-active');
	});
});

/*social-popup show delay*/

$(document).ready(function () {
	setTimeout(function () {
		$('.social-popup').addClass('active');
	}, 5000);
});

/*bonus card popup*/
$(document).ready(function () {
	$('.bonus-marker').on('click', function (event) {
		console.log($(this));
		var siblingsItem = $(this).parents('.sale-box'),
			activePopup = $(this).find('.bonus-card_popup');
		// activePopup.toggleClass('active-card');
		// $('.bonus-card_popup').not(activePopup).removeClass('active-card');

		// siblingsItem.addClass('active-box');
	});

	$('.wrapper').on('click', function (event) {
		var bonusCardGold = $(event.target).closest('.bonus-card_popup.gold, .bonus-marker.gold, .bonus-popup_link.gold'),
			bonusCardPlatinum = $(event.target).closest('.bonus-card_popup.platinum, .bonus-marker.platinum, .bonus-popup_link.platinum'),
			bonusCardPP = $(event.target).closest('.bonus-card_popup.platinum-plus, .bonus-marker.platinum-plus, .bonus-popup_link.platinum-plus'),
			bonusCardNoreg = $(event.target).closest('.bonus-card_popup.no-reg, .bonus-marker.no-reg, .bonus-popup_link.no-reg'),
			bonusCardSilver = $(event.target).closest('.bonus-card_popup.silver, .bonus-marker.silver, .bonus-popup_link.silver');

		if (!bonusCardGold.length) {
			$('.bonus-card_popup.gold').removeClass('active-card');
			$('.bonus-card_popup.gold').parents('.sale-box').removeClass('active-box');
		}

		if (!bonusCardPlatinum.length) {
			$('.bonus-card_popup.platinum').removeClass('active-card');
			$('.bonus-card_popup.platinum').parents('.sale-box').removeClass('active-box');
		}

		if (!bonusCardPP.length) {
			$('.bonus-card_popup.platinum-plus').removeClass('active-card');
			$('.bonus-card_popup.platinum-plus').parents('.sale-box').removeClass('active-box');
		}

		if (!bonusCardNoreg.length) {
			$('.bonus-card_popup.no-reg').removeClass('active-card');
			$('.bonus-card_popup.no-reg').parents('.sale-box').removeClass('active-box');
		}

		if (!bonusCardSilver.length) {
			$('.bonus-card_popup.silver').removeClass('active-card');
			$('.bonus-card_popup.silver').parents('.sale-box').removeClass('active-box');
		}
	});
});

$(document).ready(function () {
	$('.bonus-popup_link').on('click', function () {
		var siblingsItem = $(this).parents('.sale-box');

		$(this).find('.bonus-card_popup').addClass('active-card');
		siblingsItem.addClass('active-box');
	});

	$('body, .sale-text').on('click', function (event) {
		var bonusCardGold = $(event.target).closest('.bonus-card_popup.gold, .bonus-marker.gold, .bonus-popup_link.gold'),
			bonusCardPlatinum = $(event.target).closest('.bonus-card_popup.platinum, .bonus-marker.platinum, .bonus-popup_link.platinum'),
			bonusCardPP = $(event.target).closest('.bonus-card_popup.platinum-plus, .bonus-marker.platinum-plus, .bonus-popup_link.platinum-plus'),
			bonusCardNoreg = $(event.target).closest('.bonus-card_popup.no-reg, .bonus-marker.no-reg, .bonus-popup_link.no-reg'),
			bonusCardSilver = $(event.target).closest('.bonus-card_popup.silver, .bonus-marker.silver, .bonus-popup_link.silver');

		// $('.sale-box').removeClass('pointer-none');

		if (!bonusCardGold.length) {
			$('.bonus-card_popup.gold').removeClass('active-card');
			$('.bonus-card_popup.gold').parents('.sale-box').removeClass('active-box');
		}

		if (!bonusCardPlatinum.length) {
			$('.bonus-card_popup.platinum').removeClass('active-card');
			$('.bonus-card_popup.platinum').parents('.sale-box').removeClass('active-box');
		}

		if (!bonusCardPP.length) {
			$('.bonus-card_popup.platinum-plus').removeClass('active-card');
			$('.bonus-card_popup.platinum-plus').parents('.sale-box').removeClass('active-box');
		}

		if (!bonusCardNoreg.length) {
			$('.bonus-card_popup.no-reg').removeClass('active-card');
			$('.bonus-card_popup.no-reg').parents('.sale-box').removeClass('active-box');
		}

		if (!bonusCardSilver.length) {
			$('.bonus-card_popup.silver').removeClass('active-card');
			$('.bonus-card_popup.silver').parents('.sale-box').removeClass('active-box');
		}

	});
});
/* end bonus card popup */

/*convert block tooltip*/
$(document).ready(function () {
	var infoLabel = $('.bonus-convert_title .info-label');

	infoLabel.on('click', function () {
		$(this).find('.tooltip').toggleClass('active-tooltip');
	});

	$('body').on('click touchstart', function (event) {
		var convertTooltip = $(event.target).closest('.bonus-convert_title .info-label, .convert-holder .tooltip');

		if (!convertTooltip.length)
			$('.bonus-convert_title .tooltip').removeClass('active-tooltip');
	});
});
/* end convert block tooltip*/

/*bonus info popup*/
$(document).ready(function () {
	var topSilver = $('.bonus-info.silver a'),
		topGold = $('.bonus-info.gold .bonus-info_link'),
		topPlatinum = $('.bonus-info.platinum .bonus-info_link'),
		topPlatinumPlus = $('.bonus-info.platinum-plus .bonus-info_link');

	topSilver.on('click', function () {
		$(this).parents('.bonus-block').find('.recent-bonus').toggleClass('active');
	});
	topGold.on('click', function () {
		$(this).parents('.bonus-block').find('.recent-bonus').toggleClass('active');
	});
	topPlatinum.on('click', function () {
		$(this).parents('.bonus-block').find('.recent-bonus').toggleClass('active');
	});
	topPlatinumPlus.on('click', function () {
		$(this).parents('.bonus-block').find('.recent-bonus').toggleClass('active');
	});

	$('body').on('click', function (event) {
		var topSilverStatus = $(event.target).closest('.bonus-info.silver a, .recent-bonus'),
			topGoldStatus = $(event.target).closest('.bonus-info.gold a, .recent-bonus'),
			topPlatinumStatus = $(event.target).closest('.bonus-info.platinum a, .recent-bonus'),
			topPlatinumPlusStatus = $(event.target).closest('.bonus-info.platinum-plus a, .recent-bonus');

		if (!topSilverStatus.length)
			topSilver.parents('.bonus-block').find('.recent-bonus').removeClass('active');

		if (!topGoldStatus.length)
			topGold.parents('.bonus-block').find('.recent-bonus').removeClass('active');

		if (!topPlatinumStatus.length)
			topPlatinum.parents('.bonus-block').find('.recent-bonus').removeClass('active');

		if (!topPlatinumPlusStatus.length)
			topPlatinumPlus.parents('.bonus-block').find('.recent-bonus').removeClass('active');

		/*toggle active class on sale box*/
		$('.sale-box')
			.removeClass('active');

		$('.sale-box')
			.removeClass('active-box');
		/*toggle active class on sale box*/
	});
});
/* end bonus info popup*/

$(document).ready(function () {
	var nonSuccessAssociateButton = $('.non-success.ass-acount .reg-button'),
		associateSuccess = $('.facebook-banner.ass-acount.success'),
		associateNonSuccess = $('.facebook-banner.ass-acount.non-success'),
		nonSuccessLikeButton = $('.non-success.fb-like .reg-button'),
		likeSuccess = $('.fb-like.success'),
		likeNonSuccess = $('.fb-like.non-success');

	nonSuccessAssociateButton.click(function () {
		associateSuccess.show(0);
		associateNonSuccess.hide(0);
	});
	nonSuccessLikeButton.click(function () {
		likeSuccess.show(0);
		likeNonSuccess.hide(0);
	});
});

$(document).ready(function () {
	$('.sale-box .bonus-marker').on('click touchstart', function (e) {
		e.stopPropagation();
		e.preventDefault();
		var $popup = $(this).find('.bonus-card_popup');
		var $holder = $(this).parents('.sale-box');
		var $listHolder = $(this).parents('.sale-item');
		var $prevItem = $(this).parents('.sale-box').prev('.sale-box');

		$holder.siblings('.sale-box').removeClass('active-box active');
		$listHolder.find('.tooltip').removeClass('active');
		// $prevItem.addClass('pointer-none');
		// $prevItem.siblings('.sale-box').removeClass('pointer-none');

		if ($popup.hasClass('active-card')) {
			$('.sale')
				.find('.bonus-card_popup')
				.removeClass('active-card');
			$popup.removeClass('active-card');
			$holder.removeClass('active-box');
			console.log('remove');
		} else {
			$(this).closest('.sale')
				.find('.bonus-card_popup')
				.removeClass('active-card');
			console.log('active-card');
			$holder.addClass('active-box');
			$popup.addClass('active-card');
		}
	});
});

/* ========== Swiper reviewed slider ========== */
$(document).ready(function () {
	var swiperContainer = $('.reviewed-slider .swiper-container,' +
		'.accessory-slider .swiper-container, ' +
		'.software-slider .swiper-container, ' +
		'.similar-slider .swiper-container');
	var compareSlider = $('.compare-slider .swiper-container');

	/* ========== Reviewed and Accessory slider ========== */
	if (swiperContainer.length) {
		swiperContainer.each(function (index) {
			var currSwiper = $(this);
			$(this).addClass('swiper-' + index);
			var mySwiper = new Swiper(currSwiper[0], {
				index: index,
				slidesPerView: 'auto',
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				scrollbar: currSwiper.find('.swiper-scrollbar')[0],
				scrollbarDraggable: true,
				scrollbarHide: false,
				firstSlideMessage: 'lorem',
				followFinger: false,
				onReachEnd: function (swiper) {
					$('.swiper-' + this.index + ' .swiper-button-next').addClass('swiper-button-disabled');
				},
				onReachBeginning: function (swiper) {
					$('.swiper-' + this.index + ' .swiper-button-prev').addClass('swiper-button-disabled');
				}
			});
		});
	}
	/* ========== END Reviewed and Accessory slider  ========== */

	/* ========== Compare double slider ========== */
	var differencesTable = $('.difference-table');

	if (compareSlider.length) {
		compareSlider.each(function (index) {
			var currSwiper = $(this);
			$(this).addClass('swiper-' + index);
			var compareDoubleSlider = new Swiper(currSwiper[0], {
				index: index,
				slidesPerView: 'auto',
				scrollbar: currSwiper.find('.swiper-scrollbar')[0],
				scrollbarDraggable: true,
				scrollbarHide: false,
				firstSlideMessage: 'lorem',
//				followFinger: false,
//				grabCursor: true
			});

			var galleryThumbs = new Swiper('.gallery-thumbs', {
				slidesPerView: 'auto',
				touchEventsTarget: false,
//				touchRatio: 1,
				shortSwipes: false,
				longSwipes: false,
				slideToClickedSlide: false,
				simulateTouch: false,
				followFinger: false,
//				grabCursor: true,
				onProgress: function () {
					addOutsideRightSlideClass();
					function addOutsideRightSlideClass() {
						differencesTable.each(function () {
							var currTable = $(this),
								lastSlide = currTable.find('.swiper-slide')[(compareDoubleSlider.activeIndex) + 3];
								$(lastSlide).addClass('outside-right-slide');
								$(lastSlide).siblings('.swiper-slide').removeClass('outside-right-slide');
						});
					}
				}
			});
			compareDoubleSlider.params.control = galleryThumbs;
			galleryThumbs.params.control = compareDoubleSlider;
		});
	}
	/* ========== END Compare double slider  ========== */
});

$(window).load(function () {
	var compareSlide = $('.test-slider .swiper-slide');
	var listingSaleBox = $('.products-list .block-view .sale-box');
	/* ========== Show more compare link COMPARE PAGE ========== */
	if (compareSlide.length <= 1) {
		$('.compare-page .more-compare').addClass('more-compare--show');
	} else {
		$('.compare-page .more-compare').removeClass('more-compare--show');
	}
	/* ========== END Show more compare link COMPARE PAGE  ========== */

	/* ========== Show more compare link LISTING PAGE ========== */
	if (listingSaleBox.length <= 1) {
		$('.products-list .more-compare').addClass('more-compare--show');
	} else {
		$('.products-list .more-compare').removeClass('more-compare--show');
	}
	/* ========== END Show more compare link LISTING PAGE  ========== */
});
/* ========== END Swiper reviewed slider  ========== */

/* ========== Append more-block in last slide ========== */
$(window).load(function () {
	/* ========== Append more accessory ========== */
	var accessorySaleBox = $('.accessory-slider .sale-box'),
		saleBoxContent = $('.sale-img, .sale-text-box'),
		accessoryLastSlide = $('.accessory-slider .swiper-slide:last-child .sale-box:last-child'),
		showMoreAccessory = $('.show-more-accessory');

	if (accessorySaleBox.length > 8) {
		accessoryLastSlide.append(showMoreAccessory);
		accessoryLastSlide.find(saleBoxContent).hide();
	} else {
		showMoreAccessory.hide();
	}
	/* ========== END Append more accessory  ========== */
});
/* ========== END Append more-block in last slide  ========== */

$(window).load(function () {
	var CompareSlider = {
		init: function () {
			this.changeCompareCellHeight();
			this.addInfoIcon();
			this.showCompareCellTooltip();
		},
		changeCompareCellHeight: function () {
			/* ========== Change compare slider cell height ========== */
			/*	var testListItem = $(".test-list li");
			 var testTitleList = $(".test-title-list .some-item");
			 var maxHeightTitle = 0;
			 var maxHeightCell = 0;

			 testListItem.each(function(indexitem){
			 if ( $(this).height() > maxHeightCell ) {
			 maxHeightCell = $(this).height();
			 }
			 });

			 testTitleList.each(function(indextitle){
			 maxHeightTitle = $(this).height();
			 });

			 testListItem.height(maxHeightCell);
			 testTitleList.height(maxHeightCell);*/
			/* ========== END Change compare slider cell height  ========== */
		},

		addInfoIcon: function () {
			var sliderCellTitle = $('.slide-cell span');

			sliderCellTitle.each(function () {
				if ($(this).innerWidth() > 200) {
					$(this).addClass('slide-cell__tooltip');
					$(this).parents('.slide-cell').addClass('tooltip-cell');
					/* ========== Add close button ========== */
					$(this).append("<div class='close-tooltip'></div>");
				}
			});
		},

		showCompareCellTooltip: function () {
			$('.tooltip-cell, .close-tooltip').on('click', function (e) {
				e.stopPropagation();
				/* ========== Open tooltip ========== */
				$(this).find('.slide-cell__title').addClass('slide-cell__tooltip--show');
				/* ========== END Open tooltip  ========== */

				/* ========== Close tooltip ========== */
				$(this).parents('.slide-cell__title').removeClass('slide-cell__tooltip--show');
				$(this).siblings().find('.slide-cell__title').removeClass('slide-cell__tooltip--show');
				$(this).parents('.swiper-slide').siblings().find('.slide-cell__title').removeClass('slide-cell__tooltip--show');
				$(this).parents('.difference-table').siblings().find('.slide-cell__title').removeClass('slide-cell__tooltip--show');
				/* ========== END Close tooltip  ========== */
			});
			/* ========== Close tooltip ========== */
			$('body').on('click', function (event) {
				var cellTooltip = $(event.target).closest('.slide-cell__tooltip--show');

				if (!cellTooltip.length) {
					$('.slide-cell').siblings().find('.slide-cell__title').removeClass('slide-cell__tooltip--show');
				}
			});
		}
	};
	CompareSlider.init();
	/* ========== Show tooltip in compare table ========== */

	/* ========== END Show tooltip in compare table  ========== */

});
