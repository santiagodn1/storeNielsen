import SparkyBlack from '../assets/productos/sparkyBlack.png'
import Ray from '../assets/productos/rayWhite.png'
import AceClay from '../assets/productos/axilus.png'

export const productos = [
    {
        id: '1',
        nombre: "Zapatillas Sparky Black",
        estilo: "Training",
        genero: "Hombre",
        price: "7999",
        stock: 5,
        pictureUrl: SparkyBlack
    },
    {
        id: '2',
        nombre: "Zapatillas Ray",
        estilo: "Heritage",
        genero: "Hombre",
        price: "11999",
        stock: 15,
        pictureUrl: Ray
    },
    {
        id: '3',
        nombre: "Zapatillas Ace Clay",
        estilo: "Tennis",
        genero: "Mujer",
        price: "7499",
        stock: 10,
        pictureUrl: AceClay
    }
]

export const traerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 4000);
});