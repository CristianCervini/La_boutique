import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsProdottiComponent } from './cards-prodotti.component';

describe('CardsProdottiComponent', () => {
  let component: CardsProdottiComponent;
  let fixture: ComponentFixture<CardsProdottiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsProdottiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsProdottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
