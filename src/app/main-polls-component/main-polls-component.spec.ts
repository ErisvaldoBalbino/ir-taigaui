import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPollsComponent } from './main-polls-component';

describe('MainPollsComponent', () => {
  let component: MainPollsComponent;
  let fixture: ComponentFixture<MainPollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPollsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainPollsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
