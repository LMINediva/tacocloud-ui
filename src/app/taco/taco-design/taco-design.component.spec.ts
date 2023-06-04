import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacoDesignComponent } from './taco-design.component';

describe('TacoDesignComponent', () => {
  let component: TacoDesignComponent;
  let fixture: ComponentFixture<TacoDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TacoDesignComponent]
    });
    fixture = TestBed.createComponent(TacoDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
