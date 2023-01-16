import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() name = '';

  childData: string =
    'Child Component passed to parent component using @ViewChild and AfterViewInit';

  constructor() {}

  ngOnInit(): void {}
}
