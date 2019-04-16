import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NComponentComponent } from './n-component.component';

describe('NComponentComponent', () => {
  let component: NComponentComponent;
  let fixture: ComponentFixture<NComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
