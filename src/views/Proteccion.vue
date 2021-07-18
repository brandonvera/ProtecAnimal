<template>
  <div>
	  <section class="w-50 mx-auto text-center pt-4" id="intro">
	  	<h1 class="p-3 fs-2 border-top border-3">Protección de las <span class="text-warning">Mascotas</span></h1>
	  	<p class="p-3 fs-5"><span class="text-warning"></span>Tener una mascota como compañero de hogar es una gran responsabilidad. Cuidar mascotas en casa requiere tiempo y va mucho más allá de procurarle agua y comida. Cuida a tu mascota proporcionándole un hogar, alimentación sana y saludable, ejercicio y actividades lúdicas y visitas regulares a tu veterinario de confianza.</p>
	  </section>
	  <section class="container-fluid">
	  	<div class="w-50 mx-auto text-center pt-4">
	  		<h2 class="p-3 fs-2 border-top border-3">Nutrición para <span class="text-warning">Mascotas</span></h2>
	  	</div>
	  	<div class="row w-75 my-2 mx-auto servicio-fila">
	  		<div class="col-lg-4 col-md-4 col-sm-12 my-1 icono-wrap">
	  			<img src="../assets/pro1.jpg" class="img1" alt="">
	  			<div>
	  				<h3 class="fs-5 mt-4 px-4 pb-1">Hidratación</h3>
	  				<p class="px-4">llevar una hidratación considerable y comidas que vayan con su rutina.</p>
	  			</div>
	  		</div>
	  		<div class="col-lg-4 col-md-4 col-sm-12 my-1 icono-wrap">
	  			<img src="../assets/pro2.jpg" class="img1" alt="">
	  			<div>
	  				<h3 class="fs-5 mt-4 px-4 pb-1">Alimentación</h3>
	  				<p class="px-4">Los gatos y perros deben tener su propia alimentación, evitar la mezcla de ambos concentrados.</p>
	  			</div>
	  		</div>
	  		<div class="col-lg-4 col-md-4 col-sm-12 my-1 icono-wrap">
	  			<img src="../assets/pro3.jpg" class="img1" alt="">
	  			<div>
	  				<h3 class="fs-5 mt-4 px-4 pb-1">Evitar</h3>
	  				<p class="px-4">Uvas, Café, Té, Auyama, Huevo Crudo, Golosinas, Chocolate y Huesos.</p>
	  			</div>
	  		</div>
	  	</div>
	  </section>
	  <section class="container-fluid">
	  	<div class="w-50 mx-auto text-center pt-4">
	  		<h2 class="p-3 fs-2 border-top border-3">Consejos para el cuidado de <span class="text-warning">Mascotas</span></h2>
	  	</div>
	  	<div class="row w-75 mt-2 my-2 mx-auto servicio-fila">
	  		<div class="col-md-12 clearfix icono-wrap">
	  			<img src="../assets/pro4.jpg" class="img2 col-md-6 float-md-end mb-3 ms-md-3" alt="">
	  		
	  			<h3 class="fs-5 px-4 pb-1">Recompensa</h3>
	  			<p class="px-4">Si tu perro hace cosas bien y tiene un buen comportamiento, prémialo. No solo puedes hacerlo con chucherías para perros. Puedes premiar su buena conducta con caricias, alentándolo con frases motivadoras y recordándole siempre que puedas cuánto lo quieres.</p>
	  		</div>	
	  	</div>
	  	<div class="row w-75 my-2 mx-auto servicio-fila">
	  		<div class="col-md-12 clearfix icono-wrap">
	  			<img src="../assets/pro5.jpg" class="img2 col-md-6 float-md-start mb-3 mx-3 ms-md-3" alt="">
  				<h3 class="fs-5 px-4 pb-1">Veterinario</h3>
  				<p class="px-4">Las visitas al veterinario solo deberían ser de rutina. Nadie quiere ir corriendo al veterinario por una emergencia. Aunque lo accidentes ocurren, evita enfermedades o infestaciones de parásitos en tu perro con unos buenos hábitos de higiene, una alimentación adecuada y visitas periódicas al veterinario.</p>
	  		</div>
	  	</div>
	  	<div class="row w-75 mt-2 my-2 mx-auto servicio-fila">
	  		<div class="col-md-12 clearfix icono-wrap">
	  			<img src="../assets/pro6.jpg" class="img2 col-md-6 float-md-end mb-3 ms-md-3" alt="">
	  		
	  			<h3 class="fs-5 px-4 pb-1">Higiene</h3>
	  			<p class="px-4">La higiene es otro aspecto que no debes descuidar. Cepilla a tu perro diariamente, o varias veces al día si tiene mucho pelo. Con este gesto, además de eliminar pelo y piel muerta, estrechas lazos con tu perro y afianzas vuestro vínculo. Aprovecha y cuida a tu perro al máximo: háblale con cariño, acarícialo, que sienta todo tu amor y respeto.</p>
	  		</div>	
	  	</div>
	  </section>
  </div>
</template>

<script>
	
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Lobster&display=swap');

	.img1, .img2{
		height: 180px;
		width: 240px;
		border-radius: 2px;
	}
	.or{
		order: last;
	}

	@media (max-width:992px) {
		.img1{
			height: 96px;
			width: 180px;
		}
	}	

	@media (max-width:768px) {
		#intro {
			width: 90% !important;
		}
		.img1{
			height: 180px;
			width: 240px;
		}
		.servicio-fila{
			width: 100% !important;
			text-align: center;
		}
	}

	@media (max-width: 576px) {
		.icono-wrap{
			flex-wrap: wrap;
			justify-content: center !important;
		}	
	}
</style>