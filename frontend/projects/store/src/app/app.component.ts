import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
      NgSwitch,
      NgSwitchDefault,
      NgSwitchCase,
      RouterOutlet,
      RouterLinkWithHref
    ]
})
export class AppComponent {
  title = 'store';
}
