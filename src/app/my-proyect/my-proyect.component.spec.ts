import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProyectComponent } from './my-proyect.component';

describe('MyProyectComponent', () => {
  let component: MyProyectComponent;
  let fixture: ComponentFixture<MyProyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProyectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
