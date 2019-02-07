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
import { WindowRefService } from './../window-ref.service';
var RestaurationComponent = /** @class */ (function () {
    function RestaurationComponent(restaurer, window) {
        this.restaurer = restaurer;
        this.window = window;
        this.mail = '';
        this.loading = false;
        this.sms_err = '';
        this.confirm = false;
        this.Email = '';
    }
    RestaurationComponent.prototype.ngOnInit = function () {
        this.Email = sessionStorage.compte;
    };
    RestaurationComponent.prototype.restor = function () {
        var _this = this;
        if (this.mail === '') {
            this.sms_err = 'Renseignez le champ.';
        }
        else {
            this.loading = true;
            return this.restaurer.restauration(this.mail, this.window.nativeWindow.location.origin + "/update").subscribe(function (response) {
                _this.data = response;
                _this.loading = false;
                _this.confirm = true;
                _this.sms_err = '';
            }, function (err) {
                if (err.status === 500) {
                    _this.sms_err = 'Identifiants incorrects.';
                    _this.loading = false;
                }
                else {
                    if (err.status !== 200) {
                        _this.sms_err = 'un problème à été rencontré veuillez ressayer plus tard.';
                        _this.loading = false;
                    }
                }
            });
        }
    };
    RestaurationComponent = __decorate([
        Component({
            selector: 'app-restauration',
            templateUrl: './restauration.component.html',
            styleUrls: ['./restauration.component.css']
        }),
        __metadata("design:paramtypes", [UtilisateurService, WindowRefService])
    ], RestaurationComponent);
    return RestaurationComponent;
}());
export { RestaurationComponent };
//# sourceMappingURL=restauration.component.js.map