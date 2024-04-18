<template>
  <footer :class="$style.monthlyMotivationLabel">
    <div :class="$style.monthlyMotivationLabelChild" />
    <div :class="$style.portfolioAndServices">
      <h3 :class="$style.projects" @click="onPROJECTSTextClick">PROJECTS</h3>
      <h3 :class="$style.services" @click="onSERVICESTextClick">SERVICES</h3>
      <h3 :class="$style.contact" @click="onCONTACTTextClick">CONTACT</h3>
      <h3 :class="$style.goBack" :onClick="onGOBACKTextClick">GO BACK</h3>
    </div>
    <div :class="$style.julietteWiczIncAllRightWrapper">
      <div :class="$style.julietteWiczInc">
        © 2024 JULIETTE WICZ©, Inc. All rights reserved.
      </div>
    </div>
  </footer>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "MonthlyMotivationLabel",
    methods: {
      onPROJECTSTextClick() {
        this.$router.push("/desktop-2");
      },
      onSERVICESTextClick() {
        this.$router.push("/services");
      },
      onCONTACTTextClick() {
        this.$router.push("/contact");
      },
      onGOBACKTextClick() {
        const anchor = document.querySelector(
          "[data-scroll-to='jULIETTEWICZText']"
        );
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
    },
  });
</script>
<style module>
  .monthlyMotivationLabelChild {
    width: 1438px;
    height: 604px;
    position: relative;
    background: linear-gradient(180deg, #0c0c0c, #d82028 85.4%);
    display: none;
    max-width: 100%;
  }
  .projects {
    margin: 0;
    height: 88.8px;
    width: 241px;
    position: relative;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    flex-shrink: 0;
    cursor: pointer;
    z-index: 2;
  }
  .services {
    margin: 0;
    height: 88.8px;
    width: 223px;
    position: relative;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    flex-shrink: 0;
    cursor: pointer;
    z-index: 2;
  }
  .contact {
    margin: 0;
    height: 88.8px;
    width: 228px;
    position: relative;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    flex-shrink: 0;
    cursor: pointer;
    z-index: 2;
  }
  .goBack {
    margin: 0;
    height: 88.8px;
    width: 212px;
    position: relative;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    flex-shrink: 0;
    white-space: nowrap;
    cursor: pointer;
    z-index: 2;
  }
  .portfolioAndServices {
    width: 1235px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    top: 0;
    z-index: 99;
    position: sticky;
    gap: var(--gap-xl);
    max-width: 100%;
  }
  .julietteWiczInc {
    width: 921px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    max-width: 100%;
    z-index: 2;
  }
  .julietteWiczIncAllRightWrapper {
    width: 1235px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-11xs) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-13xl);
    font-family: var(--font-cofo-sans-mono-vf);
  }
  .monthlyMotivationLabel {
    align-self: stretch;
    background: linear-gradient(180deg, #0c0c0c, #d82028 85.4%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: var(--padding-399xl-1) var(--padding-xl) var(--padding-mini)
      var(--padding-6xl);
    box-sizing: border-box;
    gap: var(--gap-26xl-1);
    max-width: 100%;
    z-index: 1;
    text-align: center;
    font-size: var(--font-size-29xl);
    color: var(--color-gray-100);
    font-family: var(--font-stevie-sans);
  }

  @media screen and (max-width: 1050px) {
    .portfolioAndServices {
      display: none;
    }
  }
  @media screen and (max-width: 750px) {
    .julietteWiczInc {
      font-size: var(--font-size-7xl);
    }

    .monthlyMotivationLabel {
      gap: var(--gap-4xl);
      padding-top: var(--padding-253xl);
      padding-bottom: var(--padding-xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .julietteWiczInc {
      font-size: var(--font-size-lgi);
    }
  }
</style>
