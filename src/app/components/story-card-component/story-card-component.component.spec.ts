import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StoryCardComponentComponent } from './story-card-component.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { StoryService } from "../../services/story.service";
import {storyData} from "../../interfaces/types";
import {environment} from "../../../environment";

describe('StoryCardComponentComponent', () => {
  let component: StoryCardComponentComponent;
  let fixture: ComponentFixture<StoryCardComponentComponent>;
  let httpTestingController: HttpTestingController;
  let storyService : StoryService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryCardComponentComponent, HttpClientTestingModule, BrowserAnimationsModule],
      providers: [StoryService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpTestingController = TestBed.inject(HttpTestingController);
    storyService = TestBed.inject(StoryService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch data from story service', () => {
    const testStoryData : storyData[] =
    [
      {
        id: 56,
        deleted: false,
        by: 'pg',
        time: 1160840625,
        text: null,
        dead: false,
        parent: 0,
        poll: null,
        kids: null,
        url: 'http://www.nytimes.com/2006/10/15/movies/15waxm.html?ex=1318564800&en=e5fbcfe899f7c41d&ei=5090&partner=rssuserland&emc=rss',
        score: 4,
        title: 'Cyberface: New technology that &#34;captures the soul&#34;',
        parts: null,
        descendants: 0
      }
    ];

    const complete_url = `${environment.url_api}/stories?page=${1}&pageSize=${5}`

    storyService.getData(1,1).subscribe(response => {
      expect(response).toHaveBeenCalled();
    });

    const req = httpTestingController.expectOne(complete_url);
    expect(req.request.method).toBe('GET');

    req.flush(testStoryData);

    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('mat-card-title').textContent).toContain(testStoryData[0].title);
  });

  it('should render search bar', () => {

    const matFormField: HTMLElement = fixture.nativeElement.querySelector('mat-form-field');
    const inputSearchBar: HTMLInputElement | null = matFormField.querySelector('input');

    expect(matFormField).toHaveClass('search-bar');
    expect(inputSearchBar).toBeTruthy();
  })

  it('should paginator at bottom', () => {
    const divPaginatorElement: HTMLElement = fixture.nativeElement.querySelector('#paginator');
    expect(divPaginatorElement).toHaveClass('footer');
  })

});
