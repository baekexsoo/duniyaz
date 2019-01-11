import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformateurComponent } from './transformateur.component';

describe('TransformateurComponent', () => {
  let component: TransformateurComponent;
  let fixture: ComponentFixture<TransformateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
