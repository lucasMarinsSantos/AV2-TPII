import Processo from "../abstracoes/processo";
import Endereco from "../modelos/endereco";
import Cliente from "../modelos/cliente";

export default class CadastroEnderecoTitular extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) { super(); this.cliente = cliente }
    processar(): void {
        console.log('Iniciando o cadastro do endereço...')
        let estado = this.entrada.receberTexto('Qual o estado?')
        let cidade = this.entrada.receberTexto('Qual a cidade?')
        let bairro = this.entrada.receberTexto('Qual o bairro?')
        let rua = this.entrada.receberTexto('Qual a rua?')
        let numero = this.entrada.receberTexto('Qual o número?')
        let cep = this.entrada.receberTexto('Qual o CEP?')
        let complemento = this.entrada.receberTexto('Complemento (ou deixe em branco):')
        let endereco = new Endereco(estado, cidade, bairro, rua, numero, cep, complemento)
        this.cliente.Endereco = endereco
        console.log('Endereço cadastrado com sucesso!')
    }
}
