import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {StoryCardComponentComponent} from "./components/story-card-component/story-card-component.component";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {SideBarComponentComponent} from "./components/side-bar-component/side-bar-component.component";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StoryCardComponentComponent, MatGridList, MatGridTile, SideBarComponentComponent, MatToolbar, MatIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'next-frontend';
}
