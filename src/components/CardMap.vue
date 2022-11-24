<template>
  <div class="container">
    <h2 class="font-weight-bold text-secondary mb-3" id="title">Lütfen Başlangıç Adresi ve Varış Adresini Giriniz </h2>
    <div class="card mb-3" id="card">
      <div class="card-body">
        <div class="row">
          <div class="col-lg-6">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Başlangıç Adresini Yazınız</label>
                <input type="text" class="form-control" id="exampleInputEmail1" v-model="formMap.beginning"
                       aria-describedby="emailHelp" placeholder="Başlangıç Adresini Yazınız">
                <span v-if="formMap.msgBeginning" class="text-danger">{{formMap.msgBeginning}}</span>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Varış Adresini Giriniz</label>
                <input type="text" class="form-control" id="exampleInputPassword1" v-model="formMap.finish"
                       placeholder="Varış Adresini Giriniz">
                <span v-if="formMap.msgFinish" class="text-danger">{{formMap.msgFinish}}</span>
              </div>
              <button type="submit" class="btn btn-primary" @click.prevent="onSubmitMap">Hesapla</button>
            </form>
          </div>
          <div class="col-lg-6 text-center mt-2" v-if="mil && realTime">
            <i class="pi pi-map" style="font-size: 13em;"></i><br/>
            <div class="row mt-3 font-weight-bold">
              <div class="col-1 col-lg-3">

              </div>
              <div class="col-5 col-lg-3">
                <span><i class="pi pi-car mr-2" style="font-size: 2em;"></i></span>{{ mil }}<br/>
              </div>
              <div class="col-5 col-lg-3">
                <span><i class="pi pi-map-marker mr-2" style="font-size: 2em;"></i></span>{{ realTime }}<br/>
              </div>
            </div>
          </div>
          <div class="col-lg-6" v-else>
            <div v-if="animation == false">

            </div>
            <div v-else>
              <div class="row">
                <div class="col-2 col-lg-4">

                </div>
                <div class="col-4 col-lg-4 mt-2">
                  <Skeleton shape="rectangle" size="176px"/>
                  <div class="row">
                    <div class="col-6 col-lg-6">
                      <Skeleton width="130%" height="1rem" class="mt-1"/>
                    </div>
                    <div class="col-6 col-lg-6">
                      <Skeleton width="130%" height="1rem" class="mt-1"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Skeleton from 'primevue/skeleton';

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Skeleton
  },
  name: "CardMap",
  data() {
    return {
      realTime: '',
      mil: '',
      animation: false,
      formMap: {
        beginning: '',
        finish: '',
        msgBeginning: '',
        msgFinish: '',
      },
    }
  },
  methods: {
    onSubmitMap: function () {
      this.mil = ''
      this.realTime = ''
      if (this.formMap.beginning == ""){
        this.formMap.msgBeginning = 'Lütfen Başlangıç Adresini  Yazınız'
      }
      else if (this.formMap.finish == ""){
        this.formMap.msgFinish = 'Lütfen Varış Adresini Yazınız'
      }
      else{
        this.animation = true

        this.formMap.msgBeginning = ''
        this.formMap.msgFinish = ''
        let data = this;
        const headers = {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        };
        axios.get('https://www.mapquestapi.com/directions/v2/route?key=DktL8V7kC5Jx6fPusAfTLLgd5nmZOzSL&from=' + this.formMap.beginning + '&to=' + this.formMap.finish,{headers},{ crossdomain: true }).then(function (resp) {
          console.log(resp.data.route)
          data.mil = resp.data.route.distance.toFixed() + ' ' + 'mil'
          var minute = resp.data.route.realTime / 60

          if (minute > 60) {
            var hour = minute / 60
            data.realTime = hour.toFixed() + ' ' + 'saat'
          } else {
            data.realTime = minute.toFixed() + ' ' + 'dakika'
          }
        })
      }
    }
  },
}
</script>

<style scoped>
#card {
  border: 2px solid #828282;
  padding: 10px;
  border-radius: 25px;
}
</style>
