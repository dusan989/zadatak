<template>
  <div class="card">
    <div class="card-body">
      <div class="row justify-content-center">
        <div class="col-auto">
          <itk-photo class="text-center" :photo="office.photo" :name="office.name" size="large"></itk-photo>
        </div>
      </div>
      <h4 class="card-title mt-4 text-center">{{ office.name }}</h4>
      <p class="card-text">{{ office.description }}</p>
    </div>
  </div>
</template>

<script>
  import Photo from '../shared/Photo';

  export default {
    name: 'OfficeCard',
    props: ['office'],
    components: {
      itkPhoto: Photo
    }
  };
</script>
