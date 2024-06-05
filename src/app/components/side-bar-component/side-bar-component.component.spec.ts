import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarComponentComponent } from './side-bar-component.component';
import {By} from "@angular/platform-browser";

describe('SideBarComponentComponent', () => {
  let component: SideBarComponentComponent;
  let fixture: ComponentFixture<SideBarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render newest stories button', () => {
    const buttonNewestStories = fixture.debugElement.queryAll(By.css('button'));
    expect(buttonNewestStories).toBeTruthy();
  });
});
