$( document ).ready(function() {
  // console.log( "developed by Can4glia" );

  var checkBox = $('#ms_menu-btn');

  $('#ms_toggle').click(function() {

    if ( $(this).siblings(checkBox).prop('checked') == false ) {

      $(this).siblings(checkBox).prop('checked', true);
      
    } else {

      $(this).siblings(checkBox).prop('checked', false);
    }

  });

});