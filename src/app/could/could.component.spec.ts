import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouldComponent } from './could.component';

describe('CouldComponent', () => {
  let component: CouldComponent;
  let fixture: ComponentFixture<CouldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CouldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
