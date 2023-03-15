import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  OneWayBinding_Interpolation: string = "This is One Way Data Binding";
  firstname: string = "";
}
