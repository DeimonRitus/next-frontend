import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatFormField} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {StoryService} from "../../services/story.service";
import {storyData} from "../../interfaces/types";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-story-card-component',
  standalone: true,
  imports: [MatCardModule, MatButton, MatPaginator, MatFormField, MatIcon, MatInput, FormsModule, MatIconButton, MatProgressSpinner],
  templateUrl: './story-card-component.component.html',
  styleUrl: './story-card-component.component.scss'
})
export class StoryCardComponentComponent {

  globalData: storyData[] | undefined;
  searchData: string | undefined = '' ;
  data: storyData[] | undefined;
  length: number = 100;
  pageSize: number | undefined;
  page: any = 0;
  pageSizeOptions= [5, 10, 25, 100];
  isLoading: boolean = false;
  isSearching: boolean = false;

  constructor(protected StoryService: StoryService) { }
  ngOnInit() {
    this.isLoading = true;
    this.StoryService.getData(1,5)
      .subscribe(response => {
        this.data = response;
        this.globalData = response;
        this.isLoading = false;
      });
  }

  viewPage(url: string) {
    window.open(url, "_blank");
  }

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.page = event.pageIndex;

    this.isLoading = true;

    this.StoryService.getData(this.page, this.pageSize).subscribe(response => {
      this.data = response;
      this.globalData = {...this.globalData, ...response}
      this.isLoading = false;
    })
  }

  search(event: InputEvent) {
    this.isSearching = true;
    const searchParams: string | undefined = event.data?.toLowerCase();
    this.searchData = this.searchData?.concat(<string>searchParams);
    console.log(this.searchData);
    if (event.data?.length){
      this.data = this.globalData?.filter((item: storyData) => {
        return item.title?.toLowerCase().includes(<string>this.searchData);
      });
    } else {
      this.isSearching = false;
      this.data = this.globalData;
      this.searchData = '';
    }
  }
}
