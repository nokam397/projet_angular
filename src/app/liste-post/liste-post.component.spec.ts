import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePostComponent } from './liste-post.component';

describe('ListePostComponent', () => {
  let component: ListePostComponent;
  let fixture: ComponentFixture<ListePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
