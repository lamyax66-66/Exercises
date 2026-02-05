import { Component, signal } from '@angular/core';
import { MaskPipe } from './pipes/mask/mask-pipe';

@Component({
  selector: 'app-root',
  imports: [MaskPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('reactiveForm');

  text ="123456789";
  num = 123456789;
  undefined= undefined;
  null= null ;
  empty="";

}
