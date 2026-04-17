import Impressor from "../interfaces/impressor";
import Documento from "../modelos/documento";

export default class ImpressorDocumento implements Impressor {
    private documento: Documento
    constructor(documento: Documento) { this.documento = documento }
    imprimir(): string {
        return `| Documento - Tipo: ${this.documento.Tipo} | Número: ${this.documento.Numero}`
    }
}
