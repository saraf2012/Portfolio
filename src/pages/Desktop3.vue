<template>
  <div :class="$style.desktop9">
    <main :class="$style.rectangleParent">
      <div :class="$style.frameChild" />
      <header :class="$style.solidWrapper">
        <h1 :class="$style.solid">solid</h1>
      </header>
      <section :class="$style.caseStudyBox">
        <div :class="$style.caseStudySolidCompanyNaParent">
          <div :class="$style.caseStudyContainer">
            <p :class="$style.caseStudy">Case Study - Solid Company Name:</p>
            <p :class="$style.solidSatchel">Solid Satchel</p>
            <p :class="$style.blankLine">&nbsp;</p>
            <p :class="$style.companyDescription">Company Description:</p>
            <p :class="$style.weOfferA">
              We offer a variety of luxury destinations. We are able to making
              booking easy because of our arrangements with local companies. Our
              target audience is millennials. We want to convey a sense of
              nostalgia, while at the same time being modern.
            </p>
            <p :class="$style.blankLine1">&nbsp;</p>
            <p :class="$style.jobDescription">Job Description</p>
            <p :class="$style.youMustCreate">
              You must create a website that will engage and inspire through
              visual storytelling. The goal is to make the website easy to
              navigate. Besides the landing page, the website will need a
              contact page, shop page and a privacy policy page. The landing
              page should have a Our Values section. There should be a call to
              action to get users to follow their social media. They would
              prefer a monochromatic design, and would like you to use the brand
              color, which is white. Take into account the client's preferences
              and values.
            </p>
          </div>
          <div :class="$style.frameParent">
            <div :class="$style.rectangleGroup">
              <div :class="$style.frameItem" />
              <img
                :class="$style.solid1Icon"
                loading="lazy"
                alt=""
                src="/solid-1@2x.png"
              />
            </div>
            <div :class="$style.recording202404161411071" />
          </div>
        </div>
      </section>
      <footer :class="$style.frameWrapper">
        <div :class="$style.vectorParent">
          <router-link to="#" class="nav-link" @click.native="goBack">
  <img :class="$style.vectorIcon" loading="lazy" alt="" src="/vector.svg" />
</router-link>
<router-link to="#" class="nav-link" @click.native="goBack">
  <img :class="$style.goBackIcon" loading="lazy" alt="" src="/go-back4.svg" />
</router-link>
        </div>
      </footer>
    </main>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import { useRouter } from "vue-router";

  export default defineComponent({
    name: "Desktop3",
    setup() {
    const router = useRouter();

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
  .frameChild {
    width: 1440px;
    height: 9692px;
    position: relative;
    background-color: var(--color-gray-100);
    display: none;
    max-width: 100%;
  }
  .solid {
    margin: 0;
    height: 167px;
    flex: 1;
    position: relative;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    max-width: 100%;
    z-index: 1;
  }
  .solidWrapper {
    width: 1156px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 107px;
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-181xl);
    color: var(--color-white);
    font-family: var(--font-cofo-sans-mono-vf);
  }
  .caseStudy {
    margin: 0;
  }
  .solidSatchel {
    margin: 0;
  }
  .blankLine {
    margin: 0;
  }
  .companyDescription {
    margin: 0;
  }
  .weOfferA {
    margin: 0;
  }
  .blankLine1 {
    margin: 0;
  }
  .jobDescription {
    margin: 0;
  }
  .youMustCreate {
    margin: 0;
  }
  .caseStudyContainer {
    align-self: stretch;
    height: 2343px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    z-index: 1;
  }
  .frameItem {
    height: 95px;
    width: 131px;
    position: absolute;
    margin: 0 !important;
    bottom: 1445px;
    left: 367px;
    background-color: #d9d9d9;
    z-index: 1;
  }
  .solid1Icon {
    height: 4148px;
    flex: 1;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    object-fit: cover;
    z-index: 2;
  }
  .rectangleGroup {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    max-width: 100%;
  }
  .recording202404161411071 {
    align-self: stretch;
    height: 692px;
    position: relative;
    z-index: 1;
  }
  .frameParent {
    width: 1285px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .caseStudySolidCompanyNaParent {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 81px;
    max-width: 100%;
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
  .rectangleParent {
    flex: 1;
    background-color: var(--color-gray-100);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-5xl) 1954.6px;
    box-sizing: border-box;
    gap: 78px;
    max-width: 100%;
    flex-shrink: 0;
  }
  .desktop9 {
    width: 100%;
    height: 7783px;
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

    .rectangleParent {
      padding-bottom: 536px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 1050px) {
    .caseStudyContainer {
      font-size: var(--font-size-32xl);
    }

    .rectangleParent {
      padding-bottom: 348px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 750px) {
    .caseStudySolidCompanyNaParent {
      gap: 40px;
    }

    .rectangleParent {
      gap: var(--gap-20xl);
      padding-bottom: 226px;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .caseStudyContainer {
      font-size: var(--font-size-19xl);
    }

    .caseStudySolidCompanyNaParent {
      gap: var(--gap-xl);
    }

    .vectorParent {
      flex-wrap: wrap;
      gap: var(--gap-mid);
    }

    .rectangleParent {
      gap: var(--gap-lgi);
    }

    .desktop9 {
      height: auto;
    }
  }
</style>
