import { Injectable } from '@angular/core';
import { Boisson } from './model/boisson.model';

@Injectable({
  providedIn: 'root'
})
export class BoissonService {

  boissons : Boisson[];
 
  boisson! : Boisson;
  constructor() {
    this.boissons = [
      {idBoisson: 1, nomBoisson : "Express", prixBoisson : 3.5, dateServire: new Date("11/11/2023")},
      {idBoisson: 2, nomBoisson : "jus d'orange", prixBoisson : 6.0, dateServire: new Date("11/11/2023")},
      {idBoisson: 3, nomBoisson : "cafee au lait", prixBoisson : 3.0, dateServire: new Date("11/11/2023")},
    ];
    }
    listeBoisson():Boisson[] {
      return this.boissons;
    }
    ajouterBoisson( boi: Boisson){
      this.boissons.push(boi);
     }
  supprimerBoisson( b: Boisson){
   
    const index = this.boissons.indexOf(b, 0);
    if (index > -1) {
    this.boissons.splice(index, 1);
    } 
  }
  consulterBoisson(id:number): Boisson{
    this.boisson = this.boissons.find(p => p.idBoisson == id)!;
    return this.boisson;
    }
    
trierBoisson(){
  this.boissons = this.boissons.sort((n1,n2) => {
  if (n1.idBoisson! > n2.idBoisson!) {
  return 1;
  }
  if (n1.idBoisson! < n2.idBoisson!) {
  return -1;
  }
  return 0;
  });
  }
  updateBoisson(b:Boisson)
    {

     this.supprimerBoisson(b);
      this.ajouterBoisson(b);
     this.trierBoisson();
}
}
