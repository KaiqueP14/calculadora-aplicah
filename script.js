function calcular() {
    var numero = document.getElementById("numero").value;
    var tabuada = document.getElementById("tabuada");
    
    if (numero === "") {
      alert("Por favor, digite um número válido!");
    } else {
      tabuada.innerHTML = "";
      
      for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        
        var linha = document.createElement("tr");
        var coluna1 = document.createElement("td");
        var coluna2 = document.createElement("td");
        
        coluna1.innerHTML = numero + " x " + i;
        coluna2.innerHTML = resultado;
        
        linha.appendChild(coluna1);
        linha.appendChild(coluna2);
        
        tabuada.appendChild(linha);
      }
    }
  }
  