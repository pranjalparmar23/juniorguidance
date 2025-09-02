import {
  MatPseudoCheckbox
} from "./chunk-EQ4TW6BB.js";
import {
  MatCommonModule
} from "./chunk-56L3ZUZQ.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-J4VSUNO7.js";

// node_modules/@angular/material/fesm2022/pseudo-checkbox-module.mjs
var MatPseudoCheckboxModule = class _MatPseudoCheckboxModule {
  static ɵfac = function MatPseudoCheckboxModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatPseudoCheckboxModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MatPseudoCheckboxModule,
    imports: [MatCommonModule, MatPseudoCheckbox],
    exports: [MatPseudoCheckbox]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPseudoCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatPseudoCheckbox],
      exports: [MatPseudoCheckbox]
    }]
  }], null, null);
})();

export {
  MatPseudoCheckboxModule
};
//# sourceMappingURL=chunk-FC5FQLLK.js.map
