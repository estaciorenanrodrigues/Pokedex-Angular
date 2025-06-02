import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(
    private http: HttpClient,
  ) { }

  apiListAllPokemons(offset: number, limit: number): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`).pipe(
      tap(res => res),
      tap(res => {
        res?.results?.map((resPokemon: any) => {

          this.apiGetPokemon(resPokemon.url).subscribe(
            res => resPokemon.status = res
          )
        })
      })
    )
  }

  public apiGetPokemon(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(
        res => res
      )
    )
  }

}
