import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit {
  @Output() send = new EventEmitter<string>();
  @ViewChild('txtMessage') txtMessage: ElementRef;
  message = '';
  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(): void {
    if (this.message) {
      this.send.emit(this.message);
      this.message = '';
      this.txtMessage.nativeElement.focus();
    }
  }

}
