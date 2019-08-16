import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {httpInterceptorProviders} from './auth/auth-interceptor';
import {JwtModule} from '@auth0/angular-jwt';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {LoginComponent} from './views/login/login.component';
import {HomeComponent} from './views/home/home.component';
import {ProjectsComponent} from './views/projects/projects.component';
import {ProfilesComponent} from './views/profiles/profiles.component';
import {AdminComponent} from './views/admin/admin.component';
import {MdlUpgradeElementsDirective} from './_directives/mdl-upgrade-elements.directive';
import {CreateUpdateProjectComponent} from './views/projects/create-update-project/create-update-project.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';

export function tokenGetter() {
  return sessionStorage.getItem('AuthToken');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProjectsComponent,
    ProfilesComponent,
    AdminComponent,
    MdlUpgradeElementsDirective,
    CreateUpdateProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgbModule,
    SnotifyModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  entryComponents: [
    CreateUpdateProjectComponent
  ],
  providers: [
    httpInterceptorProviders,
    {provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
