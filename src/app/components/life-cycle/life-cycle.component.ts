import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})

export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() number = 10;
  
  constructor() { 
    console.log('Chamou o construtor');
  }

  ngOnChanges(): void {
    console.log('Chamou o on Changes');
  }

  ngOnInit(): void {
    console.log('Chamou o on Init');
  }

  ngDoCheck(): void {
    console.log('Chamou o Do Check');
  }
  
  ngAfterContentInit(): void {
    console.log('Chamou o After Content Init');
  }

  ngAfterContentChecked(): void {
    console.log('Chamou o After Content Checked');
  }

  ngAfterViewInit(): void {
    console.log('Chamou o After View Init');
  }

  ngAfterViewChecked():void {
    console.log('Chamou o After View Checked');
  }
    
  ngOnDestroy(): void {
    console.log('Chamou o On Destroy');
  }
    
}
