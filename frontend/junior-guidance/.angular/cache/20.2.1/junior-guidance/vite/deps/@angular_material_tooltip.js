import {
  MatTooltipModule
} from "./chunk-QOM2UYJS.js";
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
} from "./chunk-XK2RRKWR.js";
import "./chunk-QBKTJ3VP.js";
import "./chunk-ODMY5MZ3.js";
import "./chunk-LYDFXXCA.js";
import "./chunk-TVAZLVFB.js";
import "./chunk-7Y2QNQT6.js";
import "./chunk-47F4X7GF.js";
import "./chunk-RQKOK63Y.js";
import "./chunk-26XIV262.js";
import "./chunk-3WCRWPRU.js";
import "./chunk-2CY3X3NT.js";
import "./chunk-GR3LN2VV.js";
import "./chunk-CD454CV4.js";
import "./chunk-UGRWDZBU.js";
import "./chunk-RHWKXHTL.js";
import "./chunk-5WS46NS5.js";
import "./chunk-MBV7CDWL.js";
import "./chunk-ZKV7C7PZ.js";
import "./chunk-FBAQJPVF.js";
import "./chunk-E7OZOBAT.js";
import "./chunk-QLNEHLUF.js";
import "./chunk-W45FYTSH.js";
import "./chunk-COALB4LA.js";
import "./chunk-EXH6ORNE.js";
import "./chunk-REVO24QS.js";
import "./chunk-YBNECNG7.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@angular/material/fesm2022/tooltip.mjs
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
