class Pila {
    constructor() {
        this.items = [];
    }
    // Agregar
    agregar(elemento) {
        this.items.push(elemento);
        console.log("Se agregó:", elemento);
    }
    // Eliminar
    eliminar() {
        if (this.items.length === 0) {
            console.log("La pila está vacía");
            return;
        }
        let eliminado = this.items.pop();
        console.log("Se eliminó:", eliminado);
    }
    mostrar() {
        console.log("Pila actual:", this.items);
    }
}

let pila = new Pila();

pila.agregar({ nombre: "Juan", edad: 24 });
pila.agregar({ nombre: "Claudia", edad: 21 });
pila.mostrar();
pila.eliminar();
pila.mostrar();