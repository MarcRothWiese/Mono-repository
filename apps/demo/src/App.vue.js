"use strict";
/// <reference types="../../../node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../node_modules/@vue/language-core/types/props-fallback.d.ts" />
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("@ui/index");
function handleClick() {
    // example click handler to verify wiring
    console.log('BaseButton clicked');
}
var __VLS_ctx = __assign(__assign({}, {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({});
var __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.BaseButton | typeof __VLS_components.BaseButton} */
index_1.BaseButton;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign({ 'onClick': {} }, { variant: "primary", size: "md" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { variant: "primary", size: "md" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5;
var __VLS_6 = ({ click: {} },
    { onClick: (__VLS_ctx.handleClick) });
var __VLS_7 = __VLS_3.slots.default;
// @ts-ignore
[handleClick,];
var __VLS_3;
var __VLS_4;
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
exports.default = {};
