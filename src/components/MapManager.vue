<template>
  <div class="main-content">
    <Topbar v-if="navposition == 'combo'" />

    <div class="container">
      <div class="card my-4">
        <button class="btn btn-primary" @click="switchMapForm('add')">Add New Map</button>
      </div>
      <MapForms ref="mapForms" />
    </div>

    <div class="container pt-4">
      <table class="table">
        <thead class="thead-dark">
          <th>Map Name</th>
          <th>Artist</th>
          <th>Mapper</th>
          <th>Plays</th>
          <th>Rating</th>
        </thead>
        <tbody>
          <tr v-for="map in maps" :key="map.title+map.mapper">
            <td>{{ map.title }}</td>
            <td>{{ map.artist }}</td>
            <td>{{ map.mapper }}</td>
            <td>{{ map.plays }}</td>
            <td>{{ map.rating }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import MapManager from '@/mixins/MapManager';
import Topbar from '@/components/partials/Topbar';
import MapForms from '@/components/form/MapForms';

export default {
  components: {
    Topbar,
    MapForms
  },
  mixins: [MapManager],
  props: {
    navposition: {
      type: String
    }
  },
  data() {
    return {
      maps: []
    };
  },
  mounted () {
    this.getAllMaps();
  },
  methods: {
    switchMapForm (type) {
      this.$refs.mapForms.switchForm(type);
    }
  }
};
</script>

<style>

</style>