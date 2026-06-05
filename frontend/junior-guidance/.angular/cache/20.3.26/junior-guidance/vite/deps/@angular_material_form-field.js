import {
  MatFormFieldModule
} from "./chunk-K32K4V3Z.js";
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
} from "./chunk-TL64R4RU.js";
import "./chunk-3LLOHGS2.js";
import "./chunk-OX3NRC6A.js";
import "./chunk-KUQSNIQW.js";
import "./chunk-YRCNMBYG.js";
import "./chunk-XOEMBC43.js";
import "./chunk-FT24D7TC.js";
import "./chunk-L2BZS5YT.js";
import "./chunk-YWNYCU7W.js";
import "./chunk-LLHNG476.js";
import "./chunk-LNZI57SM.js";
import "./chunk-JNVQV6NG.js";
import "./chunk-VENV3F3G.js";
import "./chunk-I3QM3QXF.js";
import "./chunk-FC32BE5F.js";
import "./chunk-5EG33CFQ.js";
import "./chunk-SGYGGF4K.js";
import "./chunk-XSKKP4AP.js";
import "./chunk-T5IL2KNJ.js";
import "./chunk-WS7XDFFJ.js";
import "./chunk-UI7BW4CF.js";
import "./chunk-ONCGLZD2.js";
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
