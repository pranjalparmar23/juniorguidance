import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  MatFormFieldModule
} from "./chunk-XEUAVM3H.js";
import {
  MAT_ERROR,
  MAT_FORM_FIELD,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MAT_PREFIX,
  MAT_SUFFIX,
  MatError,
  MatFormField,
  MatFormFieldControl,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix,
  getMatFormFieldDuplicatedHintError,
  getMatFormFieldMissingControlError,
  getMatFormFieldPlaceholderConflictError
} from "./chunk-2LIWBRYJ.js";
import "./chunk-LAZHZWO6.js";
import "./chunk-A6TAV7UW.js";
import "./chunk-VPZKBRKA.js";
import "./chunk-WLV4DXUO.js";
import "./chunk-RRVYPZF3.js";
import "./chunk-7MZPTDVU.js";
import "./chunk-T6G4P7V7.js";
import "./chunk-EQ4AASXU.js";
import "./chunk-WM5J4RMK.js";
import "./chunk-ESTDH25M.js";
import "./chunk-WZUKBVBL.js";
import "./chunk-VFWDW2BX.js";
import "./chunk-TA5UKC3L.js";
import "./chunk-WNPV6N4J.js";
import "./chunk-PTM4IJZ3.js";
import "./chunk-3UIA3ZCU.js";
import "./chunk-C6F74DZU.js";
import "./chunk-W5DHUQJH.js";
import "./chunk-4O4E7YMB.js";
import "./chunk-43NSXP3D.js";
import {
  require_operators
} from "./chunk-LHAZCXPF.js";
import {
  require_cjs
} from "./chunk-ZXDX7EAJ.js";
import {
  __toESM
} from "./chunk-YHCV7DAQ.js";

// node_modules/@angular/material/fesm2022/form-field.mjs
var import_rxjs = __toESM(require_cjs(), 1);
var import_operators = __toESM(require_operators(), 1);
var matFormFieldAnimations = {
  // Represents:
  // trigger('transitionMessages', [
  //   // TODO(mmalerba): Use angular animations for label animation as well.
  //   state('enter', style({opacity: 1, transform: 'translateY(0%)'})),
  //   transition('void => enter', [
  //     style({opacity: 0, transform: 'translateY(-5px)'}),
  //     animate('300ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
  //   ]),
  // ])
  /** Animation that transitions the form field's error and hint messages. */
  transitionMessages: {
    type: 7,
    name: "transitionMessages",
    definitions: [
      {
        type: 0,
        name: "enter",
        styles: {
          type: 6,
          styles: { opacity: 1, transform: "translateY(0%)" },
          offset: null
        }
      },
      {
        type: 1,
        expr: "void => enter",
        animation: [
          { type: 6, styles: { opacity: 0, transform: "translateY(-5px)" }, offset: null },
          { type: 4, styles: null, timings: "300ms cubic-bezier(0.55, 0, 0.55, 0.2)" }
        ],
        options: null
      }
    ],
    options: {}
  }
};
export {
  MAT_ERROR,
  MAT_FORM_FIELD,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MAT_PREFIX,
  MAT_SUFFIX,
  MatError,
  MatFormField,
  MatFormFieldControl,
  MatFormFieldModule,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix,
  getMatFormFieldDuplicatedHintError,
  getMatFormFieldMissingControlError,
  getMatFormFieldPlaceholderConflictError,
  matFormFieldAnimations
};
//# sourceMappingURL=@angular_material_form-field.js.map
