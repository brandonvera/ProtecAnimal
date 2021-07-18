<template>
  <div id="app">
    <header class="container-fluid bg-warning d-flex justify-content-center">
      <p class="text-light mb-0 p-2 fs-6">Servicio Comunitario UNEFA Táchira</p>
    </header>
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
          <a class="navbar-brand" href="">
            <img src="~@/assets/logo.png" class="logo">
            <span class="text-warning fs-5 fw-bold"> UNEFA</span>
          </a>
          <button class="navbar-toggler btn-white btn btn-outline-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <router-link class="nav-link" to="/">Proteccion Animal</router-link> 
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
          <img src="~@/assets/slider1.jpg" class="d-block w-100 gg" alt="slide1">
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src="~@/assets/slider2.jpeg" class="d-block w-100 gg" alt="slide2">
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src="~@/assets/slider3.jpg" class="d-block w-100 gg" alt="slide3">
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
    <footer class="w-100 d-flex align-items-center justify-content-center flex-wrap">
      <p class="fs-5 px-3 pt-3">La Turena, Sector los Naranjos</p>
      <div id="iconos">
        <router-link to="/"><i class="bi bi-hand-index-thumb-fill"></i></router-link> 
        <router-link to="/leyes"><i class="bi bi-hammer"></i></router-link> 
        <router-link to="/acerca"><i class="bi bi-geo-alt-fill"></i></router-link> 
      </div>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Lobster&display=swap');

#app {
  font-family: 'Comfortaa', cursive;
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

.carousel-inner, .gg{
  height: 39rem;
}

footer {
  background-color: orange;
  min-height: 100px;
}

footer p {
  color: white;
  text-align: center;
}

#iconos i {
  font-size: 26px;
  padding: 0 8px;
  color: white;
}

.logo{
  width: 25%;
}

@media (max-width:768px) {
  .carousel-inner, .gg{
    height: 15rem;
  }
}

@media (max-width: 576px) {
  .carousel-inner, .gg{
    height: 13rem;
  }
} 
</style>
