class Retangulo {
    largura: number;
    altura: number;

    constructor(largura: number, altura: number) {
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea(): number {
        return this.largura * this.altura;
    }

    calcularPerimetro(): number {
        return 2 * (this.largura + this.altura);
    }
}

let ret = new Retangulo(10, 5);
console.log("Área:", ret.calcularArea());
console.log("Perímetro:", ret.calcularPerimetro());