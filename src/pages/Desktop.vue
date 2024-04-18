<template>
  <div :class="$style.desktop2">
    <div :class="$style.desktop2Child" />
    <Frame1 />
    <main :class="$style.desktop2Inner">
      <section :class="$style.solidWebDesignTemplateParent">
        <div :class="$style.solidWebDesignTemplate">
          <div :class="$style.solidWebDesignContainer">
            <router-link to="/Desktop-9" class="nav-link" style="color: white;">SOLID</router-link>
            <span> /WEB DESIGN/ </span>
          </div>
        </div>
        <div :class="$style.monitorTemplate">
          <img
            :class="$style.monitor1Template1"
            loading="lazy"
            alt=""
            src="/monitor-1-template-1@2x.png"
          />
        </div>
        <div :class="$style.pureVitaLogoDesign">
          <div :class="$style.tubemockup">
            <div :class="$style.pureVitaLogoContainer">
              <router-link to="/Desktop-4" class="nav-link" style="color: white;">PURE VITA</router-link>
              <span> /LOGO DESIGN/ </span>
            </div>
          </div>
          <img
            :class="$style.tubeMockupV10FrontView1Icon"
            loading="lazy"
            alt=""
            src="/tubemockupv10frontview-1@2x.png"
          />
        </div>
        <div :class="$style.cardLayout">
          <div :class="$style.visionPosterDesignContainer">
            <router-link to="/Desktop-10" class="nav-link" style="color: white;">VISION</router-link>
            <span> /POSTER DESIGN/ </span>
          </div>
        </div>
        <div :class="$style.goBackButton">
          <img
            :class="$style.brochureTemplate11"
            loading="lazy"
            alt=""
            src="/brochure-template-1-1@2x.png"
          />
        </div>
        <div :class="$style.lakeComoPostcardDesignWrapper">
          <div :class="$style.lakeComoPostcardContainer">
            <router-link to="/Desktop-5" class="nav-link" style="color: white;">LAKE COMO</router-link>
  <span> /POSTCARD DESIGN/ </span>
          </div>
        </div>
        <div :class="$style.postcardLayout">
          <img
            :class="$style.postcard1Icon"
            loading="lazy"
            alt=""
            src="/postcard-1@2x.png"
          />
        </div>
        <div :class="$style.frameWrapper">
          <div :class="$style.vectorParent">
            <router-link to="/" class="nav-link" @click.native="goBack">
  <img :class="$style.vectorIcon" loading="lazy" alt="" src="/vector.svg" />
</router-link>

           <router-link to="/" class="nav-link" @click.native="goBack">
  <img :class="$style.goBackIcon" loading="lazy" alt="" src="/go-back.svg" />
</router-link>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import Frame1 from "../components/Frame1.vue";

  export default defineComponent({
    name: "Desktop",
    components: { Frame1 },
    
  });
