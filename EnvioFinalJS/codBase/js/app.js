var display = document.getElementById("display");


    var numero0 = document.getElementById("0");

        numero0.addEventListener("mouseover",function(){
            numero0.setAttribute("style","transform:scale(0.85,0.85) ");
        })
        numero0.addEventListener("mouseout",function(){
            numero0.setAttribute("style","transform:scale(1,1)")
        });
        

    var numero1 = document.getElementById("1");

    numero1.addEventListener("mouseover",function(){
        numero1.setAttribute("style","transform:scale(0.85,0.85) ");
    });
    numero1.addEventListener("mouseout",function(){
        numero1.setAttribute("style","transform:scale(1,1)")
    });
    

    var numero2 = document.getElementById("2");

    numero2.addEventListener("mouseover",function(){
        numero2.setAttribute("style","transform:scale(0.85,0.85) ");
    });
    numero2.addEventListener("mouseout",function(){
        numero2.setAttribute("style","transform:scale(1,1)")
    });
    
    var numero3 = document.getElementById("3");
    numero3.addEventListener("mouseover",function(){
        numero3.setAttribute("style","transform:scale(0.85,0.85) ");
    });
    numero3.addEventListener("mouseout",function(){
        numero3.setAttribute("style","transform:scale(1,1)")
    });
    
    var numero4 = document.getElementById("4");
    
    numero4.addEventListener("mouseover",function(){
        numero4.setAttribute("style","transform:scale(0.85,0.85) ");
    });
    numero4.addEventListener("mouseout",function(){
        numero4.setAttribute("style","transform:scale(1,1)")
    });
    
    var numero5 = document.getElementById("5");
    numero5.addEventListener("mouseover",function(){
        numero5.setAttribute("style","transform:scale(0.85,0.85) ");
    });
    numero5.addEventListener("mouseout",function(){
        numero5.setAttribute("style","transform:scale(1,1)")
    });
    var numero6 = document.getElementById("6");
    numero6.addEventListener("mouseover",function(){
        numero6.setAttribute("style","transform:scale(0.85,0.85) ");
    });
    numero6.addEventListener("mouseout",function(){
        numero6.setAttribute("style","transform:scale(1,1)")
    });
    var numero7 = document.getElementById("7");
    numero7.addEventListener("mouseover",function(){
        numero7.setAttribute("style","transform:scale(0.85,0.85) ");
    });
    numero7.addEventListener("mouseout",function(){
        numero7.setAttribute("style","transform:scale(1,1)")
    });
    var numero8 = document.getElementById("8");
    numero8.addEventListener("mouseover",function(){
        numero8.setAttribute("style","transform:scale(0.85,0.85) ");
    });
    numero8.addEventListener("mouseout",function(){
        numero8.setAttribute("style","transform:scale(1,1)")
    });
    var numero9 = document.getElementById("9");
    numero9.addEventListener("mouseover",function(){
        numero9.setAttribute("style","transform:scale(0.85,0.85) ");
    });
    numero9.addEventListener("mouseout",function(){
        numero9.setAttribute("style","transform:scale(1,1)")
    });

    var raiz = document.getElementById("raiz");
    raiz.addEventListener("mouseover",function(){
        raiz.setAttribute("style", "transform:scale(0.85,0.85)")
    });
    raiz.addEventListener("mouseout",function(){
        raiz.setAttribute("style", "transform: scale(1,1)")
    })
    var masMenos = document.getElementById("sign");
    masMenos.addEventListener("mouseover",function(){
        masMenos.setAttribute("style", "transform:scale(0.85,0.85)")
    })
    masMenos.addEventListener("mouseout", function(){
        masMenos.setAttribute("style","transform:(1,1)")
    })

    var dividido = document.getElementById("dividido");
    dividido.addEventListener("mouseover", function(){
        dividido.setAttribute("style", "transform:scale(0.85,0.85)")
    })
    dividido.addEventListener("mouseout", function(){
        dividido.setAttribute("style", "transform:scale(1,1)")
    })
    var on = document.getElementById("on");
    on.addEventListener("mouseover",function(){
        on.setAttribute("style","transform:scale(0.85,0.85)")
    })
    on.addEventListener("mouseout", function(){
        on.setAttribute("style", "transform:scale(1,1)")
    })
    var punto = document.getElementById("punto");
    punto.addEventListener("mouseover", function(){
        punto.setAttribute("style","transform:scale(0.85,0.85)")
    })
    punto.addEventListener("mouseout",function(){
        punto.setAttribute("style","transform:scale(1,1)")
    })
    var igual = document.getElementById("igual");
    igual.addEventListener("mouseover", function(){
        igual.setAttribute("style", "transform:scale(0.85,0.85)")
    })
    igual.addEventListener("mouseout", function(){
        igual.setAttribute("style","transform:scale(1,1)")
    })
    var por = document.getElementById("por");
    por.addEventListener("mouseover",function(){
        por.setAttribute("style","transform:scale(0.85,0.85)")
    })
    por.addEventListener("mouseout",function(){
        por.setAttribute("style", "transform:scale(1,1)")
    })
    var menos = document.getElementById("menos");
    menos.addEventListener("mouseover",function(){
        menos.setAttribute("style","transform:scale(0.85,0.85)")
    })
    menos.addEventListener("mouseout",function(){
        menos.setAttribute("style","transform:scale(1,1)")
    })
    var mas = document.getElementById("mas");
    mas.addEventListener("mouseover",function(){
        mas.setAttribute("style","transform:scale(0.85,0.85)")
    })
    mas.addEventListener("mouseout",function(){
        mas.setAttribute("style","transform:scale(1,1)")
    })
    var display = document.getElementById("display");
    display.innerHTML = display.innerHTML.substring(0,8);
