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
import { SolService } from '../../providers/utilisateur/sol.service';
import { Departement } from '../entities/departement';
import { PredictionService } from '../../providers/prediction/prediction.service';
import { DataAnalys } from '../../providers/mock/prediction';
var SelectionSolComponent = /** @class */ (function () {
    function SelectionSolComponent(sol, Prediction) {
        this.sol = sol;
        this.Prediction = Prediction;
        // declaration
        this.departements = [];
        this.communes = [];
        this.sols = [];
        this.step = 0; // variable qui definit l'état du workflow.
        this.type_sol = false;
        this.select = false;
        this.donne_engrais = {
            dose: 0,
            idModele: '',
        };
        this.prediction = {
            input: {
                idUtilisateur: 'User',
                listDoseEngrais: [
                    this.donne_engrais,
                ]
            },
            sol: {
                azote: 0,
                carbone: 0,
                commune: '',
                departement: '',
                nom: '',
                ordreDeDominanace: 0,
                ph: 0,
                phosphore: 0,
                potassium: 0
            }
        };
        this.result = {
            prediction: 0
        };
        this.loadresult = false;
        this.data = DataAnalys;
    }
    SelectionSolComponent.prototype.ngOnInit = function () {
        this.goto(2);
        this.retrieveDepartements();
        this.selectedDepartement = new Departement();
        this.list_engr();
    };
    SelectionSolComponent.prototype.goto = function (n) {
        if (n === void 0) { n = 0; }
        this.step = n;
    };
    SelectionSolComponent.prototype.fonc_preditio = function () {
        console.log(JSON.stringify(this.prediction));
    };
    SelectionSolComponent.prototype.fon_ajou = function () {
        if (this.donne_engrais.dose !== 0) {
            // console.log(this.donne_engrais);
            this.prediction.input.listDoseEngrais.push({ dose: this.donne_engrais.dose, idModele: this.type_engrais });
            this.donne_engrais.dose = null;
            this.donne_engrais.idModele = undefined;
            console.log(this.prediction.input.listDoseEngrais);
        }
    };
    SelectionSolComponent.prototype.userslect = function (s) {
        this.prediction.sol = s;
        this.prediction.sol.departement = this.selectedDepartement.nom;
        this.prediction.sol.commune = this.selectedCommune.nom;
        console.log(this.prediction.sol);
    };
    SelectionSolComponent.prototype.retrieveDepartements = function () {
        var _this = this;
        console.log('Calliing retrieveDepartements() ...');
        return this.sol.get_sol().subscribe(function (response) {
            _this.departements = response;
        });
    };
    SelectionSolComponent.prototype.onDepartementSelect = function () {
        console.log('Calliing onDepartementSelect() ... : ' + JSON.stringify(this.selectedDepartement));
        this.communes = this.selectedDepartement.listCommune;
    };
    SelectionSolComponent.prototype.onCommuneSelect = function () {
        this.sols = this.selectedCommune.listTypeSol; // commune['listTypeSol']
    };
    SelectionSolComponent.prototype.get_sol_img = function (name) {
        return this.sol.get_img(name);
    };
    SelectionSolComponent.prototype.fon_prediction = function () {
        console.log(JSON.stringify(this.prediction));
        return this.sol.new_prediction(JSON.stringify(this.prediction)).subscribe(function (response) {
        });
    };
    SelectionSolComponent.prototype.btn_recherche = function () {
        this.type_sol = true;
    };
    SelectionSolComponent.prototype.list_engr = function () {
        var _this = this;
        return this.sol.get_ang().subscribe(function (response) {
            _this.data_engrais = response;
            console.log(_this.donne_engrais.idModele);
            for (var i = 0; i < _this.data_engrais.length; i++) {
                if (_this.data_engrais[i]['id'] === _this.type_engrais) {
                    _this.donne_engrais.idModele = _this.type_engrais;
                    _this.tauxN = _this.data_engrais[i]['tauxN'];
                    _this.tauxK = _this.data_engrais[i]['tauxK'];
                    _this.tauxP = _this.data_engrais[i]['tauxP'];
                    _this.tauxS = _this.data_engrais[i]['tauxS'];
                    _this.tauxB = _this.data_engrais[i]['tauxB'];
                }
            }
        });
    };
    SelectionSolComponent.prototype.predict = function () {
        var _this = this;
        console.log(JSON.stringify(this.data));
        this.loadresult = true;
        this.data = this.prediction;
        this.Prediction.prediction(this.data).subscribe(function (response) {
            _this.result.prediction = Math.round(response.prediction);
            // this.result.prediction = parseFloat(this.result.prediction.toPrecision(2));
            _this.loadresult = false;
        }, function (error) {
            _this.loadresult = false;
        });
    };
    SelectionSolComponent = __decorate([
        Component({
            selector: 'app-selection-sol',
            templateUrl: './selection-sol.component.html',
            styleUrls: ['./selection-sol.component.css']
        }),
        __metadata("design:paramtypes", [SolService, PredictionService])
    ], SelectionSolComponent);
    return SelectionSolComponent;
}());
export { SelectionSolComponent };
//# sourceMappingURL=selection-sol.component.js.map