<template>
  <div class="main-content">
      <Topbar v-if="navposition == 'combo'" />
      <div class="container pt-4">
        <b-modal ref="modal">
          <div class="d-block text-center" id="modal-focus">
            <h1>{{ focusedMap.title }}</h1>
            <h3>{{ focusedMap.artist }}</h3>
            <h3>Mapped by {{ focusedMap.mapper }}</h3>
            <h4>{{ focusedMap.plays }} Plays</h4>
          </div>
        </b-modal>
        <div class="card" v-for="map in maps" :key="map.title+map.mapper">
            <div class="card-body d-flex justify-content-between">
              <div>
                <h2>{{map.title}}</h2>
                <h4>{{map.artist}}</h4>
              </div>
              <b-button class="btn btn-primary align-self-center" @click="toggleModal(map)" id="modal-focus">View details</b-button>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import Topbar from '@/components/partials/Topbar';
import MapManager from '@/mixins/MapManager';

export default {
  components: {
    Topbar,
  },
  mixins: [MapManager],
  props: {
    navposition: {
      type: String
    }
  },
  data() {
    return {
      focusedMap: {
        title: '',
        mapper: '',
        artist: '',
        rating: 0,
        plays: 0
      }
    };
  },
  beforeCreate () {
    if (localStorage.getItem('isAuthenticated') == 'false') {
      this.$router.push('/login');
    }
  },
  mounted () {
    this.getAllMaps();
  },
  methods: {
    toggleModal (map) {
      this.$refs['modal'].toggle('#modal-focus');
      this.focusedMap = map;
    }
  }
};
</script>

<style lang="scss" scope></style>