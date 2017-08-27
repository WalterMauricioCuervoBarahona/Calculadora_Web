

function setValue(numberOfButton) {
  var number = numberOfButton;
 $('#texto').val($('#texto').val()+number); 
}

function root() {
    var txt = document.getElementById("texto").value;
    if(txt > 0){
    var number = Math.sqrt(txt);
    $('#texto').val(number);
    }else {
$('#texto').val("funcion invalida");
}

}

function C(){
    document.getElementById("texto").value = '';
    num = 0;
}

function deleteCharacter(){
    var value = document.getElementById("texto").value;
    var txt = value.slice(0, value.length -1);
    $('#texto').val(txt);
}

function moreLess(){
    var txt = document.getElementById("texto").value;
    $('#texto').val(-1 * txt);
}

function pow(number){
    var txt = document.getElementById("texto").value;
    //Math.pow(txt, number);
    $('#texto').val(Math.pow(txt, number));
}

function oneX(){
    var txt = parseFloat(document.getElementById("texto").value);
    $('#texto').val(1/txt);
}


var total=0;
var num = 0;
var aux = '';
var axu2 = 0;
function calculate(operation){
    num = parseFloat(document.getElementById("texto").value);    
       switch (operation){
          case '+':
              total += num;
             document.getElementById("texto").value = '';
                aux = '+';
             break;
         case '*':
             total = 1;
             total *= num;
             document.getElementById("texto").value = '';
             aux = '*';
            break;
        case '/':
            aux2 = num;
             document.getElementById("texto").value = '';
             aux = '/';
            break;
        case '-':
             aux2 = num - total;
             document.getElementById("texto").value = '';
             aux = '-';
            break;
        case '%':
            aux2 = num;
             document.getElementById("texto").value = '';
             aux = '%';
        break;
        case '=':
            if(aux === '+'){
               total += num;
            }else if (aux ==='*') {
               total *= num;
            }else if (aux === '-') {
                total = aux2 - num;
            }else if (aux === '/') {
                total = aux2 /num;
            }else if (aux==='%') {
                total = aux2 % num;
            }

            $('#texto').val(total);   
            total = 0;
        break;
        default :
    }     
}
