// jQuery Slide drop plugin
(function($){
	var cache = [];
	jQuery.fn.slideDrop = function(opt){
		var def = {
			animspeed:200,
			extraWidth:500,
			opener:'>.open-drop',
			slide:'ul.drop',
			autoWidth:false,
			selectMode:false,	// режим селекта
			change:true,		// текст берется из дропа и меняется только в опенере
			exception:'',		// исключающий селектор закрытия дропа
			items: 'li > a',
			active:'active',
			onOpen:function(){},
			onChange:function(){},
			onInit:function(){}
		}
		jQuery.extend(def, opt);
		return this.each(function(){
			var hold = jQuery(this);
			var opener = hold.find(def.opener);
			var slide = hold.find(def.slide);
			var items = slide.find(def.items);
			
			slide.css({
				position: 'absolute',
				top: -9999,
				left: -9999
			});
			
			// append tooltip to body
			slide.hide();
			
			var addEvent = function(trigger){
				var body = jQuery('body');
				body.one('click.slideDrop', function (e) {
					var targ = jQuery(e.target);
					if (targ.parents(def.slide).length || targ.hasClass(def.opener)) return;
					slide.slideUp(def.animspeed, function(){
						hold.removeClass(def.active);
					});
				});
			}

			//open drop
			opener.click(function(e){
				var openerPos = opener.offset();
				var top = openerPos.top + opener.outerHeight();
				var left = openerPos.left;
				var width = opener.innerWidth();
				var slidePadding = slide.innerWidth() - slide.width();

				slide.css({
					top: top,
					left: left,
				});

				if(def.autoWidth){
					slide.css({
						width: width - slidePadding
					});
				}

				if(hold.hasClass(def.active)){
					slide.slideUp(def.animspeed, function(){
						hold.removeClass(def.active);
					});
				} else {
					slide.slideDown();
					hold.addClass(def.active);
					cache.push([slide,hold]);
					slide.slideDown();
					addEvent();
					hold.addClass(def.active);
					if (typeof def.onOpen == "function") {
						def.onOpen(this, slide, hold);
					}
				};
				e.stopPropagation();
				return false;
			})

			// init selects functionality for drop-down menu
			if (def.selectMode) {
				items.each(function(){
					var item = jQuery(this)
					item.click(function(e){
						var dropText = item.html();
						var text = opener.html();
						opener.html(dropText)
						items.parent().removeClass(def.active);
						if(def.change){
							item.html(text).parent().addClass(def.active);
						} else{
							item.parent().addClass(def.active);
						}
						slide.slideUp(def.animspeed);
						hold.removeClass(def.active);
						e.stopPropagation();
						if (typeof def.onChange == "function") {
							def.onChange(opener, hold);
						}
						return false;
					})
				})
			}

			if (typeof def.onInit == "function") {
				def.onInit(opener, hold);
			}
		})
	}
})(jQuery);
