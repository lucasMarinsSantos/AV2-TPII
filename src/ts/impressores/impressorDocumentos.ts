import Impressor from "../interfaces/impressor";
import Documento from "../modelos/documento";
import ImpressorDocumento from "./impressorDocumento";

export default class ImpressorDocumentos implements Impressor {
    private documentos: Documento[]
    private impressor!: Impressor
    constructor(documentos: Documento[]) { this.documentos = documentos }
    imprimir(): string {
        let impressao = `| Documentos:`
        if (this.documentos.length === 0) {
            impressao += `\n| (nenhum documento cadastrado)`
        } else {
            this.documentos.forEach(doc => {
                this.impressor = new ImpressorDocumento(doc)
                impressao += `\n${this.impressor.imprimir()}`
            })
        }
        return impressao
    }
}
