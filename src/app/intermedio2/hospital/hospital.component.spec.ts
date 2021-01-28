import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalComponent } from './hospital.component';

describe('HospitalComponent', () => {
  let component: HospitalComponent;
  let fixture: ComponentFixture<HospitalComponent>;

  beforeEach(async(() => {

    // Todo esto no es necesario con async porque trabajamos con webpack, lo refactorizamos
    // al siguiente beforeEach

    /* TestBed.configureTestingModule({
      declarations: [ HospitalComponent ]
    })
    .compileComponents(); // no es necesario porque trabajamos con webpack */
  }));

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ HospitalComponent ], // los componentes que necesitamos para el test
      providers: [], // los servicios necesarios
      imports: [] // otros servicios u otros módulos
    });

    fixture = TestBed.createComponent(HospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
