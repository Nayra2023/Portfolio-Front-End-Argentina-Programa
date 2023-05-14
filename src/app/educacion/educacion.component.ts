import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
educacion: any=[ ];

  
    constructor(private portfolioService: PortfolioService) { }
  
    ngOnInit(): void {
  
  this.portfolioService.getDatos().subscribe(portfolio => {
    console.log(portfolio);
    //this.infoPortfolio=portfolio.uno;
  this.educacion=portfolio.edu;

  
  });
    }
  }
  
