import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './componentes/header/header';
import { Footer } from './componentes/footer/footer';
import { Filme } from './componentes/filme/filme';
import { Filmes } from './componentes/filmes/filmes';

@Component({
  selector: 'app-root',
  imports: [ Header,Footer,Filmes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'StreamVibes';
}
