import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteListagemComponent } from './paciente-listagem.component';

describe('PacienteListagemComponent', () => {
  let component: PacienteListagemComponent;
  let fixture: ComponentFixture<PacienteListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
