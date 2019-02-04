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
import { Router } from '@angular/router';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/home']);
        }
    };
    AuthGuard.prototype.isAuthenticated = function () {
        // here you can check if user is authenticated or not through his token
        // verifier si le local storage currentUser exist
        if (sessionStorage.getItem("compte")) {
            // console.log("isAuthenticated true !");
            return true;
        }
        else {
            // console.log("isAuthenticated false !");
            return false;
        }
    };
    AuthGuard = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Router])
    ], AuthGuard);
    return AuthGuard;
}());
export { AuthGuard };
//
//# sourceMappingURL=auth.guard.js.map