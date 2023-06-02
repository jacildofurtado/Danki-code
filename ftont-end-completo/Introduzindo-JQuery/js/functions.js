$(function(){
    //funções de abrir e fechar formulário
    abrirJanela();
    verificarCliqueFechar();

    function  abrirJanela(){
        $('.btn').click(function(e){
            e.stopPropagation();
            $('.bg').fadeIn();
        });
    }

    function verificarCliqueFechar(){
        var el = $('body, .closeBtn');

        el.click(function(){
            $('.bg').fadeOut();
        });

        $('.form').click(function(e){
            e.stopPropagation();
        });
    }

    //Eventos do formulário
    $('input[type=text]').focus(function(){
        resetarCampoInvalido($(this));
    });

    $('form#form1').submit(function(e){
        e.preventDefault();
        var nome = $('input[name=nome]').val();
        var telefone = $('input[name=telefone]').val();
        var email = $('input[name=email]').val();
        
        if(verificarNome(nome) == false){
            aplicarCampoInvalido($('input[name=nome]'));
        }else{
            alert("Formulário enviado com sucesso!");
        }


        //Se chegou até o final é por que está tudo okay!
    });

    
    //funções para estilizar o campo do formulário

    function aplicarCampoInvalido(el){
        el.css('color', 'red')
        el.css('border', '2px solid red');
        //el.data('invalido', 'true');
        el.val('Campo Inválido');
    }

    function resetarCampoInvalido(el){
        el.css('color', '#ccc')
        el.css('border', '1px solid #ccc');
        //el.data('invalido', 'true');
        el.val('');
    }

    //funçòes para verificar os nossos campos
    function verificarNome(nome){
        //Contando a quantidade de espaços e os respectivos valores.
        if(nome == ''){
            return false;
        }
        var amount = nome.split(' ').length;
        var splitStr = nome.split(' ');
        if(amount >= 2){
            for(var i = 0; i < amount; i++){
                if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
        
                }else{
                     return false;
                }
            }
        }else{
            return false;
        }
    }
})