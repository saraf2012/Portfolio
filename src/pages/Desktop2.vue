<template>
  <div :class="$style.desktop4">
    <main :class="$style.rectangleParent">
      <div :class="$style.frameChild" />
      <section :class="$style.pureVitaWrapper">
        <header :class="$style.pureVita">pure vita</header>
      </section>
      <section :class="$style.caseStudyBox">
        <div :class="$style.caseStudyContainer">
          <p :class="$style.caseStudy">Case Study - Pure Vita </p>
          <p :class="$style.clientOverviewPure">
            Client Overview: "Pure Viva" is a skincare brand dedicated to
            providing high-quality products that promote purity, beauty, and
            renewal. With a focus on natural ingredients and holistic skincare
            solutions, the brand seeks to offer consumers a luxurious yet
            sustainable experience.
          </p>
          <p :class="$style.projectBriefThe">
            Project Brief: The task at hand was to create a sophisticated and
            elegant logo featuring a Lotus flower for "Pure Viva." The Lotus,
            symbolizing purity, beauty, and renewal, perfectly aligned with the
            brand's core values and mission.
          </p>
          <p :class="$style.blankLine">&nbsp;</p>
          <p :class="$style.designProcess">Design Process:</p>
          <p :class="$style.blankLine1">&nbsp;</p>
          <p :class="$style.researchAndInspiration">
            1) Research and Inspiration:
          </p>
          <p :class="$style.blankLine2">&nbsp;</p>
          <p :class="$style.toBeginThorough">
            To begin, thorough research was conducted into Lotus flower
            symbolism, as well as the target audience and competitors' branding.
            Inspiration was drawn from minimalist design principles and nature's
            intricate beauty as well as symbol of nature, life and wellness -
            lotus.
          </p>
          <p :class="$style.blankLine3">&nbsp;</p>
          <p :class="$style.execution">2) Execution:</p>
          <p :class="$style.blankLine4">&nbsp;</p>
          <p :class="$style.usingAdobeIllustrator">
            Using Adobe Illustrator, the chosen concept was refined and brought
            to life. The Lotus flower was intricately designed with clean lines
            and delicate details, capturing its natural beauty while maintaining
            a minimalist aesthetic. Pink as a color was chosen in order to
            enhance confidence, youthful energy, and a sense of adventure.
          </p>
          <p :class="$style.blankLine5">&nbsp;</p>
          <p :class="$style.typography">3) Typography:</p>
          <p :class="$style.blankLine6">&nbsp;</p>
          <p :class="$style.forTheBrand">
            For the brand name "Pure Viva," a modern and elegant font (IvyEpic
            Variable light) was chosen to complement the Lotus flower.
            Experimentation with letter spacing and font weights ensured a
            balanced and visually appealing composition that harmonized with the
            overall aesthetic.
          </p>
          <p :class="$style.blankLine7">&nbsp;</p>
          <p :class="$style.customerFeedback">Customer feedback:</p>
          <p :class="$style.blankLine8">&nbsp;</p>
          <p :class="$style.loveThePure">
            "Love the 'Pure Viva' Lotus logo! It perfectly embodies purity and
            beauty with its minimalist design and calming colors. It's versatile
            and timeless, reflecting the brand's commitment to natural skincare.
            Can't wait to see more!"
          </p>
          <p :class="$style.ceoOfPure">— CEO of Pure Vita</p>
        </div>
      </section>
      <section :class="$style.topBar">
        <img
          :class="$style.pureSkin1Icon"
          loading="lazy"
          alt=""
          src="/pure-skin-1@2x.png"
        />
      </section>
      <section :class="$style.tubemockupBackground">
        <img
          :class="$style.cosmeticsJarMockupTopV41Icon"
          loading="lazy"
          alt=""
          src="/cosmeticsjarmockuptopv4-1@2x.png"
        />
      </section>
      <FrameComponent1 />
    </main>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import FrameComponent1 from "../components/FrameComponent1.vue";

  export default defineComponent({
    name: "Desktop2",
    components: { FrameComponent1 },
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
  .pureVita {
    height: 167px;
    flex: 1;
    position: relative;
    font-size: var(--font-size-181xl);
    font-family: var(--font-cofo-sans-mono-vf);
    color: var(--color-white);
    text-align: left;
    display: inline-block;
    white-space: nowrap;
    max-width: 100%;
    z-index: 1;
  }
  .pureVitaWrapper {
    width: 1156px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 138px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .caseStudy {
    margin: 0;
  }
  .clientOverviewPure {
    margin: 0;
  }
  .projectBriefThe {
    margin: 0;
  }
  .blankLine {
    margin: 0;
  }
  .designProcess {
    margin: 0;
  }
  .blankLine1 {
    margin: 0;
  }
  .researchAndInspiration {
    margin: 0;
  }
  .blankLine2 {
    margin: 0;
  }
  .toBeginThorough {
    margin: 0;
  }
  .blankLine3 {
    margin: 0;
  }
  .execution {
    margin: 0;
  }
  .blankLine4 {
    margin: 0;
  }
  .usingAdobeIllustrator {
    margin: 0;
  }
  .blankLine5 {
    margin: 0;
  }
  .typography {
    margin: 0;
  }
  .blankLine6 {
    margin: 0;
  }
  .forTheBrand {
    margin: 0;
  }
  .blankLine7 {
    margin: 0;
  }
  .customerFeedback {
    margin: 0;
  }
  .blankLine8 {
    margin: 0;
  }
  .loveThePure {
    margin: 0;
  }
  .ceoOfPure {
    margin: 0;
  }
  .caseStudyContainer {
    height: 5080px;
    flex: 1;
    position: relative;
    display: inline-block;
    max-width: 100%;
    z-index: 1;
  }
  .caseStudyBox {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-29xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-45xl);
    color: var(--color-white);
    font-family: var(--font-cofo-sans-mono-vf);
  }
  .pureSkin1Icon {
    height: 1818px;
    flex: 1;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    object-fit: contain;
    z-index: 1;
  }
  .topBar {
    width: 1381px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-29xl) var(--padding-79xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .cosmeticsJarMockupTopV41Icon {
    width: 787px;
    position: relative;
    max-height: 100%;
    object-fit: contain;
    max-width: 100%;
    z-index: 1;
  }
  .tubemockupBackground {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-12xs) var(--padding-79xl) 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .rectangleParent {
    flex: 1;
    background-color: var(--color-gray-100);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-5xl) 573.6px;
    box-sizing: border-box;
    gap: var(--gap-28xl);
    max-width: 100%;
    flex-shrink: 0;
  }
  .desktop4 {
    width: 100%;
    height: 9164px;
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
    .caseStudyBox {
      padding-left: var(--padding-5xl);
      padding-right: var(--padding-5xl);
      box-sizing: border-box;
    }

    .topBar {
      padding-left: var(--padding-5xl);
      padding-right: var(--padding-5xl);
      padding-bottom: var(--padding-45xl);
      box-sizing: border-box;
    }

    .rectangleParent {
      padding-bottom: 157px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 1050px) {
    .caseStudyContainer {
      font-size: var(--font-size-32xl);
    }

    .topBar {
      padding-bottom: var(--padding-23xl);
      box-sizing: border-box;
    }

    .tubemockupBackground {
      padding-bottom: var(--padding-45xl);
      box-sizing: border-box;
    }

    .rectangleParent {
      padding-bottom: var(--padding-83xl);
      box-sizing: border-box;
    }

    .desktop4 {
      height: auto;
    }
  }
  @media screen and (max-width: 750px) {
    .topBar {
      padding-bottom: 27px;
      box-sizing: border-box;
    }

    .rectangleParent {
      gap: var(--gap-4xl);
      padding-bottom: var(--padding-47xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .caseStudyContainer {
      font-size: var(--font-size-19xl);
    }

    .tubemockupBackground {
      padding-bottom: var(--padding-23xl);
      box-sizing: border-box;
    }
  }
</style>
