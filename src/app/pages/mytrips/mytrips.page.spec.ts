import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MytripsPage } from './mytrips.page';

describe('MytripsPage', () => {
  let component: MytripsPage;
  let fixture: ComponentFixture<MytripsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytripsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MytripsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
