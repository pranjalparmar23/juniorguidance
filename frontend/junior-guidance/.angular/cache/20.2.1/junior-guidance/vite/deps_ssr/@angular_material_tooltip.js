import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  MatTooltipModule
} from "./chunk-5VG45TC6.js";
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
} from "./chunk-BJ4E4NY7.js";
import "./chunk-BFUJK5PP.js";
import "./chunk-RKN5HDK2.js";
import "./chunk-53D4ODRD.js";
import "./chunk-YUIUGGIG.js";
import "./chunk-KRMKUWGZ.js";
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
