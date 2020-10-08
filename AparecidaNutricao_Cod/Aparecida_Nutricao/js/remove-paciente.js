var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){

    if(event.target.tagName == 'TD')

    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});