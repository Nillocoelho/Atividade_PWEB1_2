class DisciplinaControlador{

    constructor(){
        this.servico = new DisciplinaService();
        this.alunoServico = new AlunoService();
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


    adicionarAlunoADisciplina() {
        const codigoDisciplina = Number(document.querySelector("#codigo").value);
        const matriculaAluno = Number(document.querySelector("#matriculaAluno").value);
    
        try {
            const disciplina = this.servico.verificaNaDisciplina(codigoDisciplina); 
            const aluno = this.alunoServico.pesquisarPorMatricula(matriculaAluno);
    
            if (!aluno) {
                throw new Error("Aluno não encontrado.");
            }
    
            disciplina.addAlunos(aluno); 
    
            console.log(`Aluno ${aluno.nome} adicionado à disciplina ${disciplina.nome}`);
            
            const listaAlunoDisciplinaElemento = document.querySelector("#listaDiscAluno");
            if (listaAlunoDisciplinaElemento) {
                const alunoElemento = document.createElement("li");
                alunoElemento.textContent = `Aluno: ${aluno.nome} (Matrícula: ${aluno.matricula})`;
                listaAlunoDisciplinaElemento.appendChild(alunoElemento);
            }
        } catch (e) {
            alert(e.message);
        }
    }
    
    
    
    listarAlunosDaDisciplina(codigoDisciplina) {
        const disciplina = this.servico.buscarPorCodigo(codigoDisciplina);
        if (disciplina) {
            return disciplina._aluno.map(aluno => `Nome: ${aluno.nome}, Matrícula: ${aluno.matricula}`);
        } else {
            alert("Disciplina não encontrada!");
            return [];
        }
    }
}


