import Impressor from "../interfaces/impressor";
import Endereco from "../modelos/endereco";

export default class ImpressorEndereco implements Impressor {
    private endereco: Endereco
    constructor(endereco: Endereco) { this.endereco = endereco }
    imprimir(): string {
        return `| Endereço: ${this.endereco.Rua}, ${this.endereco.Numero} - ${this.endereco.Bairro}, ${this.endereco.Cidade}/${this.endereco.Estado} - CEP: ${this.endereco.CodigoPostal}`
    }
}
