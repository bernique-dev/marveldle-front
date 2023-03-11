import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsCharacterGuessComponent } from './comics-character-guess.component';

describe('ComicsCharacterGuessComponent', () => {
  let component: ComicsCharacterGuessComponent;
  let fixture: ComponentFixture<ComicsCharacterGuessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicsCharacterGuessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicsCharacterGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
