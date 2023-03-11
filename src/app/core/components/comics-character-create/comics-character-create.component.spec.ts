import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsCharacterCreateComponent } from './comics-character-create.component';

describe('ComicsCharacterCreateComponent', () => {
  let component: ComicsCharacterCreateComponent;
  let fixture: ComponentFixture<ComicsCharacterCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicsCharacterCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicsCharacterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
