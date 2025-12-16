import {
  MatTooltipModule
} from "./chunk-23FZV7OL.js";
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
} from "./chunk-JO2AIHHA.js";
import "./chunk-OX3NRC6A.js";
import "./chunk-KBMMZKDS.js";
import "./chunk-N4MMNAMY.js";
import "./chunk-DCABLGEA.js";
import "./chunk-5LOZTN5O.js";
import "./chunk-L2BZS5YT.js";
import "./chunk-JNHHCRVV.js";
import "./chunk-LZ2HBACO.js";
import "./chunk-7C3Y5LQ6.js";
import "./chunk-S2VKGFRH.js";
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
