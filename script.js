const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let teste = document.getElementById("")

let primeiraSenha = document.getElementById("caixa1") //a senha deve ter 15 digitos!
let segundaSenha = document.getElementById("caixa2") //a senha deve ter 15 digitos!

let quantCarac = document.getElementById("quantSenha")


function gerarSenha(){
    primeiraSenha.textContent = ""
    segundaSenha.textContent = ""
    
        if (quantCarac.value <= 25){
            for( let c = 0; c < quantCarac.value; c++){
                let randomNUM = Math.floor(Math.random() * characters.length)
                let randomCharacter = characters[randomNUM]
                primeiraSenha.textContent += randomCharacter
            }
            
            for( let c = 0; c < quantCarac.value; c++){
                let randomNUM = Math.floor(Math.random() * characters.length)
                let randomCharacter = characters[randomNUM]
                segundaSenha.textContent += randomCharacter
            }
        }else{
            alert("Quantidade de caracteres ultrapassa o limite! Por favor, escolha uma senha entre 1 e 25!")
        }
    }

    

function copiarTexto1(){
     // Cria um elemento <textarea> temporário
     var tempInput1 = document.createElement("textarea");
     tempInput1.value = document.getElementById("caixa1").textContent;
     
     // Adiciona o <textarea> ao corpo do documento
     document.body.appendChild(tempInput1);
 
     // Seleciona o texto no <textarea>
     tempInput1.select();
     tempInput1.setSelectionRange(0, 99999); // Para dispositivos móveis
 
     // Copia o texto para o clipboard
     navigator.clipboard.writeText(tempInput1.value)
 
     // Remove o <textarea> temporário do documento
     document.body.removeChild(tempInput1);
}

function copiarTexto2(){
    // Cria um elemento <textarea> temporário
    var tempInput2 = document.createElement("textarea");
    tempInput2.value = document.getElementById("caixa2").textContent;
    
    // Adiciona o <textarea> ao corpo do documento
    document.body.appendChild(tempInput2);

    // Seleciona o texto no <textarea>
    tempInput2.select();
    tempInput2.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o texto para o clipboard
    navigator.clipboard.writeText(tempInput2.value)

    // Remove o <textarea> temporário do documento
    document.body.removeChild(tempInput2);
}




