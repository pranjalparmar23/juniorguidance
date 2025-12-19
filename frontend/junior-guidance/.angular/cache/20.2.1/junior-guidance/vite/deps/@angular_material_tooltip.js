import {
  MatTooltipModule
} from "./chunk-QOXMKMTR.js";
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
} from "./chunk-M44FAJEJ.js";
import "./chunk-OX3NRC6A.js";
import "./chunk-4QPAX4NP.js";
import "./chunk-MXHX6LJO.js";
import "./chunk-FD7ARIMK.js";
import "./chunk-6DQE4UYN.js";
import "./chunk-MSMCNPLK.js";
import "./chunk-JNVQV6NG.js";
import "./chunk-ET6FWN7W.js";
import "./chunk-L2BZS5YT.js";
import "./chunk-ZOEDY64T.js";
import "./chunk-477IPXER.js";
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
import "./chunk-EX32FOKK.js";
import "./chunk-EIOG7GQF.js";
import "./chunk-RSS3ODKE.js";
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
