import { Component, OnInit } from '@angular/core';
import colors from 'src/assets/colors.json';
import * as default_colors from 'src/assets/default_colors.json';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  cols = colors;
  grays: string[] = [];
  purples: string[] = [];
  blues: string[] = [];
  oranges: string[] = [];
  selectedRALGray: string = default_colors.selectedRALGray;
  selectedRALOrange: string = default_colors.selectedRALOrange;
  selectedRALPurple: string = default_colors.selectedRALPurple;
  selectedRALBlue: string = default_colors.selectedRALBlue;
  selectedGray = colors[this.selectedRALGray]['rgb_hex'];
  selectedOrange = colors[this.selectedRALOrange]['rgb_hex'];
  selectedPurple = colors[this.selectedRALPurple]['rgb_hex'];
  selectedBlue = colors[this.selectedRALBlue]['rgb_hex'];

  constructor() {
    for (const k in colors) {
      if (k.startsWith('7')) {
        this.grays.push(k);
      } else if (k.startsWith('5')) {
        this.blues.push(k);
      } else if (k.startsWith('2')) {
        this.oranges.push(k);
      } else if (k.startsWith('1')) {
        this.oranges.push(k);
      } else if (k.startsWith('4')) {
        this.purples.push(k);
      } else if (k.startsWith('3')) {
        this.purples.push(k);
      }
    }
  }

  onSelect(event: MouseEvent) {
    const target = <HTMLInputElement>event.target;
    if (target.id.startsWith('7')) {
      this.selectedRALGray = target.id;
      this.selectedGray = this.cols[this.selectedRALGray]['rgb_hex'];
    }
    if (target.id.startsWith('4')) {
      this.selectedRALPurple = target.id;
      this.selectedPurple = this.cols[this.selectedRALPurple]['rgb_hex'];
    }
    if (target.id.startsWith('3')) {
      this.selectedRALPurple = target.id;
      this.selectedPurple = this.cols[this.selectedRALPurple]['rgb_hex'];
    }
    if (target.id.startsWith('5')) {
      this.selectedRALBlue = target.id;
      this.selectedBlue = this.cols[this.selectedRALBlue]['rgb_hex'];
    }
    if (target.id.startsWith('1')) {
      this.selectedRALOrange = target.id;
      this.selectedOrange = this.cols[this.selectedRALOrange]['rgb_hex'];
    }
    if (target.id.startsWith('2')) {
      this.selectedRALOrange = target.id;
      this.selectedOrange = this.cols[this.selectedRALOrange]['rgb_hex'];
    }
  }

  ngOnInit() {
  }

}
