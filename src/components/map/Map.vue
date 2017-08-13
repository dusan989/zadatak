<template>
  <div class="embed-responsive embed-responsive-16by9">
    <div class="embed-responsive-item" id="map"></div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'map',
    computed: {
      ...mapGetters({
        offices: 'offices/data'
      })
    },
    mounted() {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: {
          lat: 44.813614,
          lng: 20.460800
        },
        zoom: 2
      });

      this.offices.map((office) => {
        const infoWindow = new google.maps.InfoWindow({
          content: `<div>
            <h1>${office.name}</h1>
            <p>${office.description}</p>
          </div>`
        });

        const position = {
          lat: parseFloat(office.latitude),
          lng: parseFloat(office.longitude)
        };

        const marker = new google.maps.Marker({
          position,
          map
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });

        return marker;
      });
    }
  };
</script>
