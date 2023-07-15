
var checcc = true;

$(document).ready(function(){

  $(this).scrollTop(0);


  $("#topp").fadeOut();
  $("#navbar").fadeOut();

});

function offanimation(){
      var x = document.getElementById("particles-js");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function toggleParticleColorW() {

 	const newColor = '#000';
	$.each(pJSDom[0].pJS.particles.array, function(i,p){
		pJSDom[0].pJS.particles.array[i].color.value = newColor;
		pJSDom[0].pJS.particles.array[i].color.rgb = hexToRgb(newColor);
		pJSDom[0].pJS.particles.line_linked.color_rgb_line = hexToRgb(newColor);
	});
}
function toggleParticleColorB() {

 	const newColor = '#fff';
	$.each(pJSDom[0].pJS.particles.array, function(i,p){
		pJSDom[0].pJS.particles.array[i].color.value = newColor;
		pJSDom[0].pJS.particles.array[i].color.rgb = hexToRgb(newColor);
		pJSDom[0].pJS.particles.line_linked.color_rgb_line = hexToRgb(newColor);
	});
}
// ParticlesJS Config.
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 700 } },


    "color": {
      "value": "#ffffff" },

    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000" },

      "polygon": {
        "nb_sides": 5 } },


    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 0.1,
        "opacity_min": 0.1,
        "sync": false } },


    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 10,
        "size_min": 0.1,
        "sync": false } },


    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1 },

    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200 } } },



  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" },

      "onclick": {
        "enable": true,
        "mode": "push" },

      "resize": true },

    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1 } },


      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3 },

      "repulse": {
        "distance": 200,
        "duration": 0.4 },

      "push": {
        "particles_nb": 4 },

      "remove": {
        "particles_nb": 2 } } },



  "retina_detect": true });

function fade($ele) {
  $ele.fadeIn(1000).delay(5000).fadeOut(1000, function() {
    var $next = $(this).next('.quote');
    fade($next.length > 0 ? $next : $(this).parent().children().first());
  });
}
fade($('.quoteLoop > .quote').first());



window.onscroll = function() {scrollFunction()};
function scrollFunction(){
  if (checcc){
    $("#topp").fadeIn();
    $("#navbar").fadeIn();
    checcc = false;
  }

  if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)){
     // document.getElementById("topp").style.display = "block";

     $("#topp").fadeIn();


      //document.getElementById("topp").classList.toggle('show');
      document.getElementById("navbar").style.top = "0";

    } else {
      //document.getElementById("topp").style.display = "none";
      $("#topp").fadeOut();
      //document.getElementById("topp").classList.toggle('hide');
      document.getElementById("navbar").style.top = "-300px";


    }

  }

  $("#navbar a[href^='#']").on('click', function(e) {
   e.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
     scrollTop: $(hash).offset().top +10
   }, 300, function(){
     window.location.hash = hash;
   });
 });

