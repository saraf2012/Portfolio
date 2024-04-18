<template>
  <div :class="$style.rectangleParent">
    <div :class="$style.frameChild" />
    <img :class="$style.finalll21Icon" alt="" src="/finalll2-1@2x.png" />
    <div :class="$style.frameWrapper">
      <div :class="$style.projectsServicesContactLinkParent">
        <div :class="$style.projectsServicesContactLink">
          <div :class="$style.figmaAdobeCreativeCloud">
            <div :class="$style.julietteWicz" data-scroll-to="jULIETTEWICZText">
              JULIETTE WICZ©
            </div>
            <div :class="$style.projects" @click="onPROJECTSText1Click">
              PROJECTS
            </div>
          </div>
          <div :class="$style.graphicDesignerTitleParent">
            <div :class="$style.graphicDesignerTitle">
              <div :class="$style.personalProjects">
                <div :class="$style.servicesList">
                  <div :class="$style.services" @click="onSERVICESText1Click">
                    SERVICES
                  </div>
                </div>
                <div :class="$style.contact" @click="onCONTACTText1Click">
                  CONTACT
                </div>
              </div>
            </div>
            <div :class="$style.juliettePortfolio">
              <div :class="$style.graphicDesignerGrfkContainer">
                <p :class="$style.graphicDesigner">graphic designer</p>
                <p :class="$style.blankLine">&nbsp;</p>
                <p :class="$style.grfkDzanrNoun">/ˌgræf.ɪk dɪˈzaɪ.nər/ noun</p>
              </div>
              <div :class="$style.isACreativeProfessionalWhoWrapper">
                <div :class="$style.isACreativeContainer">
                  <p :class="$style.isACreative">
                    is a creative professional who uses artistic and technical
                    skills to visually communicate ideas. They work with various
                    design elements to create visually appealing content for
                    print, digital, and multimedia platforms, aiming to convey
                    messages or enhance brand identity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div :class="$style.figmaCanvasAdobeCreativeCl">
          <div :class="$style.myNameIsContainer">
            <p :class="$style.myNameIsJuliaFraczkiewicz">
              My name is Julia Fraczkiewicz, Warsaw-based graphic designer with
              specialization in visual identity and web design. I will be glad
              to lead you through design proccess and drive succesfull outcomes
              by combaining problem-solving attitude with creativity. This way
              we can together create functional, timeless and aesthetic-looking
              ideas. I’m mainly passionate about minimalism and brutalism, but I
              am constantly expanding my knowledge about other styles in order
              to meet your expectation. I hope we can create a new future of
              design <span :class="$style.together">together</span>.
            </p>
            <p :class="$style.blankLine1">&nbsp;</p>
          </div>
        </div>
        <CopyrightInformation />
      </div>
    </div>
    <main :class="$style.circleShape">
      <img
        :class="$style.layer1Icon"
        alt=""
        src="/layer-1@2x.png"
      /><FrameComponent />
      <img
        :class="$style.circleShapeChild"
        loading="lazy"
        alt=""
        src="/group-16.svg"
      />
      <img :class="$style.circleShapeItem" alt="" src="/group-14.svg" />
      <img :class="$style.circleShapeInner" alt="" src="/group-17.svg" />
      <img :class="$style.lineIcon" alt="" src="/line-2.svg" />
      <img :class="$style.groupIcon" alt="" src="/group-15.svg" />
      <img
        :class="$style.image000017Copy1"
        loading="lazy"
        alt=""
        src="/image00001-7--copy-1@2x.png"
      />
      <img :class="$style.ellipseIcon" alt="" src="/ellipse-3.svg" />
      <img :class="$style.circleShapeChild1" alt="" src="/ellipse-5.svg" />
      <img :class="$style.circleShapeChild2" alt="" src="/ellipse-4.svg" />
      <img :class="$style.circleShapeChild3" alt="" src="/group-61@2x.png" />
    </main>
    <MonthlyMotivationLabel />
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import CopyrightInformation from "../components/CopyrightInformation.vue";
  import FrameComponent from "../components/FrameComponent.vue";
  import MonthlyMotivationLabel from "../components/MonthlyMotivationLabel.vue";

  export default defineComponent({
    name: "Frame",
    components: {
      CopyrightInformation,
      FrameComponent,
      MonthlyMotivationLabel,
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
</script>
<style module>
  .frameChild {
    align-self: stretch;
    height: 5012px;
    position: relative;
    background-color: var(--color-gray-100);
    display: none;
    z-index: 0;
  }
  .finalll21Icon {
    align-self: stretch;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
    display: none;
    z-index: 1;
  }
  .julietteWicz {
    position: relative;
    z-index: 1;
  }
  .projects {
    position: relative;
    color: var(--color-white);
    cursor: pointer;
    z-index: 1;
  }
  .figmaAdobeCreativeCloud {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 24px;
  }
  .services {
    position: relative;
    cursor: pointer;
    z-index: 1;
  }
  .servicesList {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-12xs);
  }
  .contact {
    position: relative;
    cursor: pointer;
    z-index: 1;
  }
  .personalProjects {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-mid);
  }
  .graphicDesignerTitle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 6px 0px 0px;
  }
  .graphicDesigner {
    margin: 0;
    font-size: 128px;
  }
  .blankLine {
    margin: 0;
  }
  .grfkDzanrNoun {
    margin: 0;
  }
  .graphicDesignerGrfkContainer {
    width: 664px;
    height: 357px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    max-width: 100%;
    z-index: 3;
  }
  .isACreative {
    margin: 0;
  }
  .isACreativeContainer {
    height: 286px;
    flex: 1;
    position: relative;
    display: inline-block;
    max-width: 100%;
    z-index: 3;
  }
  .isACreativeProfessionalWhoWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-8xs);
    box-sizing: border-box;
    max-width: 100%;
    text-align: justify;
  }
  .juliettePortfolio {
    width: 989px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 44px;
    max-width: 100%;
    font-size: var(--font-size-21xl);
    font-family: var(--font-cofo-sans-mono-vf);
  }
  .graphicDesignerTitleParent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
    color: var(--color-white);
  }
  .projectsServicesContactLink {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 11px;
    max-width: 100%;
  }
  .myNameIsJuliaFraczkiewicz1 {
    white-space: pre-wrap;
  }
  .together {
    text-decoration: underline;
  }
  .myNameIsJuliaFraczkiewicz {
    margin: 0;
  }
  .blankLine1 {
    margin: 0;
  }
  .myNameIsContainer {
    height: 353.6px;
    flex: 1;
    position: relative;
    display: inline-block;
    max-width: 100%;
    z-index: 3;
  }
  .figmaCanvasAdobeCreativeCl {
    width: 526px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-12xs) 243px;
    box-sizing: border-box;
    max-width: 100%;
    text-align: justify;
    color: var(--color-white);
    font-family: var(--font-basic-sans);
  }
  .projectsServicesContactLinkParent {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 376.7px;
    max-width: 100%;
  }
  .frameWrapper {
    width: 1417px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-21xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .layer1Icon {
    position: absolute;
    top: -50px;
    left: 836px;
    width: 644.2px;
    height: 645.8px;
    overflow: hidden;
    object-fit: contain;
    z-index: 1;
  }
  .circleShapeChild {
    position: absolute;
    top: 1871px;
    left: -107px;
    width: 546.4px;
    height: 542.8px;
    z-index: 1;
  }
  .circleShapeItem {
    position: absolute;
    top: 2336px;
    left: 632px;
    width: 1001.3px;
    height: 996.5px;
    z-index: 1;
  }
  .circleShapeInner {
    position: absolute;
    top: 2371.3px;
    left: -357px;
    width: 943px;
    height: 977.5px;
    z-index: 2;
  }
  .lineIcon {
    position: absolute;
    top: 537.5px;
    left: 393px;
    width: 545.5px;
    height: 0px;
    z-index: 3;
  }
  .groupIcon {
    position: absolute;
    top: 1704.1px;
    left: 592px;
    width: 895.5px;
    height: 924.5px;
    z-index: 2;
  }
  .image000017Copy1 {
    position: absolute;
    top: 1110px;
    left: 916px;
    width: 482px;
    height: 671px;
    object-fit: cover;
    z-index: 3;
  }
  .ellipseIcon {
    position: absolute;
    top: 3389px;
    left: 18px;
    width: 351px;
    height: 351px;
    z-index: 1;
  }
  .circleShapeChild1 {
    position: absolute;
    top: 3084px;
    left: 172px;
    width: 351px;
    height: 351px;
    z-index: 3;
  }
  .circleShapeChild2 {
    position: absolute;
    top: 3941px;
    left: 1135px;
    width: 279px;
    height: 279px;
    z-index: 1;
  }
  .circleShapeChild3 {
    position: absolute;
    top: 3240px;
    left: 136px;
    width: 1168px;
    height: 875px;
    object-fit: contain;
    z-index: 4;
  }
  .circleShape {
    width: 100%;
    height: 4220px;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 0px;
    left: 0px;
    max-width: 100%;
  }
  .rectangleParent {
    width: 100%;
    position: relative;
    background-color: var(--color-gray-100);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 45px var(--padding-11xs) 0px 0px;
    box-sizing: border-box;
    gap: 1396px;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    font-size: var(--font-size-13xl);
    color: #d82028;
    font-family: var(--font-stevie-sans);
  }

  @media screen and (max-width: 1225px) {
    .graphicDesignerTitleParent {
      flex-wrap: wrap;
    }

    .projectsServicesContactLinkParent {
      gap: 188px;
    }
  }
  @media screen and (max-width: 750px) {
    .julietteWicz {
      font-size: var(--font-size-7xl);
    }

    .projects {
      font-size: var(--font-size-7xl);
    }

    .services {
      font-size: var(--font-size-7xl);
    }

    .contact {
      font-size: var(--font-size-7xl);
    }

    .graphicDesignerGrfkContainer {
      font-size: var(--font-size-13xl);
    }

    .isACreativeContainer {
      font-size: var(--font-size-13xl);
    }

    .juliettePortfolio {
      gap: 22px;
    }

    .myNameIsContainer {
      font-size: var(--font-size-7xl);
    }

    .figmaCanvasAdobeCreativeCl {
      padding-bottom: 158px;
      box-sizing: border-box;
    }

    .projectsServicesContactLinkParent {
      gap: 94px;
    }

    .rectangleParent {
      gap: 698px;
    }
  }
  @media screen and (max-width: 450px) {
    .julietteWicz {
      font-size: var(--font-size-lgi);
    }

    .projects {
      font-size: var(--font-size-lgi);
    }

    .services {
      font-size: var(--font-size-lgi);
    }

    .contact {
      font-size: var(--font-size-lgi);
    }

    .graphicDesignerGrfkContainer {
      font-size: var(--font-size-5xl);
    }

    .isACreativeContainer {
      font-size: var(--font-size-5xl);
    }

    .myNameIsContainer {
      font-size: var(--font-size-lgi);
    }

    .projectsServicesContactLinkParent {
      gap: var(--gap-28xl);
    }

    .rectangleParent {
      gap: 349px;
    }
  }
</style>
