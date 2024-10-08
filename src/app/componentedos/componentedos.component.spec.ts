import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentedosComponent } from './componentedos.component';

describe('ComponentedosComponent', () => {
  let component: ComponentedosComponent;
  let fixture: ComponentFixture<ComponentedosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentedosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentedosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
