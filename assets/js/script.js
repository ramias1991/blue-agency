$(function(){



	// Menu flutuante



	if($(window).width() > 600){



		if($(this).scrollTop() >= ($("#about").offset().top) - 105){
			$("#topo").css("position", "fixed");
		} else {
			$("#topo").css("position", "relative");
		}



		$(window).scroll(function(){
			if($(this).scrollTop() >= ($("#about").offset().top - 105)){
				$("#topo").css("position", "fixed");
				$(".inicio_pagina").fadeIn(500);
			} else {
				$("#topo").css("position", "relative");
				$(".inicio_pagina").fadeOut(500);
			}
		});



	} 

	// menu deslizante
	var link = $(".menu a");
	link.bind("click", function(){
		var seletor = $(this).attr("href");
		var posicao = $(seletor).offset().top;
		$("html, body").animate({scrollTop:posicao - 105}, 1200);
	});


	



		// slide principal topo



	var slideItem = 0;



	var rodar = setInterval(mudaSlide, 4000);



	



		var slidewidth = $("#slide").width();



		$(".slide").width(slidewidth + "px");



		$(".borda_inferior").css("width", slidewidth + "px");



		$(".bolinhas").css("width", slidewidth + "px");



		$(".bola:eq(0)").fadeTo(0, 1);



		function mudaSlide(){



			slideItem++;



			if(slideItem >= 3){



				slideItem = 0;



			}



			$(".bola").fadeTo(0, 0.5);



			$(".slideshow").css("margin-left", "-" + slideItem * slidewidth + "px");



			$(".bola:eq("+ slideItem +")").fadeTo(0, 1);



		}







		$(".bola").bind("click",function(){



			clearInterval(rodar);



			slideItem = $(this).index();



			$(".bola").fadeTo(0, 0.5);



			$(".slideshow").css("margin-left", "-" + slideItem * slidewidth + "px");



			$(".bola:eq("+ slideItem +")").fadeTo(0, 1);



		});







		// Área de  comentários de cientes



		var text = [



		'" Esse é um texto qualquer que podeser usado como descrição dessa área, pode ser usado para detralhar ainda mais a respeito do que foi pedido, assim como qualquer outra finalidade. Esse é um texto qualquer que podeser usado como descrição dessa área, pode ser usado para detralhar ainda mais a respeito do que foi pedido, assim como qualquer outra finalidade. "',



		'" Texto 2 com qualquer coisa digitada aqui apenas para completar esse exemplo. Texto 2 com qualquer coisa digitada aqui apenas para completar esse exemplo. Texto 2 com qualquer coisa digitada aqui apenas para completar esse exemplo. Texto 2 com qualquer coisa digitada aqui apenas para completar esse exemplo. Texto 2 com qualquer coisa digitada aqui apenas para completar esse exemplo. "',



		'" Qualquer outro texto como exemplo para o próximo bloco. Qualquer outro texto como exemplo para o próximo bloco. Qualquer outro texto como exemplo para o próximo bloco. Qualquer outro texto como exemplo para o próximo bloco. Qualquer outro texto como exemplo para o próximo bloco. Qualquer outro texto como exemplo para o próximo bloco. Qualquer outro texto como exemplo para o próximo bloco. "'



		];



		$(".say_text").html(text[0]);



		$(".say_bolinha:eq(0)").css("background-color", "#FFF");



		$(".say_bolinha").bind("click", function(){



			var sayItem = $(this).index();



			$(".say_image img").attr("src", "assets/images/say_topo"+ (sayItem + 1) +".png");



			$(".say_bolinha").css("background-color", "#000");



			$(".say_bolinha:eq("+sayItem+")").css("background-color", "#FFF");



			$(".say_text").html(text[sayItem]);



		});



		



		$(".client").bind("click", function(){



			var sayItem = $(this).index();



			$(".say_image img").attr("src", "assets/images/say_topo"+ (sayItem + 1) +".png");



			$(".say_bolinha").css("background-color", "#000");



			$(".say_bolinha:eq("+sayItem+")").css("background-color", "#FFF");



			$(".say_text").html(text[sayItem]);



		});







		



		



		// ------------- Slide Patrocinio -------------------- //







		$(".patrocinio_back_next").css("width", $(window).width() + "px");



		



		$(".patrocinio_back_next img").hover(function(){



			$(".patrocinio_back img").attr("src", "assets/images/patrocinio_back_efect.png")



			$(".patrocinio_next img").attr("src", "assets/images/patrocinio_next_efect.png")



		}, function(){



			$(".patrocinio_back img").attr("src", "assets/images/patrocinio_back.png")



			$(".patrocinio_next img").attr("src", "assets/images/patrocinio_next.png")



		});







		$(".patrocio_int_area").css("width", $(".patrocio_int_area_item").width() * 6 + "px");



		



		var patItem = 0;



		if($(window).width() < 380){



			var cont = $(".patrocio_int_area_item").length - 1;



		} else{



			var cont = 2;



		}



		$(".patrocinio_next").bind("click", function(){



			var widthPatrocinio = $(".patrocio_int_area_item").width();



			patItem++;



			if(patItem > cont){



				patItem = 0;



			}



			$(".patrocio_int_area").css("margin-left", "-" + patItem * widthPatrocinio + "px");



		});







		$(".patrocinio_back").bind("click", function(){



			var widthPatrocinio = $(".patrocio_int_area_item").width();



			patItem--;



			



			if(patItem <= -1){



				patItem = cont;



			}



			$(".patrocio_int_area").css("margin-left", "-" + patItem * widthPatrocinio + "px");



		});



		$("form").bind("submit", function(e){
			e.defaultPrevent();
		});



		$(".form_bottom_submit input").bind("click", function(){

			alert("Este formulário está sendo usado apenas como parte do layout!")



		});











// ------------ Menu Mobile



		$(".menu_mobile").bind("click",function(){


			$(".topo .menu").slideToggle('slow');
			


		});



		







		$(window).bind("resize", function(){



			if($(this).width() >= 588){



				$(".topo .menu").show();



			} else {

				$(".topo .menu").hide();

			}



		});

		$(".subi_topo").bind("click", function(){

		    $("html, body").animate({scrollTop:0},1500);

		});



});