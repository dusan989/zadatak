<template>
  <div id="app">
    <itk-header></itk-header>
    <div class="container itk-main-content">
      <transition name="itk-fade" mode="out-in">
        <div class="row justify-content-center" v-if="loading && !error" key="loading">
          <div class="col-auto">
            <dot-loader color="#007bff" size="200px"></dot-loader>
          </div>
        </div>
        <div class="row" v-else-if="!loading && !error" key="router">
          <div class="col">
            <transition name="itk-fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </div>
        <div class="row" v-else key="error">
          <div class="col">
            <itk-error></itk-error>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import DotLoader from 'vue-spinner/src/DotLoader';
  import Header from './components/core/Header';
  import Error from './components/core/Error';

  export default {
    name: 'app',
    components: {
      itkHeader: Header,
      itkError: Error,
      DotLoader
    },
    data() {
      return {
        offices: []
      };
    },
    computed: {
      ...mapGetters({
        loading: 'offices/loading',
        error: 'offices/error'
      })
    },
    methods: {
      ...mapActions({
        loadOffices: 'offices/load'
      })
    },
    created() {
      this.loadOffices();
    }
  };
</script>

<style lang="scss" scoped>
  @import './styles/_variables.scss';

  $effect-name: '#{$prefix}-fade';

  .#{$prefix}-main-content {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .#{$effect-name}-enter-active,
  .#{$effect-name}-leave-active {
    transition: opacity .5s
  }
  .#{$effect-name}-enter,
  .#{$effect-name}-leave-to {
    opacity: 0
  }
</style>
