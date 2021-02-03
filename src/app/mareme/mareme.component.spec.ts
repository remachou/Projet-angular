import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaremeComponent } from './mareme.component';

describe('MaremeComponent', () => {
  let component: MaremeComponent;
  let fixture: ComponentFixture<MaremeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaremeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaremeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
