import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuxiemeComponent } from './deuxieme.component';

describe('DeuxiemeComponent', () => {
  let component: DeuxiemeComponent;
  let fixture: ComponentFixture<DeuxiemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeuxiemeComponent]
    });
    fixture = TestBed.createComponent(DeuxiemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
