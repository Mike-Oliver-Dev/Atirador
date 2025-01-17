function pesquisar() {
     // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se campoPesquisa for uma string sem nada
    if(!campoPesquisa){
      section.innerHTML = "<p>Sem inspiração pra pesquisar hoje? Digite algo!</p>" 
      return  
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      //se titulo includes campoPesquisa
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
        //cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Para mais informações</a>
          <img src=${dado.imagem} alt="{{objeto.titulo}}" width="200" height="195" />
        </div>
      `;
      } 
    }
    
    if(!resultados) {
      resultados = "<p>Nada foi encontrado sobre isto</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;    
}


