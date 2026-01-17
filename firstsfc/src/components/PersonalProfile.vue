<template>
  <div class="profile">

    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#course">Course</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#hobbies">Hobbies</a></li>
        <li><a href="#goals">Goals</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <section id="home" class="hero">
      <img src="@/assets/images/profile.jpg" alt="Profile">
      <div>
        <h1>Marcus U. Montero</h1>
        <p>BSIT student interested in web development.</p>
      </div>
    </section>

    <section id="about" class="section">
      <h2>About Me</h2>
      <p>
        I am a BSIT student who enjoys building websites and learning new technologies.
      </p>
    </section>

    <section id="education" class="section dark">
      <h2>Education</h2>
      <ul>
        <li>La Immaculada Concepcion School</li>
        <li>Colegio De San Juan De Letran</li>
        <li>Asia Pacific College</li>
      </ul>
    </section>

    <section id="course" class="section">
      <h2>Course</h2>
      <p>Bachelor of Science in Information Technology</p>
    </section>

    <section id="experience" class="section dark">
      <h2>IT Experience</h2>
      <p>Code Combat</p>
    </section>

    <section id="hobbies" class="section">
      <h2>Hobbies</h2>
      <p>Basketball and Fish Keeping</p>
    </section>

    <section id="goals" class="section dark">
      <h2>Goals</h2>
      <p>To succeed in IT and make my family proud.</p>
    </section>

    <section id="gallery" class="section">
      <h2>Gallery</h2>
      <div class="gallery">
        <img src="@/assets/images/profile.jpg">
        <img src="@/assets/images/photo1.jpg">
        <img src="@/assets/images/photo2.jpg">
        <img src="@/assets/images/photo3.jpg">
      </div>
    </section>

    <section id="contact" class="section dark">
      <h2>Contact</h2>
      <p>Email: mumontero@student.apc.edu.ph</p>
      <p>
        GitHub:
        <a href="https://github.com/MarcusMontero" target="_blank">
          github.com/MarcusMontero
        </a>
      </p>
    </section>

    <footer>
      © 2026 Marcus U. Montero
    </footer>

  </div>
</template>

<script>
export default {
  name: "PersonalProfile"
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

nav {
  background: black;
  padding: 12px;
}

nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  flex-wrap: wrap;
}

nav li {
  margin: 0 15px;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.hero {
  display: flex;
  min-height: 90vh;
}

.hero img {
  width: 50%;
  object-fit: cover;
}

.hero div {
  padding: 60px;
}

.section {
  padding: 60px 20px;
}

.dark {
  background: #0b0b0b;
  color: white;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.gallery img {
  width: 100%;
}

footer {
  background: black;
  color: white;
  text-align: center;
  padding: 15px;
}
</style>
