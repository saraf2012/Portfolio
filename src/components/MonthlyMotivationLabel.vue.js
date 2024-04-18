"use strict";
/* __placeholder__ */
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
exports.default = (0, vue_1.defineComponent)({
    name: "MonthlyMotivationLabel",
    methods: {
        onPROJECTSTextClick() {
            this.$router.push("/desktop-2");
        },
        onSERVICESTextClick() {
            this.$router.push("/services");
        },
        onCONTACTTextClick() {
            this.$router.push("/contact");
        },
        onGOBACKTextClick() {
            const anchor = document.querySelector("[data-scroll-to='jULIETTEWICZText']");
            if (anchor) {
                anchor.scrollIntoView({ block: "start", behavior: "smooth" });
            }
        },
    },
});
const __VLS_componentsOption = {};
const __VLS_name = "MonthlyMotivationLabel";
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    /* CSS variable injection */
    /* CSS variable injection end */
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_intrinsicElements.footer;
    __VLS_intrinsicElements.footer;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.h3;
    __VLS_intrinsicElements.h3;
    __VLS_intrinsicElements.h3;
    __VLS_intrinsicElements.h3;
    __VLS_intrinsicElements.h3;
    __VLS_intrinsicElements.h3;
    __VLS_intrinsicElements.h3;
    __VLS_intrinsicElements.h3;
    {
        const __VLS_0 = __VLS_intrinsicElements["footer"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1(Object.assign({}, { class: ((__VLS_ctx.$style.monthlyMotivationLabel)) }), ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}(Object.assign({}, { class: ((__VLS_ctx.$style.monthlyMotivationLabel)) })));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6(Object.assign({}, { class: ((__VLS_ctx.$style.monthlyMotivationLabelChild)) }), ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}(Object.assign({}, { class: ((__VLS_ctx.$style.monthlyMotivationLabelChild)) })));
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_10 = __VLS_intrinsicElements["div"];
            const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
            const __VLS_12 = __VLS_11(Object.assign({}, { class: ((__VLS_ctx.$style.portfolioAndServices)) }), ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}(Object.assign({}, { class: ((__VLS_ctx.$style.portfolioAndServices)) })));
            {
                const __VLS_15 = __VLS_intrinsicElements["h3"];
                const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                const __VLS_17 = __VLS_16(Object.assign({ 'onClick': {}, }, { class: ((__VLS_ctx.$style.projects)) }), ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}(Object.assign({ 'onClick': {}, }, { class: ((__VLS_ctx.$style.projects)) })));
                let __VLS_20 = { 'click': __VLS_pickEvent(__VLS_19['click'], {}.onClick) };
                __VLS_20 = { click: (__VLS_ctx.onPROJECTSTextClick) };
                (__VLS_18.slots).default;
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                let __VLS_19;
            }
            {
                const __VLS_21 = __VLS_intrinsicElements["h3"];
                const __VLS_22 = __VLS_elementAsFunctionalComponent(__VLS_21);
                const __VLS_23 = __VLS_22(Object.assign({ 'onClick': {}, }, { class: ((__VLS_ctx.$style.services)) }), ...__VLS_functionalComponentArgsRest(__VLS_22));
                ({}(Object.assign({ 'onClick': {}, }, { class: ((__VLS_ctx.$style.services)) })));
                let __VLS_26 = { 'click': __VLS_pickEvent(__VLS_25['click'], {}.onClick) };
                __VLS_26 = { click: (__VLS_ctx.onSERVICESTextClick) };
                (__VLS_24.slots).default;
                const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23);
                let __VLS_25;
            }
            {
                const __VLS_27 = __VLS_intrinsicElements["h3"];
                const __VLS_28 = __VLS_elementAsFunctionalComponent(__VLS_27);
                const __VLS_29 = __VLS_28(Object.assign({ 'onClick': {}, }, { class: ((__VLS_ctx.$style.contact)) }), ...__VLS_functionalComponentArgsRest(__VLS_28));
                ({}(Object.assign({ 'onClick': {}, }, { class: ((__VLS_ctx.$style.contact)) })));
                let __VLS_32 = { 'click': __VLS_pickEvent(__VLS_31['click'], {}.onClick) };
                __VLS_32 = { click: (__VLS_ctx.onCONTACTTextClick) };
                (__VLS_30.slots).default;
                const __VLS_30 = __VLS_pickFunctionalComponentCtx(__VLS_27, __VLS_29);
                let __VLS_31;
            }
            {
                const __VLS_33 = __VLS_intrinsicElements["h3"];
                const __VLS_34 = __VLS_elementAsFunctionalComponent(__VLS_33);
                const __VLS_35 = __VLS_34(Object.assign({}, { class: ((__VLS_ctx.$style.goBack)), onClick: ((__VLS_ctx.onGOBACKTextClick)) }), ...__VLS_functionalComponentArgsRest(__VLS_34));
                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.goBack)), onClick: ((__VLS_ctx.onGOBACKTextClick)) })));
                (__VLS_36.slots).default;
                const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35);
            }
            (__VLS_13.slots).default;
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
        }
        {
            const __VLS_38 = __VLS_intrinsicElements["div"];
            const __VLS_39 = __VLS_elementAsFunctionalComponent(__VLS_38);
            const __VLS_40 = __VLS_39(Object.assign({}, { class: ((__VLS_ctx.$style.julietteWiczIncAllRightWrapper)) }), ...__VLS_functionalComponentArgsRest(__VLS_39));
            ({}(Object.assign({}, { class: ((__VLS_ctx.$style.julietteWiczIncAllRightWrapper)) })));
            {
                const __VLS_43 = __VLS_intrinsicElements["div"];
                const __VLS_44 = __VLS_elementAsFunctionalComponent(__VLS_43);
                const __VLS_45 = __VLS_44(Object.assign({}, { class: ((__VLS_ctx.$style.julietteWiczInc)) }), ...__VLS_functionalComponentArgsRest(__VLS_44));
                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.julietteWiczInc)) })));
                (__VLS_46.slots).default;
                const __VLS_46 = __VLS_pickFunctionalComponentCtx(__VLS_43, __VLS_45);
            }
            (__VLS_41.slots).default;
            const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    // @ts-ignore
    [$style, $style, $style, $style, onPROJECTSTextClick, $style, onSERVICESTextClick, $style, onCONTACTTextClick, $style, onGOBACKTextClick, $style, $style,];
    return __VLS_slots;
}
let __VLS_internalComponent;
