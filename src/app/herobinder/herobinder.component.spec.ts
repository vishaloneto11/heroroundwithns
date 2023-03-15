import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerobinderComponent } from './herobinder.component';

describe('HerobinderComponent', () => {
  let component: HerobinderComponent;
  let fixture: ComponentFixture<HerobinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerobinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerobinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
