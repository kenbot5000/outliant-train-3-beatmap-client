<template>
  <div :class="!isLoggedIn ? 'container' : ''">
      <Sidebar v-if="navbarType != 'topnav' && isLoggedIn" :navposition="navbarType" />
      <Topnav v-if="navbarType == 'topnav' && isLoggedIn"/>
    <b-row align-v="center">
      <b-col cols="12">
        <router-view :navposition="navbarType"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Sidebar from '@/components/partials/Sidebar'
import Topnav from '@/components/partials/Topnav'

export default {
  components: {
    Sidebar,
    Topnav
  },
  data() {
    return {
      isLoggedIn: false,
      navbarType: 'combo'
    }
  },
  created () {
    this.isLoggedIn = this.$route.name != 'login';
  },
  watch: {
    '$route.name': function (routeName) {
      this.isLoggedIn = routeName != 'login';
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  position: relative;
}
.bg-gray-300 {
  background: $gray-300;
  z-index: 999;
}
#header {
  position: absolute;
  top: 0;
  left: 0;
}
</style>