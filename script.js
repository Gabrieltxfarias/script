var tela;
var operador;
var num1;
var num2;

function apertarBotaoNumerico(numero){
    this.tela = document.getElementById('tela');
    
    if (operador){

        if (num1){
            this.tela.value = this.tela.value + numero; 
        } else {
            this.num1 = tela.value;
            tela.value = '';
            this.tela.value = numero;
        }

    } else {
        this.tela.value = this.tela.value + numero;
    }

}

function apertarOperador(operadorSelecionado){
    this.operador = operadorSelecionado;
}

function calcularResultado(){
    this.tela = document.getElementById('tela');
    num2 = tela.value;

    this.tela.value = '';

    if (this.operador == '+'){
        this.tela.value = parseInt(num1) + parseInt(num2);
    }

    if (this.operador == '-'){
        this.tela.value = parseInt(num1) - parseInt(num2);
    }

    if (this.operador == 'x'){
        this.tela.value = parseInt(num1) * parseInt(num2);
    }

    if (this.operador == '/'){
        this.tela.value = parseInt(num1) / parseInt(num2);
    }
}

function limpartela(){
    this.tela = document.getElementById('tela');
    tela.value = ' '
    num1 = null;
    num2 = null;
    operador = null;
}
