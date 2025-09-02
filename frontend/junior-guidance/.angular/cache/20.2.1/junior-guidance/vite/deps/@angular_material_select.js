import {
  MAT_SELECT_CONFIG,
  MAT_SELECT_SCROLL_STRATEGY,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,
  MAT_SELECT_TRIGGER,
  MatSelect,
  MatSelectChange,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-HW5262RK.js";
import "./chunk-D43MPS75.js";
import "./chunk-4C4GA7MK.js";
import "./chunk-XA3EVXH3.js";
import "./chunk-N3AEUCMW.js";
import "./chunk-CQ3XBXCY.js";
import {
  MatOptgroup,
  MatOption
} from "./chunk-3FFTYOWY.js";
import "./chunk-FC5FQLLK.js";
import "./chunk-EQ4TW6BB.js";
import {
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-ICBU4LO2.js";
import "./chunk-AYRWYCQM.js";
import "./chunk-4XOXUBUY.js";
import "./chunk-CSTL44ZH.js";
import "./chunk-UI3S4OXF.js";
import "./chunk-3RSOOHJU.js";
import "./chunk-OX3NRC6A.js";
import "./chunk-SDQW2QK6.js";
import "./chunk-56L3ZUZQ.js";
import "./chunk-5ECR5KMB.js";
import "./chunk-KIXC3EXO.js";
import "./chunk-S2VKGFRH.js";
import "./chunk-5LOZTN5O.js";
import "./chunk-L2BZS5YT.js";
import "./chunk-JNHHCRVV.js";
import "./chunk-LZ2HBACO.js";
import "./chunk-7C3Y5LQ6.js";
import "./chunk-IRRRFNH3.js";
import "./chunk-JNVQV6NG.js";
import "./chunk-VENV3F3G.js";
import "./chunk-I3QM3QXF.js";
import "./chunk-3OXGIN2A.js";
import "./chunk-G4LHYT3F.js";
import "./chunk-VQVMG6EG.js";
import "./chunk-NHFD6IKB.js";
import "./chunk-XVXWCS2D.js";
import "./chunk-7UJZXIJQ.js";
import "./chunk-6EK5UFJT.js";
import "./chunk-G3YONU62.js";
import "./chunk-YW65FSQM.js";
import "./chunk-J4VSUNO7.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@angular/material/fesm2022/select.mjs
var matSelectAnimations = {
  // Represents
  // trigger('transformPanel', [
  //   state(
  //     'void',
  //     style({
  //       opacity: 0,
  //       transform: 'scale(1, 0.8)',
  //     }),
  //   ),
  //   transition(
  //     'void => showing',
  //     animate(
  //       '120ms cubic-bezier(0, 0, 0.2, 1)',
  //       style({
  //         opacity: 1,
  //         transform: 'scale(1, 1)',
  //       }),
  //     ),
  //   ),
  //   transition('* => void', animate('100ms linear', style({opacity: 0}))),
  // ])
  /** This animation transforms the select's overlay panel on and off the page. */
  transformPanel: {
    type: 7,
    name: "transformPanel",
    definitions: [
      {
        type: 0,
        name: "void",
        styles: {
          type: 6,
          styles: { opacity: 0, transform: "scale(1, 0.8)" },
          offset: null
        }
      },
      {
        type: 1,
        expr: "void => showing",
        animation: {
          type: 4,
          styles: {
            type: 6,
            styles: { opacity: 1, transform: "scale(1, 1)" },
            offset: null
          },
          timings: "120ms cubic-bezier(0, 0, 0.2, 1)"
        },
        options: null
      },
      {
        type: 1,
        expr: "* => void",
        animation: {
          type: 4,
          styles: { type: 6, styles: { opacity: 0 }, offset: null },
          timings: "100ms linear"
        },
        options: null
      }
    ],
    options: {}
  }
};
export {
  MAT_SELECT_CONFIG,
  MAT_SELECT_SCROLL_STRATEGY,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,
  MAT_SELECT_TRIGGER,
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatOptgroup,
  MatOption,
  MatPrefix,
  MatSelect,
  MatSelectChange,
  MatSelectModule,
  MatSelectTrigger,
  MatSuffix,
  matSelectAnimations
};
//# sourceMappingURL=@angular_material_select.js.map
