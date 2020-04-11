import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxtooltip';
import '../jqwidgets/jqxpasswordinput';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxPasswordInputComponent } from './angular_jqxpasswordinput';
var jqxPasswordInputModule = /** @class */ (function () {
    function jqxPasswordInputModule() {
    }
    jqxPasswordInputModule = tslib_1.__decorate([
        NgModule({
            imports: [
                FormsModule
            ],
            declarations: [jqxPasswordInputComponent],
            exports: [jqxPasswordInputComponent]
        })
    ], jqxPasswordInputModule);
    return jqxPasswordInputModule;
}());
export { jqxPasswordInputModule };
