import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacoRecentsComponent } from './taco-recents.component';

describe('TacoRecentsComponent', () => {
  let component: TacoRecentsComponent;
  let fixture: ComponentFixture<TacoRecentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacoRecentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TacoRecentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
