import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProdutoComponent } from './formulario-produto.component';

describe('FormularioProdutoComponent', () => {
  let component: FormularioProdutoComponent;
  let fixture: ComponentFixture<FormularioProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
