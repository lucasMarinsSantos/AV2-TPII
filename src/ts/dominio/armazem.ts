import Cliente from "../modelos/cliente"

export default class Armazem {
    private static instanciaUnica: Armazem = new Armazem()
    private clientes: Cliente[] = []
    private constructor() { }

    public static get InstanciaUnica() { return this.instanciaUnica }
    public get Clientes() { return this.clientes }

    public adicionarCliente(cliente: Cliente): void {
        this.clientes.push(cliente)
    }

    public removerCliente(indice: number): void {
        if (indice < 0 || indice >= this.clientes.length) throw new Error('Índice de cliente inválido.')
        this.clientes.splice(indice, 1)
    }
}
