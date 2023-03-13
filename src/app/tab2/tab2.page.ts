import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  
  Namepokemon!:string;
  data = {
    base_experience: null,
    habilidades: null,
    movimientos: null,
    atributos: null,
    image: null
  }

  constructor(
    private activateRoute: ActivatedRoute,
    private pokemonService: PokemonServiceService,) {
    this.activateRoute.params.subscribe(params=>{
      this.Namepokemon = params['name'];
    })
  }
  ngOnInit(){
    this.pokemonService.getPokemon(this.Namepokemon).subscribe(index=>{
      let stringDocs = JSON.stringify(index);
      let docs = JSON.parse(stringDocs);
      this.data.base_experience = docs.base_experience;
      this.data.habilidades = docs.abilities; 
      this.data.movimientos = docs.moves; 
      this.data.atributos = docs.stats; 
      this.data.image = docs.sprites.front_default
    })
    console.log(this.Namepokemon)
  }

}
