<template>
  <div :class="$style.projectsParent">
    <h1 :class="$style.projects">projects</h1>
    <div :class="$style.projectsList">
      <div :class="$style.businessCardsMockupV19IsomParent">
        <img
          :class="$style.businessCardsMockupV19IsomIcon"
          loading="lazy"
          alt=""
          src="/businesscardsmockupv19isometric-2@2x.png"
        />
        <div :class="$style.xyzFitnessLogoContainer">
          <span :class="$style.xyzFitness">
            <router-link to="/Desktop-6" class="nav-link" style="color: white;">XYZ FITNESS</router-link>
      </span>          <span> /LOGO DESIGN/ </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Frame1",
  });
</script>
<style module>
  .projects {
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
  .businessCardsMockupV19IsomIcon {
    height: 1246px;
    width: 1090px;
    position: absolute;
    margin: 0 !important;
    right: -396px;
    bottom: -1240px;
    object-fit: cover;
    z-index: 1;
  }
  .xyzFitness {
    font-weight: 900;
    
  }
  .xyzFitnessLogoContainer {
    height: 54px;
    flex: 1;
    position: relative;
    white-space: pre-wrap;
    display: inline-block;
    max-width: 100%;
    z-index: 2;
    
  }
  .businessCardsMockupV19IsomParent {
    width: 749px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px 0px;
    box-sizing: border-box;
    position: relative;
    max-width: 100%;
  }
  .projectsList {
    width: 941px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: justify;
    font-size: var(--font-size-29xl);
  }
  .projectsParent {
    width: 1032px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-186xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-181xl);
    color: var(--color-white);
    font-family: var(--font-cofo-sans-mono-vf);
  }

  @media screen and (max-width: 1050px) {
    .projects {
      font-size: var(--font-size-61xl);
    }

    .xyzFitnessLogoContainer {
      font-size: var(--font-size-19xl);
    }

    .projectsParent {
      gap: var(--gap-83xl);
    }
  }
  @media screen and (max-width: 750px) {
    .projectsParent {
      gap: var(--gap-32xl);
    }
  }
  @media screen and (max-width: 450px) {
    .projects {
      font-size: var(--font-size-31xl);
    }

    .xyzFitnessLogoContainer {
      font-size: var(--font-size-10xl);
    }

    .projectsParent {
      gap: var(--gap-7xl);
    }
  }
</style>
