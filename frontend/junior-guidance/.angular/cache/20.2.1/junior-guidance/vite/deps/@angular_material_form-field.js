import {
  MatFormFieldModule
} from "./chunk-X7ZEF7LS.js";
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
} from "./chunk-L6QTPMQG.js";
import "./chunk-KTLVWRGV.js";
import "./chunk-OX3NRC6A.js";
import "./chunk-4QPAX4NP.js";
import "./chunk-MXHX6LJO.js";
import "./chunk-FD7ARIMK.js";
import "./chunk-6DQE4UYN.js";
import "./chunk-MSMCNPLK.js";
import "./chunk-JNVQV6NG.js";
import "./chunk-L2BZS5YT.js";
import "./chunk-JNHHCRVV.js";
import "./chunk-KXDDOLTC.js";
import "./chunk-OWPC6XRW.js";
import "./chunk-A6S2G7BB.js";
import "./chunk-NLWE5WNF.js";
import "./chunk-VENV3F3G.js";
import "./chunk-7UJZXIJQ.js";
import "./chunk-I3QM3QXF.js";
import "./chunk-7RH6IKRJ.js";
import "./chunk-WK6IF3BY.js";
import "./chunk-YW65FSQM.js";
import "./chunk-EIOG7GQF.js";
import "./chunk-RSS3ODKE.js";
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
