import { Component, OnInit } from '@angular/core';
import { ObtemDadosService } from '../services/obtem-dados.service';

@Component({
  selector: 'app-imagens-aleatorias',
  templateUrl: './imagens-aleatorias.component.html',
  styleUrls: ['./imagens-aleatorias.component.scss']
})
export class ImagensAleatoriasComponent implements OnInit {
  listaImagensAleatorias: any = {};

  constructor(private obtemDados: ObtemDadosService) { }

  ngOnInit(): void {

    this.obtemDados.obtemImagensAleatorias().subscribe((dados) => {
      this.listaImagensAleatorias = dados;        
    })
  }
}
