import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any = {
    aberto: 1000,
    disponivel: 3000,
    fechado: 1660,
    total: 0
  }
  
  constructor() { }

  ngOnInit(): void {
    this.calcularTotal();
  }

  calcularTotal() {
    const { aberto, disponivel, fechado } = this.data
    this.data.total = (aberto+disponivel+fechado)
  }

  calcularPorcentagem(valor: number = 0) {
    let porcentagem = (valor / this.data.total) * 100
    return Math.round(porcentagem * 10) / 10
  }
}
