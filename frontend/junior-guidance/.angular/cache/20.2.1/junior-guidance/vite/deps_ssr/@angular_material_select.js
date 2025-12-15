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
} from "./chunk-PU4F3POL.js";
import "./chunk-ST7N4BD7.js";
import "./chunk-OYIFWJ7Q.js";
import "./chunk-SQQBE4TX.js";
import "./chunk-2IQIEOPB.js";
import "./chunk-YYJAXWVC.js";
import {
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-RTD4DFSD.js";
import "./chunk-NHODNHEV.js";
import "./chunk-FRUR23VC.js";
import {
  MatOptgroup,
  MatOption
} from "./chunk-OLW4NRSL.js";
import "./chunk-LDLBE2ZQ.js";
import "./chunk-QIQAGBAU.js";
import "./chunk-4FCXGENP.js";
import "./chunk-BPU2P5PE.js";
import "./chunk-3AIAW6CN.js";
import "./chunk-BFUJK5PP.js";
import "./chunk-RKN5HDK2.js";
import "./chunk-53D4ODRD.js";
import "./chunk-YUIUGGIG.js";
import "./chunk-KRMKUWGZ.js";
import "./chunk-3K7DLCUL.js";
import "./chunk-3B7RP26U.js";
import "./chunk-XLFYVVIN.js";
import "./chunk-PVNXFKY4.js";
import "./chunk-PYJ7FLI5.js";
import "./chunk-FSXHYAT2.js";
import "./chunk-YMXBQKHT.js";
import "./chunk-UIBDTVLN.js";
import "./chunk-RP7XZSHP.js";
import "./chunk-TYTQEWNK.js";
import "./chunk-Y6WZFJ5M.js";
import "./chunk-ZNPDCTJX.js";
import "./chunk-5XYFHA5V.js";
import "./chunk-FQL6O3MQ.js";
import "./chunk-LXNDQM6C.js";
import "./chunk-K7ZFSSGM.js";
import "./chunk-GK5EV5EJ.js";
import "./chunk-QHJ7YKVP.js";
import "./chunk-AGKGJFRP.js";
import {
  require_cjs,
  require_operators
} from "./chunk-JMY5ZYKE.js";
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
