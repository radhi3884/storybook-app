import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public string = "";
  public  count = 1;
  
  
  ngOnInit(){
    let n = 5;
    this.string = "";
    
    // External loop
    for (let i = 1; i <= n; i++) {
      // printing spaces
      for (let j = 1; j <= n - i; j++) {
        this.string += "&nbsp";
      }
      // printing star
      for (let k = 0; k < 2 * i - 1; k++) {
        if(i === 1 || i === n) {
          // this.string += `*`;
          this.string += `<span class="color">*</span>`;
        }
        else {
          if(k === 0 || k === 2 * i - 2) {
            // this.string += `*`;
            this.string += `<span class="color">*</span>`;
          }
          else {
            this.string += "&nbsp";
          }
        }
      }
      this.string += `<br>`;
    }
    console.log(this.string);
  }
  
  
  }