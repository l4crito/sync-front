import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit, AfterViewInit {
  @Output() send = new EventEmitter<string>();
  @ViewChild('txtMessage') txtMessage: ElementRef;
  message = '';
  constructor() { }
  ngAfterViewInit(): void {
    this.txtMessage.nativeElement.focus();
  }

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
