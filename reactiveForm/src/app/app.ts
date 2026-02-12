import { Component, signal } from '@angular/core';
import { Toggle } from './Exer4/toggle/toggle';
import { Card } from './Exer5/card/card';

@Component({
  selector: 'app-root',
  imports: [Toggle ,Card],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('reactiveForm');

  isDark = signal<boolean>(true);
  isNotificationsOn = signal<boolean>(false);

  onDarkModeToggle(value: boolean) {
    this.isDark.set(value);
    console.log(value);
  }

  onNotificationsToggled(value: boolean) {
    this.isNotificationsOn.set(value);

    if (value) {
      alert('Notifications Enabled ✅');
    } else {
      alert('Notifications Disabled ❌');
    }
  }


 
}
