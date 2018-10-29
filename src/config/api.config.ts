import { Produto } from "../model/produto";
import { Categoria } from "../model/categoria";

export const CATEGORIA : Categoria[] = [
    {id : 1, nome : "Mobile"},
    {id : 2, nome : "Web"},
    {id : 3, nome : "Desktop"},
    {id : 4, nome : "BackEnd"},
    {id : 5, nome : "FrontEnd"},
]

export const PRODUTOS : Produto[] = [
    {id : 1, nome : "Ionic", preco : 3988.00, imagem : "ionic.png", categoria_id : 1},
    {id : 2, nome : "Angular JS", preco : 2499.99, imagem : "angular.png", categoria_id : 2},
    {id : 3, nome : "Java", preco : 3988.00, imagem : "java.png", categoria_id : 3},
    {id : 4, nome : "PHP", preco : 2499.99, imagem : "php.png", categoria_id : 4},
    {id : 5, nome : "C", preco : 3988.00, imagem : "c.png", categoria_id : 3},
    {id : 6, nome : "Python", preco : 2499.99, imagem : "python.png", categoria_id : 3},
    {id : 6, nome : "HTML&CSS", preco : 2000.00, imagem : "htmlcss.png", categoria_id : 5}
]