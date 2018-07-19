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
import { ActivatedRoute } from '@angular/router';
var UpdatePwdComponent = /** @class */ (function () {
    function UpdatePwdComponent(route, modif) {
        this.route = route;
        this.modif = modif;
        this.ancien = "";
        this.nouveau = "";
        this.confirme = "";
        this.sms_erreur = "";
        this.sms_reus = false;
        this.email_token = "";
        this.rece_token = "";
        this.confirm = false;
        this.email_token = sessionStorage.compte;
    }
    UpdatePwdComponent.prototype.ngOnInit = function () {
        this.tokens = this.route.snapshot.paramMap.get('ref?');
        this.affichage();
    };
    UpdatePwdComponent.prototype.affichage = function () {
        if (this.tokens === null || this.tokens === undefined) {
            this.act_btn = true;
        }
        else {
            this.act_btn = false;
        }
    };
    UpdatePwdComponent.prototype.finale = function () {
        var _this = this;
        if (this.tokens === null || this.tokens === undefined) {
            this.udapte_pass();
        }
        else {
            if (this.nouveau !== this.confirme) {
                this.sms_erreur = 'confirmez votre mot de passe';
                console.log(this.tokens);
                this.sms_reus = false;
            }
            else {
                return this.modif.update(this.nouveau, this.tokens).subscribe(function (response) {
                    _this.rece_resul = response;
                    _this.confirm = true;
                    _this.sms_reus = true;
                });
            }
        }
        this.charg = false;
    };
    UpdatePwdComponent.prototype.token = function () {
        var _this = this;
        return this.modif.welcome(this.email_token).subscribe(function (response) {
            _this.rece_pass = response.password;
            console.log(_this.rece_pass);
            if (_this.ancien === _this.rece_pass) {
                return _this.modif.modif_token(_this.email_token).subscribe(function (response) {
                    _this.rece_token = response;
                    console.log(_this.rece_token);
                    return _this.modif.update(_this.nouveau, _this.rece_token).subscribe(function (response) {
                        _this.rece_resul = response;
                        _this.confirm = true;
                        _this.sms_reus = true;
                    });
                });
            }
            else {
                _this.sms_erreur = "Ancien mot de passe incorrect";
            }
        }, function (err) {
            console.log(err);
            if (err.statusText === "Unknown Error") {
                _this.sms_erreur = "un problème à été rencontré veuillez ressayer plus tard.";
            }
            else {
                if (err.status === 500) {
                    _this.sms_erreur = "Identifiants incorrects.";
                }
            }
        });
    };
    UpdatePwdComponent.prototype.udapte_pass = function () {
        this.charg = true;
        if (this.ancien === "" || this.nouveau === "") {
            this.sms_erreur = 'Remplissez les champs';
        }
        else {
            if (this.nouveau !== this.confirme) {
                this.sms_erreur = 'confirmez votre mot de passe';
                this.sms_reus = false;
            }
            else {
                this.token();
                this.sms_erreur = "";
            }
        }
        this.charg = false;
    };
    UpdatePwdComponent = __decorate([
        Component({
            selector: 'app-update-pwd',
            templateUrl: './update-pwd.component.html',
            styleUrls: ['./update-pwd.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute, UtilisateurService])
    ], UpdatePwdComponent);
    return UpdatePwdComponent;
}());
export { UpdatePwdComponent };
//# sourceMappingURL=update-pwd.component.js.map