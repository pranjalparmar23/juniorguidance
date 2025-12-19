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
} from "./chunk-JD7DI3AW.js";
import "./chunk-6OF5EBJ7.js";
import "./chunk-XA3EVXH3.js";
import "./chunk-OCQDZDZV.js";
import "./chunk-X7ZEF7LS.js";
import "./chunk-R4FGN4EX.js";
import "./chunk-IKVHXBZ7.js";
import {
  MatOptgroup,
  MatOption
} from "./chunk-FJ6N5HVK.js";
import "./chunk-JUBQRM3Q.js";
import "./chunk-D26W6SEN.js";
import "./chunk-IQCZB5C3.js";
import "./chunk-SL7LNUXK.js";
import "./chunk-U3GNZIY2.js";
import {
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-L6QTPMQG.js";
import "./chunk-KTLVWRGV.js";
import "./chunk-OX3NRC6A.js";
import "./chunk-4QPAX4NP.js";
import "./chunk-MXHX6LJO.js";
import "./chunk-FD7ARIMK.js";
import "./chunk-2U3AOMZU.js";
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
