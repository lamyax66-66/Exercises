import { Component, signal } from '@angular/core';
import { MaskPipe } from './pipes/mask/mask-pipe';
import { StatusLabelPipe } from './pipes/statusLabel/status-label-pipe';

@Component({
  selector: 'app-root',
  imports: [MaskPipe,StatusLabelPipe],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('reactiveForm');

  text ="123456789";
  num = 123456789;
  testUndefined = undefined;
  testNull = null ;
  empty="";

  test1= 0
  test2="2"
}
