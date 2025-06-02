
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NgIf } from '@angular/common';
import { ButtonGeneralComponent } from '../button-general/button-general.component';
import { PaginationInterface, PokemonInterface } from 'app/shared/models';

@Component({
  selector: 'poke-pagination',
  templateUrl: './poke-pagination.component.html',
  styleUrl: './poke-pagination.component.scss',
  standalone: true,
  imports: [NgIf, ButtonGeneralComponent]
})
export class PokePaginationComponent {

  @Input() dataPokemon!: PokemonInterface[];
  @Input() CurrentPaginationConfig!: PaginationInterface;

  @Output() PaginationConfig = new EventEmitter<PaginationInterface>();

  nextPage(): void {
    if (this.CurrentPaginationConfig?.offset + this.CurrentPaginationConfig?.limit < this.CurrentPaginationConfig?.totalCount) {
      this.CurrentPaginationConfig.offset = this.CurrentPaginationConfig?.offset + this.CurrentPaginationConfig?.limit;
      this.sendPaginatonConfig();
    }
  }

  previousPage(): void {
    if (this.CurrentPaginationConfig?.offset) {
      this.CurrentPaginationConfig.offset = this.CurrentPaginationConfig?.offset - this.CurrentPaginationConfig?.limit;
      this.sendPaginatonConfig();
    }
  }

  sendPaginatonConfig(): void {
    this.PaginationConfig.emit(this.CurrentPaginationConfig);
  }

}
