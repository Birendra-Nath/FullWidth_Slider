$(document).ready(function(){
    var selImg =$('.imgCont div')
    var imgWidth =selImg.width();
    selImg.each(function(index) {
        $(this).css({
            "left": (imgWidth*index) + "px"
        });        
    });

    // function myFunction() {
    //     setInterval(function(){
    //         if($(".imgCont div:last").css("left")=="0px") {
    //             return false;
    //         } else {
    //             selImg.each(function(index) {
    //                 var left =parseInt($(this).css("left").split("px")[0]);
    //                 $(this).animate({
    //                     "left": (left- (imgWidth*1))+"px"
    //                 }, 1000);
    //             });
    //         }
    //     }, 3000);
    // }


    $("#next").on("click", function() {

        if($(".imgCont div:last").css("left")=="0px") {
            return false;
        } else {
            selImg.each(function(index) {
                var left =parseInt($(this).css("left").split("px")[0]);
                $(this).animate({
                    "left": (left- (imgWidth*1))+"px"
                }, 1000);
            });
        }
    });

    $("#prev").on("click", function() {

        if($(".imgCont div:first").css("left")=="0px")  {
            return false;
        } else {
            selImg.each(function(index) {
                var left =parseInt($(this).css("left").split("px")[0]);
                $(this).animate({
                    "left": (left + (imgWidth*1))+"px"
                }, 300);
            });
        }
    }); 
});