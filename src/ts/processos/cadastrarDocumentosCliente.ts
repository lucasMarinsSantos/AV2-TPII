import Processo from "../abstracoes/processo"
import MenuTipoDocumento from "../menus/menuTipoDocumento"
import Cliente from "../modelos/cliente"
import CadastroRg from "./cadastroRg"

export default class CadastrarDocumentosCliente extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.menu = new MenuTipoDocumento()
        this.execucao = true
    }
    processar(): void {
        console.log('Iniciando o cadastro de documentos...')
        console.log('Atenção: o cadastro do RG é obrigatório.')
        while (this.execucao) {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual opção desejada?')
            switch (this.opcao) {
                case 1:
                    this.processo = new CadastroRg(this.cliente)
                    this.processo.processar()
                    break
                case 0:
                    let temRg = this.cliente.Documentos.some(d => d.Tipo === 'RG')
                    if (!temRg) {
                        console.log('Não é possível finalizar: o RG é obrigatório. Por favor, cadastre o RG antes de sair.')
                        break
                    }
                    this.execucao = false
                    break
                default:
                    console.log('Opção não entendida :(')
            }
        }
    }
}