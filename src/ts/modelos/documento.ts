export default class Documento {
    private tipo: string
    private numero: string
    constructor(tipo: string, numero: string) {
        this.tipo = tipo
        this.numero = numero
    }
    public get Tipo() { return this.tipo }
    public get Numero() { return this.numero }
}
