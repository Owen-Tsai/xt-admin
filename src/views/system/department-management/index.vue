<template>
  <main class="px-6 pb-4 relative">
    <s-navs :navs="['menu.system', 'menu.system.department-management']" />

    <div class="flex">
      <div class="s-section w-1/2 mr-2.5">
        <department-list ref="repoFormComp" />
      </div>

      <div class="s-section w-1/2">
        <information-purview ref="repoFormComp" />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import DepartmentList from './widgets/department-list.vue'
import InformationPurview from './widgets/information-purview.vue'
</script>
