class DisciplinaService{
    constructor(){
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(nome, codigo){
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisada.length > 0){
            throw new Error('Disciplina já cadastrada');
        }
        const disciplinaNova = new Disciplina(nome, codigo);
        this.repositorio.inserir(disciplinaNova);
        return disciplinaNova;
    }

    pesquisarPorCodigo(codigo) {
        return this.repositorio.listar().filter(
            disciplina => disciplina.codigo === codigo);
    }

    remover(codigo){
        this.repositorio.remover(codigo);
    }
}