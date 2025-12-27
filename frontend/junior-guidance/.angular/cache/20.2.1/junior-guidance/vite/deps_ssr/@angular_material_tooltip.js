import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  MatTooltipModule
} from "./chunk-FTLL5ZLX.js";
import {
  MAT_TOOLTIP_DEFAULT_OPTIONS,
  MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY,
  MAT_TOOLTIP_SCROLL_STRATEGY,
  MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY,
  MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER,
  MatTooltip,
  SCROLL_THROTTLE_MS,
  TOOLTIP_PANEL_CLASS,
  TooltipComponent,
  getMatTooltipInvalidPositionError
} from "./chunk-5W32LO45.js";
import "./chunk-A6TAV7UW.js";
import "./chunk-VPZKBRKA.js";
import "./chunk-WLV4DXUO.js";
import "./chunk-RRVYPZF3.js";
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

// node_modules/@angular/material/fesm2022/tooltip.mjs
var import_operators = __toESM(require_operators(), 1);
var import_rxjs = __toESM(require_cjs(), 1);
var matTooltipAnimations = {
  // Represents:
  // trigger('state', [
  //   state('initial, void, hidden', style({opacity: 0, transform: 'scale(0.8)'})),
  //   state('visible', style({transform: 'scale(1)'})),
  //   transition('* => visible', animate('150ms cubic-bezier(0, 0, 0.2, 1)')),
  //   transition('* => hidden', animate('75ms cubic-bezier(0.4, 0, 1, 1)')),
  // ])
  /** Animation that transitions a tooltip in and out. */
  tooltipState: {
    type: 7,
    name: "state",
    definitions: [
      {
        type: 0,
        name: "initial, void, hidden",
        styles: { type: 6, styles: { opacity: 0, transform: "scale(0.8)" }, offset: null }
      },
      {
        type: 0,
        name: "visible",
        styles: { type: 6, styles: { transform: "scale(1)" }, offset: null }
      },
      {
        type: 1,
        expr: "* => visible",
        animation: { type: 4, styles: null, timings: "150ms cubic-bezier(0, 0, 0.2, 1)" },
        options: null
      },
      {
        type: 1,
        expr: "* => hidden",
        animation: { type: 4, styles: null, timings: "75ms cubic-bezier(0.4, 0, 1, 1)" },
        options: null
      }
    ],
    options: {}
  }
};
export {
  MAT_TOOLTIP_DEFAULT_OPTIONS,
  MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY,
  MAT_TOOLTIP_SCROLL_STRATEGY,
  MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY,
  MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER,
  MatTooltip,
  MatTooltipModule,
  SCROLL_THROTTLE_MS,
  TOOLTIP_PANEL_CLASS,
  TooltipComponent,
  getMatTooltipInvalidPositionError,
  matTooltipAnimations
};
//# sourceMappingURL=@angular_material_tooltip.js.map
