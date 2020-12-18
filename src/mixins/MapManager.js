import axios from 'axios';

export default {
  data() {
    return {
      maps: []
    };
  },
  methods: {
    async requestRefresh () {
      const bearer = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('osuRefreshToken')
        }
      };
      try {
        const res = await axios.post('/api/auth/refresh', bearer);
        if(res.status == 200) {
          // Set new access and refresh token
          localStorage.setItem('osuAccessToken', res.data.accessToken);
          localStorage.setItem('osuRefreshToken', res.data.refreshToken);
        }
      } catch (err) {
        // Redirect to login
        localStorage.setItem('isAuthenticated', 'false');
        this.$router.push('/login');
      }
    },
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
        this.requestRefresh();
        this.getAllMaps();
      }
    },
    async createMap (data) {
      // Do value checking on the form itself.
      const options = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('osuAccessToken')
        },
        data: data
      };
      const res = await axios.post('/api/maps', options);
      console.log(res.status);
    }
  }
};

