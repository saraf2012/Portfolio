<template>
  <div :class="$style.desktop10">
    <main :class="$style.rectangleParent">
      <div :class="$style.frameChild" />
      <header :class="$style.visionWrapper">
        <h1 :class="$style.vision">vision</h1>
      </header>
      <section :class="$style.recentProjectPost">
        <div :class="$style.inThisRecent">
          In this recent project, I carefully crafted a poster illustrating the
          idea of the word "vision." Using Adobe Illustrator, I carefully
          arranged the layout to ensure it looked just right. Then, in
          Photoshop, I added halftone textures and gradient maps to give the
          design more depth and detail. The result is a poster that invites
          viewers to explore the power of imagination and foresight.The poster
          goes beyond mere artwork; it's an invitation to ponder the profound
          nature of vision.
        </div>
      </section>
      <section :class="$style.frameWrapper">
        <div :class="$style.poster22Parent">
          <img
            :class="$style.poster22Icon"
            loading="lazy"
            alt=""
            src="/poster2-2@2x.png"
          />
          <img
            :class="$style.freeFoldedPaperMockup11Icon"
            loading="lazy"
            alt=""
            src="/free-folded-paper-mockup-1-1@2x.png"
          />
          <img
            :class="$style.freeUrbanVerticalPosterMocIcon"
            loading="lazy"
            alt=""
            src="/freeurbanverticalpostermockup-1@2x.png"
          />
        </div>
      </section>
      <footer :class="$style.frameContainer">
        <div :class="$style.gOButtonParent">
          <img
            :class="$style.gOButton"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <img
            :class="$style.goBackIcon"
            loading="lazy"
            alt=""
            src="/go-back5.svg"
          />
        </div>
      </footer>
    </main>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Desktop4",
  });
</script>
<style module>
  .frameChild {
    width: 1440px;
    height: 9692px;
    position: relative;
    background-color: var(--color-gray-100);
    display: none;
    max-width: 100%;
  }
  .vision {
    margin: 0;
    height: 167px;
    flex: 1;
    position: relative;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    white-space: nowrap;
    max-width: 100%;
    z-index: 1;
  }
  .visionWrapper {
    width: 1156px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 109px;
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-181xl);
    color: var(--color-white);
    font-family: var(--font-cofo-sans-mono-vf);
  }
  .inThisRecent {
    height: 1136px;
    width: 1296px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    max-width: 100%;
    z-index: 1;
  }
  .recentProjectPost {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-11xl) var(--padding-8xs);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-45xl);
    color: var(--color-white);
    font-family: var(--font-cofo-sans-mono-vf);
  }
  .poster22Icon {
    align-self: stretch;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  .freeFoldedPaperMockup11Icon {
    align-self: stretch;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  .freeUrbanVerticalPosterMocIcon {
    align-self: stretch;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  .poster22Parent {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .frameWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-23xl) 0px var(--padding-29xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .gOButton {
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
  .gOButtonParent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-14xl-1);
    max-width: 100%;
  }
  .frameContainer {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    max-width: 100%;
  }
  .rectangleParent {
    flex: 1;
    background-color: var(--color-gray-100);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    box-sizing: border-box;
    gap: 76px;
    max-width: 100%;
    flex-shrink: 0;
  }
  .desktop10 {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1200px) {
    .frameWrapper {
      padding-left: var(--padding-5xl);
      padding-right: var(--padding-2xl);
      box-sizing: border-box;
    }

    .rectangleParent {
      padding-bottom: 1184px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 1050px) {
    .inThisRecent {
      font-size: var(--font-size-32xl);
    }

    .rectangleParent {
      padding-bottom: 770px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 750px) {
    .rectangleParent {
      gap: 38px;
      padding-right: var(--padding-2xl);
      padding-bottom: 500px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .inThisRecent {
      font-size: var(--font-size-19xl);
    }

    .gOButtonParent {
      flex-wrap: wrap;
      gap: var(--gap-mid);
    }

    .rectangleParent {
      gap: var(--gap-lgi);
    }

    .desktop10 {
      height: auto;
    }
  }
</style>
