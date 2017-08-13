<template>
  <nav class="navbar navbar-dark bg-primary navbar-expand-sm fixed-top">
    <router-link :to="{name: 'LIST'}" class="navbar-brand">Offices</router-link>
    <button class="navbar-toggler" type="button" @click="showMenu = !showMenu">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" :class="{show: showMenu}">
      <ul class="navbar-nav">
        <router-link :to="{name: 'LIST'}" tag="li" active-class="active" class="nav-item">
          <a class="nav-link">List</a>
        </router-link>
        <router-link :to="{name: 'GRID'}" tag="li" active-class="active" class="nav-item">
          <a class="nav-link">Grid</a>
        </router-link>
        <router-link :to="{name: 'MAP'}" tag="li" active-class="active" class="nav-item">
          <a class="nav-link">Map</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        showMenu: false
      };
    }
  };
</script>
