class DisciplinaService{
    constructor(){
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(nome, codigo) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo); 
        if (disciplinaPesquisada) {
            throw new Error('Disciplina já cadastrada');
        }
    
        const disciplinaNova = new Disciplina(nome, codigo);
        this.repositorio.inserir(disciplinaNova);
        return disciplinaNova;
    }
    

    pesquisarPorCodigo(codigo) {
        return this.repositorio.listar().find(
            disciplina => disciplina.codigo === codigo
        ); 
    }
    

    verificaNaDisciplina(codigo) {
        const disciplina = this.repositorio.pesquisarPorCodigo(codigo);
    
        if (!disciplina) {
            throw new Error("Disciplina não encontrada.");
        }
    
        return disciplina;
    }
    
    

    remover(codigo){
        this.repositorio.remover(codigo);
    }
}