<template>
  <ul class="list-unstyled">
    <itk-office-list-item
      v-for="(office, index) in offices"
      :office="office"
      :key="office.id"
      :class="{'my-5': (index > 0 && index < offices.length - 1)}">
    </itk-office-list-item>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex';
  import OfficeListItem from './OfficeListItem';

  export default {
    name: 'list',
    components: {
      itkOfficeListItem: OfficeListItem
    },
    computed: {
      ...mapGetters({
        offices: 'offices/data'
      })
    }
  };
</script>
