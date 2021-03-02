import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {
  @Input() jokes: any={};
  
  constructor() { }

  ngOnInit(): void {
  }

}
