;(function ($, window, undefined){
  $.fn.nkdAccordion = function(options){

    var defaults = {
      closeAll: false
    }

    var settings = $.extend({}, defaults, options);

    // Set clicked link sublevel state (open/closed)
    function setSubLevelState(element,state){
      element
        .parent('.js-nkd-item')
        .attr('data-state', state);
    }

    function onLinkClick(){
      // Get current nav level of clicked link
      var getLinkNavLevel = $(this)
        .closest('.js-nkd-level')
        .attr('data-level');

      // Get clicked link sublevel state (open/closed)
      var getSubLevelState = $(this)
        .parent('.js-nkd-item')
        .attr('data-state');

      // Close children sublevels
      function closeChildren(){
        $(this)
          .parent('.js-nkd-item')
          .find('[data-state="open"]')
          .each(function(){
            $(this)
              .attr('data-state', 'closed');
          });
          console.log('closeChildren');
      }

      if (getSubLevelState == 'closed'){
        setSubLevelState($(this),'open');

        if ((getLinkNavLevel == 0) && (settings.closeAll == true)){
          $(this)
            .parent('.js-nkd-item')
            .siblings('[data-state="open"]')
            .attr('data-state', 'closed');

            closeChildren();
            console.log('toto');
        }

      }

      else if (getSubLevelState == 'open'){
        setSubLevelState($(this),'closed');

        if (settings.closeAll == true){
          closeChildren();
        }
        else if (settings.closeAll == false){

        }
      }
    }

    $('.js-nkd-link').on('click', onLinkClick);

  };
}(jQuery, window));
