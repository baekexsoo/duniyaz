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
import { Api } from './../api/api';
import { HttpHeaders, HttpClient } from '@angular/common/http';
var httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': '*/*'
        // 'responseType': 'text'
    })
};
var SolService = /** @class */ (function () {
    function SolService(Api, http) {
        this.Api = Api;
        this.http = http;
        this.sol_url = 'http://5.135.129.180:7050/prediction/previsions';
        this.agr_url = 'http://5.135.129.180:7051/engrais/modeleEngraiss';
        this.url_img = 'http://5.135.129.180:7050/prediction/previsions/file/';
        this.url_prediction = 'http://5.135.129.180:7050/prediction/previsions';
    }
    SolService.prototype.get_sol = function () {
        return this.http.get(this.sol_url, httpOptions);
    };
    SolService.prototype.get_ang = function () {
        return this.http.get(this.agr_url, httpOptions);
    };
    SolService.prototype.get_img = function (image) {
        /// console.log(this.url_img+image);
        return (this.url_img + image);
        // this.http.get(this.url_img + image, httpOptions)
    };
    SolService.prototype.new_prediction = function (donne) {
        return this.http.post(this.url_prediction, donne, httpOptions);
    };
    SolService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Api, HttpClient])
    ], SolService);
    return SolService;
}());
export { SolService };
//# sourceMappingURL=sol.service.js.map