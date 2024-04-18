<template>
  <div :class="$style.contact">
    <img :class="$style.rectangleIcon" alt="" src="/rectangle@2x.png" />
    <section :class="$style.contactContainer">
      <h1 :class="$style.contact1">contact</h1>
      <div :class="$style.eMailJuliafraonetplTelContainer">
        <p :class="$style.eMailJuliafraonetpl">E-mail: juliafra@onet.pl</p>
        <p :class="$style.tel4453454534">Tel. 4453454534</p>
        <a :href="'https://www.linkedin.com/in/julia-fraczkiewicz-86b2a72a6'" :class="$style.linkedln" target="_blank">Linkedln</a>
        <p :class="$style.blankLine">&nbsp;</p>
        <p :class="$style.blankLine1">&nbsp;</p>
        <p :class="$style.blankLine2">&nbsp;</p>
      </div>
    </section>
    <section :class="$style.businessCardContainerParent">
      <div :class="$style.businessCardContainer">
        <img
          :class="$style.businessCardsIcon"
          loading="lazy"
          alt=""
          src="/business-cards@2x.png"
        />
      </div>
      <div :class="$style.vectorParent">
        <router-link to="/" class="nav-link" @click.native="goBack">
  <img :class="$style.vectorIcon" loading="lazy" alt="" src="/vector.svg" />
</router-link>
<router-link to="/" class="nav-link" @click.native="goBack">
  <img :class="$style.goBackIcon" loading="lazy" alt="" src="/go-back.svg" />
</router-link>
      </div>
    </section>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Contact",
  });
</script>
<style module>
  .rectangleIcon {
    width: 100%;
    height: 1040px;
    position: absolute;
    margin: 0 !important;
    top: calc(50% - 520px);
    right: 0px;
    left: 0px;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
  }
  .contact1 {
    margin: 0;
    align-self: stretch;
    height: 167px;
    position: relative;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    flex-shrink: 0;
    z-index: 1;
  }
  .eMailJuliafraonetpl {
    margin: 0;
  }
  .tel4453454534 {
    margin: 0;
  }
  .linkedln {
    margin: 0;
    color: white
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
  .eMailJuliafraonetplTelContainer {
    height: 336px;
    position: relative;
    font-size: var(--font-size-21xl);
    font-family: var(--font-basic-sans);
    display: inline-block;
    max-width: 100%;
    z-index: 1;
  }
  .contactContainer {
    width: 1026px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl) 0px 0px;
    box-sizing: border-box;
    gap: 64px;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-181xl);
    color: var(--color-white);
    font-family: var(--font-cofo-sans-mono-vf);
  }
  .businessCardsIcon {
    align-self: stretch;
    flex: 1;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  .businessCardContainer {
    height: 507.4px;
    width: 772px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px 7.9px;
    box-sizing: border-box;
    min-width: 772px;
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
    justify-content: flex-start;
    gap: var(--gap-14xl-1);
    max-width: 100%;
  }
  .businessCardContainerParent {
    width: 1368.1px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0px var(--padding-xl) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
    gap: var(--gap-xl);
    margin-top: -96px;
  }
  .contact {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 1024px;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1200px) {
    .businessCardsIcon {
      align-self: stretch;
      width: auto;
    }

    .businessCardContainer {
      flex: 1;
    }

    .businessCardContainerParent {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 1050px) {
    .contact1 {
      font-size: var(--font-size-61xl);
    }

    .eMailJuliafraonetplTelContainer {
      font-size: var(--font-size-13xl);
    }

    .contactContainer {
      gap: 32px;
    }

    .businessCardContainer {
      min-width: 100%;
    }
  }
  @media screen and (max-width: 750px) {
    .contactContainer {
      gap: var(--gap-base);
    }
  }
  @media screen and (max-width: 450px) {
    .contact1 {
      font-size: var(--font-size-31xl);
    }

    .eMailJuliafraonetplTelContainer {
      font-size: var(--font-size-5xl);
    }

    .vectorParent {
      flex-wrap: wrap;
      gap: var(--gap-mid);
    }
  }
</style>
