import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeproductComponent } from './homeproduct.component';

describe('HomeproductComponent', () => {
  let component: HomeproductComponent;
  let fixture: ComponentFixture<HomeproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
