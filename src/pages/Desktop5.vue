<template>
  <div :class="$style.desktop5">
    <div :class="$style.desktop5Child" />
    <header :class="$style.xyzFitness">xyz fitness</header>
    <section :class="$style.postcardWrapper">
      <div :class="$style.postcard">postcard</div>
    </section>
    <section :class="$style.howToChangeYourHolidayPicWrapper">
      <div :class="$style.howToChangeContainer">
        <p :class="$style.howToChange">
          How to change your holiday picture into print product?
        </p>
        <p :class="$style.blankLine">&nbsp;</p>
        <p :class="$style.myPassionProject">
          My passion project - postcard from Lake Como shows that design does
          not have to be limited to professional projects. As a enthusiastic
          graphic designer finding inspiration in everything is vital - not only
          in order not to burn out by everyday responsibilities, but also to
          improve your skills and creativity. Experiment and change your work
          into something more that everyday dull duties - make it pleasurable
          for yourself and I can assure you that you will go crazy about it more
          and more...
        </p>
      </div>
    </section>
    <section :class="$style.postcard2Wrapper">
      <img
        :class="$style.postcard2Icon"
        loading="lazy"
        alt=""
        src="/postcard-2@2x.png"
      />
    </section>
    <section :class="$style.postcard21Wrapper">
      <img
        :class="$style.postcard21Icon"
        loading="lazy"
        alt=""
        src="/postcard2-1@2x.png"
      />
    </section>
    <section :class="$style.finalPostcard1Wrapper">
      <img
        :class="$style.finalPostcard1Icon"
        loading="lazy"
        alt=""
        src="/final-postcard-1@2x.png"
      />
    </section>
    <section :class="$style.screenshot202403261755091Wrapper">
      <img
        :class="$style.screenshot202403261755091"
        loading="lazy"
        alt=""
        src="/screenshot-20240326-175509-1@2x.png"
      />
    </section>
    <section :class="$style.screenshot202403261915371Wrapper">
      <img
        :class="$style.screenshot202403261915371"
        loading="lazy"
        alt=""
        src="/screenshot-20240326-191537-1@2x.png"
      />
    </section>
    <section :class="$style.freeBrandingPostcardMockupWrapper">
      <img
        :class="$style.freeBrandingPostcardMockup"
        loading="lazy"
        alt=""
        src="/free-branding-postcard-mockup-1@2x.png"
      />
    </section>
    <section :class="$style.postcardPsdMockup1Wrapper">
      <img
        :class="$style.postcardPsdMockup1"
        loading="lazy"
        alt=""
        src="/postcard-psd-mockup-1@2x.png"
      />
    </section>
    <footer :class="$style.desktop5Inner">
      <div :class="$style.vectorParent">
        <router-link to="/" class="nav-link" @click.native="goBack">
  <img :class="$style.vectorIcon" loading="lazy" alt="" src="/vector.svg" />
</router-link>

<router-link to="/" class="nav-link" @click.native="goBack">
  <img :class="$style.goBackIcon" loading="lazy" alt="" src="/go-back4.svg" />
</router-link>
      </div>
    </footer>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import { useRouter } from "vue-router"; // Import useRouter from Vue Router

  export default defineComponent({
    name: "Desktop5",
    setup() {
      const router = useRouter(); // Get the router instance using useRouter

      const goBack = () => {
        router.go(-1); // Go back one step in the browser history
      };

      return {
        goBack,
      };
    },
  });
