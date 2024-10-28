class ControleDeAudio {
    private volume: number = 2;

    aumentarVolume() {
        if (this.volume < 10) {
            this.volume++;
        }
    }

    diminuirVolume() {
        if (this.volume > 0) {
            this.volume--;
        }
    }

    lerVolume(): number {
        return this.volume;
    }
}