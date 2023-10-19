
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Boisson } from '../model/boisson.model';
import { BoissonService } from '../boisson.service';
@Component({
  selector: 'app-update-boisson',
  templateUrl: './update-boisson.component.html',
  styleUrls: ['./update-boisson.component.css']
})
export class UpdateBoissonComponent implements OnInit {
  currentBoisson = new Boisson();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
  private boissonService: BoissonService) { }
  ngOnInit() {

  this.currentBoisson = this.boissonService.consulterBoisson(this.activatedRoute.snapshot. params['id']);
  console.log(this.currentBoisson);
  } 
  updateBoisson()
  { 
  this.boissonService.updateBoisson(this.currentBoisson);
  this.router.navigate(['boissons']);
  }

}
 