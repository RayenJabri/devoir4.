import { Boisson } from './../model/boisson.model';
import { Component, OnInit } from '@angular/core';

import { BoissonService } from '../boisson.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-boisson',
  templateUrl: './add-boisson.component.html',
  styleUrls: ['./add-boisson.component.css']
})
export class AddBoissonComponent implements OnInit{
  newBoisson = new Boisson();
  constructor(private boissonService: BoissonService,
    private router :Router,
    private activatedRoute: ActivatedRoute,) { }
  ngOnInit(): void {
   
  }
  addBoisson(){
    this.boissonService.ajouterBoisson(this.newBoisson);
    this.router.navigate(['boissons']);
    }
    
}
