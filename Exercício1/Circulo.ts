class Circulo {
    raio: number;

    constructor(raio: number) {
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio;
    }
}

let circ = new Circulo(7);
console.log("Área:", circ.calcularArea());
console.log("Perímetro:", circ.calcularPerimetro());
