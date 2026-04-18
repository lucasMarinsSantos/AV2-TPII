export default class Endereco {
    private estado: string
    private cidade: string
    private bairro: string
    private rua: string
    private numero: string
    private codigoPostal: string
    private informacoesAdicionais: string

    constructor(
        estado: string,
        cidade: string,
        bairro: string,
        rua: string,
        numero: string,
        codigoPostal: string,
        informacoesAdicionais: string
    ) {
        if (!estado || estado.trim() === '') throw new Error('Estado não pode ser vazio.')
        if (!cidade || cidade.trim() === '') throw new Error('Cidade não pode ser vazia.')
        if (!rua || rua.trim() === '') throw new Error('Rua não pode ser vazia.')
        if (!codigoPostal || !/^\d{5}-?\d{3}$/.test(codigoPostal.trim())) throw new Error('CEP inválido. Use o formato 00000-000 ou 00000000.')
        this.estado = estado.trim()
        this.cidade = cidade.trim()
        this.bairro = bairro.trim()
        this.rua = rua.trim()
        this.numero = numero.trim()
        this.codigoPostal = codigoPostal.trim()
        this.informacoesAdicionais = informacoesAdicionais.trim()
    }

    public get Estado() { return this.estado }
    public get Cidade() { return this.cidade }
    public get Bairro() { return this.bairro }
    public get Rua() { return this.rua }
    public get Numero() { return this.numero }
    public get CodigoPostal() { return this.codigoPostal }
    public get InformacoesAdicionais() { return this.informacoesAdicionais }

    public toString(): string {
        return `${this.rua}, ${this.numero} - ${this.bairro}, ${this.cidade}/${this.estado} - CEP: ${this.codigoPostal}`
    }
}
