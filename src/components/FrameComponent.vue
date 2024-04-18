<template>
  <section :class="$style.frameParent">
    <img :class="$style.frameChild" alt="" src="/group-31.svg" />
    <div :class="$style.frameWrapper">
      <div :class="$style.layer1Parent">
        <img :class="$style.layer1Icon" alt="" src="/layer-1@2x.png" />
        <h3 :class="$style.wordOfTheDayContainer">
          <p :class="$style.wordOfTheDay">WORD OF THE DAY</p>
          <p :class="$style.february272024">FEBRUARY 27, 2024</p>
        </h3>
      </div>
    </div>
  </section>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FrameComponent",
  });
</script>
<style module>
  .frameChild {
    height: 1349.2px;
    flex: 1;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    z-index: 2;
  }
  .layer1Icon {
    height: 645.8px;
    width: 644.2px;
    position: absolute;
    margin: 0 !important;
    right: -114.2px;
    bottom: -403.8px;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: contain;
    z-index: 4;
  }
  .wordOfTheDay {
    margin: 0;
  }
  .february272024 {
    margin: 0;
  }
  .wordOfTheDayContainer {
    margin: 0;
    height: 109px;
    position: relative;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    z-index: 5;
  }
  .layer1Parent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    max-width: 100%;
  }
  .frameWrapper {
    width: 604px;
    margin: 0 !important;
    position: absolute;
    top: -315px;
    right: -294.1px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: var(--padding-64xl) var(--padding-55xl) var(--padding-385xl);
    box-sizing: border-box;
    min-height: 596px;
    max-width: 100%;
  }
  .frameParent {
    position: absolute;
    top: 315px;
    left: -213px;
    width: 1358.9px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-29xl);
    color: var(--color-white);
    font-family: var(--font-basic-sans);
  }

  @media screen and (max-width: 750px) {
    .wordOfTheDayContainer {
      font-size: var(--font-size-19xl);
    }
  }
  @media screen and (max-width: 450px) {
    .wordOfTheDayContainer {
      font-size: var(--font-size-10xl);
    }
  }
</style>
