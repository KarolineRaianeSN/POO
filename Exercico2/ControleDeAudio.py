class ControleDeAudio:
    def __init__(self):
        self.volume = 2

    def aumentar_volume(self):
        if self.volume < 10:
            self.volume += 1

    def diminuir_volume(self):
        if self.volume > 0:
            self.volume -= 1

    def ler_volume(self):
        return self.volume