$("#smooth a[href^='#']").on('click', function(e) {
   e.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){
       window.location.hash = hash;
     });
});

  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      } 
    });
  }

  function gotop(scrollDuration) {
    var cosParameter = window.scrollY / 2,
    scrollCount = 0,
    oldTimestamp = performance.now();
    function step (newTimestamp) {
      scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
      if (scrollCount >= Math.PI) window.scrollTo(0, 0);
      if (window.scrollY === 0) return;
      window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }


  $('.button2').on('click', function() {


    $('#cr').css({
      background: 'black'
    });

    changeNavToWhite();
    changeTopBlack();
changeAnnouncementBlack();

    $('.button1').css({
      color: 'white'
    });    $('.button2').css({
      color: 'white'
    });

    $('.collapsible').css({
      color: 'black'
    });
    $('.collapsible').css({
      background: 'white'
    });

    $('hr').css({
      color: 'black'
    });

    $('#linee').css({
      color: 'white'
    });
    $('#lineee').css({
      color: 'white'
    });               $('#lineeee').css({
      color: 'white'
    });

    $('.swiper-button-next').css({
      color: 'black'
    });
    $('.swiper-button-prev').css({
      color : 'black'
    });
    /*
      $('body').css({
          background: 'black'
      });
      */

      $('#buy').css({
        background: 'white'
      });
      $('subtitlee').css({
        color: 'black'
      });
      
      $('#opening').css({
        background: 'black'
      });
      $('#faq').css({
        background: 'black'
      });
      $('#contact').css({
        background: 'white'
      });
      $('titlee').css({
        color: 'white'
      });
    });

  $('.button1').on('click', function() {



    $('#cr').css({
      background: 'white'
    });

    changeNavToBlack();
    changeTopWhite();

 changeAnnouncementWhite();

    $('hr').css({
      color: 'white'
    });



    $('.swiper-button-next').css({
      color : 'white'
    });

    $('.swiper-button-prev').css({
      color : 'white'
    });


    $('#linee').css({
      color: 'black'
    });
    $('#lineee').css({
      color: 'black'
    });               $('#lineeee').css({
      color: 'black'
    });
    $('.collapsible').css({
      color: 'white'
    });
    $('.collapsible').css({
      background: 'black'
    });

    $('.button1').css({
      color: 'black'
    });    $('.button2').css({
      color: 'black'
    });
     /*
      $('body').css({
          background: 'white'
      });
      */
      $('#opening').css({
        background: 'white'
      });
      $('#contact').css({
        background: 'black'
      });
      $('#buy').css({
        background: 'black'
      });
      $('#faq').css({
        background: 'white'
      });
      

      
      $('subtitlee').css({
        color: 'white'
      });
      $('titlee').css({
        color: 'black'
      });
    });

   
  function changeAnnouncementWhite(){
    $('.announcement').css({
      color: 'black'
    });
    $('.announcement').css({
      background: 'white'
    });
    $('.announcement a').css({
      color: 'black'
    });

  }

  function changeAnnouncementBlack(){
    $('.announcement').css({
      color: 'white'
    });
    $('.announcement').css({
      background: 'black'
    });
    $('.announcement a').css({
      color: 'white'
    });



  }


  function changeNavToBlack(){
    document.getElementById('navRight').src='image/aaa.png';
    $('head').append('<style>#navbar a:after{ background:#fff !important;}</style>');

    $('#sticky').css({
      color: 'white'
    });

    $('#navbar a').css({
      color: 'white'
    });

    $('#navbar').css({
      background: 'black'
    });

  }


  function changeNavToWhite(){
   document.getElementById('navRight').src='image/optimizedImage/Hi.svg';
   $('head').append('<style>#navbar a:after{ background:#000 !important;}</style>');


   $('#navbar a').css({
    color: 'black'
  });

   $('#sticky').css({
    color: 'black'
  });
   $('#navbar').css({
    background: 'white'
  });


 }

 ChangeColorBlack.onclick = function() {
   changeTopBlack();
   changeNavToWhite();
toggleParticleColorB();
   document.documentElement.style.setProperty('--swiper-theme-color', '#000');


   document.getElementById('myImage').src='image/newlogo2bro.png';
   document.getElementById('myImage2').src='image/frontblack.png';
   document.getElementById('myImage3').src='image/frontblackstyle2.png';
   document.getElementById("prodname").innerHTML ="Black AshE Hoodie";
   document.getElementById("prodname2").innerHTML ="Black AshE Hoodie Glowing Edge";

   document.getElementById('myImage4').src='image/pantblack.png';
   document.getElementById('myImage5').src='image/pantgreyblack.png';
   document.getElementById("prodname3").innerHTML ="Black AshE Pant";
   document.getElementById("prodname4").innerHTML ="Grey Black AshE Pant";
   document.getElementById("prodname3").style.color='black';
   document.getElementById("prodname4").style.color='black';





   document.getElementById('myImage6').src='image/blackHatFront.png';
   document.getElementById('myImage7').src='image/blackHatBack.png';
   document.getElementById('myImage8').src='image/blackHatBack.png';
   document.getElementById('myImage9').src='image/blackHatFront.png';

   document.getElementById("prodname5").innerHTML ="Black AshE Hat (Front View)";
   document.getElementById("prodname6").innerHTML ="Black AshE Hat (Back View)";
   document.getElementById("prodname5").style.color='black';
   document.getElementById("prodname6").style.color='black';

   document.getElementById("prodname7").innerHTML ="Black AshE Hat (Back View)";
   document.getElementById("prodname8").innerHTML ="Black AshE Hat (Front View)";
   document.getElementById("prodname7").style.color='black';
   document.getElementById("prodname8").style.color='black';




  /*
   document.getElementById('myImage4').src='image/pantwhite.png';
   document.getElementById('myImage5').src='image/pantgreywhite.png';
  document.getElementById("prodname3").innerHTML ="White AshE Pant";
  document.getElementById("prodname4").innerHTML ="Grey White AshE Pant";
  document.getElementById("prodname3").style.color='black';
  document.getElementById("prodname4").style.color='black';
  */

  document.getElementById("prodname").style.color='black';
  document.getElementById("prodname2").style.color='black';
  document.getElementById('daArrow').src='image/whiteArrow.png';

};



ChangeColorWhite.onclick = function() {

  changeTopWhite();

  changeNavToBlack();
toggleParticleColorW() ;


  document.documentElement.style.setProperty('--swiper-theme-color', '#FFF');

  document.getElementById('myImage').src='image/optimizedImage/whitelogobro.svg';
  document.getElementById('myImage2').src='image/frontwhite.png';
  document.getElementById('myImage3').src='image/frontwhitestyle2.png';
  document.getElementById("prodname").innerHTML ="White AshE Hoodie";
  document.getElementById("prodname2").innerHTML ="White AshE Hoodie Glowing Edge";

  document.getElementById('myImage4').src='image/pantwhite.png';
  document.getElementById('myImage5').src='image/pantgreywhite.png';
  document.getElementById("prodname3").innerHTML ="White AshE Pant";
  document.getElementById("prodname4").innerHTML ="Grey White AshE Pant";
  document.getElementById("prodname3").style.color='white';
  document.getElementById("prodname4").style.color='white';




  document.getElementById('myImage6').src='image/whiteHatFront.png';
  document.getElementById('myImage7').src='image/whiteHatBack.png';
  document.getElementById('myImage8').src='image/whiteHatBack.png';
  document.getElementById('myImage9').src='image/whiteHatFront.png';

  document.getElementById("prodname5").innerHTML ="White AshE Hat (Front View)";
  document.getElementById("prodname6").innerHTML ="White AshE Hat (Back View)";
  document.getElementById("prodname5").style.color='white';
  document.getElementById("prodname6").style.color='white';

  document.getElementById("prodname7").innerHTML ="White AshE Hat (Back View)";
  document.getElementById("prodname8").innerHTML ="White AshE Hat (Front View)";
  document.getElementById("prodname7").style.color='white';
  document.getElementById("prodname8").style.color='white';



  /*
   document.getElementById('myImage4').src='image/pantblack.png';
   document.getElementById('myImage5').src='image/pantgreyblack.png';
  document.getElementById("prodname3").innerHTML ="Black AshE Pant";
  document.getElementById("prodname4").innerHTML ="Grey Black AshE Pant";
  document.getElementById("prodname3").style.color='white';
  document.getElementById("prodname4").style.color='white';
  */

  document.getElementById("prodname").style.color='white';
  document.getElementById("prodname2").style.color='white';
  document.getElementById('daArrow').src='image/blackArrow.png';

}


function changeTopBlack(){

 $("#topp").hover(function(){
 }, function(){
  $(this).css("color", "white");
});

 $('#topp').css({
  background: 'black'
});
 $('#topp').css({
  color: 'white'
});



}

function changeTopWhite(){

  $("#topp").hover(function(){
    $(this).css("color", "white");
  }, function(){
    $(this).css("color", "black");

  });
  $('#topp').css({
    background: 'white'
  });
  $('#topp').css({
    color: 'black'
  });
  


}



function toggle_visibility() {
 
 $("#aaaa").fadeOut();
}

setTimeout(function() {
  $("#aaaa").fadeOut().empty();
}, 10000);


function autochangeco(hoverrr, id1, id2, yesorno){
  if(!yesorno){
   $(hoverrr).css({
    color: 'red'
  });
 }

 if($('#navbar').css('background-color') == 'rgb(0, 0, 0)'){
   $(id1).css({
    color: 'white'
  });
   $(id2).css({
    color: 'white'
  });
   if(yesorno){
     $(hoverrr).css({
      color: 'white'
    });
   }
 } else if ($('#navbar').css('background-color') == 'rgb(255, 255, 255)') {
   $(id1).css({
    color: 'black'
  });
   $(id2).css({
    color: 'black'
  });
   if(yesorno){
     $(hoverrr).css({
      color: 'black'
    });
   }
 }
}

function changeNavCCC(where){
 if($(where).css('background-color') == 'rgb(0, 0, 0)'){

  changeNavToWhite();
  changeAnnouncementBlack();
  changeTopBlack();
   $('#topp2').css({
  background: 'white'
});
 $('#topp2').css({
  color: 'black'
});
} else if ($(where).css('background-color') == 'rgb(255, 255, 255)') {
 changeNavToBlack();
 changeAnnouncementWhite();
 changeTopWhite();
  $('#topp2').css({
  background: 'black'
});
 $('#topp2').css({
  color: 'white'
});
}
}

$(function () {
  $(window).scroll(function(){
    if($(window).scrollTop() > $('#buy').offset().top 
     && $(window).scrollTop() < $('#buy').offset().top + $('#buy').outerHeight(true)
     ){
     $('#sticky').text('Merch');   
   changeNavCCC('#buy');
   autochangeco('#bbb', '#cc', '#ff', false);

 }else if($(window).scrollTop() > $('#contact').offset().top 
   && $(window).scrollTop() < $('#contact').offset().top + $('#contact').outerHeight(true)
   ){
   $('#sticky').text('Contact');
   changeNavCCC('#contact');
   autochangeco('#cc', '#bbb', '#ff',false);

 }else if($(window).scrollTop() > $('#faq').offset().top 
   && $(window).scrollTop() < $('#faq').offset().top + $('#faq').outerHeight(true)
   ){
   $('#sticky').text('F.A.Q');
   changeNavCCC('#faq');
   autochangeco('#ff', '#cc', '#bbb', false);

 }
 else{
  $('#sticky').text('Home');
  changeNavCCC('#opening');
  autochangeco('#ff', '#cc', '#bbb', true);

}
});
});
