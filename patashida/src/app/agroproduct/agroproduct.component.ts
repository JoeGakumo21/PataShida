import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agroproduct',
  templateUrl: './agroproduct.component.html',
  styleUrls: ['./agroproduct.component.css']
})
export class AgroproductComponent{
  @Input()
  deviceXs!: boolean;
 

}
