$(function(){
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
})