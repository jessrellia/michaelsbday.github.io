$(document).ready(function(){
    $('p').hide();
    var flag = 1;
    $("div[class^='content-item").mouseover(function(){
        $(this).find("[id^='detail-']").stop().fadeIn();
        $(this).css(
            "box-shadow" , "5px 5px 5px #888"
        );
    }).mouseout(function(){
        $(this).find("[id^='detail-']").stop().fadeOut()
        $(this).stop().css(
            "box-shadow" , "0px 0px 0px #888"
        );
    })
    $("div[class^='content-item").mouseover(function(){
        $(this).find("[id^='detail-']").stop().fadeIn()
    }).mouseout(function(){
        $(this).find("img[id^='img-]").stop().fadeIn()
        $(this).find("[id^='detail-']").stop().fadeOut()
    })

    // Spesifikasikan per div!!
    $("div[class^='content-item").click(function(){
        var url = "http://www.example.com";
        window.open(url, '_blank');
    })

    // $('.close').click(function(){
    //     $('.modal').stop().fadeOut()
    //     return false;
    // })

    // $(".icon").click(function (){
    //     console.log("clicked");
    //     $(".toggler").toggleClass('responsive');

    // })

})