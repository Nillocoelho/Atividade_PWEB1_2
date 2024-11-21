class DisciplinaControlador{

    constructor(){
        this.servico = new DisciplinaService();
    }
    

    inserir(){
        const nomeDisciplina = document.querySelector("#nomeDisciplina");
        const codigoDisciplina = document.querySelector("#codigoDisciplina");
        let disciplinaInserida = null;
        try{
            disciplinaInserida = this.servico.inserir(nomeDisciplina.value, Number(codigoDisciplina.value));
            }
            catch(e){
                alert(e);
                console.error(e);
            }
       
        const listaDisciplinaElemento = document.querySelector("#listaDisciplinas");
        if (disciplinaInserida) {
            this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinaElemento);
        }
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Nome: ${disciplina.nome} - Codigo: ${disciplina.codigo}`;
        elementoDestino.appendChild(disciplinaElemento);
    }
}


