
var jqtImages = [
'/script/jqtouch-1.0-beta-2-r109/themes/apple/img/backButton.png',
'/script/jqtouch-1.0-beta-2-r109/themes/apple/img/blueButton.png',
'/script/jqtouch-1.0-beta-2-r109/themes/apple/img/cancel.png',
'/script/jqtouch-1.0-beta-2-r109/themes/apple/img/chevron.png',
'/script/jqtouch-1.0-beta-2-r109/themes/apple/img/grayButton.png',
'/script/jqtouch-1.0-beta-2-r109/themes/apple/img/listArrowSel.png',
'/script/jqtouch-1.0-beta-2-r109/themes/apple/img/listGroup.png',
'/script/jqtouch-1.0-beta-2-r109/themes/apple/img/loading.gif',
'/script/jqtouch-1.0-beta-2-r109/themes/apple/img/on_off.png',
'/script/jqtouch-1.0-beta-2-r109/themes/apple/img/pinstripes.png',
'/script/jqtouch-1.0-beta-2-r109/themes/apple/img/selection.png',
'/script/jqtouch-1.0-beta-2-r109/themes/apple/img/thumb.png',
'/script/jqtouch-1.0-beta-2-r109/themes/apple/img/toggle.png',
'/script/jqtouch-1.0-beta-2-r109/themes/apple/img/toggleOn.png',
'/script/jqtouch-1.0-beta-2-r109/themes/apple/img/toolButton.png',
'/script/jqtouch-1.0-beta-2-r109/themes/apple/img/toolbar.png',
'/script/jqtouch-1.0-beta-2-r109/themes/apple/img/whiteButton.png'
  ];



var jQT = new $.jQTouch({
  icon: "/images/mobile/apple-touch-icon.png",
  //addGlossToIcon: false,
  startupScreen:"/images/mobile/apple-touch-startup.png",
  statusBar:'black-translucent',
  formSelector:'.form',
  preloadImages: jqtImages
});

jQuery(function() {
  // Add custom handler code here.


});


function mobile_presentationPage() {

    var addUrl = '/m/mobile/ajax/add_to_itinerary.action?id=' + presentationId;
    var removeUrl = '/m/mobile/ajax/remove_from_itinerary.action?id=' + presentationId;


    $('a.addtoitinerary').click(function(e) {
       e.preventDefault();
       e.stopPropagation();


       $.post(addUrl,function(x) {

            //alert('add complete');

            jQT.goBack();
            mobile_markSelectedSessions();
       });

       return false;
    });

    $('a.removefromitinerary').click(function(e) {
       e.preventDefault();
       e.stopPropagation();
       $.post(removeUrl,function(x) {

            //alert('remove complete');

            jQT.goBack();

            mobile_markSelectedSessions();
       });

       return false;
    });

    $('form.eval').submit(function(e) {

        e.preventDefault();

        var params = $(this).serialize();
        var evalUrl = '/m/mobile/ajax/eval_submit.action';

        $.post(evalUrl,params, function(data) {

            jQT.goBack();
            return false;
        });


        return false;
    });


    $('form.eval a.submit').click(function(e) {

        e.preventDefault();
        e.stopPropagation();

        $('form.eval').submit();

    });

}

function mobile_showPage() {

    mobile_markSelectedSessions();

     mobile_buildItinerary();
    
}

function mobile_markSelectedSessions() {

     $('li.presentation div.marker.selected').removeClass('selected');

    var url = '/m/mobile/ajax/user_itinerary.json?showId=' + showId;

    $.getJSON(url, function(data) {

         $.each(data, function(i,item){
            $('#' + item.id + ' div.marker').addClass('selected');
          });
    });

}



function mobile_buildItinerary() {

     $('div.itineraryDiv').bind('pageAnimationEnd', function(event, info){

            var ul = $('div.itineraryDiv ul');
            ul.empty();

            var url = '/m/mobile/ajax/user_itinerary.json?showId=' + showId;

            $.getJSON(url, function(data) {

                $.each(data,function(i,item) {

                    ul.append("<li class='arrow presentation'>" +
                               "<a href='ajax/presentation?id=" + item.id + "&itinerary=true'>" +
                                "<span class='title'>" + item.title + '</span> <br/>' +
                                "<span class='speaker'>" + item.speakerNames + '</span>' +
                                "<span class='time'>" + item.startTimeString + "</span>" +
                                "</a></li>");
                });

                if(data.length == 0) {
                    ul.append("<li class='empty'>You have not yet selected any sessions</li>");                     
                }


            });

     });
}



