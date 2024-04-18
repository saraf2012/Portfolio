"use strict";
/* __placeholder__ */
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const vue_router_1 = require("vue-router"); // Import useRouter from Vue Router
exports.default = (0, vue_1.defineComponent)({
    name: "Desktop5",
    setup() {
        const router = (0, vue_router_1.useRouter)(); // Get the router instance using useRouter
        const goBack = () => {
            router.go(-1); // Go back one step in the browser history
        };
        return {
            goBack,
        };
    },
});
const __VLS_componentsOption = {};
const __VLS_name = "Desktop5";
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
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.header;
    __VLS_intrinsicElements.header;
    __VLS_intrinsicElements.section;
    __VLS_intrinsicElements.section;
    __VLS_intrinsicElements.section;
    __VLS_intrinsicElements.section;
    __VLS_intrinsicElements.section;
    __VLS_intrinsicElements.section;
    __VLS_intrinsicElements.section;
    __VLS_intrinsicElements.section;
    __VLS_intrinsicElements.section;
    __VLS_intrinsicElements.section;
    __VLS_intrinsicElements.section;
    __VLS_intrinsicElements.section;
    __VLS_intrinsicElements.section;
    __VLS_intrinsicElements.section;
    __VLS_intrinsicElements.section;
    __VLS_intrinsicElements.section;
    __VLS_intrinsicElements.section;
    __VLS_intrinsicElements.section;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.footer;
    __VLS_intrinsicElements.footer;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink, RouterLink, RouterLink, RouterLink,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1(Object.assign({}, { class: ((__VLS_ctx.$style.desktop5)) }), ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}(Object.assign({}, { class: ((__VLS_ctx.$style.desktop5)) })));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6(Object.assign({}, { class: ((__VLS_ctx.$style.desktop5Child)) }), ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}(Object.assign({}, { class: ((__VLS_ctx.$style.desktop5Child)) })));
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_10 = __VLS_intrinsicElements["header"];
            const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
            const __VLS_12 = __VLS_11(Object.assign({}, { class: ((__VLS_ctx.$style.xyzFitness)) }), ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}(Object.assign({}, { class: ((__VLS_ctx.$style.xyzFitness)) })));
            (__VLS_13.slots).default;
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
        }
        {
            const __VLS_15 = __VLS_intrinsicElements["section"];
            const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
            const __VLS_17 = __VLS_16(Object.assign({}, { class: ((__VLS_ctx.$style.postcardWrapper)) }), ...__VLS_functionalComponentArgsRest(__VLS_16));
            ({}(Object.assign({}, { class: ((__VLS_ctx.$style.postcardWrapper)) })));
            {
                const __VLS_20 = __VLS_intrinsicElements["div"];
                const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                const __VLS_22 = __VLS_21(Object.assign({}, { class: ((__VLS_ctx.$style.postcard)) }), ...__VLS_functionalComponentArgsRest(__VLS_21));
                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.postcard)) })));
                (__VLS_23.slots).default;
                const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
            }
            (__VLS_18.slots).default;
            const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
        }
        {
            const __VLS_25 = __VLS_intrinsicElements["section"];
            const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
            const __VLS_27 = __VLS_26(Object.assign({}, { class: ((__VLS_ctx.$style.howToChangeYourHolidayPicWrapper)) }), ...__VLS_functionalComponentArgsRest(__VLS_26));
            ({}(Object.assign({}, { class: ((__VLS_ctx.$style.howToChangeYourHolidayPicWrapper)) })));
            {
                const __VLS_30 = __VLS_intrinsicElements["div"];
                const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
                const __VLS_32 = __VLS_31(Object.assign({}, { class: ((__VLS_ctx.$style.howToChangeContainer)) }), ...__VLS_functionalComponentArgsRest(__VLS_31));
                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.howToChangeContainer)) })));
                {
                    const __VLS_35 = __VLS_intrinsicElements["p"];
                    const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
                    const __VLS_37 = __VLS_36(Object.assign({}, { class: ((__VLS_ctx.$style.howToChange)) }), ...__VLS_functionalComponentArgsRest(__VLS_36));
                    ({}(Object.assign({}, { class: ((__VLS_ctx.$style.howToChange)) })));
                    (__VLS_38.slots).default;
                    const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                }
                {
                    const __VLS_40 = __VLS_intrinsicElements["p"];
                    const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
                    const __VLS_42 = __VLS_41(Object.assign({}, { class: ((__VLS_ctx.$style.blankLine)) }), ...__VLS_functionalComponentArgsRest(__VLS_41));
                    ({}(Object.assign({}, { class: ((__VLS_ctx.$style.blankLine)) })));
                    (__VLS_43.slots).default;
                    const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
                }
                {
                    const __VLS_45 = __VLS_intrinsicElements["p"];
                    const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
                    const __VLS_47 = __VLS_46(Object.assign({}, { class: ((__VLS_ctx.$style.myPassionProject)) }), ...__VLS_functionalComponentArgsRest(__VLS_46));
                    ({}(Object.assign({}, { class: ((__VLS_ctx.$style.myPassionProject)) })));
                    (__VLS_48.slots).default;
                    const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
                }
                (__VLS_33.slots).default;
                const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
            }
            (__VLS_28.slots).default;
            const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
        }
        {
            const __VLS_50 = __VLS_intrinsicElements["section"];
            const __VLS_51 = __VLS_elementAsFunctionalComponent(__VLS_50);
            const __VLS_52 = __VLS_51(Object.assign({}, { class: ((__VLS_ctx.$style.postcard2Wrapper)) }), ...__VLS_functionalComponentArgsRest(__VLS_51));
            ({}(Object.assign({}, { class: ((__VLS_ctx.$style.postcard2Wrapper)) })));
            {
                const __VLS_55 = __VLS_intrinsicElements["img"];
                const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55);
                const __VLS_57 = __VLS_56(Object.assign({}, { class: ((__VLS_ctx.$style.postcard2Icon)), loading: ("lazy"), alt: (""), src: ("/postcard-2@2x.png") }), ...__VLS_functionalComponentArgsRest(__VLS_56));
                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.postcard2Icon)), loading: ("lazy"), alt: (""), src: ("/postcard-2@2x.png") })));
                const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57);
            }
            (__VLS_53.slots).default;
            const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
        }
        {
            const __VLS_60 = __VLS_intrinsicElements["section"];
            const __VLS_61 = __VLS_elementAsFunctionalComponent(__VLS_60);
            const __VLS_62 = __VLS_61(Object.assign({}, { class: ((__VLS_ctx.$style.postcard21Wrapper)) }), ...__VLS_functionalComponentArgsRest(__VLS_61));
            ({}(Object.assign({}, { class: ((__VLS_ctx.$style.postcard21Wrapper)) })));
            {
                const __VLS_65 = __VLS_intrinsicElements["img"];
                const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65);
                const __VLS_67 = __VLS_66(Object.assign({}, { class: ((__VLS_ctx.$style.postcard21Icon)), loading: ("lazy"), alt: (""), src: ("/postcard2-1@2x.png") }), ...__VLS_functionalComponentArgsRest(__VLS_66));
                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.postcard21Icon)), loading: ("lazy"), alt: (""), src: ("/postcard2-1@2x.png") })));
                const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67);
            }
            (__VLS_63.slots).default;
            const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
        }
        {
            const __VLS_70 = __VLS_intrinsicElements["section"];
            const __VLS_71 = __VLS_elementAsFunctionalComponent(__VLS_70);
            const __VLS_72 = __VLS_71(Object.assign({}, { class: ((__VLS_ctx.$style.finalPostcard1Wrapper)) }), ...__VLS_functionalComponentArgsRest(__VLS_71));
            ({}(Object.assign({}, { class: ((__VLS_ctx.$style.finalPostcard1Wrapper)) })));
            {
                const __VLS_75 = __VLS_intrinsicElements["img"];
                const __VLS_76 = __VLS_elementAsFunctionalComponent(__VLS_75);
                const __VLS_77 = __VLS_76(Object.assign({}, { class: ((__VLS_ctx.$style.finalPostcard1Icon)), loading: ("lazy"), alt: (""), src: ("/final-postcard-1@2x.png") }), ...__VLS_functionalComponentArgsRest(__VLS_76));
                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.finalPostcard1Icon)), loading: ("lazy"), alt: (""), src: ("/final-postcard-1@2x.png") })));
                const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77);
            }
            (__VLS_73.slots).default;
            const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72);
        }
        {
            const __VLS_80 = __VLS_intrinsicElements["section"];
            const __VLS_81 = __VLS_elementAsFunctionalComponent(__VLS_80);
            const __VLS_82 = __VLS_81(Object.assign({}, { class: ((__VLS_ctx.$style.screenshot202403261755091Wrapper)) }), ...__VLS_functionalComponentArgsRest(__VLS_81));
            ({}(Object.assign({}, { class: ((__VLS_ctx.$style.screenshot202403261755091Wrapper)) })));
            {
                const __VLS_85 = __VLS_intrinsicElements["img"];
                const __VLS_86 = __VLS_elementAsFunctionalComponent(__VLS_85);
                const __VLS_87 = __VLS_86(Object.assign({}, { class: ((__VLS_ctx.$style.screenshot202403261755091)), loading: ("lazy"), alt: (""), src: ("/screenshot-20240326-175509-1@2x.png") }), ...__VLS_functionalComponentArgsRest(__VLS_86));
                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.screenshot202403261755091)), loading: ("lazy"), alt: (""), src: ("/screenshot-20240326-175509-1@2x.png") })));
                const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87);
            }
            (__VLS_83.slots).default;
            const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82);
        }
        {
            const __VLS_90 = __VLS_intrinsicElements["section"];
            const __VLS_91 = __VLS_elementAsFunctionalComponent(__VLS_90);
            const __VLS_92 = __VLS_91(Object.assign({}, { class: ((__VLS_ctx.$style.screenshot202403261915371Wrapper)) }), ...__VLS_functionalComponentArgsRest(__VLS_91));
            ({}(Object.assign({}, { class: ((__VLS_ctx.$style.screenshot202403261915371Wrapper)) })));
            {
                const __VLS_95 = __VLS_intrinsicElements["img"];
                const __VLS_96 = __VLS_elementAsFunctionalComponent(__VLS_95);
                const __VLS_97 = __VLS_96(Object.assign({}, { class: ((__VLS_ctx.$style.screenshot202403261915371)), loading: ("lazy"), alt: (""), src: ("/screenshot-20240326-191537-1@2x.png") }), ...__VLS_functionalComponentArgsRest(__VLS_96));
                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.screenshot202403261915371)), loading: ("lazy"), alt: (""), src: ("/screenshot-20240326-191537-1@2x.png") })));
                const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97);
            }
            (__VLS_93.slots).default;
            const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92);
        }
        {
            const __VLS_100 = __VLS_intrinsicElements["section"];
            const __VLS_101 = __VLS_elementAsFunctionalComponent(__VLS_100);
            const __VLS_102 = __VLS_101(Object.assign({}, { class: ((__VLS_ctx.$style.freeBrandingPostcardMockupWrapper)) }), ...__VLS_functionalComponentArgsRest(__VLS_101));
            ({}(Object.assign({}, { class: ((__VLS_ctx.$style.freeBrandingPostcardMockupWrapper)) })));
            {
                const __VLS_105 = __VLS_intrinsicElements["img"];
                const __VLS_106 = __VLS_elementAsFunctionalComponent(__VLS_105);
                const __VLS_107 = __VLS_106(Object.assign({}, { class: ((__VLS_ctx.$style.freeBrandingPostcardMockup)), loading: ("lazy"), alt: (""), src: ("/free-branding-postcard-mockup-1@2x.png") }), ...__VLS_functionalComponentArgsRest(__VLS_106));
                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.freeBrandingPostcardMockup)), loading: ("lazy"), alt: (""), src: ("/free-branding-postcard-mockup-1@2x.png") })));
                const __VLS_108 = __VLS_pickFunctionalComponentCtx(__VLS_105, __VLS_107);
            }
            (__VLS_103.slots).default;
            const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102);
        }
        {
            const __VLS_110 = __VLS_intrinsicElements["section"];
            const __VLS_111 = __VLS_elementAsFunctionalComponent(__VLS_110);
            const __VLS_112 = __VLS_111(Object.assign({}, { class: ((__VLS_ctx.$style.postcardPsdMockup1Wrapper)) }), ...__VLS_functionalComponentArgsRest(__VLS_111));
            ({}(Object.assign({}, { class: ((__VLS_ctx.$style.postcardPsdMockup1Wrapper)) })));
            {
                const __VLS_115 = __VLS_intrinsicElements["img"];
                const __VLS_116 = __VLS_elementAsFunctionalComponent(__VLS_115);
                const __VLS_117 = __VLS_116(Object.assign({}, { class: ((__VLS_ctx.$style.postcardPsdMockup1)), loading: ("lazy"), alt: (""), src: ("/postcard-psd-mockup-1@2x.png") }), ...__VLS_functionalComponentArgsRest(__VLS_116));
                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.postcardPsdMockup1)), loading: ("lazy"), alt: (""), src: ("/postcard-psd-mockup-1@2x.png") })));
                const __VLS_118 = __VLS_pickFunctionalComponentCtx(__VLS_115, __VLS_117);
            }
            (__VLS_113.slots).default;
            const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112);
        }
        {
            const __VLS_120 = __VLS_intrinsicElements["footer"];
            const __VLS_121 = __VLS_elementAsFunctionalComponent(__VLS_120);
            const __VLS_122 = __VLS_121(Object.assign({}, { class: ((__VLS_ctx.$style.desktop5Inner)) }), ...__VLS_functionalComponentArgsRest(__VLS_121));
            ({}(Object.assign({}, { class: ((__VLS_ctx.$style.desktop5Inner)) })));
            {
                const __VLS_125 = __VLS_intrinsicElements["div"];
                const __VLS_126 = __VLS_elementAsFunctionalComponent(__VLS_125);
                const __VLS_127 = __VLS_126(Object.assign({}, { class: ((__VLS_ctx.$style.vectorParent)) }), ...__VLS_functionalComponentArgsRest(__VLS_126));
                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.vectorParent)) })));
                {
                    const __VLS_130 = {}.RouterLink;
                    const __VLS_131 = __VLS_asFunctionalComponent(__VLS_130, new __VLS_130(Object.assign({ 'onClick': {}, }, { to: ("/"), class: ("nav-link") })));
                    ({}.RouterLink);
                    ({}.RouterLink);
                    const __VLS_132 = __VLS_131(Object.assign({ 'onClick': {}, }, { to: ("/"), class: ("nav-link") }), ...__VLS_functionalComponentArgsRest(__VLS_131));
                    ({}(Object.assign({ 'onClick': {}, }, { to: ("/"), class: ("nav-link") })));
                    let __VLS_135 = { 'click': __VLS_pickEvent(__VLS_134['click'], {}.onClick) };
                    __VLS_135 = { click: (__VLS_ctx.goBack) };
                    {
                        const __VLS_136 = __VLS_intrinsicElements["img"];
                        const __VLS_137 = __VLS_elementAsFunctionalComponent(__VLS_136);
                        const __VLS_138 = __VLS_137(Object.assign({}, { class: ((__VLS_ctx.$style.vectorIcon)), loading: ("lazy"), alt: (""), src: ("/vector.svg") }), ...__VLS_functionalComponentArgsRest(__VLS_137));
                        ({}(Object.assign({}, { class: ((__VLS_ctx.$style.vectorIcon)), loading: ("lazy"), alt: (""), src: ("/vector.svg") })));
                        const __VLS_139 = __VLS_pickFunctionalComponentCtx(__VLS_136, __VLS_138);
                    }
                    (__VLS_133.slots).default;
                    const __VLS_133 = __VLS_pickFunctionalComponentCtx(__VLS_130, __VLS_132);
                    let __VLS_134;
                }
                {
                    const __VLS_141 = {}.RouterLink;
                    const __VLS_142 = __VLS_asFunctionalComponent(__VLS_141, new __VLS_141(Object.assign({ 'onClick': {}, }, { to: ("/"), class: ("nav-link") })));
                    ({}.RouterLink);
                    ({}.RouterLink);
                    const __VLS_143 = __VLS_142(Object.assign({ 'onClick': {}, }, { to: ("/"), class: ("nav-link") }), ...__VLS_functionalComponentArgsRest(__VLS_142));
                    ({}(Object.assign({ 'onClick': {}, }, { to: ("/"), class: ("nav-link") })));
                    let __VLS_146 = { 'click': __VLS_pickEvent(__VLS_145['click'], {}.onClick) };
                    __VLS_146 = { click: (__VLS_ctx.goBack) };
                    {
                        const __VLS_147 = __VLS_intrinsicElements["img"];
                        const __VLS_148 = __VLS_elementAsFunctionalComponent(__VLS_147);
                        const __VLS_149 = __VLS_148(Object.assign({}, { class: ((__VLS_ctx.$style.goBackIcon)), loading: ("lazy"), alt: (""), src: ("/go-back4.svg") }), ...__VLS_functionalComponentArgsRest(__VLS_148));
                        ({}(Object.assign({}, { class: ((__VLS_ctx.$style.goBackIcon)), loading: ("lazy"), alt: (""), src: ("/go-back4.svg") })));
                        const __VLS_150 = __VLS_pickFunctionalComponentCtx(__VLS_147, __VLS_149);
                    }
                    (__VLS_144.slots).default;
                    const __VLS_144 = __VLS_pickFunctionalComponentCtx(__VLS_141, __VLS_143);
                    let __VLS_145;
                }
                (__VLS_128.slots).default;
                const __VLS_128 = __VLS_pickFunctionalComponentCtx(__VLS_125, __VLS_127);
            }
            (__VLS_123.slots).default;
            const __VLS_123 = __VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    // @ts-ignore
    [$style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, goBack, $style, goBack, $style,];
    return __VLS_slots;
}
let __VLS_internalComponent;
