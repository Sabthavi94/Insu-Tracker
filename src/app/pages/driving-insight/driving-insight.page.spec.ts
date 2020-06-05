import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DrivingInsightPage } from './driving-insight.page';

describe('DrivingInsightPage', () => {
  let component: DrivingInsightPage;
  let fixture: ComponentFixture<DrivingInsightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivingInsightPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DrivingInsightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
