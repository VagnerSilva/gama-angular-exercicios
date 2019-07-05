import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinguagemItemComponent } from './linguagem-item.component';

describe('LinguagemItemComponent', () => {
  let component: LinguagemItemComponent;
  let fixture: ComponentFixture<LinguagemItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinguagemItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinguagemItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
