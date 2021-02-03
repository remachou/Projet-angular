import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimamouComponent } from './limamou.component';

describe('LimamouComponent', () => {
  let component: LimamouComponent;
  let fixture: ComponentFixture<LimamouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimamouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimamouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
