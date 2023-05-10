/*
Quando o documento estiver "pronto", ele executa a função.
$(document).ready(function(){
    alert('Olá mundo!')
});

Executa a função imediatamente.
$(function(){
    alert('Olá mundo!');
});

Quando a janela terminar de carregar, ele executa o código.
$(window).on('load', function(){
    alert('Olá mundo!)
});


$(function(){

    setTimeout(function(){
        $('#teste.artigo1').css('background-color', 'pink').css('text-align', 'center');
    }, 2000);

});



$(function(){
    
    function validarCliqueHover(){
        $('.artigo1').click(function(){
            $('.artigo2').css('background-color', 'green').css('color', 'white').css('text-align', 'center');
        });

        $('.artigo1').hover(function(){
            $('.artigo2').css('background-color', 'red').css('color', 'white').css('text-align', 'center');
        },function(){
            $('.artigo2').css('background-color', 'black');
        });
    }

    validarCliqueHover();

    function validarFormulario(){
        $('select').change(function(){
            console.log("Meu select foi alterado");
        })
    }

    validarFormulario();
});

*/

$(function(){
    /*
     var el = $('.box');
     var meutexto = 'Olá Mundo!';

     el.html('<div class="teste">'+meutexto+'</div>');
     el.html(el.html()+'<h1 class="texto1">Meu texto via JavaScript!</h1>');

    $('.box2').text('<div></div>');
    $('.box2').text($('.box2').text() + "Olá Mundo!");

    $('input[type=text]').val('Olá Mundo!');
    $('textarea').text('Olá mundo!');
    

    $('input[type=button]').click(function(){
        var str = $('input[type=text]').val();
        //split separa nossa string com base no delimitador.
        //var var2 = v.split("@");
        //console.log(var2);

        //substr recorta a nossa string.
        //console.log(str.substr(1,4));
        var splitstr = str.split("@");
        if(splitstr[1] == 'hotmail.com'){
            $('input[type=text]').css('opacity', '0');
        }else{
            console.log("A condição não bateu");
        }
    });
    */

    //função append() para adicionar conteúdo/elementos no final do elemento que selecionamos.
    //$('.box div').append('<h3>Meu elemento adicionado dinamicamente.</h3>')

    //var el = $('<h3>Meu novo conteúdo</h3>').appendTo('.box');
    //el.css('color', 'red');

    //$('.box').prepend('<h3>Meu novo conteúdo</h3>');

    //var el = $('<h3>Meu novo conteúdo</h3>').prependTo($('.box')).css('color', 'red');

    //var t = '<p>Meu conteúdo após a div box</p>';
    //$('.box').after(t);

    //$('.box').before(t);

    //$(t).insertAfter($('.box')).css('color', 'green');
    //$(t).insertBefore($('.box')).css('color', 'red');

    setTimeout(function(){
        $('.box').eq(1).remove();
    },3000);
    
});