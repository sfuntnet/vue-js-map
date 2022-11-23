<template>
  <div class="container">
    <h2 class="font-weight-bold text-secondary mb-3" id="title">Tahmini varış sürenizi ve kaç mil olduğunu
      hesaplayınız</h2>
    <div class="card mb-3" id="card">
      <img class="card-img-top"
           src="../assets/image.jpg"
           alt="Card image cap" height="380" width="1149" id="img">
      <div class="card-body">
        <button type="button" class="btn btn-primary btn-lg" id="button" @click="button">Hadi Başlayalım!</button>
      </div>
      <ProgressSpinner v-if="status == false" class="d-none"/>
      <ProgressSpinner v-else id="loading"/>
    </div>
  </div>

</template>

<script>
import ProgressSpinner from 'primevue/progressspinner';

export default {
  components: {
    ProgressSpinner
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Card",
  data() {
    return {
      status: false,
    };
  },
  methods: {
    button() {
      this.status = true
      setTimeout(() => {
        this.$router.push('/map')
        this.status = false
      }, 1500)
    }
  }
}
</script>

<style scoped>
#card {
  border: 2px solid #828282;
  padding: 10px;
  border-radius: 25px;
}

#img {
  border: 2px;
  padding: 10px;
  border-radius: 50px 20px;
}

#loading {

}
</style>