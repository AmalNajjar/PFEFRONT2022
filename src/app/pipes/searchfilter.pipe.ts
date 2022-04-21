import { Pipe, PipeTransform } from '@angular/core';
import { Compte } from '../models/compte';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(comptes: Compte[],searchValue:string): Compte[] {
   if(!comptes || !searchValue){
     return comptes;
   }
   return comptes.filter(compte=>
    compte.prenom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    compte.nom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    compte.direction.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
    compte.email.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }

}
