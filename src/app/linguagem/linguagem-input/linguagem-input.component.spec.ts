import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinguagemInputComponent } from './linguagem-input.component';

describe('LinguagemInputComponent', () => {
  let component: LinguagemInputComponent;
  let fixture: ComponentFixture<LinguagemInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinguagemInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinguagemInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
