var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { UtilisateurService } from '../../providers/utilisateur/utilisateur.service';
import { ActivatedRoute, Router } from '@angular/router';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(route, profil, router) {
        this.route = route;
        this.profil = profil;
        this.router = router;
        this.rec_session = sessionStorage.compte;
        this.bienve();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (this.rec_session === null || this.rec_session === undefined) {
            this.donne = this.route.snapshot.params['/home'];
        }
    };
    HeaderComponent.prototype.bienve = function () {
        var _this = this;
        return this.profil.welcome(this.rec_session).subscribe(function (Response) {
            _this.data_mail = Response.nom;
            console.log(_this.data_mail);
        });
    };
    HeaderComponent.prototype.logout = function () {
        sessionStorage.removeItem('duniya');
        sessionStorage.removeItem('compte');
        this.router.navigate(['/home']);
    };
    HeaderComponent = __decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute, UtilisateurService, Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map