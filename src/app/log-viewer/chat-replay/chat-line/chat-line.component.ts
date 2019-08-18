import { Component, Input } from '@angular/core';
import { IChatLog } from 'models';

@Component({
  selector: 'app-chat-line',
  templateUrl: './chat-line.component.html',
  styleUrls: ['./chat-line.component.scss']
})
export class ChatLineComponent {
  @Input()
  public chatLog: IChatLog;

  constructor() { }

  public getColor(color: string) {
    return color || 'gray';
  }

  public getLighterColor(color: string) {
    if (!color) {
      return '#f0f0f0';
    }
    const r = color.substring(1, 3);
    const g = color.substring(3, 5);
    const b = color.substring(5, 7);
    // tslint:disable-next-line: max-line-length
    return '#' + (255 - Math.floor((255 - parseInt(r, 16)) * 0.1)).toString(16) + (255 - Math.floor((255 - parseInt(g, 16)) * 0.1)).toString(16) + (255 - Math.floor((255 - parseInt(b, 16)) * 0.1)).toString(16);
  }
}