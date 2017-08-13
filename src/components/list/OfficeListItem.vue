<template>
  <li class="media">
    <itk-photo class="d-flex mr-3" :photo="office.photo" :name="office.name"></itk-photo>
    <div class="media-body">
      <h5 class="mt0">{{ office.name }}</h5>
      {{ office.description }}
      <hr class="mt-4 mb-0">
    </div>
  </li>
</template>

<script>
  import Photo from '../shared/Photo';

  export default {
    name: 'OfficeListItem',
    props: ['office'],
    components: {
      itkPhoto: Photo
    }
  };
</script>
