import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuApplicazioneComponent } from './menu-applicazione.component';

describe('MenuApplicazioneComponent', () => {
  let component: MenuApplicazioneComponent;
  let fixture: ComponentFixture<MenuApplicazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuApplicazioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuApplicazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
