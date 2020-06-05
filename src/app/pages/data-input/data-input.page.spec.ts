import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DataInputPage } from './data-input.page';

describe('DataInputPage', () => {
  let component: DataInputPage;
  let fixture: ComponentFixture<DataInputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataInputPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DataInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
