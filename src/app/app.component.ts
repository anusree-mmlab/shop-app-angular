import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  testHtml = '<div style="border:solid 1px" >ABCD</div>';

  swapTDisplay(tvar) {
    console.log(tvar);
  }
}
