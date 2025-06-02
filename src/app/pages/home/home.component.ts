import { Component, OnInit } from '@angular/core';

import { PokeHeaderComponent, PokeListComponent } from 'app/shared/components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [PokeHeaderComponent, PokeListComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
