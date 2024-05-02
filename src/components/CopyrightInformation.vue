<template>
  <div :class="$style.copyrightInformation">
    <div :class="$style.frameParent">
      <div :class="$style.component3Parent">
        <div :class="$style.component3">
          <div :class="$style.wrapperGroup28">
            <img
              :class="$style.wrapperGroup28Child"
              alt=""
              src="/group-28.svg"
            />
          </div>
          <div :class="$style.frameGroup">
            <div :class="$style.graphicDesignerLabelWrapper">
              <div :class="$style.graphicDesignerLabel" />
            </div>
            <img :class="$style.skillsIcon" alt="" src="/skills.svg" />
            <img
              :class="$style.graphicDesignIcon"
              alt=""
              src="/graphic-design.svg"
            />
            <div :class="$style.frameContainer">
              <img :class="$style.frameChild" alt="" src="/group-19.svg" />
              <img :class="$style.frameItem" alt="" src="/group-21.svg" />
              <div :class="$style.figmaParent">
                <img :class="$style.figmaIcon" alt="" src="/figma.svg" />
                <img :class="$style.canvaIcon" alt="" src="/canva.svg" />
                <img
                  :class="$style.adobeCreativeCloud"
                  alt=""
                  src="/adobe-creative-cloud.svg"
                />
              </div>
              <img :class="$style.frameInner" alt="" src="/group-22.svg" />
            </div>
          </div>
        </div>
        <div
  :class="$style.wrapperGroup64"
  @click="openVideo"
  @mouseover="isHovered = true"
  @mouseleave="isHovered = false"
  :style="{ cursor: isHovered ? 'pointer' : 'default', display: 'inline-block' }"
>
  <img :class="$style.wrapperGroup64Child" alt="" src="/group-64.svg" />
</div>
      </div>
      <div :class="$style.wrapperGroup65Wrapper">
        <!-- Use <a> tag to create download link -->
        <a :href="pdfLink" download="CVFINAL.pdf">
          <div :class="$style.wrapperGroup65">
            <img :class="$style.wrapperGroup65Child" alt="" src="/group-65.svg" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template> 

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CopyrightInformation',
  methods: {
    openLink() {
      window.open('https://youtu.be/3XAd0ZsG-gI', '_blank');
    },
    openVideo() {
      window.open('https://youtu.be/3XAd0ZsG-gI', '_blank');
    }
  },
  data() {
    return {
      image65Src: '/group-65.svg', // Initial image source for group-65
      pdfLink: '/CVFINAL.pdf', // PDF link for download
      isHovered: false
    };
  }
});
</script>
<style module>  

  .wrapperGroup28Child {
    height: 100%;
    width: 100%;
    overflow: hidden;
    object-fit: contain;
    position: absolute;
    left: 0px;
    top: -16px;
    transform: scale(1.128);
  }
  .wrapperGroup28 {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    max-width: 100%;
    max-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .graphicDesignerLabel {
    position: absolute;
    height: auto; /* Change height to auto to maintain aspect ratio */
    width: 100%; /* Ensure it spans the entire width of its container */
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: var(--br-13xl);
    background: linear-gradient(
      115.45deg,
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0)
    );
    box-shadow: 0px 24px 56px rgba(0, 0, 0, 0.16);
    backdrop-filter: blur(56px);
    border: 1px solid var(--color-gray-200);
    box-sizing: border-box;
    max-width: 100%; /* Ensure it doesn't exceed its container's width */
}

.graphicDesignerLabelWrapper {
    position: absolute;
    height: 100%; /* Ensure it fills its container */
    width: 100%; /* Ensure it fills its container */
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
}

  .skillsIcon {
    position: absolute;
    height: 11.75%;
    width: 32.09%;
    top: 9.67%;
    right: 34.07%;
    bottom: 78.58%;
    left: 33.84%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    z-index: 1;
  }
  .graphicDesignIcon {
    position: absolute;
    height: 6.92%;
    width: 7.34%;
    top: 89.98%;
    right: 2.06%;
    bottom: 3.1%;
    left: 90.6%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    z-index: 1;
  }
  .frameChild {
    position: absolute;
    height: 36.02%;
    width: 96.21%;
    top: 0%;
    right: -0.01%;
    bottom: 63.98%;
    left: 3.8%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .frameItem {
    position: absolute;
    height: 30.47%;
    width: 95.24%;
    top: 59.01%;
    right: 1.87%;
    bottom: 10.51%;
    left: 2.89%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .figmaIcon {
    position: absolute;
    height: 100%;
    width: 10.4%;
    top: 0%;
    right: 89.6%;
    bottom: 0%;
    left: 0%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .canvaIcon {
    position: absolute;
    height: 100%;
    width: 11.36%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 88.64%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .adobeCreativeCloud {
    position: absolute;
    height: 100%;
    width: 41.06%;
    top: 0%;
    right: 29.72%;
    bottom: 0%;
    left: 29.22%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .figmaParent {
    position: absolute;
    height: 5.19%;
    width: 93.57%;
    top: 41.6%;
    right: 2.82%;
    bottom: 53.21%;
    left: 3.62%;
  }
  .frameInner {
    position: absolute;
    height: 5.19%;
    width: 94.77%;
    top: 94.81%;
    right: 5.23%;
    bottom: 0%;
    left: 0%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .frameContainer {
    position: absolute;
    height: 56.48%;
    width: 78.98%;
    top: 30.42%;
    right: 10.92%;
    bottom: 13.1%;
    left: 10.1%;
    z-index: 1;
  }
  .frameGroup {
    position: absolute;
    height: 80.15%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 19.85%;
    left: 0%;
    z-index: 1;
  }
  .component3 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
  .wrapperGroup64Child {
  width: 100%;
  height: 100%;
  object-fit: contain;
  left: 50%;
  top: 24px; /* Adjust the top position as needed */
  transform: translateX(-50%) scale(1.7); /* Adjust the scale as needed */
}

.wrapperGroup64 {
  position: relative;
  top: 566px; /* Adjust the top position as needed */
  left: 50%; /* Adjust the left position as needed */
  width: 1000px;
  height: 116px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto; /* Center horizontally */
  align-content: center;
  display: flex;
}
  .component3Parent {
    align-self: stretch;
    height: 685px;
    position: relative;
  }
  .wrapperGroup65Child {
    height: 100%;
    width: 100%;
    object-fit: contain;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(1.7);
}

  .wrapperGroup65 {
  height: 116px;
  width: 500px;
  left: 47.5%;
  transform: translateX(-50%);
  position: absolute;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

  .wrapperGroup65Wrapper {
    align-self: stretch;
    height: 116px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-sizing: border-box;
    max-width: 100%;
  }
  .frameParent {
    width: 872px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
    max-width: 100%;
    z-index: 3;
  }
  .copyrightInformation {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) 0px var(--padding-24xl);
    box-sizing: border-box;
    max-width: 100%;
  }

  @media screen and (max-width: 1050px) {
    .copyrightInformation {
      padding-left: var(--padding-2xl);
      box-sizing: border-box;
    }
    .wrapperGroup64Child .wrapperGroup65Child {
      transform: scale(1.0);
    }

    .wrapperGroup64Child {
    left: 50%;
    top: 24px; /* Adjust the top position as needed */
    transform: translateX(-50%) scale(1.0); /* Adjust the scale as needed */
  }
  .wrapperGroup65Child {
    transform: translateX(-50%) scale(1.0);
    margin-top: -100px;


  }
  .graphicDesignerLabel {
    margin-top: 75px;
  }
  }
</style>
