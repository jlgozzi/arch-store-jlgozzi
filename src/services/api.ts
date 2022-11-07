import axios from "axios";
// import { IDatabaseObject } from "../interfaces";

const api = axios.create({
  baseURL: "",
  timeout: 5000,
});

export default api;

export const data = [
  {
    id: 1,
    title: "Introdução à Progrmação",
    description: "500 algoritmos resolvidos",
    price: 12,
    category: "Livro",
    img: "https://images.tcdn.com.br/img/img_prod/757977/teste_box_217_1_c0e0e4ffb489ba74ed2cd344efe086c4.jpg",
  },
  {
    id: 2,
    title: "Introdução à Programação",
    description: "500 algoritmos resolvidos",
    price: 12,
    category: "Livro",
    img: "https://images.tcdn.com.br/img/img_prod/757977/teste_box_217_1_c0e0e4ffb489ba74ed2cd344efe086c4.jpg",
  },
  {
    id: 3,
    title: "Introdução à Programação",
    description: "500 algoritmos resolvidos",
    price: 12,
    category: "Livro",
    img: "https://images.tcdn.com.br/img/img_prod/757977/teste_box_217_1_c0e0e4ffb489ba74ed2cd344efe086c4.jpg",
  },
  {
    id: 4,
    title: "Introdução à Programação",
    description: "500 algoritmos resolvidos",
    price: 12,
    category: "Livro",
    img: "https://images.tcdn.com.br/img/img_prod/757977/teste_box_217_1_c0e0e4ffb489ba74ed2cd344efe086c4.jpg",
  },
  {
    id: 5,
    title: "Introdução à Programação",
    description: "500 algoritmos resolvidos",
    price: 12,
    category: "Livro",
    img: "https://images.tcdn.com.br/img/img_prod/757977/teste_box_217_1_c0e0e4ffb489ba74ed2cd344efe086c4.jpg",
  },
  {
    id: 6,
    title: "Introdução à Programação",
    description: "500 algoritmos resolvidos",
    price: 12,
    category: "Livro",
    img: "https://images.tcdn.com.br/img/img_prod/757977/teste_box_217_1_c0e0e4ffb489ba74ed2cd344efe086c4.jpg",
  },
  {
    id: 7,
    title: "Camisa-Teste",
    description: "Uma linda camisa.",
    price: 12,
    category: "Moda",
    img: "https://images.tcdn.com.br/img/img_prod/757977/teste_box_217_1_c0e0e4ffb489ba74ed2cd344efe086c4.jpg",
  },
  {
    id: 8,
    title: "Camisa-teste",
    description: "Uma linda camisa.",
    price: 70,
    category: "Moda",
    img: "https://images.tcdn.com.br/img/img_prod/757977/teste_box_217_1_c0e0e4ffb489ba74ed2cd344efe086c4.jpg",
  },
  {
    id: 9,
    title: "Camisa-teste",
    description: "Uma linda camisa.",
    price: 70,
    category: "Moda",
    img: "https://images.tcdn.com.br/img/img_prod/757977/teste_box_217_1_c0e0e4ffb489ba74ed2cd344efe086c4.jpg",
  },
  {
    id: 10,
    title: "Camisa-teste",
    description: "Uma linda camisa.",
    price: 70,
    category: "Moda",
    img: "https://images.tcdn.com.br/img/img_prod/757977/teste_box_217_1_c0e0e4ffb489ba74ed2cd344efe086c4.jpg",
  },
  {
    id: 11,
    title: "Camisa-teste",
    description: "Uma linda camisa.",
    price: 70,
    category: "Moda",
    img: "https://images.tcdn.com.br/img/img_prod/757977/teste_box_217_1_c0e0e4ffb489ba74ed2cd344efe086c4.jpg",
  },
  {
    id: 12,
    title: "Camisa-teste",
    description: "Uma linda camisa.",
    price: 70,
    category: "Moda",
    img: "https://images.tcdn.com.br/img/img_prod/757977/teste_box_217_1_c0e0e4ffb489ba74ed2cd344efe086c4.jpg",
  },
  {
    id: 13,
    title: "Camisa-teste",
    description: "Uma linda camisa.",
    price: 70,
    category: "Moda",
    img: "https://images.tcdn.com.br/img/img_prod/757977/teste_box_217_1_c0e0e4ffb489ba74ed2cd344efe086c4.jpg",
  },

  {
    id: 14,
    title: "Camisa-teste",
    description: "Uma linda camisa.",
    price: 70,
    category: "Moda",
    img: "https://images.tcdn.com.br/img/img_prod/757977/teste_box_217_1_c0e0e4ffb489ba74ed2cd344efe086c4.jpg",
  },
  {
    id: 15,
    title: "Caneca-Teste",
    description: "Uma bela caneca.",
    price: 70,
    category: "Acessório",
    img: "https://images.tcdn.com.br/img/img_prod/757977/teste_box_217_1_c0e0e4ffb489ba74ed2cd344efe086c4.jpg",
  },
  {
    id: 16,
    title: "Caneca-Teste",
    description: "Uma bela caneca.",
    price: 32.0,
    category: "Acessório",
    img: "https://images.tcdn.com.br/img/img_prod/757977/teste_box_217_1_c0e0e4ffb489ba74ed2cd344efe086c4.jpg",
  },
  {
    id: 17,
    title: "Caneca-Teste",
    description: "Uma bela caneca.",
    price: 32.0,
    category: "Acessório",
    img: "https://images.tcdn.com.br/img/img_prod/757977/teste_box_217_1_c0e0e4ffb489ba74ed2cd344efe086c4.jpg",
  },
  {
    id: 18,
    title: "Caneca-Teste",
    description: "Uma bela caneca.",
    price: 32.0,
    category: "Acessório",
    img: "https://images.tcdn.com.br/img/img_prod/757977/teste_box_217_1_c0e0e4ffb489ba74ed2cd344efe086c4.jpg",
  },
  {
    id: 19,

    title: "Caneca-Teste",
    description: "Uma bela caneca.",
    price: 32.0,
    category: "Acessório",
    img: "https://images.tcdn.com.br/img/img_prod/757977/teste_box_217_1_c0e0e4ffb489ba74ed2cd344efe086c4.jpg",
  },
  {
    id: 20,
    title: "Caneca-Teste",
    description: "Uma bela caneca.",
    price: 32.0,
    category: "Acessório",
    img: "https://images.tcdn.com.br/img/img_prod/757977/teste_box_217_1_c0e0e4ffb489ba74ed2cd344efe086c4.jpg",
  },
];
