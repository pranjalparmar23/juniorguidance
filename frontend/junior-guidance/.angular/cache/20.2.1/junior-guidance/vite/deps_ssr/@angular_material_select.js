import { createRequire } from 'module';const require = createRequire(import.meta.url);
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
} from "./chunk-ZFZJ7BRA.js";
import "./chunk-XEUAVM3H.js";
import "./chunk-QFMDULQI.js";
import "./chunk-NTND6N43.js";
import "./chunk-WQEIWUPI.js";
import "./chunk-OOC2FJWA.js";
import {
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-2LIWBRYJ.js";
import "./chunk-LAZHZWO6.js";
import "./chunk-SRJYKP3A.js";
import {
  MatOptgroup,
  MatOption
} from "./chunk-Z6E5UDIC.js";
import "./chunk-Q6VWU2SG.js";
import "./chunk-RQ3YBUEP.js";
import "./chunk-5TKRPRNR.js";
import "./chunk-LLX2LYTV.js";
import "./chunk-KXKQNYW3.js";
import "./chunk-A6TAV7UW.js";
import "./chunk-VPZKBRKA.js";
import "./chunk-WLV4DXUO.js";
import "./chunk-RRVYPZF3.js";
import "./chunk-TVZMOP2X.js";
import "./chunk-7MZPTDVU.js";
import "./chunk-XRFMEFYT.js";
import "./chunk-T6G4P7V7.js";
import "./chunk-EQ4AASXU.js";
import "./chunk-WM5J4RMK.js";
import "./chunk-ESTDH25M.js";
import "./chunk-WZUKBVBL.js";
import "./chunk-VFWDW2BX.js";
import "./chunk-TA5UKC3L.js";
import "./chunk-WNPV6N4J.js";
import "./chunk-VCRHWELK.js";
import "./chunk-QVJ7IA2P.js";
import "./chunk-KQARTNX4.js";
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

// node_modules/@angular/material/fesm2022/select.mjs
var import_rxjs = __toESM(require_cjs(), 1);
var import_operators = __toESM(require_operators(), 1);
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
