import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatList, MatListItem} from "@angular/material/list";

@Component({
  selector: 'app-side-bar-component',
  standalone: true,
  imports: [
    MatButton,
    MatIcon,
    MatList,
    MatListItem
  ],
  templateUrl: './side-bar-component.component.html',
  styleUrl: './side-bar-component.component.scss'
})
export class SideBarComponentComponent {

}
