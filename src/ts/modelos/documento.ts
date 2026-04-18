export default class Documento {
    private tipo: string
    private numero: string

    constructor(tipo: string, numero: string) {
        if (!tipo || tipo.trim() === '') throw new Error('O tipo do documento não pode ser vazio.')
        if (!numero || numero.trim() === '') throw new Error('O número do documento não pode ser vazio.')
        this.tipo = tipo.trim()
        this.numero = numero.trim()
    }

    public get Tipo() { return this.tipo }
    public get Numero() { return this.numero }

    public toString(): string {
        return `${this.tipo}: ${this.numero}`
    }
}
