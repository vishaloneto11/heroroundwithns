import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsdopipesComponent } from './letsdopipes.component';

describe('LetsdopipesComponent', () => {
  let component: LetsdopipesComponent;
  let fixture: ComponentFixture<LetsdopipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetsdopipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetsdopipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
