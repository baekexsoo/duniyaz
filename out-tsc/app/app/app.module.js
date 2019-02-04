var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { WindowRefService } from './window-ref.service';
//import { LocalStorage, SessionStorage } from '';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UtilisateurService } from '../providers/utilisateur/utilisateur.service';
import { Api } from '../providers/api/api';
import { SpaceUserComponent } from './space-user/space-user.component';
import { SigninComponent } from './signin/signin.component';
import { SigninFormComponent } from './signin-form/signin-form.component';
import { SmsCreatComponent } from './sms-creat/sms-creat.component';
import { UpdatePwdComponent } from './update-pwd/update-pwd.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { ProfilComponent } from './profil/profil.component';
import { RestaurationComponent } from './restauration/restauration.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { SelectionSolComponent } from './selection-sol/selection-sol.component';
import { AuthGuard } from './auth/auth.guard';
import { DatavizComponent } from './dataviz/dataviz.component';
var appRoutes = [
    { path: '', children: [
            { path: 'user', component: SpaceUserComponent },
            { path: 'profil', component: ProfilComponent },
            { path: 'visualisation', component: DatavizComponent },
        ], canActivate: [AuthGuard]
    },
    { path: 'update', component: UpdatePwdComponent },
    { path: 'prediction', component: SelectionSolComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'signin/form/sms', component: SmsCreatComponent },
    { path: 'update/activate/:ref?', component: UpdatePwdComponent },
    { path: 'restauration', component: RestaurationComponent },
    { path: 'h', component: SpaceUserComponent },
    { path: 'error', component: NotFoundComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                HeaderComponent,
                HomeComponent,
                SpaceUserComponent,
                SigninComponent,
                SigninFormComponent,
                SmsCreatComponent,
                UpdatePwdComponent,
                AnnonceComponent,
                ProfilComponent,
                RestaurationComponent,
                NotFoundComponent,
                FooterComponent,
                SelectionSolComponent,
                DatavizComponent
            ],
            imports: [
                FormsModule,
                BrowserModule,
                HttpClientModule,
                RouterModule,
                HttpModule,
                RouterModule.forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [
                UtilisateurService,
                Api,
                WindowRefService,
                AuthGuard
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map