</script>
<style module>
  .desktop2Child {
    width: 1440px;
    height: 7033px;
    position: relative;
    background-color: var(--color-gray-100);
    display: none;
    max-width: 100%;
  }
  .solid {
    font-weight: 900;
  }
  .solidWebDesignContainer {
    height: 54px;
    flex: 1;
    position: relative;
    white-space: pre-wrap;
    display: inline-block;
    max-width: 100%;
    z-index: 1;
  }
  .solidWebDesignTemplate {
    width: 547px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 19.5px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .monitor1Template1 {
    width: 872px;
    position: relative;
    max-height: 100%;
    object-fit: contain;
    max-width: 100%;
    z-index: 1;
  }
  .monitorTemplate {
    width: 1200px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) 61.5px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .pureVita {
    font-weight: 900;
  }
  .pureVitaLogoContainer {
    height: 54px;
    width: 691px;
    position: relative;
    white-space: pre-wrap;
    display: inline-block;
    max-width: 100%;
    z-index: 1;
  }
  .tubemockup {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .tubeMockupV10FrontView1Icon {
    width: 633.6px;
    position: relative;
    max-height: 100%;
    object-fit: contain;
    max-width: 100%;
    z-index: 1;
  }
  .pureVitaLogoDesign {
    width: 916.6px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 115px;
    max-width: 100%;
  }
  .vision {
    font-weight: 900;
  }
  .visionPosterDesignContainer {
    height: 54px;
    flex: 1;
    position: relative;
    white-space: pre-wrap;
    display: inline-block;
    max-width: 100%;
    z-index: 1;
  }
  .cardLayout {
    width: 662px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 135.5px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .brochureTemplate11 {
    width: 730px;
    position: relative;
    max-height: 100%;
    object-fit: contain;
    max-width: 100%;
    z-index: 1;
  }
  .goBackButton {
    width: 1200px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) 178.5px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .lakeComo {
    font-weight: 900;
  }
  .lakeComoPostcardContainer {
    height: 54px;
    flex: 1;
    position: relative;
    white-space: pre-wrap;
    display: inline-block;
    max-width: 100%;
    z-index: 1;
  }
  .lakeComoPostcardDesignWrapper {
    width: 806px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 261.5px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .postcard1Icon {
    width: 557px;
    position: relative;
    max-height: 100%;
    object-fit: cover;
    max-width: 100%;
    z-index: 1;
  }
  .postcardLayout {
    width: 1201px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) 222.5px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .vectorIcon {
    align-self: stretch;
    width: 87px;
    position: relative;
    max-height: 100%;
    object-fit: contain;
    min-height: 43px;
    z-index: 1;
  }
  .goBackIcon {
    align-self: stretch;
    width: 254px;
    position: relative;
    max-height: 100%;
    min-height: 43px;
    z-index: 1;
  }
  .vectorParent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: var(--gap-14xl-1);
    max-width: 100%;
  }
  .frameWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    max-width: 100%;
  }
  .solidWebDesignTemplateParent {
    width: 1278.1px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 157.5px;
    max-width: 100%;
    text-align: justify;
    font-size: var(--font-size-29xl);
    color: var(--color-white);
    font-family: var(--font-cofo-sans-mono-vf);
  }
  .desktop2Inner {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    max-width: 100%;
  }
  .desktop2 {
    width: 100%;
    position: relative;
    background-color: var(--color-gray-100);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-22xl-9) var(--padding-26xl-6) var(--padding-5xl);
    box-sizing: border-box;
    gap: 1277px;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1200px) {
    .solidWebDesignTemplateParent {
      gap: 79px;
    }
  }
  @media screen and (max-width: 1050px) {
    .solidWebDesignContainer {
      font-size: var(--font-size-19xl);
    }

    .monitorTemplate {
      padding-bottom: var(--padding-21xl);
      box-sizing: border-box;
    }

    .pureVitaLogoContainer {
      font-size: var(--font-size-19xl);
    }

    .pureVitaLogoDesign {
      gap: 57px;
    }

    .visionPosterDesignContainer {
      font-size: var(--font-size-19xl);
    }

    .goBackButton {
      padding-bottom: 116px;
      box-sizing: border-box;
    }

    .lakeComoPostcardContainer {
      font-size: var(--font-size-19xl);
    }
  }
  @media screen and (max-width: 750px) {
    .monitorTemplate {
      padding-bottom: 26px;
      box-sizing: border-box;
    }

    .postcardLayout {
      padding-bottom: 145px;
      box-sizing: border-box;
    }

    .solidWebDesignTemplateParent {
      gap: var(--gap-20xl);
    }

    .desktop2 {
      gap: 638px;
      padding-right: var(--padding-2xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .solidWebDesignContainer {
      font-size: var(--font-size-10xl);
    }

    .pureVitaLogoContainer {
      font-size: var(--font-size-10xl);
    }

    .pureVitaLogoDesign {
      gap: 29px;
    }

    .visionPosterDesignContainer {
      font-size: var(--font-size-10xl);
    }

    .goBackButton {
      padding-bottom: 75px;
      box-sizing: border-box;
    }

    .lakeComoPostcardContainer {
      font-size: var(--font-size-10xl);
    }

    .vectorParent {
      flex-wrap: wrap;
      gap: var(--gap-mid);
    }

    .solidWebDesignTemplateParent {
      gap: var(--gap-xl);
    }

    .desktop2 {
      gap: 319px;
    }
  }
</style>
