import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  
  public offset: number = 0
  private url: string = "https://pokeapi.co/api/v2/pokemon";
  private AllPokeurl: string = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=`;
  Callback: boolean = false

  constructor(private http : HttpClient) { }

  getPokemon(name: string){
    return this.http.get(`${this.url}/${name}`);
  }
  getAllPokemon(){
    if(this.Callback){
      this.offset = this.offset + 10 
    }
    this.Callback = true
    return this.http.get(this.AllPokeurl+this.offset)
  }
  getDataPokemon(url: string){
    return this.http.get(`${url}`);
  }
}
