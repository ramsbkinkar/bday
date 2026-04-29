$(window).load(function(){
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$(document).ready(function(){
    // Parse URL parameters for personalization
    const params = new URLSearchParams(window.location.search);
    const honoreeName = params.get('name');
    const accentColor = params.get('color');

    // Apply honoree name if provided in URL
    if (honoreeName) {
        $('.message p').last().text('a very happy birthday ' + honoreeName);
    }

    // Apply accent colour if provided in URL
    if (accentColor) {
        $('.balloons h2').css('color', accentColor);
        $('.btn-primary').css({
            'background-color': accentColor,
            'border-color': accentColor
        });
    }

    // --- Ambient glow variables ---
    let ambientLightDiv, mouseX = 0, mouseY = 0, glowRafId = null;

    // --- Photo strip setup ---
    // Updated to .jpeg and 19 images to match your folder
    const photoPaths = Array.from({length:19}, (_,i)=>`photos/${i+1}.jpeg`);

    function buildPhotoStrip() {
        const $strip = $('.photo-strip');
        if (!$strip.length) return;
        if ($strip.children().length) return; 
        
        photoPaths.forEach(src => $strip.append(`<img src="${src}" alt="memory photo">`));
        // Duplicate for seamless scrolling effect
        photoPaths.forEach(src => $strip.append(`<img src="${src}" alt="memory photo">`));
    }

    buildPhotoStrip();

    // --- Balloon pop surprise ---
    const surprises = ['🎉', '🎁', '😍', '🥳', '✨', '🎈', '🍰', '💖', '😄', '🙌'];
    let poppedCount = 0;

    function handleBalloonPop() {
        const $balloon = $(this);
        if ($balloon.hasClass('popped')) return;

        $balloon.addClass('popped');
        const surprise = surprises[Math.floor(Math.random()*surprises.length)];
        const offset = $balloon.offset();
        const $surprise = $('<span class="surprise-text">'+surprise+'</span>').css({
            left: offset.left + $balloon.width()/2,
            top: offset.top
        });
        $('body').append($surprise);
        poppedCount++;
    }

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
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
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
        $('#b1').animate({left:randleft,bottom:randtop},10000,function(){ loopOne(); });
    }
    function loopTwo() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b2').animate({left:randleft,bottom:randtop},10000,function(){ loopTwo(); });
    }
    function loopThree() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b3').animate({left:randleft,bottom:randtop},10000,function(){ loopThree(); });
    }
    function loopFour() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b4').animate({left:randleft,bottom:randtop},10000,function(){ loopFour(); });
    }
    function loopFive() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b5').animate({left:randleft,bottom:randtop},10000,function(){ loopFive(); });
    }
    function loopSix() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b6').animate({left:randleft,bottom:randtop},10000,function(){ loopSix(); });
    }
    function loopSeven() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b7').animate({left:randleft,bottom:randtop},10000,function(){ loopSeven(); });
    }

    $('#balloons_flying').click(function(){
        $('.balloon-border').animate({top:-500},8000);
        $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
        loopOne(); loopTwo(); loopThree(); loopFour(); loopFive(); loopSix(); loopSeven();
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
        if (!ambientLightDiv) {
            ambientLightDiv = $('<div class="ambient-light"></div>').css({
                position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                pointerEvents: 'none', mixBlendMode: 'screen', opacity: 0, transition: 'opacity 0.6s ease'
            });
            $('body').append(ambientLightDiv);
        }
        setTimeout(function(){ ambientLightDiv.css('opacity', 1); }, 600);

        $(document).on('mousemove.ambient touchmove.ambient', function(e){
            mouseX = (e.type === 'touchmove') ? e.touches[0].clientX : e.clientX;
            mouseY = (e.type === 'touchmove') ? e.touches[0].clientY : e.clientY;
            if (glowRafId === null) {
                glowRafId = requestAnimationFrame(function(){
                    glowRafId = null;
                    ambientLightDiv.css('background', 'radial-gradient(circle at '+mouseX+'px '+mouseY+'px, rgba(255,255,150,0.45) 0%, rgba(255,255,150,0.2) 160px, transparent 300px)');
                });
            }
        });

        $(this).fadeOut('slow').promise().done(function(){
            $('#wish_message').fadeIn('slow');
        });
    });
        
    $('#wish_message').click(function(){
         vw = $(window).width()/2;
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
        $('#b1').attr('id','b11');
        $('#b2').attr('id','b22');
        $('#b3').attr('id','b33');
        $('#b4').attr('id','b44');
        $('#b5').attr('id','b55');
        $('#b6').attr('id','b66');
        $('#b7').attr('id','b77');
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
        
        function msgLoop (i) {
            $("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
                i=i+1;
                $("p:nth-child("+i+")").fadeIn('slow').delay(1000);
                if(i==50){
                    $("p:nth-child(49)").fadeOut('slow').promise().done(function () {
                        $('.cake').fadeIn('fast');
                    });
                } else {
                    msgLoop(i);
                }           
            });
        }
        msgLoop(1); // Start from first paragraph
    });
});