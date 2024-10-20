class SituacaoFinanceira {
    valorCreditos: number;
    valorDebitos: number;

    constructor(creditos: number, debitos: number) {
        this.valorCreditos = creditos;
        this.valorDebitos = debitos;
    }

    calcularSaldo(): number {
        return this.valorCreditos - this.valorDebitos;
    }
}

let situacao = new SituacaoFinanceira(1000, 300);
console.log("Saldo:", situacao.calcularSaldo());
