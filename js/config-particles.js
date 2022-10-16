// https://github.com/VincentGarreau/particles.js
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "1f80ff" // Color de los nodos de las partículas
        },
        "shape": {
            "type": 'circle',
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "fondo.jpg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5, // Opacidad de los nodos de las particular
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 5, // tamaño de los nodos
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#000000", // Color de las lineas
            "opacity": 0.4, // Opacidad de las lineas
            "width": 1 // Ancho de las lineas
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false, // Generar partículas al hacer click
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4 // Cantidad de partículas generadas al hacer click izquierdo
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": false
});

// var count_particles, stats, update;
// stats = new Stats;
// stats.setMode(0);
// stats.domElement.style.position = 'absolute';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector('.js-count-particles');
// update = function () {
//     stats.begin();
//     stats.end();
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//         count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//     }
//     requestAnimationFrame(update);
// };
// requestAnimationFrame(update);