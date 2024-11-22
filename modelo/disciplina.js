class Disciplina{
    constructor(nome, codigo){
        this._nome = nome;
        this._codigo = codigo;
        this._alunos = []
    }

    get nome(){
        return this._nome;
    }

    set nome(nomeDisciplina){
        this._nome = nomeDisciplina;
    }

    get codigo() {
        return this._codigo;
    }

    set codigo(codigoDisciplina){
        this._codigo = codigoDisciplina;
    }

    addAlunos(aluno){
        this._alunos.push(aluno);
    }
    
    get alunos() {
        return this._alunos; 
    }
}