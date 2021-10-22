import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-parameter',
  templateUrl: './show-parameter.component.html',
  styleUrls: ['./show-parameter.component.scss']
})
export class ShowParameterComponent implements OnInit {

  public parameterValue: string;

  constructor(private _router: Router, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe(parameter =>{
      console.log(parameter);
      this.parameterValue = parameter.parameter;
    })
  }

}
