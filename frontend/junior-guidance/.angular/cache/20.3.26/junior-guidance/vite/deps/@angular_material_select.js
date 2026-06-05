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
} from "./chunk-55X6H4X7.js";
import "./chunk-K32K4V3Z.js";
import "./chunk-XA3EVXH3.js";
import "./chunk-SHU736LN.js";
import {
  MatOptgroup,
  MatOption
} from "./chunk-ZXXZRCBC.js";
import "./chunk-XIA4NHSK.js";
import {
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-TL64R4RU.js";
import "./chunk-3LLOHGS2.js";
import "./chunk-6OF5EBJ7.js";
import "./chunk-IGQHMNSD.js";
import "./chunk-MIGXGN3K.js";
import "./chunk-OSG3CV2X.js";
import "./chunk-5QP77WU7.js";
import "./chunk-ALEEQQR6.js";
import "./chunk-Z7MTUDKU.js";
import "./chunk-OX3NRC6A.js";
import "./chunk-KUQSNIQW.js";
import "./chunk-YRCNMBYG.js";
import "./chunk-XOEMBC43.js";
import "./chunk-FT24D7TC.js";
import "./chunk-6QDBS5U5.js";
import "./chunk-L2BZS5YT.js";
import "./chunk-YWNYCU7W.js";
import "./chunk-LLHNG476.js";
import "./chunk-LNZI57SM.js";
import "./chunk-JNVQV6NG.js";
import "./chunk-VENV3F3G.js";
import "./chunk-I3QM3QXF.js";
import "./chunk-HVFATR4P.js";
import "./chunk-N3JFCZOD.js";
import "./chunk-YG26ZV4T.js";
import "./chunk-Q4SBNR36.js";
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
