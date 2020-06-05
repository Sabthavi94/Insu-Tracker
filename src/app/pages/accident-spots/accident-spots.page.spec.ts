import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccidentSpotsPage } from './accident-spots.page';

describe('AccidentSpotsPage', () => {
  let component: AccidentSpotsPage;
  let fixture: ComponentFixture<AccidentSpotsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentSpotsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccidentSpotsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
