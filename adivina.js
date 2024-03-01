let numMaquina =[Math.floor(Math.random() * 10)];
console.log(numMaquina)
    let i = 3
    while(i!=0){
        
        numUsuario = parseInt(prompt("Ingresa  un numero de  1  al 10"));
            if (numUsuario == numMaquina){
                alert("!!!Ganaste!!!");
                i=0
            }else{
                i=i-1
                alert("Sigue intentando"+ "\n te quedan" + i + " intentos ");
                if (i==0){
                    alert("Perdiste :(")
                    }
                    }
                }