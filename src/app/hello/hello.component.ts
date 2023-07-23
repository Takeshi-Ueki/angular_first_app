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
  nowClass: any;
  nowStyle: any;
  styleMessage!: string;

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

    // ngClass用
    this.nowClass = {
      'thin': false,
      'large': false,
      'frame': false
    };

    // ngStyle用
    this.nowStyle = {
      'border-style': '',
      'border-width': '',
      'border-color': ''
    };

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

  check(c1: boolean, c2: boolean, c3: boolean) {
    this.nowClass.thin = c1;
    this.nowClass.large = c2;
    this.nowClass.frame = c3;
  }

  styleCheck(in1: string, in2: string, in3: string) {
    this.nowStyle['border-style'] = in1,
    this.nowStyle['border-width'] = in2 + 'px',
    this.nowStyle['border-color'] = in3
    this.styleMessage = JSON.stringify(this.nowStyle);
  }
}
