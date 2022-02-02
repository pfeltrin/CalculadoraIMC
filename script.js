
const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !==''){ //validação do preenchimento
       
        const valorIMC = (peso / (altura * altura)).toFixed(1); //cálculo IMC

        let classificacao = '';      
        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25){
            classificacao = 'com peso ideal, parabéns!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao ='com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II.';
        }else{
            classificacao = 'com obesidade grau III. CUIDADO!!'
        }
        
        resultado.textContent = `Olá ${nome} seu IMC é ${valorIMC} você está ${classificacao}`;

    }else{
        resultado.textContent = 'Preencha todos os dados!!';
    }
}

calcular.addEventListener('click',imc);
