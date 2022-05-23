import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DrEstranhoMtVsLkPage } from './dr-estranho-mt-vs-lk.page';

describe('DrEstranhoMtVsLkPage', () => {
  let component: DrEstranhoMtVsLkPage;
  let fixture: ComponentFixture<DrEstranhoMtVsLkPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DrEstranhoMtVsLkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DrEstranhoMtVsLkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
