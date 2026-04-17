import Menu from "../interfaces/menu";

export default class MenuTipoDocumento implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual tipo de documento deseja cadastrar?`)
        console.log(`----------------------`)
        console.log(`| 1 - RG`)
        console.log(`| 0 - Finalizar cadastro de documentos`)
        console.log(`----------------------`)
    }
}