//incluir numeros
var uno = 0, dos = 0, tres = 0, cuatro =0, cinco=0, seis = 0, siete=0, ocho =0, nueve=0,cero=0;
function incluir(){
    
    numero0.onclick = function(){
   
        display.innerHTML = display.innerHTML.substring(0,7);
       if (display.innerHTML == "0"){
           display.innerHTML = "0";
       }else{
           display.innerHTML = display.innerHTML += "0";
       }
       
    }
    numero1.onclick= function(){
        display.innerHTML = display.innerHTML.substring(0,7);
     
        if (display.innerHTML == "0"){
            display.innerHTML= "1";
        }else{
            display.innerHTML = display.innerHTML += "1";
        }
    }
    numero2.onclick = function(){
        display.innerHTML = display.innerHTML.substring(0,7);
      
        if(display.innerHTML == "0"){
            display.innerHTML = "2";
        }else{
            display.innerHTML = display.innerHTML += "2"
        }
    }
    numero3.onclick = function(){
        display.innerHTML = display.innerHTML.substring(0,7);
      
        if(display.innerHTML == "0"){
            display.innerHTML = "3";
        }else{
            display.innerHTML = display.innerHTML += "3"
        }
    }
    numero4.onclick = function(){
        display.innerHTML = display.innerHTML.substring(0,7);
       
        if(display.innerHTML == "0"){
            display.innerHTML = "4";
        }else{
            display.innerHTML = display.innerHTML += "4"
        }
    }
    numero5.onclick = function(){
        display.innerHTML = display.innerHTML.substring(0,7);
       
        if(display.innerHTML == "0"){
            display.innerHTML = "5";
        }else{
            display.innerHTML = display.innerHTML += "5"
        }
    }
    numero6.onclick = function(){
        display.innerHTML = display.innerHTML.substring(0,7);
       
        if(display.innerHTML == "0"){
            display.innerHTML = "6";
        }else{
            display.innerHTML = display.innerHTML += "6"
        }
    }
    numero7.onclick = function(){
        display.innerHTML = display.innerHTML.substring(0,7);
       
        if(display.innerHTML == "0"){
            display.innerHTML = "7";
        }else{
            display.innerHTML = display.innerHTML += "7"
        }
    }
    numero8.onclick = function(){
        display.innerHTML = display.innerHTML.substring(0,7);
       
        if(display.innerHTML == "0"){
            display.innerHTML = "8";
        }else{
            display.innerHTML = display.innerHTML += "8"
        }
    }
    numero9.onclick = function(){
        display.innerHTML = display.innerHTML.substring(0,7);
        
        if(display.innerHTML == "0"){
            display.innerHTML = "9";
        }else{
            display.innerHTML = display.innerHTML += "9"
        }
    }
    punto.onclick = function(){
        display.innerHTML = display.innerHTML +=".";
    }
   
}
// funcion recetear 
incluir();
on.onclick = function(){
    display.innerHTML = "0";

}
 var operandoa= 0;
 var operandob = 0;
 var operacion;
 var resultado = 0;

 function limpiar(){
     display.innerHTML = 0;
 }

 mas.onclick = function(){
     operandoa = display.innerHTML;
     operacion = "+"
     limpiar();
 }
 por.onclick = function(){
    operandoa = display.innerHTML;
    operacion = "*"
    limpiar();
} 
menos.onclick = function(){
    operandoa = display.innerHTML;
    operacion = "-"
    limpiar();
}
dividido.onclick = function(){
    operandoa = display.innerHTML;
    operacion = "/"
    limpiar();
}
igual.onclick = function(){
    operandob = display.innerHTML
    resul();
}
function resul(){
    var res = 0; 
    switch(operacion){
        case"+":
        res = parseFloat(operandoa) + parseFloat(operandob)
        break;
        case"-":
        res = parseFloat(operandoa) - parseFloat(operandob)
        break;
        case"*":
        res = parseFloat(operandoa) * parseFloat(operandob)
        break;
        case"/":
        res = parseFloat(operandoa) / parseFloat(operandob)
        break;
    }
    display.innerHTML= res; 
}

