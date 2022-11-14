xmlHTTP = new XMLHttpRequest();
xmlHTTP.open('GET', 'xml/db_conteudo.xml', false);
xmlHTTP.send();
xmlDoc = xmlHTTP.responseXML;
let equipe = xmlDoc.getElementsByTagName('membro');
const sectionEquipe = document.getElementById('integrantes');
//const nav = document.getElementsByClassName('nav');
var iconMenuMobile = document.getElementById('menu_mobile-icon');//Seleciona o elemento <i> do menu
//slider

selecionarPlataforma();
exibirEquipe();

iconMenuMobile.addEventListener('click', ()=>{//Com ação do 'click' executa mudança para 'display: block' ou 'display: none'. '()=>': arrow function
    var menuItems = document.querySelector('.menu_items');//Seleciona o elemento com a classe 'menu_items'
    if(menuItems.classList.contains('show')){//Verifica se o elemento contem a classe '.show{display:block;}' 
        menuItems.classList.add('hide');//Adiciona ao elemento '.menu_items' a classe '.hide{display:none;}'
        menuItems.classList.remove('show');//Remove do elemento a classe 'show'
    }else{
        menuItems.classList.add('show');
        menuItems.classList.remove('hide');
    }
});

/*window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 0){
        nav.style.borderBottom = '1px solid #efefef';
        nav.style.paddingBottom = '1rem';
    }
});*/

function selecionarPlataforma(){
    const teraPaciente = document.getElementById('paciente');
    const teraMonitor = document.getElementById('monitor');
    const teraFamiliar = document.getElementById('familiar');
    const teraSmartwatch = document.getElementById('smartwatch');
    const teraDesktop = document.getElementById('desktop');
    const teraMobile = document.getElementById('mobile');
    let active = document.querySelector('.active');
    let slideImgAtual = document.querySelector('.img-atual');


    teraPaciente.addEventListener('click', ()=>{
        if(!teraPaciente.classList.contains('active')){
            active.classList.remove('active');
            teraPaciente.classList.add('active');
            active = teraPaciente;
            console.log(active);

            slideImgAtual.classList.remove('img-atual');
            teraSmartwatch.classList.add('img-atual');
            slideImgAtual = teraSmartwatch;

        }
    });
    teraMonitor.addEventListener('click', ()=>{
        if(!teraMonitor.classList.contains('active')){
            active.classList.remove('active');
            active = teraMonitor;
            teraMonitor.classList.add('active');
            console.log(active);

            slideImgAtual.classList.remove('img-atual');
            teraDesktop.classList.add('img-atual');
            slideImgAtual = teraDesktop;
        }
    });
    teraFamiliar.addEventListener('click', ()=>{
        if(!teraFamiliar.classList.contains('active')){
            active.classList.remove('active');
            active = teraFamiliar;
            teraFamiliar.classList.add('active');
            console.log(active);

            slideImgAtual.classList.remove('img-atual');
            teraMobile.classList.add('img-atual');
            slideImgAtual = teraMobile;
        }
    });
}

function exibirEquipe(){
    n = equipe.length-1;
    for(var i = 0; i <= n; i++){
        var integrante = {
            foto: equipe[i].getElementsByTagName("foto")[0].childNodes[0].nodeValue,
            nome: equipe[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue,
            frase: equipe[i].getElementsByTagName("frase")[0].childNodes[0].nodeValue,
            habilidade: equipe[i].getElementsByTagName("habilidade")[0].childNodes[0].nodeValue,
            github: equipe[i].getElementsByTagName("github")[0].childNodes[0].nodeValue,
            linkedin: equipe[i].getElementsByTagName("linkedin")[0].childNodes[0].nodeValue,
            instagram: equipe[i].getElementsByTagName("instagram")[0].childNodes[0].nodeValue
        }

        sectionEquipe.innerHTML += "<div class='integrante'>" +
                                        "<img src='imgs/equipe/"+ integrante.foto + "' alt='" + integrante.nome + "' class='integrante_img'>" +
                                        "<h2 class='integrante_nome'>" + integrante.nome + "</h2>" +
                                        "<p class='integrante_frase'>" + integrante.frase + "</p>" +
                                        "<h5 class='integrante_hab'>" + integrante.habilidade + "</h5>" +
                                        "<ul class='integrante_icones'>" +
                                            "<li><a href='#" + integrante.github + "'><i class='fa-brands fa-github'></i></a></li>" +
                                            "<li><a href='" + integrante.linkedin + "'><i class='fa-brands fa-linkedin'></i></a></li>" +
                                            "<li><a href='" + integrante.instagram + "'><i class='fa-brands fa-instagram'></i></a></li>" +
                                        "</ul>" +
                                    "</div>";
    }    
}

