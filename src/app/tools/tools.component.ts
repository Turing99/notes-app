import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent implements OnInit {
  title: string = 'Something';
  titleColor: string = 'red';
  noteContent: string = '';
  inputColor: string = '';

  constructor() {}

  ngOnInit(): void {}

  ButtonClick(colorText: string): void {
    // this.title = 'Something else';
    // this.titleColor = ' green';

    //gresit:
    // switch (colorText) {
    //   case 'red': {
    //     this.titleColor = 'red';
    //     break;
    //   }
    //   case 'blue': {
    //     this.titleColor = 'blue';
    //     break;
    //   }
    //   case 'green': {
    //     this.titleColor = 'green';
    //     break;
    //   }
    //   default: {
    //     this.titleColor = '';
    //     break;
    //   }
    // }

    this.titleColor = colorText;
  }
}
