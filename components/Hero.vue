<script setup>

</script>

<!-- 
# https://workik.com/project/202253/ai_scripts/w/lzwMOOeWZzrvKeqA8dsG/t/X9rPeqibzUL3FkpsHYXF
-->

<template>
  <section id="hero" class="hero-section" style="transform: translateY(0px);">
    <div class="hero-glass">
        <h1 class="hero-title">Welcome to Sandstone of Frodsham</h1>
        <p class="hero-subtitle">Eat in or Takeaway</p>

        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="xMidYMid" 
          version="1.0" 
          viewBox="0 0 3040 825"
          class="hero-svg"
        >
          <path 
              id="s-path"
              fill="none" 
              stroke="#000" 
              stroke-linecap="round" 
              stroke-width="38" 
              d="M519 333s-21 17 32 15c38-1 167-41 255-82 106-49 151-97 171-138 28-59-23-95-84-100-77-7-236 2-433 70a743 743 0 0 0-311 186c-26 25-56 74-8 115 47 40 312 64 349 85 45 27 83 71 33 142-51 72-203 142-240 152-62 17-182 39-231-5-57-52 6-123 70-147"
          />
          <path 
              id="andstone-path"
              fill="none" 
              stroke="#000" 
              stroke-linecap="round" 
              stroke-width="38" 
              d="M778 430c-24-4-28-3-59 8-50 25-117 89-115 134 3 62 76-6 137-72 37-39 52-49 76-80 23-10-49 38-66 114-11 51 41 49 58 44 58-16 134-65 183-114 25-25 36-38 55-52 9-7-108 143-116 185-9 46 48-86 154-152 97-60-10 62-18 112-2 16 0 48 41 29 54-25 89-50 125-73 40-26 99-84 140-94 0 0 46-3-28 24-47 17-86 88-95 121-12 49 48 31 73 10 16-13 82-79 145-152 77-90 152-188 175-229 47-86 1-78-50-26a955 955 0 0 0-197 320c-25 77 5 100 31 97 27-4 74-26 110-46 70-38 146-126 188-140 11-4-24 18-24 18-124 131-61 251-117 198-18-20-29-28-61-53-7-5 76 76 190 18 46-23 177-104 202-136 76-95 167-258 188-296 26-45-60 61-111 157-47 86-65 129-86 168-17 32-19 46-35 88-22 55 27 68 72 46 29-13 125-61 190-111 56-43 75-61 102-73 33-15-33 35-33 35-33 43-66 81-56 119 11 37 66 1 75-7 26-22 53-52 77-95 19-36 15-54-8-47-10 3-22 20-13 38 10 22 58 22 80 12 74-33 87-31 97-42 27-31 27-26 27-26s-75 100-109 172 59-63 82-85c17-16 86-75 103-69 17 7-46 79-55 130-11 68 68 17 68 17l66-40s53-33 67-45c13-13 3 8-10 29 0 0 23 5 49 0 26-6 79-56 90-70 16-23 6-56-38-27-141 92-71 76-98 106-22 25-16 85 85 46 59-22 84-40 111-57l79-52 47-32"
          />
          <path
              id="t-cross-path" 
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-width="30"
              d="m 1390,307 c 0,0 148,-3 374,-5 h 350 c 163,2 8,17 8,17"
              style="display:inline; border: 1px dotted black;"
              inkscape:label="t-cross-path" 
          />
          <path 
              id="underline"
              fill="none" 
              stroke="#fff" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="6" 
              d="m 523.65355,805.62082 c 0,0 365.40658,-143.86084 2203.94845,-120.84311"
          />
        </svg>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, var(--chocolate), var(--accent));
}

/* Glass effect container */
.hero-glass {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 2rem 3rem;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  text-align: center;
  max-width: 1200px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

/* SVG styling */
.hero-svg {
  width: 100%;
  max-width: 900px;
  height: auto;
  margin-top: 1rem;
}

#hero path {

  fill: none;
  /* fill: green; */
  /* fill-opacity: 0.5; */
  stroke: white; 
  stroke-linecap: round;
  /* stroke-opacity: 0.5; */
  stroke-width: 38; 
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-direction: normal;
}
#hero #s-path {
  stroke-dasharray: 5838;
  animation-name: writeS;
}
@keyframes writeS {
  0% {
    stroke-dashoffset: 5838;
  }
  40% {
    stroke-dashoffset: 0;
  }
}
#hero #andstone-path {
  stroke-dasharray: 8577;
  animation-name: writeAndStone;
}

@keyframes writeAndStone {
  0%,
  20% {
    stroke-dashoffset: 8577;
  }
  90% {
    stroke-dashoffset: 0;
  }
}
#hero #t-cross-path {
  stroke-dasharray: 868;
  animation-name: writeTCross;
}

@keyframes writeTCross {
  0%,
  91% {
    stroke-dashoffset: 868;
  }
  93% {
    stroke-dashoffset: 0;
  }
}

#hero #underline {
  stroke-dasharray: 2212;
  animation-name: writeUnderline;
}
@keyframes writeUnderline {
  0%,
  94% {
    stroke-dashoffset: 2212;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

</style>