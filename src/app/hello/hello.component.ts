import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  /* テンプレートインライン
  template: `
    <div id="body">
      <h1>{{inlineTitle}}</h1>
      <p>{{inlineMessage}}</p>
    </div>
  `
  */
})
export class HelloComponent {
  
  title!: string;
  message!: string;
  styleClass!: string;
  now!: Date;
  count!: number;
  countMessage!: string;
  input!: string;
  inputMessage!: string;
  visible!: boolean;
  data!: string[];
  switch!: string;

  // inlineTitle!: string;
  // inlineMessage!: string;

  constructor() {
    setInterval(() => {
      this.now = new Date();
      this.styleClass = this.styleClass == 'red' ? 'blue' : 'red';
    }, 1000);
  }

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = 'This is My First Component!!';
    this.styleClass = 'red';
    this.count = 0;
    this.countMessage = 'ボタンをクリック！！';
    this.input = '';
    this.inputMessage = 'please type...';
    this.visible = true;
    this.data = [
      'first',
      'second',
      'third'
    ]
    this.switch = 'one';

    // this.inlineTitle = 'Hello-app-inline';
    // this.inlineMessage = 'This is inline-template!';
  }

  doType(val: string) {
    this.input = val;
    this.inputMessage = 'you type: ' + this.input;
  }

  doClick() {
    this.countMessage = ++this.count + '回クリックされました';
    // this.count++;
  }

  today() {
    return this.now.toLocaleString();
  }

  doIfClick() {
    if (this.visible) {
      this.visible = false;
    } else {
      this.visible = true;
    }
  }

  doSelect(val: string) {
    this.switch = val;
  }
}
