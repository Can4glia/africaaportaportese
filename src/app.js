$( document ).ready(function() {
  // console.log( "developed by Can4glia" );

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
});