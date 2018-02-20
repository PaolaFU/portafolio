

/*$(document).ready(function() {*/
  /* prepend menu icon */
  /*$('#nav').prepend('<div id="menu-icon"></div>');*/

  /* toggle nav */
  /*$('#menu-icon, #slidenav li').on('click', function() {
    $('#slidenav').slideToggle();
    $(this).toggleClass('active');
  });
});*/
$(function () { 
  $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});  

// $( window ).scroll(function() {   
 // if($( window ).scrollTop() > 10){  // scroll down abit and get the action   
  $(".progress-bar").each(function(){
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
  });
       
 //  }  
// });

