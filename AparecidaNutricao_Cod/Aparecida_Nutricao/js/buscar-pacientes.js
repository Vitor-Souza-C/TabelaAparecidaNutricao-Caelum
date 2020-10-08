//Chama o id botaoAdiciona
var botaoAdicionar = document.querySelector("#buscar-pacientes");
// Adiciona um event de click no botao
botaoAdicionar.addEventListener("click", function(){
	//Inicia um XML request para chamar a funcionalidade de outro site
    var xhr = new XMLHttpRequest();
    //Abre e obtem os dados
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    //Carrega os dados para a tabela
    xhr.addEventListener("load", function(){

    	var erroAjax = document.querySelector("#erro-ajax");
    //Caso der Erro, 404 por exemplo, ele carregará uma mensagem de erro. Caso não der erro ele continua e envia os dados na tabela

	    if(xhr.status == 200){

	       erroAjax.classList.add("invisivel");
	       var resposta = xhr.responseText;  
	       //Os dados do outro site ainda estão em um formato JSON, convém passa-lo para um formato que a url possa entender 
	       var pacientes = JSON.parse(resposta);
           //Adiona os pacientes
	       pacientes.forEach(function(paciente) {
	            adicionaPacienteNaTabela(paciente);
	        });
	    }else{
	       erroAjax.classList.remove("invisivel");
	    }
	   

    });
    

    xhr.send();
});