<template>
  <div class="container">
    <div class="left-side">
      <div class="panel">
        <banner-page />
        <data-panel />
        <content-chart />
      </div>
      <a-grid
        :cols="24"
        :col-gap="16"
        :row-gap="16"
        style="margin-top: 16px"
      >
        <a-grid-item
          :span="{ xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 }"
        >
          <popular-content />
        </a-grid-item>
        <a-grid-item
          :span="{ xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 }"
        >
          <categories-percent />
        </a-grid-item>
      </a-grid>
    </div>
    <div class="right-side">
      <a-grid :cols="24" :row-gap="16">
        <a-grid-item :span="24">
          <div class="panel moduler-wrap">
            <quick-operation />
            <recently-visited />
          </div>
        </a-grid-item>
        <a-grid-item class="panel" :span="24">
          <Carousel />
        </a-grid-item>
        <a-grid-item class="panel" :span="24">
          <announ-cement />
        </a-grid-item>
        <a-grid-item class="panel" :span="24">
          <docs-widget />
        </a-grid-item>
      </a-grid>
    </div>
  </div>
</template>

<script lang="ts" setup>
import bannerPage from './components/banner.vue';
import dataPanel from './components/data-panel.vue';
import contentChart from './components/content-chart.vue';
import popularContent from './components/popular-content.vue';
import categoriesPercent from './components/categories-percent.vue';
import recentlyVisited from './components/recently-visited.vue';
import quickOperation from './components/quick-operation.vue';
import announCement from './components/announcement.vue';
import Carousel from './components/carousel.vue';
import docsWidget from './components/docs-widget.vue';
// import Footer from './components/footer.vue';
</script>

<script lang="ts">
export default {
  name: 'Dashboard',
};
</script>

<style lang="scss" scoped>
  .container {
    background-color: var(--color-fill-2);
    padding: 16px 20px;
    padding-bottom: 0;
    display: flex;
  }

  .left-side {
    height: 1100px;
    flex: 1;
    overflow: auto;
  }

  .right-side {
    width: 280px;
    margin-left: 16px;
  }

  .panel {
    background-color: var(--color-bg-2);
    border-radius: 4px;
    overflow: auto;
  }
  .footer{
    margin-top: 20px;
    background-color: var(--color-fill-2);
    border-radius: 4px;
    overflow: auto;
  }
  :deep(.panel-border) {
    margin-bottom: 0;
    border-bottom: 1px solid rgb(var(--gray-2));
  }
  .moduler-wrap {
    border-radius: 4px;
    background-color: var(--color-bg-2);
    :deep(.text) {
      font-size: 12px;
      text-align: center;
      color: rgb(var(--gray-8));
    }

    :deep(.wrapper) {
      margin-bottom: 8px;
      text-align: center;
      cursor: pointer;

      &:last-child {
        .text {
          margin-bottom: 0;
        }
      }
      &:hover {
        .icon {
          color: rgb(var(--arcoblue-6));
          background-color: #e8f3ff;
        }
        .text {
          color: rgb(var(--arcoblue-6));
        }
      }
    }

    :deep(.icon) {
      display: inline-block;
      width: 32px;
      height: 32px;
      margin-bottom: 4px;
      color: rgb(var(--dark-gray-1));
      line-height: 32px;
      font-size: 16px;
      text-align: center;
      background-color: rgb(var(--gray-1));
      border-radius: 4px;
    }
  }
</style>

<style lang="scss" scoped>
  // responsive
  .mobile {
    .container {
      display: block;
    }
    .right-side {
      // display: none;
      width: 100%;
      margin-left: 0;
      margin-top: 16px;
    }
  }
</style>
