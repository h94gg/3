
///// silder pic/////
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    loop:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    animateOut:'fadeOut',

  });
});


// day-night1//
function night(){
  document.getElementById('headercontainer').style.background='var(--nightheader)';
  document.getElementById('day').src='assets/img'
  document.getElementById('body').style.background='var(--nightback)';
  document.getElementById('body').style.color='var(--text-night)'; 
  document.getElementById('night').style.display='none';
  document.getElementById('day').style.display='block';
  document.getElementById("hidmenu").style.background='var(--nightheader)';
  document.getElementById("ul22").style.color='var(--text-night)';
  document.getElementById("ul23").style.color='var(--text-night)';
  document.getElementById("ul24").style.color='var(--text-night)';
  document.getElementById("ul25").style.color='var(--text-night)';
  document.getElementById("ul26").style.color='var(--text-night)';
  document.getElementById("ul27").style.color='var(--text-night)';


}
function day(){
  document.getElementById('headercontainer').style.background='var(--day-header)';
  document.getElementById('body').style.background='var(--day-back)';
  document.getElementById('body').style.color='var(--text-day)';  
  document.getElementById('day').style.display='none';
  document.getElementById('night').style.display='block';
  document.getElementById("hidmenu").style.background='var(--day-header)';
  document.getElementById("ul22").style.color='var(--text-day)';
  document.getElementById("ul23").style.color='var(--text-day)';
  document.getElementById("ul24").style.color='var(--text-day)';
  document.getElementById("ul25").style.color='var(--text-day)';
  document.getElementById("ul26").style.color='var(--text-day)';
  document.getElementById("ul27").style.color='var(--text-day)';
}



// botton//
function show(){
  document.getElementById('hidmenu').style.display='block';
  document.getElementById('btnhid').style.display='block';
  document.getElementById('btnshow').style.display='none';
  

    
}
function hide(){
    document.getElementById('hidmenu').style.display='none';
    document.getElementById('btnhid').style.display='none';
    document.getElementById('btnshow').style.display='block';
    
      
  }

  var mq = window.matchMedia( "(max-width: 767px)" );
  if (mq.matches) {
      
  function docbox1(){
    document.getElementById('artdoc1').style.boxShadow= '0 0 7px 0 var(--color-box)';
    document.getElementById('artdoc2').style.boxShadow= 'none';
    document.getElementById('artdoc3').style.boxShadow= 'none';
    document.getElementById('artdoc4').style.boxShadow= 'none';
    document.getElementById('artdoc5').style.boxShadow= 'none';
    document.getElementById('artdoc6').style.boxShadow= 'none';

  }function docbox2(){
    document.getElementById('artdoc2').style.boxShadow= '0 0 7px 0 var(--color-box)';
    document.getElementById('artdoc1').style.boxShadow= 'none';
    document.getElementById('artdoc3').style.boxShadow= 'none';
    document.getElementById('artdoc4').style.boxShadow= 'none';
    document.getElementById('artdoc5').style.boxShadow= 'none';
    document.getElementById('artdoc6').style.boxShadow= 'none';

  }function docbox3(){
    document.getElementById('artdoc3').style.boxShadow= '0 0 7px 0 var(--color-box)';
    document.getElementById('artdoc2').style.boxShadow= 'none';
    document.getElementById('artdoc1').style.boxShadow= 'none';
    document.getElementById('artdoc4').style.boxShadow= 'none';
    document.getElementById('artdoc5').style.boxShadow= 'none';
    document.getElementById('artdoc6').style.boxShadow= 'none';
  }function docbox4(){
    document.getElementById('artdoc4').style.boxShadow= '0 0 7px 0 var(--color-box)';
    document.getElementById('artdoc2').style.boxShadow= 'none';
    document.getElementById('artdoc3').style.boxShadow= 'none';
    document.getElementById('artdoc1').style.boxShadow= 'none';
    document.getElementById('artdoc5').style.boxShadow= 'none';
    document.getElementById('artdoc6').style.boxShadow= 'none';

  }function docbox5(){
    document.getElementById('artdoc5').style.boxShadow= '0 0 7px 0 var(--color-box)';
    document.getElementById('artdoc2').style.boxShadow= 'none';
    document.getElementById('artdoc3').style.boxShadow= 'none';
    document.getElementById('artdoc4').style.boxShadow= 'none';
    document.getElementById('artdoc1').style.boxShadow= 'none';
    document.getElementById('artdoc6').style.boxShadow= 'none';

  }
  function docbox6(){
    document.getElementById('artdoc6').style.boxShadow= '0 0 7px 0 var(--color-box)';
    document.getElementById('artdoc2').style.boxShadow= 'none';
    document.getElementById('artdoc3').style.boxShadow= 'none';
    document.getElementById('artdoc4').style.boxShadow= 'none';
    document.getElementById('artdoc5').style.boxShadow= 'none';
    document.getElementById('artdoc1').style.boxShadow= 'none';

  }

  function tr1(){
    document.getElementById('tr1').style.boxShadow= '0 0 7px 0 var(--color-box)';
    document.getElementById('tr2').style.boxShadow= 'none';
    document.getElementById('tr3').style.boxShadow= 'none';
    document.getElementById('tr4').style.boxShadow= 'none';
    document.getElementById('tr5').style.boxShadow= 'none';
  }
  function tr2(){
    document.getElementById('tr2').style.boxShadow= '0 0 7px 0 var(--color-box)';
    document.getElementById('tr1').style.boxShadow= 'none';
    document.getElementById('tr3').style.boxShadow= 'none';
    document.getElementById('tr4').style.boxShadow= 'none';
    document.getElementById('tr5').style.boxShadow= 'none';
  } function tr3(){
    document.getElementById('tr3').style.boxShadow= '0 0 7px 0 var(--color-box)';
    document.getElementById('tr2').style.boxShadow= 'none';
    document.getElementById('tr1').style.boxShadow= 'none';
    document.getElementById('tr4').style.boxShadow= 'none';
    document.getElementById('tr5').style.boxShadow= 'none';
  } function tr4(){
    document.getElementById('tr4').style.boxShadow= '0 0 7px 0 var(--color-box)';
    document.getElementById('tr2').style.boxShadow= 'none';
    document.getElementById('tr3').style.boxShadow= 'none';
    document.getElementById('tr1').style.boxShadow= 'none';
    document.getElementById('tr5').style.boxShadow= 'none';
  } function tr5(){
    document.getElementById('tr5').style.boxShadow= '0 0 7px 0 var(--color-box)';
    document.getElementById('tr2').style.boxShadow= 'none';
    document.getElementById('tr3').style.boxShadow= 'none';
    document.getElementById('tr4').style.boxShadow= 'none';
    document.getElementById('tr1').style.boxShadow= 'none';
  }

}
  else {
    // شجاي تسوي هنا امشي اطلع بره ؟؟؟//
}



  
