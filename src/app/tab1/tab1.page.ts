import { Component } from '@angular/core';
import { CardsComponent } from '../components/cards/cards.component';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  results: any = [];
  query!:string;
  
  constructor(
    private pokemonService: PokemonServiceService,
    private router:Router) {
  }

  handleChange(evt: any) {
    this.query = evt.target.value.toLowerCase();
    this.pokemonService.getPokemon(this.query).subscribe((index)=>{
      let stringDocs = JSON.stringify(index);
      let docs = JSON.parse(stringDocs)
      let result= {
        name: docs.name,
        image: docs.sprites.front_default
      }
      this.results.push(result)
      // this.results = this.data.filter((d:any) => d.toLowerCase().indexOf(this.query) > -1);
    })
  }
  DetailPokemon(name: string){
    this.router.navigate([`/tabs/tab2/${name}`])
  }
  


}
