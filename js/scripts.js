$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carousel-Button").click(function(){
      if ($("#carousel-Button").children("span").hasClass('fa-pause')) {
                 $("#mycarousel").carousel('pause');
                 $("#carousel-Button").children("span").removeClass('fa-pause');
                 $("#carousel-Button").children("span").addClass('fa-play');
             }
             else if ($("#carousel-Button").children("span").hasClass('fa-play')){
                 $("#mycarousel").carousel('cycle');
                 $("#carousel-Button").children("span").removeClass('fa-play');
                 $("#carousel-Button").children("span").addClass('fa-pause');
             }
    });

});

$(document).ready(function(){
$("#Modal").click(function(){
$("#reserveModal").modal('toggle');
});
});

$(document).ready(function(){
$("#Login").click(function(){
$("#loginModal").modal('toggle');
});
});
