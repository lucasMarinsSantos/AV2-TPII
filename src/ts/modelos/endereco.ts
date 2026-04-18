export default class Endereco {
    private estado: string
    private cidade: string
    private bairro: string
    private rua: string
    private numero: string
    private codigoPostal: string
    private informacoesAdicionais: string

    constructor(estado: string, cidade: string, bairro: string, rua: string, numero: string, codigoPostal: string, informacoesAdicionais: string) {
        this.estado = estado
        this.cidade = cidade
        this.bairro = bairro
        this.rua = rua
        this.numero = numero
        this.codigoPostal = codigoPostal
        this.informacoesAdicionais = informacoesAdicionais
    }

    public get Estado() { return this.estado }
    public get Cidade() { return this.cidade }
    public get Bairro() { return this.bairro }
    public get Rua() { return this.rua }
    public get Numero() { return this.numero }
    public get CodigoPostal() { return this.codigoPostal }
    public get InformacoesAdicionais() { return this.informacoesAdicionais }
}
