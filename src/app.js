document.addEventListener("DOMContentLoaded", function () {
	// burger menu
	const checkBox = document.querySelector("#ms_menu-btn");
	checkBox.checked = false;

	document.querySelector("#ms_toggle").addEventListener("click", () => {
		checkBox.checked = !checkBox.checked;
	});

	//carousel
	const carousel = document.querySelector("#carousel");
	const carouselPrev = carousel.querySelector(".carousel-control-prev");
	const carouselNext = carousel.querySelector(".carousel-control-next");
	const slides = Array.from(carousel.querySelectorAll(".carousel-item"));

	let currentIndex = slides.findIndex((slide) =>
		slide.classList.contains("active")
	);

	carouselPrev.addEventListener("click", () => {
		currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
		updateCarousel();
	});

	carouselNext.addEventListener("click", () => {
		currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
		updateCarousel();
	});

	function updateCarousel() {
		slides.forEach((slide, index) => {
			if (index === currentIndex) {
				slide.classList.add("active");
			} else {
				slide.classList.remove("active");
			}
		});
	}

	updateCarousel();

	// smooth scroll via anchor, a native function ES2018
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", (e) => {
			e.preventDefault();
			// go (smooth)
			const target = document.querySelector(anchor.getAttribute("href"));
			target.scrollIntoView({ behavior: "smooth" });
			// and close sidebar
			const checkBox = document.querySelector("#ms_menu-btn");
			checkBox.checked = false;
		});
	});

	window.addEventListener("scroll", () => {
		const toTopBtn = document.querySelector("#toTopBtn");
		if (window.scrollY > 20) {
			toTopBtn.style.display = "block";
			toTopBtn.style.opacity = "1";
		} else {
			toTopBtn.style.opacity = "0";
			setTimeout(() => {
				toTopBtn.style.display = "none";
			}, 500);
		}
	});
});
