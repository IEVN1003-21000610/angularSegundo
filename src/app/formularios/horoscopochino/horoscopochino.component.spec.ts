import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoroscopochinoComponent } from './horoscopochino.component';

describe('HoroscopochinoComponent', () => {
  let component: HoroscopochinoComponent;
  let fixture: ComponentFixture<HoroscopochinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoroscopochinoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoroscopochinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
