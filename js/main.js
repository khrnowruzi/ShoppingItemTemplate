$(function () {
    var firstListOfContent = $('#firstListOfContent');
    var countFirstListOfContent = $('#firstListOfContent > li').length * 20;
    var tempCountFirstListOfContent = 0;
    var clockFirstListOfContent;

    beginfirstListOfContent();

    $('#firstListOfContent > li').hover(function () {
        clearInterval(clockFirstListOfContent);
    }, function () {
        beginfirstListOfContent();
    });

    function beginfirstListOfContent() {
        clockFirstListOfContent = setInterval(function () {
            tempCountFirstListOfContent += 20;
            if (tempCountFirstListOfContent == countFirstListOfContent)
                tempCountFirstListOfContent = 0;
            firstListOfContent.animate({ top: -tempCountFirstListOfContent }, 1000);
        }, 3000);
    };

    $("[data-toggle='tooltip']").tooltip({ animate: true });


    //--------------------------------------------------------SimilarImage-----------------------------------------------------------
    var counter = 1;
    var clock = 0;
    var numberBoxImg = 4;
    var marginLi = 10;
    //var widthImg = $('#box > ul:eq(0) > li:eq(0) > a > img').width();
    //var heighImg = $('#box > ul:eq(0) > li:eq(0) > a > img').height();
    var widthImg = 150;
    var heighImg = 150;
    var countImg = $('#box > ul:eq(0) > li').length;
    var newWidthImg = 0;
    var newHeighImg = 0;
    //alert((widthImg + 2 * marginLi) * countImg);
    //alert(widthImg);
    $('#box > ul > li > a').hover(function () { clearInterval(clock); }, function () { beginInterval(); });
    setBox();

    $(window).resize(function () {
        setBox();
    });

    //alert($(window).width());
    //alert($('#similarProduct').width());
    //alert($('#similarProduct > div.imgDiv > ul > li ').width());

    function setBox() {
        if ($('#similarProduct').width() >= 800)//823
        {
            numberBoxImg = 4;
            counter = 1;
            $('#box > ul:eq(0)').stop(true, true).animate({ left: 0 }, 1000);
            newWidthImg = widthImg;
            newHeighImg = heighImg;
            $('#box > ul > li > a > div.hideBg > h6 ').css({
                margin: '50px auto 15px auto'
            });
            $('#box > ul:eq(0) > li > a > img').width(newWidthImg);
            $('#box > ul:eq(0) > li > a > img').height(newHeighImg);
            $('#box').width((newWidthImg + 2 * marginLi) * numberBoxImg).height(newHeighImg).children('ul:eq(0)').width((newWidthImg + 2 * marginLi) * countImg);
        }
        else if ($('#similarProduct').width() >= 650 && $('#similarProduct').width() < 800 && $(window).width() > 900)//673
        {
            numberBoxImg = 4;
            counter = 1;
            $('#box > ul:eq(0)').stop(true, true).animate({ left: 0 }, 1000);
            newWidthImg = widthImg - 20;
            newHeighImg = heighImg - 20;
            $('#box > ul > li > a > div.hideBg > h6 ').css({
                margin: '30px auto 10px auto'
            });
            $('#box > ul:eq(0) > li > a > img').width(newWidthImg);
            $('#box > ul:eq(0) > li > a > img').height(newHeighImg);
            $('#box').width((newWidthImg + 2 * marginLi) * numberBoxImg).height(newHeighImg).children('ul:eq(0)').width((newWidthImg + 2 * marginLi) * countImg);
        }
        else if ($('#similarProduct').width() >= 500 && $('#similarProduct').width() < 650 && $(window).width() >= 750)//508
        {
            numberBoxImg = 4;
            counter = 1;
            $('#box > ul:eq(0)').stop(true, true).animate({ left: 0 }, 1000);
            newWidthImg = widthImg - 50;
            newHeighImg = heighImg - 50;
            $('#box > ul > li > a > div.hideBg > h6 ').css({
                margin: '10px auto 5px auto'
            });
            $('#box > ul:eq(0) > li > a > img').width(newWidthImg);
            $('#box > ul:eq(0) > li > a > img').height(newHeighImg);
            $('#box').width((newWidthImg + 2 * marginLi) * numberBoxImg).height(newHeighImg).children('ul:eq(0)').width((newWidthImg + 2 * marginLi) * countImg);
        }
        else if ($('#similarProduct').width() > 600 && $('#similarProduct').width() < 660)//---
        {
            numberBoxImg = 4;
            counter = 1;
            $('#box > ul:eq(0)').stop(true, true).animate({ left: 0 }, 1000);
            newWidthImg = widthImg - 25;
            newHeighImg = heighImg - 25;
            $('#box > ul > li > a > div.hideBg > h6 ').css({
                margin: '30px auto 10px auto'
            });
            $('#box > ul:eq(0) > li > a > img').width(newWidthImg);
            $('#box > ul:eq(0) > li > a > img').height(newHeighImg);
            $('#box').width((newWidthImg + 2 * marginLi) * numberBoxImg).height(newHeighImg).children('ul:eq(0)').width((newWidthImg + 2 * marginLi) * countImg);
        }
        else if ($('#similarProduct').width() > 540 && $('#similarProduct').width() < 600) {
            numberBoxImg = 4;
            counter = 1;
            $('#box > ul:eq(0)').stop(true, true).animate({ left: 0 }, 1000);
            newWidthImg = widthImg - 35;
            newHeighImg = heighImg - 35;
            $('#box > ul > li > a > div.hideBg > h6 ').css({
                margin: '20px auto 5px auto'
            });
            $('#box > ul:eq(0) > li > a > img').width(newWidthImg);
            $('#box > ul:eq(0) > li > a > img').height(newHeighImg);
            $('#box').width((newWidthImg + 2 * marginLi) * numberBoxImg).height(newHeighImg).children('ul:eq(0)').width((newWidthImg + 2 * marginLi) * countImg);
        }
        else if ($('#similarProduct').width() >= 422 && $('#similarProduct').width() <= 540) {
            counter = 1;
            numberBoxImg = 3;
            $('#box > ul:eq(0)').stop(true, true).animate({ left: 0 }, 1000);
            newWidthImg = widthImg - 30;
            newHeighImg = heighImg - 30;
            $('#box > ul > li > a > div.hideBg > h6 ').css({
                margin: '30px auto 10px auto'
            });
            $('#box > ul:eq(0) > li > a > img').width(newWidthImg);
            $('#box > ul:eq(0) > li > a > img').height(newHeighImg);
            $('#box').width((newWidthImg + 2 * marginLi) * numberBoxImg).height(newHeighImg).children('ul:eq(0)').width((newWidthImg + 2 * marginLi) * countImg);
        }
        else if ($('#similarProduct').width() >= 300 && $('#similarProduct').width() < 422) {
            counter = 1;
            numberBoxImg = 2;
            $('#box > ul:eq(0)').stop(true, true).animate({ left: 0 }, 1000);
            newWidthImg = widthImg - 20;
            newHeighImg = heighImg - 20;
            $('#box > ul > li > a > div.hideBg > h6 ').css({
                margin: '40px auto 10px auto'
            });
            $('#box > ul:eq(0) > li > a > img').width(newWidthImg);
            $('#box > ul:eq(0) > li > a > img').height(newHeighImg);
            $('#box').width((newWidthImg + 2 * marginLi) * numberBoxImg).height(newHeighImg).children('ul:eq(0)').width((newWidthImg + 2 * marginLi) * countImg);
        }
        else if ($('#similarProduct').width() >= 200 && $('#similarProduct').width() < 300) {
            counter = 1;
            numberBoxImg = 1;
            $('#box > ul:eq(0)').stop(true, true).animate({ left: 0 }, 1000);
            newWidthImg = widthImg;
            newHeighImg = heighImg;
            $('#box > ul > li > a > div.hideBg > h6 ').css({
                margin: '50px auto 10px auto'
            });
            $('#box > ul:eq(0) > li > a > img').width(newWidthImg);
            $('#box > ul:eq(0) > li > a > img').height(newHeighImg);
            $('#box').width((newWidthImg + 2 * marginLi) * numberBoxImg).height(newHeighImg).children('ul:eq(0)').width((newWidthImg + 2 * marginLi) * countImg);
        }
        else if ($('#similarProduct').width() < 200) {
            counter = 1;
            numberBoxImg = 1;
            $('#box > ul:eq(0)').stop(true, true).animate({ left: 0 }, 1000);
            newWidthImg = widthImg - 30;
            newHeighImg = heighImg - 30;
            $('#box > ul > li > a > div.hideBg > h6 ').css({
                margin: '30px auto 10px auto'
            });
            $('#box > ul:eq(0) > li > a > img').width(newWidthImg);
            $('#box > ul:eq(0) > li > a > img').height(newHeighImg);
            $('#box').width((newWidthImg + 2 * marginLi) * numberBoxImg).height(newHeighImg).children('ul:eq(0)').width((newWidthImg + 2 * marginLi) * countImg);
        }
    }
    //-----------------------------------------------------------------------------------------------
    function beginInterval() {
        clock = setInterval(function () {
            if (counter <= (countImg - numberBoxImg)) {
                counter++;
                $('#box > ul:eq(0)').stop(true, true).animate({ left: '-=' + (newWidthImg + (2 * marginLi)) }, 1000);
            }
            else {
                counter = 1;
                $('#box > ul:eq(0)').stop(true, true).animate({ left: 0 }, 1000);
            }
        }, 2000);
    }
    beginInterval();
    //-----------------------------------------------------------------------------------------------
    $('#similarProduct > div.headerInfo > span.sp_next').click(function () {
        clearInterval(clock);
        if (counter <= (countImg - numberBoxImg)) {
            counter++;
            $('#box > ul:eq(0)').stop(true, true).animate({ left: '-=' + (newWidthImg + (2 * marginLi)) }, 1000);
        }
        else {
            counter = 1;
            $('#box > ul:eq(0)').stop(true, true).animate({ left: 0 }, 1000);
        }
        beginInterval();
    });
    //-----------------------------------------------------------------------------------------------
    $('#similarProduct > div.headerInfo > span.sp_prev').click(function () {
        clearInterval(clock);
        if (counter > 1) {
            counter--;
            $('#box > ul:eq(0)').stop(true, true).animate({ left: '+=' + (newWidthImg + (2 * marginLi)) }, 1000);
        }
        else {
            counter = (countImg - numberBoxImg + 1);
            $('#box > ul:eq(0)').stop(true, true).animate({ left: ((newWidthImg + (2 * marginLi)) * (countImg - numberBoxImg)) * -1 }, 1000);
        }
        beginInterval();
    });
});