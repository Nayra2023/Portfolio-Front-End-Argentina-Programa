import { Component, OnInit } from '@angular/core';
   import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  
  nombre: string = '';
  apellido: string = '';
  puesto: string = '';
  sobre: string = '';
    constructor(private portfolioService: PortfolioService) { }
  
    ngOnInit(): void {
  
  this.portfolioService.getDatos().subscribe(portfolio => {
    console.log(portfolio);
    //this.infoPortfolio=portfolio.uno;
    this.nombre=portfolio.nombre;
    this.apellido=portfolio.apellido;
    this.puesto=portfolio.puesto;
    this.sobre=portfolio.sobre;
  
  });
    }
  }
  
  