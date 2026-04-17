import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";

export default class CadastroClienteDependente extends Processo {
    processar(): void {
        let armazem = Armazem.InstanciaUnica
        let titulares = armazem.Clientes.filter(c => c.Titular === undefined)

        if (titulares.length === 0) {
            console.log('Nenhum titular cadastrado. Cadastre um titular primeiro.')
            return
        }

        console.log('Titulares disponíveis:')
        titulares.forEach((t, i) => console.log(`| ${i + 1} - ${t.NomeSocial}`))

        let indice = this.entrada.receberNumero('Digite o número do titular:') - 1
        if (indice < 0 || indice >= titulares.length) {
            console.log('Titular inválido.')
            return
        }
        let titular = titulares[indice]

        console.log('Iniciando o cadastro do cliente dependente...')
        let nome = this.entrada.receberTexto('Qual o nome do dependente?')
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do dependente?')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
        let dependente = new Cliente(nome, nomeSocial, dataNascimento)

        this.processo = new CadastroEnderecoTitular(dependente)
        this.processo.processar()

        this.processo = new CadastrarDocumentosCliente(dependente)
        this.processo.processar()

        dependente.Titular = titular
        titular.adicionarDependente(dependente)
        armazem.Clientes.push(dependente)

        console.log(`Dependente cadastrado e vinculado ao titular ${titular.NomeSocial}!`)
    }
}
