import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTvshowComponent } from './detail-tvshow.component';

describe('DetailTvshowComponent', () => {
  let component: DetailTvshowComponent;
  let fixture: ComponentFixture<DetailTvshowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailTvshowComponent]
    });
    fixture = TestBed.createComponent(DetailTvshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
