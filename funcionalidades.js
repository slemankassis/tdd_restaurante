var Mozo = function () {
    this.cantidadMesas = 0;
}

Mozo.prototype.agregarMesa = function () {
    if (this.cantidadMesas < 4) {
        this.cantidadMesas++;
    }
}

var Mesa = function () {
    this.cantidadPersonas = 0;
    this.cantidadPedidos = 0;
}

var Pedido = function () {
    this.cantidadComidas = 0;
}