import SparkyBlack from '../assets/productos/sparkyBlack.png'
import Ray from '../assets/productos/rayWhite.png'
import AceClay from '../assets/productos/aceClay.png'
import OjotasDrifter from '../assets/productos/drifter.png'
import OjotasDrifterBlue from '../assets/productos/drifterBlue.png'
import OjotasDrifterWhite from '../assets/productos/drifterWhite.png'
import arcade from '../assets/productos/arcade.png'
import disruptor from '../assets/productos/disruptor.png'
import extase from '../assets/productos/extase.png'
import moveon from '../assets/productos/moveon.png'
import axilus from '../assets/productos/axilus.png'
import energized from '../assets/productos/energized.png'

export const Productos = [
    {
        id: 1,
        nombre: "Zapatillas Sparky Black",
        estilo: "Training",
        genero: "Hombre",
        price: "7999",
        stock: 5,
        pictureUrl: SparkyBlack
    },
    {
        id: 2,
        nombre: "Zapatillas Ray",
        estilo: "Sneakers",
        genero: "Hombre",
        price: "11999",
        stock: 15,
        pictureUrl: Ray
    },
    {
        id: 3,
        nombre: "Zapatillas Ace Clay",
        estilo: "Tennis",
        genero: "Mujer",
        price: "7499",
        stock: 10,
        pictureUrl: AceClay
    },
    {
        id: 4,
        nombre: "Ojotas Drifter",
        estilo: "Ojotas",
        genero: "Unisex",
        price: "5499",
        stock: 5,
        pictureUrl: OjotasDrifter
    },
    {
        id: 5,
        nombre: "Ojotas Drifter Blue",
        estilo: "Ojotas",
        genero: "Unisex",
        price: "5499",
        stock: 5,
        pictureUrl: OjotasDrifterBlue
    },
    {
        id: 6,
        nombre: "Ojotas Drifter White",
        estilo: "Ojotas",
        genero: "Unisex",
        price: "5499",
        stock: 5,
        pictureUrl: OjotasDrifterWhite
    },
    {
        id: 7,
        nombre: "Zapatillas Arcade",
        estilo: "Sneakers",
        genero: "Hombre",
        price: "11999",
        stock: 7,
        pictureUrl: arcade
    },
    {
        id: 8,
        nombre: "Zapatillas Disruptor",
        estilo: "Sneakers",
        genero: "Mujer",
        price: "14999",
        stock: 5,
        pictureUrl: disruptor
    },
    {
        id: 9,
        nombre: "Zapatillas Move On",
        estilo: "Training",
        genero: "Mujer",
        price: "12999",
        stock: 5,
        pictureUrl: extase
    },
    {
        id: 10,
        nombre: "Zapatillas Extase Pink",
        estilo: "Training",
        genero: "Mujer",
        price: "10999",
        stock: 5,
        pictureUrl: moveon
    },
    {
        id: 11,
        nombre: "Zapatillas Axilus",
        estilo: "Tennis",
        genero: "Hombre",
        price: "7999",
        stock: 10,
        pictureUrl: axilus
    },
    {
        id: 12,
        nombre: "Zapatillas Energized",
        estilo: "Tennis",
        genero: "Hombre",
        price: "8499",
        stock: 10,
        pictureUrl: energized
    }
]

export const traerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Productos);
    }, 4000);
});