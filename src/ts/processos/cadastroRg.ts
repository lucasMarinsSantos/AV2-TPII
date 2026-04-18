import Processo from "../abstracoes/processo"
import Documento from "../modelos/documento"
import Cliente from "../modelos/cliente"

export default class CadastroRg extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) { super(); this.cliente = cliente }
    processar(): void {
        let jaTemRg = this.cliente.Documentos.some(d => d.Tipo === 'RG')
        if (jaTemRg) {
            console.log('Este cliente já possui um RG cadastrado.')
            return
        }
        let numero = this.entrada.receberTexto('Qual o número do RG?')
        try {
            let documento = new Documento('RG', numero)
            this.cliente.Documentos.push(documento)
            console.log('RG cadastrado com sucesso!')
        } catch (e: any) {
            console.log(`Erro ao cadastrar RG: ${e.message}`)
        }
    }
}
