import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroproductComponent } from './agroproduct.component';

describe('AgroproductComponent', () => {
  let component: AgroproductComponent;
  let fixture: ComponentFixture<AgroproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgroproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgroproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
