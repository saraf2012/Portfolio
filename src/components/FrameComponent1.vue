<template>
  <section :class="$style.frameWrapper">
    <div :class="$style.frameParent">
      <div :class="$style.goBackButtonWrapper">
        <div :class="$style.goBackButton">
          <img
            :class="$style.tubeMockupV10FrontView2Icon"
            alt=""
            src="/tubemockupv10frontview-2@2x.png"
          />
          <img
            :class="$style.vectorIcon"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
      <img
        :class="$style.goBackIcon"
        loading="lazy"
        alt=""
        src="/go-back3.svg"
      />
    </div>
  </section>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FrameComponent1",
  });
</script>
<style module>
  .tubeMockupV10FrontView2Icon {
    height: 717px;
    flex: 1;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    object-fit: cover;
    flex-shrink: 0;
    debug_commit: 1de1738;
    z-index: 1;
  }
  .vectorIcon {
    height: 43px;
    width: 87px;
    position: absolute;
    margin: 0 !important;
    right: -74.4px;
    bottom: -36px;
    object-fit: contain;
    z-index: 2;
  }
  .goBackButton {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    max-width: 100%;
  }
  .goBackButtonWrapper {
    width: 633.6px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px var(--padding-17xl-4);
    box-sizing: border-box;
    min-width: 633.5999999999985px;
    max-width: 100%;
  }
  .goBackIcon {
    height: 43px;
    width: 254px;
    position: relative;
    flex-shrink: 0;
    debug_commit: 1de1738;
    z-index: 1;
  }
  .frameParent {
    width: 995.1px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .frameWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-lg);
    box-sizing: border-box;
    max-width: 100%;
  }

  @media screen and (max-width: 1050px) {
    .goBackButtonWrapper {
      flex: 1;
    }

    .frameParent {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  @media screen and (max-width: 750px) {
    .goBackButtonWrapper {
      min-width: 100%;
    }
  }
</style>
