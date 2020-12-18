<template>
  <div class="container card p-4" v-if="formType !== 'none'">
    <!-- Add Map -->
    <form v-if="formType == 'add'">
      <div class="form-group">
        <label for="map-name">Map Name</label>
        <input type="text" class="form-control" placeholder="e.g. Brain Power" required />
      </div>
      <div class="form-group">
        <label for="map-artist">Artist</label>
        <input type="text" class="form-control" placeholder="e.g. NOMA" required />
      </div>
      <div class="form-group">
        <label for="map-mapper">Mapper</label>
        <input type="text" class="form-control" placeholder="e.g. MapperJones" required>
      </div>
      <div class="form-group">
        <label for="map-plays">Map Plays</label>
        <input type="number" class="form-control" placeholder="e.g. 710723" required />
      </div>
      <div class="form-group">
        <label for="map-rating">Rating</label>
        <input type="number" class="form-control" placeholder="e.g. 73" required />
      </div>
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formType: 'none'
    };
  },
  methods: {
    switchForm (type) {
      this.formType = type;
    }
  }
};
</script>

<style>

</style>