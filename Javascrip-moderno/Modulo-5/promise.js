function testes(){
    return new Promise((resolve, reject) => {
        setTimeout (function(){
            const erro = false;
            if(erro){
                reject('Erro...');
            }else{
                resolve('A promise foi resolvida com sucesso');
            }
        },2000)
        


    })
}

async function testes2(){
    await testes().then(function(res){
        alert(res);
    });
    alert('Olá');
}

testes2();