export default class Telefone {
    private ddd: string
    private numero: string

    constructor(ddd: string, numero: string) {
        if (!ddd || !/^\d{2}$/.test(ddd.trim())) throw new Error('DDD inválido. Deve conter exatamente 2 dígitos.')
        if (!numero || numero.trim() === '') throw new Error('O número do telefone não pode ser vazio.')
        this.ddd = ddd.trim()
        this.numero = numero.trim()
    }

    public get Ddd() { return this.ddd }
    public get Numero() { return this.numero }

    public toString(): string {
        return `(${this.ddd}) ${this.numero}`
    }
}
