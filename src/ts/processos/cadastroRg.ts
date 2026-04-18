import Processo from "../abstracoes/processo";
import Documento from "../modelos/documento";
import Cliente from "../modelos/cliente";
import Armazem from "../dominio/armazem";

export default class CadastroRg extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) { super(); this.cliente = cliente }

    processar(): void {
        let jaTemRg = this.cliente.Documentos.some(d => d.Tipo === 'RG')
        if (jaTemRg) {
            console.log('Este cliente já possui um RG cadastrado.')
            return
        }

        while (true) {
            let numero = this.entrada.receberTexto('Qual o número do RG?').trim()

            if (!numero) {
                console.log('O RG é obrigatório. Digite um número válido.')
                continue
            }

            let rgDuplicado = Armazem.InstanciaUnica.Clientes.some(c =>
                c.Documentos.some(d => d.Tipo === 'RG' && d.Numero === numero)
            )

            if (rgDuplicado) {
                console.log(`Erro: o RG "${numero}" já está cadastrado no sistema. Digite outro RG.`)
                continue
            }

            let documento = new Documento('RG', numero)
            this.cliente.Documentos.push(documento)
            console.log('RG cadastrado com sucesso!')
            break
        }
    }
}