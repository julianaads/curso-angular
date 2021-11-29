import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAtendimentoComponent } from './modal-atendimento.component';

describe('ModalAtendimentoComponent', () => {
  let component: ModalAtendimentoComponent;
  let fixture: ComponentFixture<ModalAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAtendimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
