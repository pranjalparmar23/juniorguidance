import {
  MatFormFieldModule
} from "./chunk-BEWBWN47.js";
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
} from "./chunk-5R5BHISH.js";
import "./chunk-AYRWYCQM.js";
import "./chunk-OX3NRC6A.js";
import "./chunk-KBMMZKDS.js";
import "./chunk-N4MMNAMY.js";
import "./chunk-DCABLGEA.js";
import "./chunk-L2BZS5YT.js";
import "./chunk-JNHHCRVV.js";
import "./chunk-LZ2HBACO.js";
import "./chunk-7C3Y5LQ6.js";
import "./chunk-S2VKGFRH.js";
import "./chunk-IRRRFNH3.js";
import "./chunk-JNVQV6NG.js";
import "./chunk-VENV3F3G.js";
import "./chunk-I3QM3QXF.js";
import "./chunk-NHFD6IKB.js";
import "./chunk-XVXWCS2D.js";
import "./chunk-7UJZXIJQ.js";
import "./chunk-6EK5UFJT.js";
import "./chunk-G3YONU62.js";
import "./chunk-YW65FSQM.js";
import "./chunk-J4VSUNO7.js";
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
