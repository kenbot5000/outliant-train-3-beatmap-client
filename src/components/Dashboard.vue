<template>
  <div class="main-content">
      <Topbar v-if="navposition == 'combo'" />
      <div class="container pt-4">
        <div class="card" v-for="map in maps" :key="map.title+map.mapper">
            <div class="card-body d-flex justify-content-between">
              <div>
                <h2>{{map.title}}</h2>
                <h4>{{map.artist}}</h4>
              </div>
              <button class="btn btn-primary align-self-center">View details</button>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import Topbar from '@/components/partials/Topbar';

export default {
  components: {
    Topbar,
  },
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
    async getAllMaps () {
      let options = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('osuAccessToken')
        }
      };
      try {
        const res = await axios.get('/api/maps/all', options);
        if(res.status == 200) {
          this.maps = res.data.res;
        }
      } catch (err) {
        localStorage.setItem('isAuthenticated', 'false');
        console.log(localStorage.getItem('isAuthenticated'));
      }
    },
  }
};
</script>

<style lang="scss" scope></style>