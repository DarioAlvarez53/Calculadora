let totalAcumulado = 0;
let iniciador = '0';
let operadorPrevio;

const pantalla = document.querySelector('.pantalla');

function clickBoton(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else {
        handleNumber(value);
    }
    pantalla.innerText = iniciador;
}

function handleSymbol(symbol) {
    switch(symbol){
        case 'AC':
            iniciador = '0';
            break;
        case '=':
            if(operadorPrevio === null){
                return
            }
            operacionFlush(parseInt(iniciador));
            operadorPrevio = null;
            iniciador = totalAcumulado;
            totalAcumulado = 0;
            break;
        case '⇚':
            if(iniciador.length === 1){
                iniciador = '0';
            }else {
                inicador = inicador.substring(0, iniciador.length - 1);
            }
            break
        case '+':
        case '-':
        case '*':
        case '/':
            handleMatch(symbol);
            break;
        
    }
}
function handleMatch(symbol){
    if(iniciador === '0'){
        return;
    }
    const iniciadorEnt = parseInt(iniciador);
    if(totalAcumulado === 0){
        totalAcumulado = iniciadorEnt;
    }else {
        operacionFlush(iniciadorEnt);
    }
    operadorPrevio = symbol;
    iniciador = '0';
}
function operacionFlush(iniciadorEnt){
    if(operadorPrevio === '+'){
        totalAcumulado += iniciadorEnt;
    }else if(operadorPrevio === '-'){
        totalAcumulado -= iniciadorEnt;
    }else if(operadorPrevio === '*'){
        totalAcumulado *= iniciadorEnt;
    }else if(operadorPrevio === '/'){
        totalAcumulado /= iniciadorEnt;
    }
}
function handleNumber(numeroString){
    if(iniciador === '0'){
        iniciador = numeroString;
    }else {
        iniciador += numeroString;
    }
}
function init(){
    document.querySelector('.botones-calculadora').addEventListener('click', function(event){
        clickBoton(event.target.innerText);
    });
}
init();