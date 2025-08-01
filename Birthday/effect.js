$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$(document).ready(function(){
        // Parse URL parameters for personalization (e.g. ?name=Surbhi&color=#ff69b4)
        const params = new URLSearchParams(window.location.search);
        const honoreeName = params.get('name');
        const accentColor = params.get('color');

        // Apply honoree name to the final birthday wish line if provided
        if (honoreeName) {
            // Replace the last <p> inside .message with customised text
            $('.message p').last().text('a very happy birthday ' + honoreeName);
        }

        // Apply accent colour to balloons and buttons if provided
        if (accentColor) {
            // Override balloon letter colours
            $('.balloons h2').css('color', accentColor);
            // Re-tint primary buttons for visual coherence
            $('.btn-primary').css({
                'background-color': accentColor,
                'border-color': accentColor
            });
        }

        // (Audio visualizer removed as per new requirements)
        // --- Ambient glow variables ---
        let ambientLightDiv, mouseX = 0, mouseY = 0, glowRafId = null;

        // --- Photo strip setup ---
        const photoPaths = Array.from({length:27}, (_,i)=>`photos/${i+1}.jpg`);

        function buildPhotoStrip() {
            const $strip = $('.photo-strip');
            if (!$strip.length) return;
            if ($strip.children().length) return; // already built
            photoPaths.forEach(src => $strip.append(`<img src="${src}" alt="memory photo">`));
            // Duplicate for seamless scrolling
            photoPaths.forEach(src => $strip.append(`<img src="${src}" alt="memory photo">`));
        }

        buildPhotoStrip();

        // --- Balloon pop surprise setup ---
        const surprises = [
            '🎉', '🎁', '😍', '🥳', '✨', '🎈', '🍰', '💖', '😄', '🙌'
        ];
        let poppedCount = 0;

        function handleBalloonPop() {
            const $balloon = $(this);
            if ($balloon.hasClass('popped')) return; // already popped

            $balloon.addClass('popped');

            // Determine surprise text and position
            const surprise = surprises[Math.floor(Math.random()*surprises.length)];
            const offset = $balloon.offset();
            const $surprise = $('<span class="surprise-text">'+surprise+'</span>').css({
                left: offset.left + $balloon.width()/2,
                top: offset.top
            });
            $('body').append($surprise);

            poppedCount++;
            // Optional: show all popped badge
            if (poppedCount === 7) {
                setTimeout(function(){
                    $('<div class="surprise-text" style="font-size:32px; left:50%; top:50%; transform:translate(-50%,-50%);">All balloons popped!</div>')
                        .appendTo('body');
                }, 800);
            }
        }

        // Attach pop handler (delegated to cover dynamically renamed IDs later)
        $(document).on('click', '.balloons', handleBalloonPop);

		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();

        // (Visualizer removed)
		$('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');

		// Create ambient glow that follows cursor
		if (!ambientLightDiv) {
			ambientLightDiv = $('<div class="ambient-light"></div>').css({
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				pointerEvents: 'none',
				mixBlendMode: 'screen',
				opacity: 0,
				transition: 'opacity 0.6s ease'
			});
			$('body').append(ambientLightDiv);
		}
		// Fade in the glow layer
		setTimeout(function(){ ambientLightDiv.css('opacity', 1); }, 600);

		// Mouse / touch tracking
		function scheduleGlowUpdate() {
			if (glowRafId === null) {
				glowRafId = requestAnimationFrame(function(){
					glowRafId = null;
					ambientLightDiv.css('background', 'radial-gradient(circle at '+mouseX+'px '+mouseY+'px, rgba(255,255,150,0.45) 0%, rgba(255,255,150,0.2) 160px, transparent 300px)');
				});
			}
		}

		$(document).on('mousemove.ambient touchmove.ambient', function(e){
			if (e.type === 'touchmove' && e.touches.length) {
				mouseX = e.touches[0].clientX;
				mouseY = e.touches[0].clientY;
			} else if (e.type === 'mousemove') {
				mouseX = e.clientX;
				mouseY = e.clientY;
			}
			scheduleGlowUpdate();
		});

		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
			$('.photo-strip-wrapper').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});




//alert('hello');