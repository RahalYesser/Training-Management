import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSettingProfilComponent } from './student-setting-profil.component';

describe('StudentSettingProfilComponent', () => {
  let component: StudentSettingProfilComponent;
  let fixture: ComponentFixture<StudentSettingProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSettingProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentSettingProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
