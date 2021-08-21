import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  listCourse: string[] = ['TypeScript','JavaScript','JavaSE','C#','PHP'];
  enable: boolean = true;
  constructor() { }

  setEnable(): void{
      this.enable=(this.enable)?false:true;
  }
}
