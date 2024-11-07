<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>

  <main>
    <section class="container-hero">
      <!-- <img src="https://istanaflorist.com/wp-content/uploads/2023/06/6.-Cara-Pesan-Buket-Bunga-Surabaya-Dengan-Mudah.jpg" class="img-fluid" alt="flower"> -->

      <section class="container">
        <div class="hero-content">
          <div class="card" style="width: 18rem">
            <!-- <img
                src="https://png.pngtree.com/png-clipart/20220313/original/pngtree-aesthetic-flower-bouquet-png-image_7428657.png"
                class="card-img-top" alt="flower" style="position: absolute;"> -->
            <div class="card-body">
              <p class="card-text">Buy Smartphone For Someone</p>
              <a href="#" class="btn btn-danger">Click</a>
            </div>
          </div>
        </div>
      </section>
    </section>
  </main>

  <div class="container text-center py-4">
    <div
      class="d-flex align-items-center justify-content-between py-4"
      style="font-size: 10px"
    >
      <h5 class="card-title text-danger">Brand Smartphone</h5>
    </div>
    <smartphone-list :smartphones="smartphoneList" v-if="smartphoneListStatus">
    </smartphone-list>
    <!-- <div class="row row-cols-6">
      <div class="col">
        <div class="card mb-3">
          <img
            src="https://intercomp.com.mt/wp-content/uploads/2022/09/Apple-iPhone-14-Blue.jpg"
            class="card-img-top"
            alt="iphone"
          />
          <div class="card-body">
            <p class="card-text">Rp10.000.000</p>
            <p class="card-text">
              <small class="text-body-secondary">Iphone 14 Plus</small>
            </p>
          </div>

          <div
            class="d-flex align-items-center justify-content-between px-2"
            style="font-size: 10px"
          >
            <div></div>
            <div><i class="bi bi-heart"></i>2220</div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card mb-3">
          <img
            src="https://www.pointekonline.com/wp-content/uploads/2023/03/oppo-reno-8t-5g.jpg"
            class="card-img-top"
            alt="oppo-reno-8t-5g"
          />
          <div class="card-body">
            <p class="card-text">Rp5.000.000</p>
            <p class="card-text">
              <small class="text-body-secondary">Oppo Reno 8T 5G</small>
            </p>
          </div>

          <div
            class="d-flex align-items-center justify-content-between px-2"
            style="font-size: 10px"
          >
            <div></div>
            <div><i class="bi bi-heart"></i>1050</div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card mb-3">
          <img
            src="https://mobilepriceall.com/wp-content/uploads/2022/11/Huawei-Nova-Y61.jpg"
            class="card-img-top"
            alt="huawei"
          />
          <div class="card-body">
            <p class="card-text">Rp12.500.000</p>
            <p class="card-text">
              <small class="text-body-secondary">Huawei Nova Y61</small>
            </p>
          </div>

          <div
            class="d-flex align-items-center justify-content-between px-2"
            style="font-size: 10px"
          >
            <div></div>
            <div><i class="bi bi-heart"></i>880</div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card mb-3">
          <img
            src="https://images.kabum.com.br/produtos/fotos/399113/smartphone-gamer-asus-rog-phone-6-8gb-ram-256gb-octa-core-camera-tripla-50mp-tela-de-6-78-amoled-branco-90ai00b2-m001t0_1668079427_original.jpg"
            class="card-img-top"
            alt="asus"
          />
          <div class="card-body">
            <p class="card-text">Rp15.000.000</p>
            <p class="card-text">
              <small class="text-body-secondary">Asus ROG Phone</small>
            </p>
          </div>

          <div
            class="d-flex align-items-center justify-content-between px-2"
            style="font-size: 10px"
          >
            <div></div>
            <div><i class="bi bi-heart"></i>995</div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card mb-3">
          <img
            src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1686294443/Croma%20Assets/Communication/Mobiles/Images/273442_q7gllb.png"
            class="card-img-top"
            alt="realme"
          />
          <div class="card-body">
            <p class="card-text">Rp8.000.000</p>
            <p class="card-text">
              <small class="text-body-secondary">Realme 11 Pro</small>
            </p>
          </div>

          <div
            class="d-flex align-items-center justify-content-between px-2"
            style="font-size: 10px"
          >
            <div></div>
            <div><i class="bi bi-heart"></i>528</div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card mb-3">
          <img
            src="https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/1200Wx1200H-null?context=bWFzdGVyfGltYWdlc3wyMjAzMzl8aW1hZ2UvanBlZ3xhRGRsTDJneE5TOHhOalUzTVRZeU5qTTRPVFV6TkM4eE1qQXdWM2d4TWpBd1NGOXVkV3hzfDAxYTc1OTZmNmE5ZjIwOGU0NDExNmM5YTE2ZGRmMDVlMTk0YjM5MjBiYmQyMWU1YmY3NTJlMmZiNjkyNTIyNGI"
            class="card-img-top"
            alt="xiaomi"
          />
          <div class="card-body">
            <p class="card-text">Rp9.500.000</p>
            <p class="card-text">
              <small class="text-body-secondary">Xiaomi Note 12 Pro</small>
            </p>
          </div>

          <div
            class="d-flex align-items-center justify-content-between px-2"
            style="font-size: 10px"
          >
            <div></div>
            <div><i class="bi bi-heart"></i>550</div>
          </div>
        </div>
      </div>
    </div> -->
  </div>

  <div class="container text-center">
    <div
      class="d-flex align-items-center justify-content-between py-4"
      style="font-size: 10px"
    >
      <h5 class="card-title text-primary">Kategori</h5>
      <div>See all</div>
    </div>
    <div class="d-flex align-items-center justify-content-between py-4">
      <span class="badge bg-muted-iphone">Iphone</span>
      <span class="badge bg-muted-oppo">Oppo</span>
      <span class="badge bg-muted-asus">Asus</span>
      <span class="badge bg-muted-xiaomi">Xiaomi</span>
      <span class="badge bg-muted-realme">Realme</span>
      <span class="badge bg-muted-samsung">Samsung</span>
      <span class="badge bg-muted-nokia">Nokia</span>
      <span class="badge bg-muted-huawei">Huawei</span>
      <span class="badge bg-muted-apple">Apple</span>
      <span class="badge bg-muted-oneplus">OnePlus</span>
      <span class="badge bg-muted-vivo">Vivo</span>
      <span class="badge bg-muted-google-pixel">Google Pixel</span>
      <span class="badge bg-muted-nothing-phone">Nothing Phone</span>
      <span class="badge bg-muted-infinix">Infinix</span>
      <span class="badge bg-muted-blackberry">Blackberry</span>
      <span class="badge bg-muted-lenovo">Lenovo</span>
      <span class="badge bg-muted-sony">Sony</span>
    </div>
  </div>

  <div class="container text-center py-5">
    <div
      class="d-flex align-items-center justify-content-between py-4"
      style="font-size: 10px"
    >
      <h5 class="card-title text-success">New Smartphone</h5>
      <!-- <a href="flower.html">See all</a> -->
    </div>
    <smartphone-list :smartphones="smartphoneList" v-if="smartphoneListStatus">
    </smartphone-list>
    <!-- <div class="row row-cols-6">
      <div class="col">
        <div class="card mb-3">
          <img
            src="https://www.yatekno.com/wp-content/uploads/2021/12/Infinix-Zero-X-Pro.jpg"
            class="card-img-top"
            alt="infinix"
          />
          <div class="card-body">
            <p class="card-text">Rp4.500.000</p>
            <p class="card-text">
              <small class="text-body-secondary">Infinix Zero X Pro</small>
            </p>
          </div>

          <div
            class="d-flex align-items-center justify-content-between px-2"
            style="font-size: 10px"
          >
            <div></div>
            <div><i class="bi bi-heart"></i>900</div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card mb-3">
          <img
            src="https://carisinyal.com/wp-content/uploads/2023/07/Nokia-G42-5G_.webp"
            class="card-img-top"
            alt="nokia"
          />
          <div class="card-body">
            <p class="card-text">Rp6.000.000</p>
            <p class="card-text">
              <small class="text-body-secondary">Nokia G42 5G</small>
            </p>
          </div>

          <div
            class="d-flex align-items-center justify-content-between px-2"
            style="font-size: 10px"
          >
            <div></div>
            <div><i class="bi bi-heart"></i>500</div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card mb-3">
          <img
            src="http://4.bp.blogspot.com/-2RTN-u4cdWw/VB6OCzTjiRI/AAAAAAAAAyY/ewBsl6ABNwE/s1600/Sony%2BXperia_Z1.jpg"
            class="card-img-top"
            alt="sony"
          />
          <div class="card-body">
            <p class="card-text">Rp3.000.000</p>
            <p class="card-text">
              <small class="text-body-secondary">Sony Xperia Z1</small>
            </p>
          </div>

          <div
            class="d-flex align-items-center justify-content-between px-2"
            style="font-size: 10px"
          >
            <div></div>
            <div><i class="bi bi-heart"></i>1100</div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card mb-3">
          <img
            src="https://mobix.ee/wp-content/uploads/2023/04/oneplus_nord_ce_3_lite_5g_pastel_lime.png"
            class="card-img-top"
            alt="oneplus"
          />
          <div class="card-body">
            <p class="card-text">Rp7.000.000</p>
            <p class="card-text">
              <small class="text-body-secondary">OnePlus Nord Lite 5G</small>
            </p>
          </div>

          <div
            class="d-flex align-items-center justify-content-between px-2"
            style="font-size: 10px"
          >
            <div></div>
            <div><i class="bi bi-heart"></i>880</div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card mb-3">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.wuFsiS15gYzBDUa8SOJZQwHaHa&pid=Api&P=0&h=180"
            class="card-img-top"
            alt="iphone"
          />
          <div class="card-body">
            <p class="card-text">Rp365.000</p>
            <p class="card-text">
              <small class="text-body-secondary">Apple Iphone 12 Pro Max</small>
            </p>
          </div>

          <div
            class="d-flex align-items-center justify-content-between px-2"
            style="font-size: 10px"
          >
            <div></div>
            <div><i class="bi bi-heart"></i>950</div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card mb-3">
          <img
            src="https://img-prd-pim.poorvika.com/product/vivo-v29e-5g-artistic-red-128gb-8gb-ram-front-back-view.png"
            class="card-img-top"
            alt="vivo"
          />
          <div class="card-body">
            <p class="card-text">Rp7.000.000</p>
            <p class="card-text">
              <small class="text-body-secondary">Vivo V29e 5G</small>
            </p>
          </div>

          <div
            class="d-flex align-items-center justify-content-between px-2"
            style="font-size: 10px"
          >
            <div></div>
            <div><i class="bi bi-heart"></i>1500</div>
          </div>
        </div>
      </div>
    </div> -->
  </div>

  <!-- Footer -->
  <footer class="footer bg-footer py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3 text-light">
          <h5 class="mb-2">Smartphone</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><span class="text-white">About</span></li>
            <li class="mb-2"><span class="text-white">Sustainability</span></li>
            <li class="mb-2"><span class="text-white">Blog</span></li>
            <li class="mb-2"><span class="text-white">Advertising</span></li>
          </ul>
        </div>
        <div class="col-md-3 text-light">
          <h5>Discover</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><span class="text-white">How it works</span></li>
            <li class="mb-2"><span class="text-white">Help center</span></li>
            <li class="mb-2"><span class="text-white">Infoboard</span></li>
            <li class="mb-2"><span class="text-white">Mobile apps</span></li>
          </ul>
        </div>
        <div class="col-md-3 text-light">
          <h5>Help</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><span class="text-white">Help center</span></li>
            <li class="mb-2"><span class="text-white">Buying</span></li>
            <li class="mb-2">
              <span class="text-white">Trust and Safety</span>
            </li>
          </ul>
        </div>
        <div class="col-md-3 text-light">
          <h5>Community</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><span class="text-white">Forum</span></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import SmartphoneList from "../smartphone/SmartphoneList.vue";
import SMARTPHONE_DATA from "../../smartphone.json";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const smartphoneListStatus = ref(false);
const smartphoneList = ref([]);

onMounted(async () => {
  try {
    const data = await store.dispatch("smartphone/getSmartphoneData");
    smartphoneListStatus.value = true;
    smartphoneList.value = store.state.smartphone.smartphones;

    // console.log({ data }, " --- : HELO");
  } catch (error) {
    console.error("Error fetching smartphone data:", error);
  }
});
</script>
