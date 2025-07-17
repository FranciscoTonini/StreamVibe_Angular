export interface Filme{
  titulo:string;
  imagem:string;
  sinopse:string;
  genero:string;
  favorito:boolean;
}

export const FILMES: Filme[] = [
  {
    titulo: "Os Esparalhoes",
    imagem: "/1.jpg",
    sinopse: "''Melhor filme de ação já feito'' Senhor Cinema ヽ( ´ー`)ノ",
    genero: "comedia",
    favorito: false
  },
  {
    titulo: "Scott Pilgrim Contra o Mundo",
    imagem: "/2.jpg",
    sinopse: "Tem que bater em ex, qua aí não é violência doméstica",
    genero: "comedia",
    favorito: false
  },
  {
    titulo: "Clube da Luta",
    imagem: "/3.jpg",
    sinopse: "Tem que bater em você mesmo de vez em quando",
    genero: "drama",
    favorito: false
  },
  {
    titulo: "Velozes e Furiosos 27",
    imagem: "/4.jpg",
    sinopse: "Agora eles correm no espaço e resolvem crimes fiscais.",
    genero: "ação",
    favorito: false
  },
  {
    titulo: "O Código do Dev",
    imagem: "/5.jpg",
    sinopse: "Um programador descobre uma variável que pode mudar o mundo.",
    genero: "ficção científica",
    favorito: false
  },
  {
    titulo: "Amor em 404",
    imagem: "/6.jpg",
    sinopse: "Eles se perderam na internet, mas se encontraram no coração.",
    genero: "romance",
    favorito: false
  },
  {
    titulo: "Senhor dos Memes",
    imagem: "/7.jpg",
    sinopse: "Um hobbit precisa destruir um pendrive amaldiçoado com 1TB de memes.",
    genero: "aventura",
    favorito: false
  },
  {
    titulo: "Matrix Reinstalada",
    imagem: "/8.jpg",
    sinopse: "Neo precisa atualizar o sistema. Sim, de novo.",
    genero: "ficção científica",
    favorito: false
  },
  {
    titulo: "O Chamado da Prova Final",
    imagem: "/9.jpg",
    sinopse: "Um grupo de estudantes enfrenta o maior terror de todos: 10 questões discursivas.",
    genero: "terror",
    favorito: false
  },
  {
    titulo: "O Gato de Botas 3: A Vingança da Sapataria",
    imagem: "/10.jpg",
    sinopse: "O gato mais estiloso do reino volta para salvar a moda medieval.",
    genero: "animação",
    favorito: false
  }
];
