function operaciones(operador){
    /********DECLARACIÓN DE VARIABLES******/
    //Variable para almacenar resultado
    let result
    //Traer numero 1
    let  n1=parseInt(document.getElementById('n1').value)
    //Traer numero 2
    let  n2=parseInt(document.getElementById('n2').value)
    if(isNaN(n1) ||isNaN(n2) ){
        alert('No es posible realizar la operación intenta de nuevo, ingresando ambos números')
    }else{
         switch(operador){
            //Función suma
            case"suma":
            result= n1+n2;
            print()
            break;
            //Función resta
            case"resta":
            result= n1-n2;
            print()
            break;
            //Función multiplicación
            case"multiplicacion":
            result= n1*n2;
            print()
            break;
            //Función división  
            case"division":
            result= n1/n2;
            print()
            break;
            //Error             
            default:
            alert('No es posible realizar la operación intenta de nuevo')
            console.log('error')
            break;
        }
            function print(){
                result_onscreen=document.getElementById('resultado')
                result_onscreen.innerText = result
                document.getElementById('n1').value="";
                document.getElementById('n2').value="";
            }
    }
    }
