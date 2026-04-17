import Principal from "../processos/principal";

let principal = new Principal()
while (principal.Execucao) {
    principal.processar()
}
