<template>
  <div class="contenedor">
	<div class="border-top border-4" id="local">
		<img src="../assets/mapa.png" class="mapa">
		<div>
			<div class="wrapper">
				<div class="color">
					<vue-typer text='Servicio Comunitario UNEFA Táchira'></vue-typer>
				</div>
				<h2>Realizado por estudiantes de la UNEFA Táchira</h2>
				<h2 class="text-warning mb-4" id="typewriter"></h2>
				<p class="fs-5 text-body">Consejo Comunal los Naranjos en el sector la Turena, calle del Medio.</p>
				<section class="d-flex" id="numeros-local">
					<div>
						<p class="text-warning fs-5">+300</p>
						<p>Familias</p>
					</div>
					<div>
						<p class="text-warning fs-5">100%</p>
						<p>Aprobado</p>
					</div>
					<div>
						<p class="text-warning fs-5">17-28°C</p>
						<p>Temperatura</p>
					</div>
				</section>
			</div>
		</div>
	</div>
	<section class="container-fluid bg-sec">
	<div class="row w-100 mx-auto servicio-fila">
		<div class="col-lg-6 col-md-6 col-sm-12 my-1 icono-wrap d-flex justify-content-center">
			<img src="../assets/c1.jpg" class="img-fluid imgi">
		</div>
		<div class="col-lg-6 col-md-6 col-sm-12 my-1 icono-wrap d-flex justify-content-center">
			<img src="../assets/c2.jpg" class="img-fluid imgi">
		</div>
	</div>
	</section>
	
	
  </div>
</template>

<style>
	.imgi{
		width: 75%;
		height: 320px;
		border-radius: 2px;
	}

	.mapa{
		width: 100%;
		height: 400px;
	}

	#local{
		background: #f3f3f3;
		display: flex;
		justify-content: center;
	}

	.wrapper{
		width: 75%;
		margin-left: 72px;
		padding-top: 56px;
	}

	#numeros-local div{
		padding: 0 10px 0 0;
		height: 48px;
	}

	#numeros-local div:not(:last-child) {
		border-right: 2px solid #3f3f3f;
	}

	#numeros-local div:not(:first-child) {
		padding-left: 20px;
	}

	#numeros-local p {
		margin: 0;
	}

	.vue-typer .custom.char.typed {
  		color: orange;
	}

	.vue-typer .custom.char.selected {
	  	color: gray;
	}

	.bg-sec{
		padding-top: 2%;
		padding-bottom: 2%;
		background: #f3f3f3;
	}

	@media(max-width: 1200px) {
		#local {
			flex-wrap: wrap;
			padding-bottom: 56px;
		}
		.wrapper {
			width: 90%;
			margin: auto;
			padding-top: 50px;
		}
	}

	@media (max-width:768px) {
		.mapa{
			width: 100%;
			height: 200px;
		}
		.imgi{
			width: 75%;
			height: 240px;
			border-radius: 2px;
		}
	}
</style>

