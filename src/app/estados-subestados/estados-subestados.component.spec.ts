import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosSubestadosComponent } from './estados-subestados.component';

describe('EstadosSubestadosComponent', () => {
  let component: EstadosSubestadosComponent;
  let fixture: ComponentFixture<EstadosSubestadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadosSubestadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadosSubestadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
