import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";

export default class ListagemDependentesPorTitular extends Processo {
    processar(): void {
        console.clear()
        let armazem = Armazem.InstanciaUnica
        let titulares = armazem.Clientes.filter(c => c.Titular === undefined)

        if (titulares.length === 0) {
            console.log('Nenhum titular cadastrado.')
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
        console.log(`\nDependentes de ${titular.NomeSocial}:`)

        if (titular.Dependentes.length === 0) {
            console.log('Este titular não possui dependentes cadastrados.')
            return
        }

        let impressor: Impressor
        titular.Dependentes.forEach(dep => {
            impressor = new ImpressaorCliente(dep)
            console.log(impressor.imprimir())
        })
    }
}
