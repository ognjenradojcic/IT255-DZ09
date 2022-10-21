import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBoxComponent } from './video-box.component';

describe('VideoBoxComponent', () => {
  let component: VideoBoxComponent;
  let fixture: ComponentFixture<VideoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
