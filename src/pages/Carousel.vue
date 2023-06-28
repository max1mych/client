<template>
    <div class="carousel">
      <h1 class="text-center"><b>Галерея</b></h1>
      <div class="carousel-inner">
        <div v-for="(image, index) in images" :key="index" :class="{ 'carousel-item': true, 'active': index === currentIndex }">
          <img :src="image.url" :alt="image.description" class="novost-img img-fluid">
        </div>
      </div>
      <div class="carousel-controls">
        <button @click="previousImage" class="carousel-control-prev">&#8249;</button>
        <button @click="nextImage" class="carousel-control-next">&#8250;</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      images: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        currentIndex: 0
      };
    },
    methods: {
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      previousImage() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      }
    }
  };
  </script>
  
  <style>
  .carousel {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  
  .carousel-inner {
    display: flex;
    transition: transform 0.5s ease;
    flex-wrap: nowrap; /* Prevent wrapping of carousel items */
  }
  
  .carousel-item {
    flex: 0 0 100%;
  }
  
  .carousel-controls {
    margin-top: 1rem;
    text-align: center;
  }
  
  .carousel-controls button {
    margin: 0 0.5rem;
    font-size: 2rem;
  }
  
  .text-center {
    text-align: center;
  }
  </style>