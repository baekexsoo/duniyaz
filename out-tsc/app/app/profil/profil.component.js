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
var ProfilComponent = /** @class */ (function () {
    function ProfilComponent(profil) {
        this.profil = profil;
        this.objet = {
            id: "",
            budget: 0,
            email: "",
            nom: "",
            numero: "",
            numeroIFU: "",
            quartierOuVillage: "",
        };
        this.sms_err = '';
        this.loader = false;
    }
    ProfilComponent.prototype.ngOnInit = function () {
        this.objet.email = sessionStorage.compte;
        this.rec_id();
    };
    ProfilComponent.prototype.rec_id = function () {
        var _this = this;
        return this.profil.welcome(this.objet.email).subscribe(function (response) {
            _this.objet.id = response.id;
            console.log(_this.objet.id);
        });
    };
    ProfilComponent.prototype.update = function () {
        var _this = this;
        this.loader = true;
        return this.profil.update_complete(JSON.stringify(this.objet)).subscribe(function (response) {
            _this.profi_data = response;
            _this.loader = false;
        }, function (err) {
            if (err.status !== 200) {
                _this.sms_err = "un problème à été rencontré veuillez ressayer plus tard.";
            }
        });
    };
    ProfilComponent = __decorate([
        Component({
            selector: 'app-profil',
            templateUrl: './profil.component.html',
            styleUrls: ['./profil.component.css']
        }),
        __metadata("design:paramtypes", [UtilisateurService])
    ], ProfilComponent);
    return ProfilComponent;
}());
export { ProfilComponent };
//# sourceMappingURL=profil.component.js.map