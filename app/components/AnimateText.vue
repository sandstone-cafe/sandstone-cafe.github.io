<script setup>

onMounted( () => {
  const textElement = document.querySelector('.animated-text span');
  textElement.textContent = "Dynamic Text Animation!";
})
</script>

<template>
<div class="container">
  <svg class="overlay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
    <rect x="0" y="0" width="200" height="100" fill="white" fill-opacity="0.8" />
    <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="20" fill="black">SVG Overlay</text>
  </svg>
  <div class="animated-text">
    <span>Animating Text Behind SVG</span>
  </div>
</div>

</template>

<style scoped>
body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #282c34;
  overflow: hidden;
}

.container {
  position: relative;
  width: 400px;
  height: 200px;
}

.overlay {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.animated-text {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.animated-text span {
  font-size: 24px;
  font-weight: bold;
  color: black;
  animation: slideText 5s linear infinite;
  white-space: nowrap;
  z-index: 99999;
}

@keyframes slideText {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

</style>