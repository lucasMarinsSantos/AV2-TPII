import Documento from "./documento"
import Endereco from "./endereco"
import Telefone from "./telefone"

export default class Cliente {
    private nome: string
    private nomeSocial: string
    private dataNascimento: Date
    private dataCadastro: Date
    private telefones: Telefone[] = []
    private endereco!: Endereco
    private documentos: Documento[] = []
    private dependentes: Cliente[] = []
    private titular!: Cliente

    constructor(nome: string, nomeSocial: string, dataNascimento: Date) {
        if (!nome || nome.trim() === '') throw new Error('Nome não pode ser vazio.')
        if (!nomeSocial || nomeSocial.trim() === '') throw new Error('Nome social não pode ser vazio.')
        this.nome = nome.trim()
        this.nomeSocial = nomeSocial.trim()
        this.dataNascimento = dataNascimento
        this.dataCadastro = new Date()
    }

    public get Nome() { return this.nome }
    public get NomeSocial() { return this.nomeSocial }
    public get DataNascimento() { return this.dataNascimento }
    public get DataCadastro() { return this.dataCadastro }
    public get Telefones() { return this.telefones }
    public get Endereco() { return this.endereco }
    public get Documentos() { return this.documentos }
    public get Dependentes() { return this.dependentes }
    public get Titular() { return this.titular }

    public set Nome(nome: string) {
        if (!nome || nome.trim() === '') throw new Error('Nome não pode ser vazio.')
        this.nome = nome.trim()
    }
    public set NomeSocial(nomeSocial: string) {
        if (!nomeSocial || nomeSocial.trim() === '') throw new Error('Nome social não pode ser vazio.')
        this.nomeSocial = nomeSocial.trim()
    }
    public set Endereco(endereco: Endereco) { this.endereco = endereco }
    public set Titular(titular: Cliente) {
        if (titular === this) throw new Error('Um cliente não pode ser titular de si mesmo.')
        this.titular = titular
    }

    public adicionarDependente(dependente: Cliente): void {
        if (!dependente) throw new Error('Dependente inválido.')
        if (dependente === this) throw new Error('Um cliente não pode ser dependente de si mesmo.')
        this.dependentes.push(dependente)
    }

    public removerDependente(nomeSocial: string): void {
        this.dependentes = this.dependentes.filter(d => d.NomeSocial !== nomeSocial)
    }
}
