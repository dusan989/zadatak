<template>
  <div class="itk-photo" :class="{'itk-photo--large': size === 'large'}">
    <img v-if="photo" :src="photo" :alt="firstLetter" class="itk-photo__photo">
    <p class="itk-photo__first-letter bg-dark text-white font-weight-bold" v-else>{{ firstLetter }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      photo: {
        type: String,
        required: false,
        default: null
      },
      name: {
        type: String,
        required: true
      },
      size: {
        type: String,
        required: false,
        default: 'normal'
      }
    },
    computed: {
      firstLetter() {
        return this.name[0].toUpperCase();
      }
    }
  };
</script>

<style scoped lang="scss">
  @import '../../styles/_variables.scss';

  $class-name: #{$prefix}-photo;
  $size: 60px;
  $large-size: $size * 1.5;
  $font-size: 1.5em;
  $large-font-size: 2em;
  $border-radius: 50%;

  .#{$class-name} {

    &.#{$class-name}--large {
      .#{$class-name}__photo {
        height: $large-size;
        width: $large-size;
      }

      .#{$class-name}__first-letter {
        font-size: $large-font-size;
        height: $large-size;
        line-height: $large-size;
        width: $large-size;
      }
    }

    &__photo {
      border-radius: $border-radius;
      height: $size;
      width: $size;
    }

    &__first-letter {
      border-radius: $border-radius;
      font-size: $font-size;
      height: $size;
      line-height: $size;
      margin: 0;
      text-align: center;
      width: $size;
    }
  }
</style>
