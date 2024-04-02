import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Video } from 'src/app/model/tmdb.model';
import { CardVideoComponent } from './card-video.component';

describe('CardVideoComponent', () => {
  let component: CardVideoComponent;
  let fixture: ComponentFixture<CardVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardVideoComponent],
    });
    fixture = TestBed.createComponent(CardVideoComponent);
    component = fixture.componentInstance;
    component.video = { key: 'sadrfghsar' } as Video;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onOpenModal', () => {
    spyOn(component.openModal, 'emit');
    component.onOpenModal(component.video.key);
    expect(component.openModal.emit).toHaveBeenCalled();
  });
});
