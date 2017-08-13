<template>
  <div class="card-columns">
    <itk-office-card v-for="office in offices" :office="office" :key="office.id"></itk-office-card>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import OfficeCard from './OfficeCard';

  export default {
    name: 'grid',
    components: {
      itkOfficeCard: OfficeCard
    },
    computed: {
      ...mapGetters({
        offices: 'offices/data'
      })
    }
  };
</script>

<style scoped lang="scss">
  @import '../../styles/mixins';

  .card-columns {
    @include media-breakpoint-only(sm) {
      column-count: 1;
    }

    @include media-breakpoint-only(md) {
      column-count: 2;
    }
  }
</style>
