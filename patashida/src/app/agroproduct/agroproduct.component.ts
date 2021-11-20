import { Component, Input, OnInit } from '@angular/core';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-agroproduct',
  templateUrl: './agroproduct.component.html',
  styleUrls: ['./agroproduct.component.css']
})
export class AgroproductComponent{
  @Input()
  deviceXs!: boolean;
 constructor (public loaderService:LoaderService){

 }

}
