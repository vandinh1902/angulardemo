import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoHelloComponent } from './demo-hello.component';

describe('DemoHelloComponent', () => {
  let component: DemoHelloComponent;
  let fixture: ComponentFixture<DemoHelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoHelloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
