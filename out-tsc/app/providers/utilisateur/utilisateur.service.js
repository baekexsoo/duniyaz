var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Constant } from '../../app/api'; //romeo
import { HttpHeaders, HttpClient } from '@angular/common/http'; //romeo 
import { Api } from '../api/api';
import { sol } from '../../app/Json_Type_de_sol';
var httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': '*/*'
        // 'responseType': 'text'
    })
}; // a retirer 
var UtilisateurService = /** @class */ (function () {
    function UtilisateurService(Api, myhttp) {
        this.Api = Api;
        this.myhttp = myhttp;
        //romeo ; a restructurer 
        this.url_bases = new Constant();
    }
    // fonction de connexion de l'utilisateur 
    UtilisateurService.prototype.connect = function (email, pwd) {
        var url = '/utilisateur/utilisateurs/connexion?mail=' + email + '&pwd=' + pwd;
        return this.Api.get(url, {}, { responseType: 'text' });
    }; // Good CODE
    UtilisateurService.prototype.get_type_sol = function () {
        return sol;
    };
    UtilisateurService.prototype.connexion = function (Email, pass) {
        return this.myhttp.get(this.url_bases.url_connect + Email + '&pwd=' + pass, httpOptions);
    };
    UtilisateurService.prototype.inscription = function (base_url, donne) {
        var endpoint = "utilisateur/utilisateurs?basePath=" + base_url;
        return this.Api.post(endpoint, donne, httpOptions);
    };
    UtilisateurService.prototype.restauration = function (mail, base_url) {
        var endpoint = 'utilisateur/utilisateurs/forget_password?mail=' + mail + '&basePath=' + base_url;
        return this.Api.put(endpoint, {}, httpOptions);
    };
    UtilisateurService.prototype.welcome = function (mail) {
        return this.myhttp.get(this.url_bases.url_accueil + mail);
    };
    UtilisateurService.prototype.modif_token = function (email) {
        var url = '/utilisateur/utilisateurs/generate_token?mail=';
        return this.Api.get(url + email, {}, { responseType: 'text' });
    };
    UtilisateurService.prototype.update = function (pass, token) {
        var url = '/utilisateur/utilisateurs/reset?password=';
        return this.Api.post(url + pass + '&token=' + token, httpOptions);
    };
    UtilisateurService.prototype.update_complete = function (donne) {
        var url = '/utilisateur/utilisateurs';
        return this.Api.put(url, donne, httpOptions);
    };
    UtilisateurService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Api, HttpClient])
    ], UtilisateurService);
    return UtilisateurService;
}());
export { UtilisateurService };
//# sourceMappingURL=utilisateur.service.js.map