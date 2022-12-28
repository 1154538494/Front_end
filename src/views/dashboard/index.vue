<template>
  <div class="dashboard-container">
    <br>
    <div class="dashboard-text">地理信息可视化</div>
    <hr>
    <div id="map" style="width: 1000px; height: 700px;"></div>
  </div>
</template>

<script>
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
export default {
  filters: {},
  data() {
    return {};
  },
  mounted() {
    const url = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
    const map = L.map("map", {
      center: [51.505, -0.09],
      zoom: 13,
    });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
    console.log("map");
  },
  methods: {},
};
</script>


