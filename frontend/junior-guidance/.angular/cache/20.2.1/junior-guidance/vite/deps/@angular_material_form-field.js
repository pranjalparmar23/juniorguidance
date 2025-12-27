import {
  MatFormFieldModule
} from "./chunk-NW2XX5K4.js";
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
} from "./chunk-4EQHY7KW.js";
import "./chunk-VRV5UR6Y.js";
import "./chunk-QBKTJ3VP.js";
import "./chunk-ULWLWHI7.js";
import "./chunk-F7KTLL7A.js";
import "./chunk-7SXLG44A.js";
import "./chunk-7Y2QNQT6.js";
import "./chunk-RQKOK63Y.js";
import "./chunk-26XIV262.js";
import "./chunk-3WCRWPRU.js";
import "./chunk-E7OZOBAT.js";
import "./chunk-2CY3X3NT.js";
import "./chunk-FBAQJPVF.js";
import "./chunk-GR3LN2VV.js";
import "./chunk-CD454CV4.js";
import "./chunk-UGRWDZBU.js";
import "./chunk-QLNEHLUF.js";
import "./chunk-RHWKXHTL.js";
import "./chunk-W45FYTSH.js";
import "./chunk-COALB4LA.js";
import "./chunk-EXH6ORNE.js";
import "./chunk-REVO24QS.js";
import "./chunk-YBNECNG7.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@angular/material/fesm2022/form-field.mjs
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
