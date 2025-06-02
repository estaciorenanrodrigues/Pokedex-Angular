import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'poke-search',
    templateUrl: './poke-search.component.html',
    styleUrl: './poke-search.component.scss',
    standalone: true
})
export class PokeSearchComponent {

  @Output() public emmitSearch: EventEmitter<any> = new EventEmitter();

  public search(value: string): void {
    this.emmitSearch.emit(value)
  }

}
