import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DernierBlogComponent } from './dernier-blog.component';

describe('DernierBlogComponent', () => {
  let component: DernierBlogComponent;
  let fixture: ComponentFixture<DernierBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DernierBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DernierBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
