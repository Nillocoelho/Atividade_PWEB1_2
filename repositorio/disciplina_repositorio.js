class DisciplinaRepositorio{
    constructor(){
        this.disciplinas = [];
    }

    inserir(disciplina){
        this.disciplinas.push(disciplina);
    }

    remover(codigo){
        const indxDisciplinaARemover = this.disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        if (indxDisciplinaARemover > -1) {
            this.alunos.splice(indxDisciplinaARemover, 1);
        }
    }

    listar() {
        return this.disciplinas;
    }
}