function cambiarColor() {
    
    var seccionDerecha = document.getElementById("derecha");
    var seccionIzquierda = document.getElementById("izquierda");
    seccionDerecha.style.backgroundColor = "#363130";
    seccionIzquierda.style.backgroundColor = "#636261";
    
    
    var textosDerecha = seccionDerecha.querySelectorAll("p, span, h1, h2, h3, h4, h5, h6, li");
    var textosIzquierda = seccionIzquierda.querySelectorAll("p, span, h1, h2, h3, h4, h5, h6, li");
    var color = "#C9C9C9";

    textosDerecha.forEach(function(texto) {
        texto.style.color = color;
      });

    textosIzquierda.forEach(function(texto) {
    texto.style.color = color;
    });

  }


  function colorDefecto() {
    var seccionDerecha = document.getElementById("derecha");
    var seccionIzquierda = document.getElementById("izquierda");
    seccionDerecha.style.backgroundColor = "";
    seccionIzquierda.style.backgroundColor = "";
    
    
    var textosDerecha = seccionDerecha.querySelectorAll("p, span, h1, h2, h3, h4, h5, h6, li");
    var textosIzquierda = seccionIzquierda.querySelectorAll("p, span, h1, h2, h3, h4, h5, h6, li");
    var color = "";

    textosDerecha.forEach(function(texto) {
        texto.style.color = color;
      });

    textosIzquierda.forEach(function(texto) {
    texto.style.color = color;
    });

  }


// Selecciona todos los elementos con clase "title"
const titles = document.querySelectorAll('.title');

// Itera sobre los títulos y agrega un listener de clic para cada uno
titles.forEach(title => {
  title.addEventListener('click', () => {
    // Selecciona la lista asociada al título
    const list = title.nextElementSibling;

    // Agrega o quita la clase "hidden" para mostrar u ocultar la lista
    list.classList.toggle('hidden');
  });
});


