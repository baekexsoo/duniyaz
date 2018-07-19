var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { UtilisateurService } from '../../providers/utilisateur/utilisateur.service';
import { Constant } from '../api';
import { WindowRefService } from './../window-ref.service';
var SigninFormComponent = /** @class */ (function () {
    function SigninFormComponent(inscr, window) {
        this.inscr = inscr;
        this.window = window;
        this.inscrit = {
            email: "",
            nom: "",
            numero: "",
            type: "PRODUCTEUR"
        };
        this.lien = new Constant();
        this.loading = false; // a l'initialisation le loading est toujours FALSE
        this.warning = "";
        this.suscribed = false; // variable définssant si l'enregistrement a été effectué avec succès
        this.rec_mail = this.inscrit.email;
    }
    SigninFormComponent.prototype.ngOnInit = function () {
        // console.log(this.window.location.origin);
    };
    SigninFormComponent.prototype.sign = function () {
        var _this = this;
        this.loading = true;
        this.warning = "";
        console.log(this.window.nativeWindow.location.origin);
        return this.inscr.inscription(this.window.nativeWindow.location.origin + "/update", JSON.stringify(this.inscrit)).subscribe(function (response) {
            _this.loading = false;
            _this.suscribed = true; // affecter a true, si l'inscription est réussie 
        }, function (err) {
            if (err.status === 500) {
                _this.warning = "Ce compte email existe déjà.";
            }
            else {
                if (err.status === 415) {
                    _this.warning = "Informations Incorrectes. Vérifiez L'email";
                }
                else {
                    _this.warning = "Une erreur est survenue. Veuillez reessayer";
                }
            }
            _this.loading = false;
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SigninFormComponent.prototype, "rec_mail", void 0);
    SigninFormComponent = __decorate([
        Component({
            selector: 'app-signin-form',
            templateUrl: './signin-form.component.html',
            styleUrls: ['./signin-form.component.css']
        }),
        __metadata("design:paramtypes", [UtilisateurService, WindowRefService])
    ], SigninFormComponent);
    return SigninFormComponent;
}());
export { SigninFormComponent };
//# sourceMappingURL=signin-form.component.js.map