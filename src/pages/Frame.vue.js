"use strict";
/* __placeholder__ */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const CopyrightInformation_vue_1 = __importDefault(require("../components/CopyrightInformation.vue"));
const FrameComponent_vue_1 = __importDefault(require("../components/FrameComponent.vue"));
const MonthlyMotivationLabel_vue_1 = __importDefault(require("../components/MonthlyMotivationLabel.vue"));
exports.default = (0, vue_1.defineComponent)({
    name: "Frame",
    components: {
        CopyrightInformation: CopyrightInformation_vue_1.default,
        FrameComponent: FrameComponent_vue_1.default,
        MonthlyMotivationLabel: MonthlyMotivationLabel_vue_1.default,
    },
    methods: {
        onPROJECTSText1Click() {
            this.$router.push("/desktop-2");
        },
        onSERVICESText1Click() {
            this.$router.push("/services");
        },
        onCONTACTText1Click() {
            this.$router.push("/contact");
        },
    },
});
const __VLS_componentsOption = {
    CopyrightInformation: CopyrightInformation_vue_1.default,
    FrameComponent: FrameComponent_vue_1.default,
    MonthlyMotivationLabel: MonthlyMotivationLabel_vue_1.default,
};
const __VLS_name = "Frame";
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
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_components.CopyrightInformation;
    __VLS_components.CopyrightInformation;
    // @ts-ignore
    [CopyrightInformation_vue_1.default,];
    __VLS_intrinsicElements.main;
    __VLS_intrinsicElements.main;
    __VLS_components.FrameComponent;
    __VLS_components.FrameComponent;
    // @ts-ignore
    [FrameComponent_vue_1.default,];
    __VLS_components.MonthlyMotivationLabel;
    __VLS_components.MonthlyMotivationLabel;
    // @ts-ignore
    [MonthlyMotivationLabel_vue_1.default,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1(Object.assign({}, { class: ((__VLS_ctx.$style.rectangleParent)) }), ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}(Object.assign({}, { class: ((__VLS_ctx.$style.rectangleParent)) })));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6(Object.assign({}, { class: ((__VLS_ctx.$style.frameChild)) }), ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}(Object.assign({}, { class: ((__VLS_ctx.$style.frameChild)) })));
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_10 = __VLS_intrinsicElements["img"];
            const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
            const __VLS_12 = __VLS_11(Object.assign({}, { class: ((__VLS_ctx.$style.finalll21Icon)), alt: (""), src: ("/finalll2-1@2x.png") }), ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}(Object.assign({}, { class: ((__VLS_ctx.$style.finalll21Icon)), alt: (""), src: ("/finalll2-1@2x.png") })));
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
        }
        {
            const __VLS_15 = __VLS_intrinsicElements["div"];
            const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
            const __VLS_17 = __VLS_16(Object.assign({}, { class: ((__VLS_ctx.$style.frameWrapper)) }), ...__VLS_functionalComponentArgsRest(__VLS_16));
            ({}(Object.assign({}, { class: ((__VLS_ctx.$style.frameWrapper)) })));
            {
                const __VLS_20 = __VLS_intrinsicElements["div"];
                const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                const __VLS_22 = __VLS_21(Object.assign({}, { class: ((__VLS_ctx.$style.projectsServicesContactLinkParent)) }), ...__VLS_functionalComponentArgsRest(__VLS_21));
                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.projectsServicesContactLinkParent)) })));
                {
                    const __VLS_25 = __VLS_intrinsicElements["div"];
                    const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
                    const __VLS_27 = __VLS_26(Object.assign({}, { class: ((__VLS_ctx.$style.projectsServicesContactLink)) }), ...__VLS_functionalComponentArgsRest(__VLS_26));
                    ({}(Object.assign({}, { class: ((__VLS_ctx.$style.projectsServicesContactLink)) })));
                    {
                        const __VLS_30 = __VLS_intrinsicElements["div"];
                        const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
                        const __VLS_32 = __VLS_31(Object.assign({}, { class: ((__VLS_ctx.$style.figmaAdobeCreativeCloud)) }), ...__VLS_functionalComponentArgsRest(__VLS_31));
                        ({}(Object.assign({}, { class: ((__VLS_ctx.$style.figmaAdobeCreativeCloud)) })));
                        {
                            const __VLS_35 = __VLS_intrinsicElements["div"];
                            const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
                            const __VLS_37 = __VLS_36(Object.assign({}, { class: ((__VLS_ctx.$style.julietteWicz)), "data-scroll-to": ("jULIETTEWICZText") }), ...__VLS_functionalComponentArgsRest(__VLS_36));
                            ({}(Object.assign({}, { class: ((__VLS_ctx.$style.julietteWicz)), "data-scroll-to": ("jULIETTEWICZText") })));
                            (__VLS_38.slots).default;
                            const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                        }
                        {
                            const __VLS_40 = __VLS_intrinsicElements["div"];
                            const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
                            const __VLS_42 = __VLS_41(Object.assign({ 'onClick': {}, }, { class: ((__VLS_ctx.$style.projects)) }), ...__VLS_functionalComponentArgsRest(__VLS_41));
                            ({}(Object.assign({ 'onClick': {}, }, { class: ((__VLS_ctx.$style.projects)) })));
                            let __VLS_45 = { 'click': __VLS_pickEvent(__VLS_44['click'], {}.onClick) };
                            __VLS_45 = { click: (__VLS_ctx.onPROJECTSText1Click) };
                            (__VLS_43.slots).default;
                            const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
                            let __VLS_44;
                        }
                        (__VLS_33.slots).default;
                        const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                    }
                    {
                        const __VLS_46 = __VLS_intrinsicElements["div"];
                        const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
                        const __VLS_48 = __VLS_47(Object.assign({}, { class: ((__VLS_ctx.$style.graphicDesignerTitleParent)) }), ...__VLS_functionalComponentArgsRest(__VLS_47));
                        ({}(Object.assign({}, { class: ((__VLS_ctx.$style.graphicDesignerTitleParent)) })));
                        {
                            const __VLS_51 = __VLS_intrinsicElements["div"];
                            const __VLS_52 = __VLS_elementAsFunctionalComponent(__VLS_51);
                            const __VLS_53 = __VLS_52(Object.assign({}, { class: ((__VLS_ctx.$style.graphicDesignerTitle)) }), ...__VLS_functionalComponentArgsRest(__VLS_52));
                            ({}(Object.assign({}, { class: ((__VLS_ctx.$style.graphicDesignerTitle)) })));
                            {
                                const __VLS_56 = __VLS_intrinsicElements["div"];
                                const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
                                const __VLS_58 = __VLS_57(Object.assign({}, { class: ((__VLS_ctx.$style.personalProjects)) }), ...__VLS_functionalComponentArgsRest(__VLS_57));
                                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.personalProjects)) })));
                                {
                                    const __VLS_61 = __VLS_intrinsicElements["div"];
                                    const __VLS_62 = __VLS_elementAsFunctionalComponent(__VLS_61);
                                    const __VLS_63 = __VLS_62(Object.assign({}, { class: ((__VLS_ctx.$style.servicesList)) }), ...__VLS_functionalComponentArgsRest(__VLS_62));
                                    ({}(Object.assign({}, { class: ((__VLS_ctx.$style.servicesList)) })));
                                    {
                                        const __VLS_66 = __VLS_intrinsicElements["div"];
                                        const __VLS_67 = __VLS_elementAsFunctionalComponent(__VLS_66);
                                        const __VLS_68 = __VLS_67(Object.assign({ 'onClick': {}, }, { class: ((__VLS_ctx.$style.services)) }), ...__VLS_functionalComponentArgsRest(__VLS_67));
                                        ({}(Object.assign({ 'onClick': {}, }, { class: ((__VLS_ctx.$style.services)) })));
                                        let __VLS_71 = { 'click': __VLS_pickEvent(__VLS_70['click'], {}.onClick) };
                                        __VLS_71 = { click: (__VLS_ctx.onSERVICESText1Click) };
                                        (__VLS_69.slots).default;
                                        const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
                                        let __VLS_70;
                                    }
                                    (__VLS_64.slots).default;
                                    const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63);
                                }
                                {
                                    const __VLS_72 = __VLS_intrinsicElements["div"];
                                    const __VLS_73 = __VLS_elementAsFunctionalComponent(__VLS_72);
                                    const __VLS_74 = __VLS_73(Object.assign({ 'onClick': {}, }, { class: ((__VLS_ctx.$style.contact)) }), ...__VLS_functionalComponentArgsRest(__VLS_73));
                                    ({}(Object.assign({ 'onClick': {}, }, { class: ((__VLS_ctx.$style.contact)) })));
                                    let __VLS_77 = { 'click': __VLS_pickEvent(__VLS_76['click'], {}.onClick) };
                                    __VLS_77 = { click: (__VLS_ctx.onCONTACTText1Click) };
                                    (__VLS_75.slots).default;
                                    const __VLS_75 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74);
                                    let __VLS_76;
                                }
                                (__VLS_59.slots).default;
                                const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
                            }
                            (__VLS_54.slots).default;
                            const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
                        }
                        {
                            const __VLS_78 = __VLS_intrinsicElements["div"];
                            const __VLS_79 = __VLS_elementAsFunctionalComponent(__VLS_78);
                            const __VLS_80 = __VLS_79(Object.assign({}, { class: ((__VLS_ctx.$style.juliettePortfolio)) }), ...__VLS_functionalComponentArgsRest(__VLS_79));
                            ({}(Object.assign({}, { class: ((__VLS_ctx.$style.juliettePortfolio)) })));
                            {
                                const __VLS_83 = __VLS_intrinsicElements["div"];
                                const __VLS_84 = __VLS_elementAsFunctionalComponent(__VLS_83);
                                const __VLS_85 = __VLS_84(Object.assign({}, { class: ((__VLS_ctx.$style.graphicDesignerGrfkContainer)) }), ...__VLS_functionalComponentArgsRest(__VLS_84));
                                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.graphicDesignerGrfkContainer)) })));
                                {
                                    const __VLS_88 = __VLS_intrinsicElements["p"];
                                    const __VLS_89 = __VLS_elementAsFunctionalComponent(__VLS_88);
                                    const __VLS_90 = __VLS_89(Object.assign({}, { class: ((__VLS_ctx.$style.graphicDesigner)) }), ...__VLS_functionalComponentArgsRest(__VLS_89));
                                    ({}(Object.assign({}, { class: ((__VLS_ctx.$style.graphicDesigner)) })));
                                    (__VLS_91.slots).default;
                                    const __VLS_91 = __VLS_pickFunctionalComponentCtx(__VLS_88, __VLS_90);
                                }
                                {
                                    const __VLS_93 = __VLS_intrinsicElements["p"];
                                    const __VLS_94 = __VLS_elementAsFunctionalComponent(__VLS_93);
                                    const __VLS_95 = __VLS_94(Object.assign({}, { class: ((__VLS_ctx.$style.blankLine)) }), ...__VLS_functionalComponentArgsRest(__VLS_94));
                                    ({}(Object.assign({}, { class: ((__VLS_ctx.$style.blankLine)) })));
                                    (__VLS_96.slots).default;
                                    const __VLS_96 = __VLS_pickFunctionalComponentCtx(__VLS_93, __VLS_95);
                                }
                                {
                                    const __VLS_98 = __VLS_intrinsicElements["p"];
                                    const __VLS_99 = __VLS_elementAsFunctionalComponent(__VLS_98);
                                    const __VLS_100 = __VLS_99(Object.assign({}, { class: ((__VLS_ctx.$style.grfkDzanrNoun)) }), ...__VLS_functionalComponentArgsRest(__VLS_99));
                                    ({}(Object.assign({}, { class: ((__VLS_ctx.$style.grfkDzanrNoun)) })));
                                    (__VLS_101.slots).default;
                                    const __VLS_101 = __VLS_pickFunctionalComponentCtx(__VLS_98, __VLS_100);
                                }
                                (__VLS_86.slots).default;
                                const __VLS_86 = __VLS_pickFunctionalComponentCtx(__VLS_83, __VLS_85);
                            }
                            {
                                const __VLS_103 = __VLS_intrinsicElements["div"];
                                const __VLS_104 = __VLS_elementAsFunctionalComponent(__VLS_103);
                                const __VLS_105 = __VLS_104(Object.assign({}, { class: ((__VLS_ctx.$style.isACreativeProfessionalWhoWrapper)) }), ...__VLS_functionalComponentArgsRest(__VLS_104));
                                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.isACreativeProfessionalWhoWrapper)) })));
                                {
                                    const __VLS_108 = __VLS_intrinsicElements["div"];
                                    const __VLS_109 = __VLS_elementAsFunctionalComponent(__VLS_108);
                                    const __VLS_110 = __VLS_109(Object.assign({}, { class: ((__VLS_ctx.$style.isACreativeContainer)) }), ...__VLS_functionalComponentArgsRest(__VLS_109));
                                    ({}(Object.assign({}, { class: ((__VLS_ctx.$style.isACreativeContainer)) })));
                                    {
                                        const __VLS_113 = __VLS_intrinsicElements["p"];
                                        const __VLS_114 = __VLS_elementAsFunctionalComponent(__VLS_113);
                                        const __VLS_115 = __VLS_114(Object.assign({}, { class: ((__VLS_ctx.$style.isACreative)) }), ...__VLS_functionalComponentArgsRest(__VLS_114));
                                        ({}(Object.assign({}, { class: ((__VLS_ctx.$style.isACreative)) })));
                                        (__VLS_116.slots).default;
                                        const __VLS_116 = __VLS_pickFunctionalComponentCtx(__VLS_113, __VLS_115);
                                    }
                                    (__VLS_111.slots).default;
                                    const __VLS_111 = __VLS_pickFunctionalComponentCtx(__VLS_108, __VLS_110);
                                }
                                (__VLS_106.slots).default;
                                const __VLS_106 = __VLS_pickFunctionalComponentCtx(__VLS_103, __VLS_105);
                            }
                            (__VLS_81.slots).default;
                            const __VLS_81 = __VLS_pickFunctionalComponentCtx(__VLS_78, __VLS_80);
                        }
                        (__VLS_49.slots).default;
                        const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
                    }
                    (__VLS_28.slots).default;
                    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                }
                {
                    const __VLS_118 = __VLS_intrinsicElements["div"];
                    const __VLS_119 = __VLS_elementAsFunctionalComponent(__VLS_118);
                    const __VLS_120 = __VLS_119(Object.assign({}, { class: ((__VLS_ctx.$style.figmaCanvasAdobeCreativeCl)) }), ...__VLS_functionalComponentArgsRest(__VLS_119));
                    ({}(Object.assign({}, { class: ((__VLS_ctx.$style.figmaCanvasAdobeCreativeCl)) })));
                    {
                        const __VLS_123 = __VLS_intrinsicElements["div"];
                        const __VLS_124 = __VLS_elementAsFunctionalComponent(__VLS_123);
                        const __VLS_125 = __VLS_124(Object.assign({}, { class: ((__VLS_ctx.$style.myNameIsContainer)) }), ...__VLS_functionalComponentArgsRest(__VLS_124));
                        ({}(Object.assign({}, { class: ((__VLS_ctx.$style.myNameIsContainer)) })));
                        {
                            const __VLS_128 = __VLS_intrinsicElements["p"];
                            const __VLS_129 = __VLS_elementAsFunctionalComponent(__VLS_128);
                            const __VLS_130 = __VLS_129(Object.assign({}, { class: ((__VLS_ctx.$style.myNameIsJuliaFraczkiewicz)) }), ...__VLS_functionalComponentArgsRest(__VLS_129));
                            ({}(Object.assign({}, { class: ((__VLS_ctx.$style.myNameIsJuliaFraczkiewicz)) })));
                            {
                                const __VLS_133 = __VLS_intrinsicElements["span"];
                                const __VLS_134 = __VLS_elementAsFunctionalComponent(__VLS_133);
                                const __VLS_135 = __VLS_134(Object.assign({}, { class: ((__VLS_ctx.$style.together)) }), ...__VLS_functionalComponentArgsRest(__VLS_134));
                                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.together)) })));
                                (__VLS_136.slots).default;
                                const __VLS_136 = __VLS_pickFunctionalComponentCtx(__VLS_133, __VLS_135);
                            }
                            (__VLS_131.slots).default;
                            const __VLS_131 = __VLS_pickFunctionalComponentCtx(__VLS_128, __VLS_130);
                        }
                        {
                            const __VLS_138 = __VLS_intrinsicElements["p"];
                            const __VLS_139 = __VLS_elementAsFunctionalComponent(__VLS_138);
                            const __VLS_140 = __VLS_139(Object.assign({}, { class: ((__VLS_ctx.$style.blankLine1)) }), ...__VLS_functionalComponentArgsRest(__VLS_139));
                            ({}(Object.assign({}, { class: ((__VLS_ctx.$style.blankLine1)) })));
                            (__VLS_141.slots).default;
                            const __VLS_141 = __VLS_pickFunctionalComponentCtx(__VLS_138, __VLS_140);
                        }
                        (__VLS_126.slots).default;
                        const __VLS_126 = __VLS_pickFunctionalComponentCtx(__VLS_123, __VLS_125);
                    }
                    (__VLS_121.slots).default;
                    const __VLS_121 = __VLS_pickFunctionalComponentCtx(__VLS_118, __VLS_120);
                }
                {
                    const __VLS_143 = {}.CopyrightInformation;
                    const __VLS_144 = __VLS_asFunctionalComponent(__VLS_143, new __VLS_143(Object.assign({})));
                    ({}.CopyrightInformation);
                    const __VLS_145 = __VLS_144(Object.assign({}), ...__VLS_functionalComponentArgsRest(__VLS_144));
                    ({}(Object.assign({})));
                    const __VLS_146 = __VLS_pickFunctionalComponentCtx(__VLS_143, __VLS_145);
                }
                (__VLS_23.slots).default;
                const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
            }
            (__VLS_18.slots).default;
            const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
        }
        {
            const __VLS_148 = __VLS_intrinsicElements["main"];
            const __VLS_149 = __VLS_elementAsFunctionalComponent(__VLS_148);
            const __VLS_150 = __VLS_149(Object.assign({}, { class: ((__VLS_ctx.$style.circleShape)) }), ...__VLS_functionalComponentArgsRest(__VLS_149));
            ({}(Object.assign({}, { class: ((__VLS_ctx.$style.circleShape)) })));
            {
                const __VLS_153 = __VLS_intrinsicElements["img"];
                const __VLS_154 = __VLS_elementAsFunctionalComponent(__VLS_153);
                const __VLS_155 = __VLS_154(Object.assign({}, { class: ((__VLS_ctx.$style.layer1Icon)), alt: (""), src: ("/layer-1@2x.png") }), ...__VLS_functionalComponentArgsRest(__VLS_154));
                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.layer1Icon)), alt: (""), src: ("/layer-1@2x.png") })));
                const __VLS_156 = __VLS_pickFunctionalComponentCtx(__VLS_153, __VLS_155);
            }
            {
                const __VLS_158 = {}.FrameComponent;
                const __VLS_159 = __VLS_asFunctionalComponent(__VLS_158, new __VLS_158(Object.assign({})));
                ({}.FrameComponent);
                const __VLS_160 = __VLS_159(Object.assign({}), ...__VLS_functionalComponentArgsRest(__VLS_159));
                ({}(Object.assign({})));
                const __VLS_161 = __VLS_pickFunctionalComponentCtx(__VLS_158, __VLS_160);
            }
            {
                const __VLS_163 = __VLS_intrinsicElements["img"];
                const __VLS_164 = __VLS_elementAsFunctionalComponent(__VLS_163);
                const __VLS_165 = __VLS_164(Object.assign({}, { class: ((__VLS_ctx.$style.circleShapeChild)), loading: ("lazy"), alt: (""), src: ("/group-16.svg") }), ...__VLS_functionalComponentArgsRest(__VLS_164));
                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.circleShapeChild)), loading: ("lazy"), alt: (""), src: ("/group-16.svg") })));
                const __VLS_166 = __VLS_pickFunctionalComponentCtx(__VLS_163, __VLS_165);
            }
            {
                const __VLS_168 = __VLS_intrinsicElements["img"];
                const __VLS_169 = __VLS_elementAsFunctionalComponent(__VLS_168);
                const __VLS_170 = __VLS_169(Object.assign({}, { class: ((__VLS_ctx.$style.circleShapeItem)), alt: (""), src: ("/group-14.svg") }), ...__VLS_functionalComponentArgsRest(__VLS_169));
                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.circleShapeItem)), alt: (""), src: ("/group-14.svg") })));
                const __VLS_171 = __VLS_pickFunctionalComponentCtx(__VLS_168, __VLS_170);
            }
            {
                const __VLS_173 = __VLS_intrinsicElements["img"];
                const __VLS_174 = __VLS_elementAsFunctionalComponent(__VLS_173);
                const __VLS_175 = __VLS_174(Object.assign({}, { class: ((__VLS_ctx.$style.circleShapeInner)), alt: (""), src: ("/group-17.svg") }), ...__VLS_functionalComponentArgsRest(__VLS_174));
                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.circleShapeInner)), alt: (""), src: ("/group-17.svg") })));
                const __VLS_176 = __VLS_pickFunctionalComponentCtx(__VLS_173, __VLS_175);
            }
            {
                const __VLS_178 = __VLS_intrinsicElements["img"];
                const __VLS_179 = __VLS_elementAsFunctionalComponent(__VLS_178);
                const __VLS_180 = __VLS_179(Object.assign({}, { class: ((__VLS_ctx.$style.lineIcon)), alt: (""), src: ("/line-2.svg") }), ...__VLS_functionalComponentArgsRest(__VLS_179));
                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.lineIcon)), alt: (""), src: ("/line-2.svg") })));
                const __VLS_181 = __VLS_pickFunctionalComponentCtx(__VLS_178, __VLS_180);
            }
            {
                const __VLS_183 = __VLS_intrinsicElements["img"];
                const __VLS_184 = __VLS_elementAsFunctionalComponent(__VLS_183);
                const __VLS_185 = __VLS_184(Object.assign({}, { class: ((__VLS_ctx.$style.groupIcon)), alt: (""), src: ("/group-15.svg") }), ...__VLS_functionalComponentArgsRest(__VLS_184));
                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.groupIcon)), alt: (""), src: ("/group-15.svg") })));
                const __VLS_186 = __VLS_pickFunctionalComponentCtx(__VLS_183, __VLS_185);
            }
            {
                const __VLS_188 = __VLS_intrinsicElements["img"];
                const __VLS_189 = __VLS_elementAsFunctionalComponent(__VLS_188);
                const __VLS_190 = __VLS_189(Object.assign({}, { class: ((__VLS_ctx.$style.image000017Copy1)), loading: ("lazy"), alt: (""), src: ("/image00001-7--copy-1@2x.png") }), ...__VLS_functionalComponentArgsRest(__VLS_189));
                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.image000017Copy1)), loading: ("lazy"), alt: (""), src: ("/image00001-7--copy-1@2x.png") })));
                const __VLS_191 = __VLS_pickFunctionalComponentCtx(__VLS_188, __VLS_190);
            }
            {
                const __VLS_193 = __VLS_intrinsicElements["img"];
                const __VLS_194 = __VLS_elementAsFunctionalComponent(__VLS_193);
                const __VLS_195 = __VLS_194(Object.assign({}, { class: ((__VLS_ctx.$style.ellipseIcon)), alt: (""), src: ("/ellipse-3.svg") }), ...__VLS_functionalComponentArgsRest(__VLS_194));
                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.ellipseIcon)), alt: (""), src: ("/ellipse-3.svg") })));
                const __VLS_196 = __VLS_pickFunctionalComponentCtx(__VLS_193, __VLS_195);
            }
            {
                const __VLS_198 = __VLS_intrinsicElements["img"];
                const __VLS_199 = __VLS_elementAsFunctionalComponent(__VLS_198);
                const __VLS_200 = __VLS_199(Object.assign({}, { class: ((__VLS_ctx.$style.circleShapeChild1)), alt: (""), src: ("/ellipse-5.svg") }), ...__VLS_functionalComponentArgsRest(__VLS_199));
                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.circleShapeChild1)), alt: (""), src: ("/ellipse-5.svg") })));
                const __VLS_201 = __VLS_pickFunctionalComponentCtx(__VLS_198, __VLS_200);
            }
            {
                const __VLS_203 = __VLS_intrinsicElements["img"];
                const __VLS_204 = __VLS_elementAsFunctionalComponent(__VLS_203);
                const __VLS_205 = __VLS_204(Object.assign({}, { class: ((__VLS_ctx.$style.circleShapeChild2)), alt: (""), src: ("/ellipse-4.svg") }), ...__VLS_functionalComponentArgsRest(__VLS_204));
                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.circleShapeChild2)), alt: (""), src: ("/ellipse-4.svg") })));
                const __VLS_206 = __VLS_pickFunctionalComponentCtx(__VLS_203, __VLS_205);
            }
            {
                const __VLS_208 = __VLS_intrinsicElements["img"];
                const __VLS_209 = __VLS_elementAsFunctionalComponent(__VLS_208);
                const __VLS_210 = __VLS_209(Object.assign({}, { class: ((__VLS_ctx.$style.circleShapeChild3)), alt: (""), src: ("/group-61@2x.png") }), ...__VLS_functionalComponentArgsRest(__VLS_209));
                ({}(Object.assign({}, { class: ((__VLS_ctx.$style.circleShapeChild3)), alt: (""), src: ("/group-61@2x.png") })));
                const __VLS_211 = __VLS_pickFunctionalComponentCtx(__VLS_208, __VLS_210);
            }
            (__VLS_151.slots).default;
            const __VLS_151 = __VLS_pickFunctionalComponentCtx(__VLS_148, __VLS_150);
        }
        {
            const __VLS_213 = {}.MonthlyMotivationLabel;
            const __VLS_214 = __VLS_asFunctionalComponent(__VLS_213, new __VLS_213(Object.assign({})));
            ({}.MonthlyMotivationLabel);
            const __VLS_215 = __VLS_214(Object.assign({}), ...__VLS_functionalComponentArgsRest(__VLS_214));
            ({}(Object.assign({})));
            const __VLS_216 = __VLS_pickFunctionalComponentCtx(__VLS_213, __VLS_215);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    // @ts-ignore
    [$style, $style, $style, $style, $style, $style, $style, $style, $style, onPROJECTSText1Click, $style, $style, $style, $style, $style, onSERVICESText1Click, $style, onCONTACTText1Click, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style, $style,];
    return __VLS_slots;
}
let __VLS_internalComponent;
