function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == ""){
        section.innerHTML = "<p style='font-size: 19px; color: red; font-weight: bolder;'>Campo vazio</p>";
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

console.log(campoPesquisa);

let resultados = "";
let titulo = "";
let faixas = "";

for(let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    faixas = dado.faixas.toLowerCase()

    if (titulo.includes(campoPesquisa) || faixas.includes(campoPesquisa)){
        resultados += `<div class="item-resultado">
        <h2> ${dado.titulo}</h2>
    <p class="descricao-meta">${dado.faixas}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
    </div>`
    }
   
}

if (!resultados){
    resultados = "<p>Campo vazio</p>"
}

section.innerHTML = resultados
}