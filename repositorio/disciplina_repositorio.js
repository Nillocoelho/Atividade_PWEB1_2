class DisciplinaRepositorio{
    constructor(){
        this.disciplinas = [];
    }

    inserir(disciplina){
        if (!(disciplina instanceof Disciplina)) {
            throw new Error("O objeto não é uma instância de Disciplina");
        }
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

    pesquisarPorCodigo(codigo) {
        return this.disciplinas.find(disciplina => disciplina.codigo === codigo);
    }
}