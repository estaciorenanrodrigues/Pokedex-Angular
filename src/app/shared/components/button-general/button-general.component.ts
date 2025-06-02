import { Component, input, Input } from '@angular/core';

@Component({
    selector: 'button-general',
    templateUrl: './button-general.component.html',
    styleUrl: './button-general.component.scss',
    standalone: true
})
export class ButtonGeneralComponent {

  @Input() label!: string;
  @Input() isDisabled!: boolean;

}
