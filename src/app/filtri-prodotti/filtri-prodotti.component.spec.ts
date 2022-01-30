import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltriProdottiComponent } from './filtri-prodotti.component';

describe('FiltriProdottiComponent', () => {
  let component: FiltriProdottiComponent;
  let fixture: ComponentFixture<FiltriProdottiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltriProdottiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltriProdottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
