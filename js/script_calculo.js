export function calcularIPVA(valor, combustivel, ano) {
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - ano;

    // Regra de isenção
    if (idade > 20) {
        return "Isento";
    }

    // Tabela de taxas mapeada em um objeto
    const taxas = {
        "gasolina": 0.20,
        "etanol": 0.15,
        "bicombustivel": 0.10,
        "hibrido": 0.08,
        "eletrico": 0.02
    };

    // Busca a taxa correspondente ao combustível escolhido
    let taxaAplicada = taxas[combustivel];

    // Se o combustível existir na lista, calcula o valor. Se não, retorna um aviso.
    if (taxaAplicada !== undefined) {
        return valor * taxaAplicada;
    } else {
        return "Tipo de combustível inválido";
    }
}