</script>
<style module>
  .desktop5Child {
    width: 1440px;
    height: 7213px;
    position: relative;
    background-color: var(--color-gray-100);
    display: none;
    max-width: 100%;
  }
  .xyzFitness {
    margin-top: -10215px;
    margin-bottom: 10048px;
    width: 1343px;
    height: 167px;
    position: relative;
    font-size: var(--font-size-181xl);
    font-family: var(--font-cofo-sans-mono-vf);
    color: var(--color-white);
    text-align: left;
    display: inline-block;
    flex-shrink: 0;
    white-space: nowrap;
    max-width: 100%;
    
  }
  .postcard {
    height: 167px;
    flex: 1;
    position: relative;
    display: inline-block;
    max-width: 100%;
    z-index: 1;
  }
  .postcardWrapper {
    width: 1156px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 169px;
    box-sizing: border-box;
    max-width: 100%;
    flex-shrink: 0;
    text-align: left;
    font-size: var(--font-size-181xl);
    color: var(--color-white);
    font-family: var(--font-cofo-sans-mono-vf);
  }
  .howToChange {
    margin: 0;
  }
  .blankLine {
    margin: 0;
  }
  .myPassionProject {
    margin: 0;
  }
  .howToChangeContainer {
    height: 1377px;
    width: 1296px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    max-width: 100%;
    z-index: 1;
  }
  .howToChangeYourHolidayPicWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-11xl) 72px;
    box-sizing: border-box;
    max-width: 100%;
    flex-shrink: 0;
    text-align: left;
    font-size: var(--font-size-45xl);
    color: var(--color-white);
    font-family: var(--font-cofo-sans-mono-vf);
  }
  .postcard2Icon {
    width: 901px;
    position: relative;
    max-height: 100%;
    object-fit: cover;
    max-width: 100%;
    z-index: 1;
  }
  .postcard2Wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px 0px 0px var(--padding-mid);
    box-sizing: border-box;
    max-width: 100%;
  }
  .postcard21Icon {
    width: 901px;
    position: relative;
    max-height: 100%;
    object-fit: cover;
    max-width: 100%;
    z-index: 1;
  }
  .postcard21Wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px 0px var(--padding-83xl) var(--padding-mid);
    box-sizing: border-box;
    max-width: 100%;
  }
  .finalPostcard1Icon {
    width: 1296px;
    position: relative;
    max-height: 100%;
    object-fit: cover;
    max-width: 100%;
    z-index: 1;
  }
  .finalPostcard1Wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-11xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .screenshot202403261755091 {
    width: 1296px;
    position: relative;
    max-height: 100%;
    object-fit: cover;
    max-width: 100%;
    z-index: 1;
  }
  .screenshot202403261755091Wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-11xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .screenshot202403261915371 {
    width: 1296px;
    position: relative;
    max-height: 100%;
    object-fit: cover;
    max-width: 100%;
    z-index: 1;
  }
  .screenshot202403261915371Wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-11xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .freeBrandingPostcardMockup {
    width: 1296px;
    position: relative;
    max-height: 100%;
    object-fit: cover;
    max-width: 100%;
    z-index: 1;
  }
  .freeBrandingPostcardMockupWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-11xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .postcardPsdMockup1 {
    width: 1296px;
    position: relative;
    max-height: 100%;
    object-fit: cover;
    max-width: 100%;
    z-index: 1;
  }
  .postcardPsdMockup1Wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-11xl) 76px;
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
    justify-content: flex-start;
    gap: var(--gap-14xl-1);
    max-width: 100%;
  }
  .desktop5Inner {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    max-width: 100%;
  }
  .desktop5 {
    width: 100%;
    height: 7213px;
    position: relative;
    background-color: var(--color-gray-100);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-22xl-9) var(--padding-26xl-6) var(--padding-5xl);
    box-sizing: border-box;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1200px) {
    .howToChangeYourHolidayPicWrapper {
      padding-bottom: 47px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 1050px) {
    .howToChangeContainer {
      font-size: var(--font-size-32xl);
    }

    .postcardPsdMockup1Wrapper {
      padding-bottom: 49px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 750px) {
    .howToChangeYourHolidayPicWrapper {
      padding-bottom: 31px;
      box-sizing: border-box;
    }

    .postcard21Wrapper {
      padding-bottom: var(--padding-47xl);
      box-sizing: border-box;
    }

    .postcardPsdMockup1Wrapper {
      padding-bottom: 32px;
      box-sizing: border-box;
    }

    .desktop5 {
      padding-right: var(--padding-2xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .howToChangeContainer {
      font-size: var(--font-size-19xl);
    }

    .vectorParent {
      flex-wrap: wrap;
      gap: var(--gap-mid);
    }

    .desktop5 {
      height: auto;
    }
  }
</style>
