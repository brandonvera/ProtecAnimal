<template>
  <div id="app">
    <header class="container-fluid bg-warning d-flex justify-content-center">
      <p class="text-light mb-0 p-2 fs-6">Contactanos 0416-872-47-03</p>
    </header>
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <span class="text-warning fs-5 fw-bold">UNEFA</span>
          </a>
          <button class="navbar-toggler btn-white btn btn-outline-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <router-link class="nav-link" to="/proteccion">Proteccion Animal</router-link> 
              <router-link class="nav-link" to="/leyes">Leyes</router-link> 
              <router-link class="nav-link" to="/acerca">Acerca de Nosotros</router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
          <img src="https://www.miaminews24.com/wp-content/uploads/2019/05/mascotas-sura.jpg" class="d-block w-100" alt="slide1">
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src="https://blog.naturlider.com/wp-content/uploads/2020/05/AdobeStock_297781003-post-mascotas-1619x1079.jpeg" class="d-block w-100" alt="slide2">
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src="https://s28461.pcdn.co/wp-content/uploads/2017/10/6-formas-en-que-las-mascotas-son-buenas-para-la-salud.jpg" class="d-block w-100" alt="slide3">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <router-view/>
    <!-- footer -->
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Lobster&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 20px;
}

#nav a {
  font-family: 'Comfortaa', cursive;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: orange;
}
.carousel-inner{
  max-height: 39rem;
}
</style>
