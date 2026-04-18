import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"
import CadastroEnderecoTitular from "./cadastroEnderecoTitular"

export default class AtualizarCliente extends Processo {
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

        let indice = this.entrada.receberNumero('Digite o número do cliente a editar:') - 1
        if (indice < 0 || indice >= armazem.Clientes.length) {
            console.log('Cliente inválido.')
            return
        }
        let cliente = armazem.Clientes[indice]

        console.log(`Editando: ${cliente.NomeSocial}`)
        console.log(`| 1 - Alterar nome`)
        console.log(`| 2 - Alterar nome social`)
        console.log(`| 3 - Alterar endereço`)

        let opcao = this.entrada.receberNumero('Qual campo deseja alterar?')
        switch (opcao) {
            case 1:
                try {
                    cliente.Nome = this.entrada.receberTexto('Novo nome:')
                    console.log('Nome atualizado com sucesso!')
                } catch (e: any) {
                    console.log(`Erro: ${e.message}`)
                }
                break
            case 2:
                try {
                    cliente.NomeSocial = this.entrada.receberTexto('Novo nome social:')
                    console.log('Nome social atualizado com sucesso!')
                } catch (e: any) {
                    console.log(`Erro: ${e.message}`)
                }
                break
            case 3:
                this.processo = new CadastroEnderecoTitular(cliente)
                this.processo.processar()
                console.log('Endereço atualizado com sucesso!')
                break
            default:
                console.log('Opção inválida.')
        }
    }
}
