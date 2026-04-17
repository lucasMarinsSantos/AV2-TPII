import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";

export default class ExcluirCliente extends Processo {
    processar(): void {
        let armazem = Armazem.InstanciaUnica

        if (armazem.Clientes.length === 0) {
            console.log('Nenhum cliente cadastrado.')
            return
        }

        console.log('Clientes cadastrados:')
        armazem.Clientes.forEach((c, i) =>
            console.log(`| ${i + 1} - ${c.NomeSocial} (${c.Titular === undefined ? 'Titular' : 'Dependente'})`)
        )

        let indice = this.entrada.receberNumero('Digite o número do cliente a excluir:') - 1
        if (indice < 0 || indice >= armazem.Clientes.length) {
            console.log('Cliente inválido.')
            return
        }

        let cliente = armazem.Clientes[indice]

        if (cliente.Titular === undefined && cliente.Dependentes.length > 0) {
            let confirmacao = this.entrada.receberTexto(
                `Esse titular possui ${cliente.Dependentes.length} dependente(s). Deseja excluir todos? (s/n)`
            )
            if (confirmacao.toLowerCase() !== 's') {
                console.log('Exclusão cancelada.')
                return
            }
            cliente.Dependentes.forEach(dep => {
                let idx = armazem.Clientes.indexOf(dep)
                if (idx !== -1) armazem.Clientes.splice(idx, 1)
            })
        }

        if (cliente.Titular !== undefined) {
            cliente.Titular.removerDependente(cliente.NomeSocial)
        }

        armazem.Clientes.splice(indice, 1)
        console.log(`Cliente ${cliente.NomeSocial} excluído com sucesso!`)
    }
}
