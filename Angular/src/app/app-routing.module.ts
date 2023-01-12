import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { StudentProfilComponent } from './components/Profil/student-profil/student-profil.component';
import { StudentSettingProfilComponent } from './components/Profil/student-setting-profil/student-setting-profil.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'admin',component:AdminComponent},
  {path:'student-profil',component:StudentProfilComponent},
  {path:'student-setting-profil',component:StudentSettingProfilComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
