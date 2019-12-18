var expect = chai.expect;

/*
1) El mozo al principio debe que tener 0 mesas. done
2) La mesa al principio debe tener 0 personas. done
3) La mesa al principio debe tener 0 pedidos. done
4) El pedido al principio debe tener 0 comidas. done
5) Debe haber una función que permita agregar mesas a mozos. done
6) Debe haber una función que permita agregar pedidos a personas.
7) Debe haber una función que permita agregar personas a mesas.
8) Debe haber una función que permita agregar comidas a pedidos.
9) Una mesa no puede tener más de 1 mozo.
10) Un mozo puede tener más de 1 mesa. done
11) Un mozo no puede tener más de 4 mesas. done
11) Una persona no puede tener más de 2 pedidos.
*/

describe('Mozo', function () {
  it('Al crearlo debe tener 0 mesas', function () {
    var mozo = new Mozo();
    expect(mozo.cantidadMesas).to.equal(0);
  })

  it('Debe haber una función que permita agregar mesas a mozos', function () {
    var mozo = new Mozo();
    mozo.agregarMesa();
    expect(mozo.cantidadMesas).to.equal(1);
  })

  it('Un mozo puede tener más de 1 mesa', function () {
    var mozo = new Mozo();
    mozo.agregarMesa();
    mozo.agregarMesa();
    expect(mozo.cantidadMesas).to.be.above(1);
  })

  it('Un mozo no puede tener más de 4 mesas', function () {
    var mozo = new Mozo();
    mozo.agregarMesa();
    mozo.agregarMesa();
    mozo.agregarMesa();
    mozo.agregarMesa();
    mozo.agregarMesa();
    expect(mozo.cantidadMesas).to.equal(4);
  })
})

describe('Mesa', function () {
  it('Al crearlo debe tener 0 personas', function () {
    var mesa = new Mesa();
    expect(mesa.cantidadPersonas).to.equal(0);
  })

  it('Al crearlo debe tener 0 pedidos', function () {
    var mesa = new Mesa();
    expect(mesa.cantidadPedidos).to.equal(0);
  })
})

describe('Pedido', function () {
  it('Al crearlo debe tener 0 comidas', function () {
    var pedido = new Pedido();
    expect(pedido.cantidadComidas).to.equal(0);
  })
})