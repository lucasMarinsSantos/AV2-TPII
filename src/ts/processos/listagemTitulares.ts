import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemTitulares extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        console.log('Listando clientes titulares...')
        let encontrou = false
        this.clientes.forEach(cliente => {
            if (cliente.Titular === undefined) {
                this.impressor = new ImpressaorCliente(cliente)
                console.log(this.impressor.imprimir())
                encontrou = true
            }
        })
        if (!encontrou) console.log('Nenhum titular cadastrado.')
    }
}
