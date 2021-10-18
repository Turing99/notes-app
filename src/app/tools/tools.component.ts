import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent implements OnInit {
  title: string = 'something';
  titleColor: string = 'red';
  noteContent: string = '';
  inputColor: string = '';
  currentDate = Date.now();

  array = new Array('Maria', 'Tom', 'Alex', 'Laur');

  responseData = [
    {
      sent: '2019-11-10 12:00:00',
    },
    {
      sent: '2020-10-30 08:00:00',
    },
    {
      sent: '2021-12-30 10:00:00',
    },
  ];
  calculateDiff(dateSent) {
    let currentDate = new Date();
    dateSent = new Date(dateSent);

    return Math.floor(
      (Date.UTC(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate()
      ) -
        Date.UTC(
          dateSent.getFullYear(),
          dateSent.getMonth(),
          dateSent.getDate()
        )) /
        (1000 * 60 * 60 * 24)
    );
  }

  constructor() {}

  ngOnInit(): void {
    this.title = 'something else';
    this.titleColor = ' green';
  }

  buttonClick(colorText: string): void {
    this.titleColor = colorText;
  }
}
