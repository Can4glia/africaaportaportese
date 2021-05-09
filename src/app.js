$( document ).ready(function() {

  // burger menu
  var checkBox = $('#ms_menu-btn');
  checkBox.prop('checked', false);

  $('#ms_toggle').click(function() {

    if ( $(this).siblings(checkBox).prop('checked') == false ) {

      $(this).siblings(checkBox).prop('checked', true);
      
    } else {

      $(this).siblings(checkBox).prop('checked', false);
    }
  });

  // smooth scroll via anchor, a native function ES2018
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {    
    anchor.addEventListener('click', function (e) {        
      e.preventDefault();
      // go (smooth)
      document.querySelector(this.getAttribute('href')).scrollIntoView({            
        behavior: 'smooth'        
      });
      // and close sidebar   
      $(this).parents('#ms_nav').siblings(checkBox).prop('checked', false);
    });
  });

  // $(window).scroll(function() {
  //   if ($(this).scrollTop() > 20) {
  //     $('#toTopBtn').fadeIn( "slow", function() {
  //       $(this).show();
  //     });
  //   } else {
  //     $('#toTopBtn').fadeOut( "slow", function() {
  //       $(this).show();
  //     });
  //   }
  // });

  // // remove fragment as much as it can go without adding an entry in browser history:
  // window.location.replace("#");

  // // slice off the remaining '#' in HTML5:    
  // if (typeof window.history.replaceState == 'function') {
  //   history.replaceState({}, '', window.location.href.slice(0, -1));
  // }

  // console.log(window.location.href);
});