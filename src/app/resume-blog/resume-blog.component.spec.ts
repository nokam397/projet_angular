import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeBlogComponent } from './resume-blog.component';

describe('ResumeBlogComponent', () => {
  let component: ResumeBlogComponent;
  let fixture: ComponentFixture<ResumeBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
