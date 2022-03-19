// Add your custom JS code here

window.onload = function() {
    const selectNavbar = document.querySelector("#navbarTS");
    const selectNavbarMobile = document.querySelector("#navbarMobile");
selectNavbar.innerHTML = `


<nav class="main-nav">
				<ul class="main-nav__list">
					<li class=""><a href="index.html">Inicio</a></li>
					<li class="active">
						<a href="/#comunidad">comunidad</a>
					</li>
					<li class="">
						<a href="eventos.html">Eventos <span class="badge badge-success">Inscribete!</span></a>
					</li>
					<li class="">
						<a href="#">Sponsors <span class="badge badge-danger">Pronto</span></a>
					</li>
					<li class="">
						<a href="mailto:contacto@topstreamers.org">Contacto</a>
					</li>
				</ul>
			</nav>


`
selectNavbarMobile.innerHTML = `

<div class="menu-panel">
			<ul class="menu-panel__mobile-bar list-unstyled d-md-none">
				
				<li class="mobile-bar-item">
					<a class="mobile-bar-item__header collapsed" data-toggle="collapse" href="#mobile_collapse_2" role="button" aria-expanded="false" aria-controls="mobile_collapse_2">
						Nuestras Redes
						<span class="main-nav__toggle">&nbsp;</span>
					</a>
					<div id="mobile_collapse_2" class="collapse mobile-bar-item__body">
						<ul class="social-menu social-menu--mobile-bar">
							<li><a href="https://www.instagram.com/topstreamerslatam/"><span>Instagram</span></a></li>
						</ul>
					</div>
				</li>

				<li class="mobile-bar-item mobile-bar-item--info">
					<a class="mobile-bar-item__header collapsed" data-toggle="collapse" href="#mobile_collapse_3" role="button" aria-expanded="false" aria-controls="mobile_collapse_3">
						Contacto
						<span class="main-nav__toggle">&nbsp;</span>
					</a>
					<div id="mobile_collapse_3" class="collapse mobile-bar-item__body">
						<div class="mobile-bar-item__inner">
							<ul class="list-unstyled">
								<li class="info-box">
									<div class="info-box__label">Alejandro Almonacid - Reclutador</div>
									<div class="info-box__content"><a href="mailto:#">contacto<span class="color-primary">@</span>topstreamerslatam.org</a></div>
								</li>
							</ul>
						</div>
					</div>
				</li>
                <li class="mobile-bar-item">
					<a href="/" >
						Inicio
					</a>
				</li>
			</ul>
			<div class="menu-panel__content d-none d-md-flex">
				<div class="menu-panel__navigation">
					<div id="dl-menu" class="dl-menuwrapper">
						<!-- <button class="dl-trigger">Open Menu</button> -->
						<ul class="dl-menu dl-menuopen">
							<li class="">
								<a href="index.html">Inicio</a>
							</li>
							<li class="active">
								<a href="/#comunidad">Plataformas</a>
							</li>
							<li class="">
								<a href="mailto:contacto@topstreamers.org">Contacto</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

`
  };

