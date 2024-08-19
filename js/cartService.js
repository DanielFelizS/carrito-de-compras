// function agregarAlCarrito(producto){
//     const memoria = JSON.parse(localStorage.getItem("productos"));
//     if (!memoria) {
//         const nuevoProducto = getNuevoProductoParaMemoria(producto);
//         localStorage.setItem("productos", JSON.stringify([nuevoProducto]));
//     }
//     else{
//         const indiceProducto = memoria.findIndex(producto => producto.id);
//         console.log(memoria, indiceProducto);
//         const nuevaMemoria = memoria;

//         if (indiceProducto == -1) {
//             nuevaMemoria.push(getNuevoProductoParaMemoria(producto));
//         } else {
//             nuevaMemoria[indiceProducto].cantidad ++;
//         }
//         localStorage.setItem("productos", JSON.stringify(nuevaMemoria));
//     }
// }

// function getNuevoProductoParaMemoria(producto){
//     const nuevoProducto = producto;
//     nuevoProducto.cantidad = 1;
//     return nuevoProducto;
// }

function agregarAlCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("productos")) || [];
    
    // Busca si el producto ya existe en la memoria
    const indiceProducto = memoria.findIndex(item => item.id === producto.id);
    console.log(memoria, indiceProducto);

    if (indiceProducto === -1) {
        // Si el producto no existe, lo agrega como nuevo
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        memoria.push(nuevoProducto);
    } else {
        // Si el producto ya existe, incrementa la cantidad
        memoria[indiceProducto].cantidad++;
    }

    // Actualiza el localStorage con la nueva lista de productos
    localStorage.setItem("productos", JSON.stringify(memoria));
    actualizarNumeroCarrito();
}

function getNuevoProductoParaMemoria(producto) {
    // Hace una copia del producto y establece la cantidad a 1
    return { ...producto, cantidad: 1 };
}
const cuentaCarrito = document.getElementById("cuenta-carrito");
function actualizarNumeroCarrito() {
    const memoria = JSON.parse(localStorage.getItem("productos"));
    const cuenta = memoria.reduce((acumular, current)=> acumular+current.cantidad,0)
    cuentaCarrito.innerText = cuenta;
}
actualizarNumeroCarrito()