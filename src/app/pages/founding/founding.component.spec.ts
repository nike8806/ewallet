import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundingComponent } from './founding.component';

describe('FoundingComponent', () => {
  let component: FoundingComponent;
  let fixture: ComponentFixture<FoundingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
