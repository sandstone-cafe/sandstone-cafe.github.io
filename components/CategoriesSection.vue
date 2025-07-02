<script setup lang="ts">
  // Accordion Toggle
  function toggleAccordion(header) {
      const content = header.nextElementSibling;
      const isActive = content.classList.contains('active');
      
      // Close all accordion items
      document.querySelectorAll('.accordion-content').forEach(item => {
          item.classList.remove('active');
      });
      
      // Open clicked item if it wasn't active
      if (!isActive) {
          content.classList.add('active');
      }
  }
</script>

<template>
  <!-- Categories Section Component -->
  <section id="categories" class="categories-section">
    <div class="categories-container">
      <h2 class="section-title">Our Menu</h2>

      <!-- Desktop Grid -->
      <div class="categories-grid">
        <div class="category-card">
          <div class="category-icon">🍳🥓</div>
          <h3>Breakfast</h3>
          <p>Breakfast Classics</p>
        </div>
        <div class="category-card">
          <div class="category-icon">🥘🧀</div>
          <h3>Omlettes</h3>
          <p>Choose from 3 Fillings</p>
        </div>
        <div class="category-card">
          <div class="category-icon">🥪🥬</div>
          <h3>Sandwiches</h3>
          <p>Served with Side Salad</p>
        </div>
        <div class="category-card">
          <div class="category-icon">🍞🥖</div>
          <h3>Toasted Or Panini</h3>
          <p>Served with Side Salad</p>
        </div>
        <div class="category-card">
          <div class="category-icon">🧀🧅</div>
          <h3>Ploughmans</h3>
          <p>All the Fillings</p>
        </div>
        <div class="category-card">
          <div class="category-icon">🥗</div>
          <h3>Salads</h3>
          <p>Fresh and healthy options</p>
        </div>
        <div class="category-card">
          <div class="category-icon">🍰🥞</div>
          <h3>Cakes</h3>
          <p>Refreshing drinks</p>
        </div>
        <div class="category-card">
          <div class="category-icon">🧃🥤</div>
          <h3>Cold Drinks</h3>
          <p>Smoothies, cans, juice, water</p>
        </div>
        <div class="category-card">
          <div class="category-icon">☕🫖</div>
          <h3>Coffee & Tea</h3>
          <p>Americano, Latte, Earl Grey</p>
        </div>
      </div>

      <!-- Mobile/Tablet Accordion -->
      <div class="categories-accordion">
        <div class="accordion-item">
          <div class="accordion-header" @click="toggleAccordion(this)">
            <div class="accordion-thumb">☕</div>
            <div>
              <h3>Premium Coffee</h3>
            </div>
          </div>
          <div class="accordion-content">
            <div class="accordion-bg"></div>
            <div class="accordion-text">
              <p>
                Our signature coffee blends are carefully crafted from the
                finest beans, roasted to perfection to deliver an exceptional
                coffee experience.
              </p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <div class="accordion-header" @click="toggleAccordion(this)">
            <div class="accordion-thumb">🫖</div>
            <div>
              <h3>Fine Teas</h3>
            </div>
          </div>
          <div class="accordion-content">
            <div class="accordion-bg"></div>
            <div class="accordion-text">
              <p>
                Explore our curated selection of premium teas from around the
                world, each offering unique flavors and aromatic experiences.
              </p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <div class="accordion-header" @click="toggleAccordion(this)">
            <div class="accordion-thumb">🥐</div>
            <div>
              <h3>Fresh Pastries</h3>
            </div>
          </div>
          <div class="accordion-content">
            <div class="accordion-bg"></div>
            <div class="accordion-text">
              <p>
                Daily baked pastries made with the finest ingredients. From
                croissants to muffins, each bite is a delightful experience.
              </p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <div class="accordion-header" @click="toggleAccordion(this)">
            <div class="accordion-thumb">🥪</div>
            <div>
              <h3>Gourmet Sandwiches</h3>
            </div>
          </div>
          <div class="accordion-content">
            <div class="accordion-bg"></div>
            <div class="accordion-text">
              <p>
                Artisanal sandwiches made with premium ingredients and fresh
                bread, perfect for a satisfying meal any time of day.
              </p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <div class="accordion-header" @click="toggleAccordion(this)">
            <div class="accordion-thumb">🍰</div>
            <div>
              <h3>Homemade Desserts</h3>
            </div>
          </div>
          <div class="accordion-content">
            <div class="accordion-bg"></div>
            <div class="accordion-text">
              <p>
                Indulge in our selection of homemade desserts, crafted with love
                and the finest ingredients for the perfect sweet ending.
              </p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <div class="accordion-header" @click="toggleAccordion(this)">
            <div class="accordion-thumb">🥗</div>
            <div>
              <h3>Fresh Salads</h3>
            </div>
          </div>
          <div class="accordion-content">
            <div class="accordion-bg"></div>
            <div class="accordion-text">
              <p>
                Healthy and delicious salads made with fresh, locally sourced
                ingredients for a nutritious and satisfying meal.
              </p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <div class="accordion-header" @click="toggleAccordion(this)">
            <div class="accordion-thumb">🧊</div>
            <div>
              <h3>Cold Beverages</h3>
            </div>
          </div>
          <div class="accordion-content">
            <div class="accordion-bg"></div>
            <div class="accordion-text">
              <p>
                Cool down with our refreshing selection of cold beverages, from
                iced coffees to fresh juices and smoothies.
              </p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <div class="accordion-header" @click="toggleAccordion(this)">
            <div class="accordion-thumb">🍜</div>
            <div>
              <h3>Comfort Soups</h3>
            </div>
          </div>
          <div class="accordion-content">
            <div class="accordion-bg"></div>
            <div class="accordion-text">
              <p>
                Warm your soul with our selection of hearty soups, made fresh
                daily with seasonal ingredients and rich flavors.
              </p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <div class="accordion-header" @click="toggleAccordion(this)">
            <div class="accordion-thumb">🥞</div>
            <div>
              <h3>Breakfast Specials</h3>
            </div>
          </div>
          <div class="accordion-content">
            <div class="accordion-bg"></div>
            <div class="accordion-text">
              <p>
                Start your day with our hearty breakfast options, from fluffy
                pancakes to eggs benedict, made to fuel your morning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
