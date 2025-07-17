import { Component } from '@angular/core';

@Component({
  selector: 'app-filmes',
  imports: [],
  templateUrl: './filmes.html',
  styleUrl: './filmes.css'
})
export class Filmes {

  alternarFavorito(){
    this.filme1.favorito = !this.filme1.favorito;
  }

  filme1 = {
    nome: "Os Esparalhoes",
    imagem: "/1.jpg",
    sinopse: "''Melhor filme de ação ja feito'' Senhor Cinema ヽ( ´ー`)ノ",
    genero: "comedia",
    favorito: false
  }
  filme2 = {
    nome: "ScottPilgrim Contra o Mundo",
    imagem: "/2.jpg",
    sinopse: "Tem que bate em ex qua ai não é violencia domestica",
    genero: "comedia",
    favorito: false
  }
  filme3 = {
    nome: "Clube da Luta",
    imagem: "/3.jpg",
    sinopse: "Tem que bater em voce mesmo de vez em quando",
    genero: "drama",
    favorito: false
  }
}
