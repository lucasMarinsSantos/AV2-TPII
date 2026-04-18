import promptSync from "prompt-sync"

export default class Entrada {
    private prompt = promptSync()

    public receberNumero(mensagem: string): number {
        while (true) {
            let valor = this.prompt(`${mensagem} `)
            if (valor === null || valor.trim() === '') {
                console.log('Entrada inválida. Por favor, digite um número.')
                continue
            }
            let numero = Number(valor)
            if (isNaN(numero)) {
                console.log('Entrada inválida. Por favor, digite um número válido.')
                continue
            }
            return numero
        }
    }

    public receberTexto(mensagem: string): string {
        while (true) {
            let texto = this.prompt(`${mensagem} `)
            if (texto === null || texto.trim() === '') {
                console.log('Entrada inválida. O campo não pode ser vazio.')
                continue
            }
            return texto.trim()
        }
    }

    public receberData(mensagem: string): Date {
        while (true) {
            let texto = this.prompt(`${mensagem}, no padrão dd/MM/yyyy: `)
            if (texto === null || texto.trim() === '') {
                console.log('Entrada inválida. Por favor, informe uma data.')
                continue
            }
            let partes = texto.trim().split('/')
            if (partes.length !== 3) {
                console.log('Formato inválido. Use dd/MM/yyyy.')
                continue
            }
            let dia = Number(partes[0])
            let mes = Number(partes[1])
            let ano = Number(partes[2])
            if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
                console.log('Data inválida. Verifique os valores e tente novamente.')
                continue
            }
            let data = new Date(ano, mes - 1, dia)
            if (
                data.getFullYear() !== ano ||
                data.getMonth() !== mes - 1 ||
                data.getDate() !== dia
            ) {
                console.log('Data inexistente. Verifique e tente novamente.')
                continue
            }
            return data
        }
    }
}
