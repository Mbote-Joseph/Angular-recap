import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit, AfterViewInit {
  name: string =
    'Parent Component to be passed to child component using @Input';

  @ViewChild(ChildComponent) child: any;
  childMessage: string = '';

  constructor() {
    console.log('ParentComponent constructor');
    console.log('ViewChild child', this.child);
  }
  ngAfterViewInit(): void {
    console.log('ParentComponent ngAfterViewInit');
    console.log('ViewChild child', this.child);
    this.childMessage = this.child.childData;
  }

  ngOnInit(): void {}
}
