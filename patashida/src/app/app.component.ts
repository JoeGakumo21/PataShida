import { Component, OnDestroy, OnInit } from '@angular/core';
import {MediaObserver, MediaChange} from '@angular/flex-layout';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  title = 'patashida';
  mediaSub!: Subscription;

  constructor(public MediaObserver:MediaObserver){}

  ngOnInit(): void {
    this.mediaSub=this.MediaObserver.media$.subscribe((result:MediaChange)=>{
      console.log(result.mqAlias);
    })

  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }
}
