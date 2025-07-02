<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  // Theme Toggle Functionality
  function toggleTheme() {
      const body = document.body;
      const themeToggle = document.querySelector('.theme-toggle');
      const currentTheme = body.getAttribute('data-theme');
      
      if (currentTheme === 'light') {
          body.setAttribute('data-theme', 'dark');
          themeToggle.textContent = '☀️';
          localStorage.setItem('theme', 'dark');
      } else {
          body.setAttribute('data-theme', 'light');
          themeToggle.textContent = '🌙';
          localStorage.setItem('theme', 'light');
      }
  }
  // Mobile Menu Toggle
  function toggleMobileMenu() {
      const mobileMenu = document.getElementById('mobileMenu');
      const hamburger = document.querySelector('.hamburger');
      
      mobileMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
  }

  function closeMobileMenu() {
      const mobileMenu = document.getElementById('mobileMenu');
      const hamburger = document.querySelector('.hamburger');
      
      mobileMenu.classList.remove('active');
      hamburger.classList.remove('active');
  }

  onMounted( () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.nav-container');
        if (window.scrollY > 50) {
            nav.style.background = document.body.getAttribute('data-theme') === 'dark' 
                ? 'rgba(20, 20, 20, 0.98)' 
                : 'rgba(255, 255, 255, 0.98)';
        } else {
            nav.style.background = document.body.getAttribute('data-theme') === 'dark' 
                ? 'rgba(20, 20, 20, 0.95)' 
                : 'rgba(255, 255, 255, 0.95)';
        }
    });
  })
</script>

<template>
  <!-- Navigation Component -->
  <nav class="nav-container">
    <div class="nav-content">
      <a href="#" class="logo">Sandstone</a>
      
      <ul class="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#cta">About</a></li>
        <li><a href="#categories">Menu</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#social">Reviews</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div class="nav-controls">
        <div class="hamburger" @click="toggleMobileMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <button class="theme-toggle" @click="toggleTheme()">🌙</button>
      </div>
    </div>

    <div class="mobile-menu" id="mobileMenu">
      <ul>
        <li><a href="#hero" @click="closeMobileMenu()">Home</a></li>
        <li><a href="#cta" @click="closeMobileMenu()">About</a></li>
        <li><a href="#categories" @click="closeMobileMenu()">Menu</a></li>
        <li><a href="#gallery" @click="closeMobileMenu()">Gallery</a></li>
        <li><a href="#social" @click="closeMobileMenu()">Reviews</a></li>
        <li><a href="#contact" @click="closeMobileMenu()">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped></style>
