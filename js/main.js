xmlHTTP = new XMLHttpRequest();
xmlHTTP.open("GET", "xml/db_conteudo.xml", false);
xmlHTTP.send();
xmlDoc = xmlHTTP.responseXML;
let equipe = xmlDoc.getElementsByTagName("membro");

/*EQUIPE*/
/*Exibir membros da equipe*/
function exibirEquipe(){
    n = equipe.length-1;
    for(var i = 0; i <= n; i++){
        document.write(
            "<div class='col-lg-4 px-3 mt-5 mb-5'>" +
                "<img src='imgs/equipe/"+ equipe[i].getElementsByTagName("foto")[0].childNodes[0].nodeValue + "' alt='' class='bd-placeholder-img rounded-circle' width='160' height='160'>" +
                "<h2 class='eqp_h2 mt-3 mb-3'>" + equipe[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue + "</h2>" +
                "<p class='eqp_p'>" + equipe[i].getElementsByTagName("frase")[0].childNodes[0].nodeValue + "</p>" +
                "<h5 class='eqp_h5'>" + equipe[i].getElementsByTagName("habilidade")[0].childNodes[0].nodeValue + "</h5>" +
                "<div class='col-md-12 mt-3 d-flex justify-content-center'>" +
                    "<ul class='nav list-unstyled d-flex'>" +
                        "<li class='col-md-3 ms-2'>" +
                            "<a class='text-muted' href='" + equipe[i].getElementsByTagName("github")[0].childNodes[0].nodeValue + "'>" +
                                "<img src='imgs/icones/github.svg' alt='github' class='eqp_icone'>" +
                            "</a>"+
                        "</li>" +
                        "<li class='col-md-3 ms-2'>" +
                            "<a class='text-muted' href='" + equipe[i].getElementsByTagName("linkedin")[0].childNodes[0].nodeValue + "'>" +
                                "<img src='imgs/icones/linkedin.svg' alt='linkedin' class='eqp_icone'>" +
                            "</a>"+
                        "</li>" +
                        "<li class='col-md-3 ms-2'>" +
                            "<a class='text-muted' href='" + equipe[i].getElementsByTagName("instagram")[0].childNodes[0].nodeValue + "'>" +
                                "<img src='imgs/icones/instagram.svg' alt='instagram' class='eqp_icone'>" +
                            "</a>"+
                        "</li>" +
                    "</ul>" +
                "</div>" +
            "</div>"
        );
    }    
    
}
/*//EQUIPE*/