import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertProdottiComponent } from './insert-prodotti.component';

describe('InsertProdottiComponent', () => {
  let component: InsertProdottiComponent;
  let fixture: ComponentFixture<InsertProdottiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertProdottiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertProdottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
