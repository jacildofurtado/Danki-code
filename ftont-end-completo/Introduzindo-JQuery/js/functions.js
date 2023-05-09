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
    
     


});