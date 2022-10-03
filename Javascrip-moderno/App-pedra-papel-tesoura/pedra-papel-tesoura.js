var elementos =  document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var inimigoOpt = "";

function validarVitoria(){

    let vencedor = document.querySelector('.vencedor');

    if(playerOpt == "Papel"){

        if(inimigoOpt == "Papel"){
            //empate
            vencedor.innerHTML = "Empate"
        }else if(inimigoOpt == "Tesoura"){
            //inimigo ganhou
            vencedor.innerHTML = "Derrota"
        }else if(inimigoOpt == "Pedra"){
            //jodador ganhou
            vencedor.innerHTML = "Vitória"
        }
    }


    if(playerOpt == "Pedra"){

        if(inimigoOpt == "Pedra"){
            //empate
            vencedor.innerHTML = "Empate"
        }else if(inimigoOpt == "Papel"){
            //inimigo ganhou
            vencedor.innerHTML = "Derrota"
        }else if(inimigoOpt == "Tesoura"){
            //jodador ganhou
            vencedor.innerHTML = "Vitória"
        }
    }

    if(playerOpt == "Tesoura"){

        if(inimigoOpt == "Tesoura"){
            //empate
            vencedor.innerHTML = "Empate"
        }else if(inimigoOpt == "Pedra"){
            //inimigo ganhou
            vencedor.innerHTML = "Derrota"
        }else if(inimigoOpt == "Papel"){
            //jodador ganhou
            vencedor.innerHTML = "Vitória"
        }
    }
}

function resetInimigo(){
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    for(var i = 0; i < enemyOptions.length; i++){
        enemyOptions[i].childNodes[0].style.opacity = 0.3;
    }
}


function inimigoJogar(){
    let rand = Math.floor(Math.random()*3);
    
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    resetInimigo();

    for(var i = 0; i < enemyOptions.length; i++){
        if(i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('Opt')
        }
    }


    //alert(playerOpt);
    //alert(inimigoOpt);
        validarVitoria();
}


function resetOpacityPlayer(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    }
}

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click', function(t){
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('Opt');

        inimigoJogar();
    });
}

