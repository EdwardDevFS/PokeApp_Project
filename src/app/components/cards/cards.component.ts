import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';
import { Tab2Page } from 'src/app/tab2/tab2.page';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular'
import { InfiniteScrollCustomEvent } from '@ionic/angular';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent  implements OnInit {


  component = Tab2Page;
  name!: string;  
  public pokemons: any = [] 
  constructor(
    private pokemonService: PokemonServiceService,
    private router: Router,
    private loadingCtrl: LoadingController
    ) { }

  ngOnInit() {
    this.showLoading()
  }
  
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 3000,
      spinner: 'circles',
    });
    
    loading.present();
    this.getPokemons()
  }
  getPokemons(){
    this.pokemonService.getAllPokemon().subscribe((index)=>{
      let stringDocs = JSON.stringify(index);
      let docs = JSON.parse(stringDocs)
      let results = docs.results
      results.forEach((i:any)=>{
        let pokemon= {
          name: i.name,
          image: null
        };
        this.pokemonService.getDataPokemon(i.url).subscribe((index:any)=>{
            let image = index.sprites.front_default
            pokemon.image = image 
          })
          this.pokemons.push(pokemon)
        })
      })

  }
  DetailPokemon(name: string){
    this.showLoading()
    this.router.navigate([`/tabs/tab2/${name}`])
  }
  onIonInfinite(ev:any) {
    this.getPokemons();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}
