import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCompnentComponent } from './blog-compnent.component';

describe('BlogCompnentComponent', () => {
  let component: BlogCompnentComponent;
  let fixture: ComponentFixture<BlogCompnentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlogCompnentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
