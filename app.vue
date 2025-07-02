<script setup lang="ts">
  import { ref, onMounted } from 'vue';

  console.log('APP')
  // Gallery item hover effects with random heights
  function randomizeGalleryHeights() {
      const galleryItems = document.querySelectorAll('.gallery-item');
      const heights = [200, 250, 300, 350];
      
      galleryItems.forEach(item => {
          const randomHeight = heights[Math.floor(Math.random() * heights.length)];
          item.style.height = randomHeight + 'px';
      });
  }

  // Add scroll animations
  function addScrollAnimations() {
      const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.style.opacity = '1';
                  entry.target.style.transform = 'translateY(0)';
              }
          });
      }, observerOptions);

      // Add animation styles and observe elements
      const animatedElements = document.querySelectorAll('.cta-card, .category-card, .gallery-item, .social-card, .subfooter-panel');
      animatedElements.forEach(el => {
          el.style.opacity = '0';
          el.style.transform = 'translateY(30px)';
          el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          observer.observe(el);
      });
  }

  // Parallax effect for hero section
  function addParallaxEffect() {
      window.addEventListener('scroll', () => {
          const scrolled = window.pageYOffset;
          const heroSection = document.querySelector('.hero-section');
          const heroSvg = document.querySelector('.hero-svg');
          
          if (heroSection) {
              heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
          }
          
          if (heroSvg) {
              heroSvg.style.transform = `translateY(${scrolled * 0.3}px)`;
          }
      });
  }

  onMounted( () => {
    // Initialize all features
    document.addEventListener('DOMContentLoaded', function() {
        loadTheme();
        randomizeGalleryHeights();
        addScrollAnimations();
        addParallaxEffect();
        
        // Add some interactive hover effects
        document.querySelectorAll('.cta-button').forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05) rotate(2deg)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
            });
        });

        // Add typing effect to hero subtitle
        const subtitle = document.querySelector('.hero-subtitle');
        const text = subtitle.textContent;
        subtitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 2000);
    });

    // Add some fun Easter eggs
    let clickCount = 0;
    document.querySelector('.logo').addEventListener('click', function(e) {
        e.preventDefault();
        clickCount++;
        console.log(`clickCount :: ${clickCount}`)
        
        if (clickCount === 5) {
            this.style.animation = 'bounce 1s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
                clickCount = 0;
            }, 1000);
        }
    });

    // Add bounce animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes bounce {
            0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
            40%, 43% { transform: translate3d(0,-30px,0); }
            70% { transform: translate3d(0,-15px,0); }
            90% { transform: translate3d(0,-4px,0); }
        }
    `;
    document.head.appendChild(style);
  })
</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style scoped>

</style>