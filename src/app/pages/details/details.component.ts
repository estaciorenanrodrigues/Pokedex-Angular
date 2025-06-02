import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';

import { NgIf, NgFor } from '@angular/common';
import { PokeApiService } from 'app/shared/services';
import { PokeHeaderComponent } from 'app/shared/components';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  standalone: true,
  imports: [PokeHeaderComponent, NgIf, NgFor, RouterLink]
})
export class DetailsComponent implements OnInit {

  public pokemon: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;


  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService

  ) { }

  ngOnInit() {
    this.getPokemon;
  }

  get getPokemon() {
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemon(`${this.urlPokemon}/${id}`)
    const name = this.pokeApiService.apiGetPokemon(`${this.urlName}/${id}`)

    return forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res
        this.isLoading = true
      },
      error => {
        this.apiError = true;
        this.isLoading = false
      }

    )

  }

}
