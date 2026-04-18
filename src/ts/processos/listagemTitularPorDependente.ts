import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"
import ImpressorCliente from "../impressores/impressorCliente"

export default class ListagemTitularPorDependente extends Processo {
    processar(): void {
        console.clear()
        let armazem = Armazem.InstanciaUnica
        let dependentes = armazem.Clientes.filter(c => c.Titular !== undefined)

        if (dependentes.length === 0) {
            console.log('Nenhum dependente cadastrado.')
            return
        }

        console.log('Dependentes disponíveis:')
        dependentes.forEach((d, i) => console.log(`| ${i + 1} - ${d.NomeSocial}`))

        let indice = this.entrada.receberNumero('Digite o número do dependente:') - 1
        if (indice < 0 || indice >= dependentes.length) {
            console.log('Dependente inválido.')
            return
        }

        let dependente = dependentes[indice]
        console.log(`\nTitular de ${dependente.NomeSocial}:`)
        let impressor = new ImpressorCliente(dependente.Titular)
        console.log(impressor.imprimir())
    }
}
