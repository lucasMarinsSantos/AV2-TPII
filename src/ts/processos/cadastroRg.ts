import Processo from "../abstracoes/processo";
import Documento from "../modelos/documento";
import Cliente from "../modelos/cliente";

export default class CadastroRg extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) { super(); this.cliente = cliente }
    processar(): void {
        let numero = this.entrada.receberTexto('Qual o número do RG?')
        let documento = new Documento('RG', numero)
        this.cliente.Documentos.push(documento)
        console.log('RG cadastrado com sucesso!')
    }
}
