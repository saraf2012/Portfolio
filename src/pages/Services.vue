<template>
  <div :class="$style.services">
    <img :class="$style.rectangleIcon" alt="" src="/rectangle@2x.png" />
    <div :class="$style.visualIdentityDesignContainer">
      <p :class="$style.visualIdentityDesign">Visual identity design</p>
      <p :class="$style.uiuxDesign">UI/UX design</p>
      <p :class="$style.socialMediaDesign">Social media design</p>
      <p :class="$style.photoEditing">Photo editing</p>
      <p :class="$style.blankLine">&nbsp;</p>
      <p :class="$style.blankLine1">&nbsp;</p>
      <p :class="$style.blankLine2">&nbsp;</p>
      <p :class="$style.blankLine3">&nbsp;</p>
    </div>
    <section :class="$style.services1">services</section>
    <div :class="$style.vectorParent">
      <router-link to="/" class="nav-link" @click.native="goBack">
  <img :class="$style.vectorIcon" loading="lazy" alt="" src="/vector.svg" />
</router-link>
<router-link to="/" class="nav-link" @click.native="goBack">
  <img :class="$style.goBackIcon" loading="lazy" alt="" src="/go-back.svg" />
</router-link>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Services",
  });
</script>
<style module>
  .rectangleIcon {
    position: absolute;
    top: calc(50% - 520px);
    left: calc(50% - 720px);
    width: 1440px;
    height: 1040px;
    object-fit: cover;
  }
  .visualIdentityDesign {
    margin: 0;
  }
  .uiuxDesign {
    margin: 0;
  }
  .socialMediaDesign {
    margin: 0;
  }
  .photoEditing {
    margin: 0;
  }
  .blankLine {
    margin: 0;
  }
  .blankLine1 {
    margin: 0;
  }
  .blankLine2 {
    margin: 0;
  }
  .blankLine3 {
    margin: 0;
  }
  .visualIdentityDesignContainer {
    position: absolute;
    top: 231px;
    left: 70px;
    display: inline-block;
    width: 378px;
    height: 384px;
  }
  .services1 {
    position: absolute;
    top: 0px;
    left: 50px;
    font-size: var(--font-size-181xl);
    font-family: var(--font-cofo-sans-mono-vf);
    color: var(--color-white);
    text-align: left;
    display: inline-block;
    width: 1006px;
    height: 224px;
  }
  .vectorIcon {
    position: absolute;
    height: 99.08%;
    width: 23.26%;
    top: 0%;
    right: 76.74%;
    bottom: 0.92%;
    left: 0%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .goBackIcon {
    position: absolute;
    top: 0.4px;
    left: 120.1px;
    width: 254px;
    height: 43px;
  }
  .vectorParent {
    position: absolute;
    height: 4.24%;
    width: 25.98%;
    top: 91.31%;
    right: 2.28%;
    bottom: 4.45%;
    left: 71.74%;
  }
  .services {
    width: 100%;
    height: 1024px;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-white);
    font-family: var(--font-basic-sans);
  }

  @media screen and (max-width: 767px) {
    .visualIdentityDesignContainer {
      font-size: var(--font-size-13xl);
    }

    .services1 {
      font-size: var(--font-size-61xl);
    }
  }
  @media screen and (max-width: 450px) {
    .visualIdentityDesignContainer {
      font-size: var(--font-size-5xl);
    }

    .services1 {
      font-size: var(--font-size-31xl);
    }
  }
</style>
