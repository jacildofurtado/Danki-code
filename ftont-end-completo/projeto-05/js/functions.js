$(function(){

    /*
        sistema de pesquisa
    */
    var currentValue = 0;
    var isDrag = false;
    var maxPrice = 70000;
    var nowPrice = 0;

    $('.pointer-barra').mousedown(function(){
        isDrag = true;
    });

    $(document).mouseup(function(){
        isDrag = false;
        enableTextSelection();
    });

    $('.barra-preco').mousemove(function(e){
        if(isDrag){
            disableTextSelection();
            var elBase = $(this);
            var mouseX = e.pageX - elBase.offset().left;
            if(mouseX < 0)
                mouseX = 0;
            if(mouseX > elBase.width())
                mouseX = elBase.width();
            
            $('.pointer-barra').css('left',(mouseX-13)+'px')
            currentValue = (mouseX / elBase.width()) * 100;
            $('.barra-preco-fill').css('width',currentValue+'%');

            //TODO: ajustar o formato do preço!
            nowPrice = currentValue/100 * maxPrice;
            nowPrice = priceformat(nowPrice);
            $('.preco_pesquisa').html('R$'+nowPrice);
        }
    });

    function priceformat(nowPrice){
        nowPrice = nowPrice.toFixed(2);
        price_arr = nowPrice.split('.');

        var newPrice = tFormat(price_arr);

        return newPrice;
    }

    function tFormat(price_arr){
        if(price_arr[0] < 1000){
            return price_arr[0]+','+price_arr[1];
        }else if(price_arr[0] < 10000){
            return price_arr[0][0]+'.'+price_arr[0].substr(1,price_arr[0].length)+','+price_arr[1];
        }else{
            return price_arr[0][0]+price_arr[0][1]+'.'+price_arr[0].substr(2,price_arr[0].length)+','+price_arr[1];
        }
    }

    function disableTextSelection(){
        $('body').css('webkit-user-select', 'none');
        $('body').css('moz-user-select', 'none');
        $('body').css('-ms-user-select', 'none');
        $('body').css('-o-user-select', 'none');
        $('body').css('user-select', 'none');
    }

    function enableTextSelection(){
        $('body').css('webkit-user-select', 'auto');
        $('body').css('moz-user-select', 'auto');
        $('body').css('-ms-user-select', 'auto');
        $('body').css('-o-user-select', 'auto');
        $('body').css('user-select', 'auto');
    }

    /*
      sistema de slide da paggina individual de cada carro
    */

    var imgShow = 3;
    var maxIndex = Math.ceil($('.mini-img-wraper').length/3) - 1;
    var curIndex = 0;

    initSlider();
    navigateSlider();
    clickSlider();
    function initSlider(){
        var amt = $('.mini-img-wraper').length * 33.3;
        var elScroll = $('.nav-galeria-wraper');
        var elSingle = $('.mini-img-wraper');
        elScroll.css('width', amt+'%');
        elSingle.css('width', 33.3*(100/amt)+'%');
    }

    function navigateSlider(){
        $('.arrow-right-nav').click(function(){
            if(curIndex < maxIndex){
                curIndex++;
                var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
                $('.nav-galeria').animate({'scrollLeft':elOff+'px'});
            }else{
                //console.log('Chegamos até o final')
            }
        });

        $('.arrow-left-nav').click(function(){
            if(curIndex > 0){
                curIndex--;
                var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
                $('.nav-galeria').animate({'scrollLeft':elOff+'px'});
            }else{
                //console.log('Chegamos até o final')
            }
        });
    }

    function clickSlider(){
        $('.mini-img-wraper').click(function(){
            $('.mini-img-wraper').css('background-color', 'transparent');
            $(this).css('background-color','rgb(210,210,210');
            var img = $(this).children().css('background-image');
            $('.foto-destaque').css('background-image',img);
        });

        $('.mini-img-wraper').eq(0).click();
    }


    /*
    Clicar e ir para div de contato com base no atributo goto
    */

    $('[goto=contato]').click(function(){
        $('nav a').css('color','black');
        $(this).css('color','#EB2D2D');
        $('html,body').animate({'scrollTop':$('#contato').offset().top});
        return false;
    })
})