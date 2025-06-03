
import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'app/shared/services';


import { PokeSearchComponent } from '../poke-search/poke-search.component';
import { NgIf, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PokePaginationComponent } from '../poke-pagination/poke-pagination.component';
import { PaginationInterface, PokemonInterface } from 'app/shared/models';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss',
  standalone: true,
  imports: [PokeSearchComponent, NgIf, NgFor, RouterLink, PokePaginationComponent]
})
export class PokeListComponent implements OnInit {

  getAllPokemons!: PokemonInterface[];
  apiError: boolean = false;
  isSearch: boolean = true;
  pagination: PaginationInterface = {
    offset: 0,
    limit: 10,
    totalCount: 0
  }

  private setAllPokemons!: PokemonInterface[];

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon(): void {
    this.pokeApiService.apiListAllPokemons(this?.pagination?.offset, this?.pagination?.limit).subscribe(
      res => {
        this.setAllPokemons = res?.results
        this.getAllPokemons = this.setAllPokemons
        this.pagination.totalCount = res?.count

      },
      error => {
        this.apiError = true;
      }
    )
  }

  getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    })
    this.getAllPokemons = filter ? filter : this.setAllPokemons
    this.isSearch = this.getAllPokemons.length == this.setAllPokemons.length

  }

  page(valuePage: PaginationInterface) {
    this.pagination.limit = valuePage.limit;
    this.pagination.offset = valuePage.offset;
    this.getPokemon()
  }
}
