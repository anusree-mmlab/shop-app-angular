import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  serverHead = 'app';
  testHtml = '<div style="border:solid 1px" >ABCD</div>';

  swapTDisplay(tvar) {
    console.log(tvar);
  }

  addNameToHeader(serverName:any) {console.log('===', serverName);
    this.serverHead = serverName;
  }

  ngOnInit() {

  }
}
