/* =====================================================
   MOTORLAB 3D
===================================================== */


/* -----------------------------------------------------
   ESCENA
----------------------------------------------------- */

const contenedor =
    document.getElementById("escena3d");


const escena =
    new THREE.Scene();


/* -----------------------------------------------------
   CÁMARA
----------------------------------------------------- */

const camara =
    new THREE.PerspectiveCamera(
        45,
        contenedor.clientWidth /
        contenedor.clientHeight,
        0.1,
        2000
    );


camara.position.set(
    7,
    4.5,
    9
);


/* -----------------------------------------------------
   RENDER
----------------------------------------------------- */

const renderizador =
    new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });


renderizador.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
);


renderizador.setSize(
    contenedor.clientWidth,
    contenedor.clientHeight
);


renderizador.shadowMap.enabled = true;


contenedor.appendChild(
    renderizador.domElement
);


/* =====================================================
   LUCES
===================================================== */

const luzAmbiente =
    new THREE.HemisphereLight(
        0xb9eaff,
        0x080a0c,
        2.2
    );


escena.add(luzAmbiente);


const luzPrincipal =
    new THREE.DirectionalLight(
        0xffffff,
        4
    );


luzPrincipal.position.set(
    5,
    10,
    7
);


luzPrincipal.castShadow = true;


escena.add(luzPrincipal);


const luzAzul =
    new THREE.PointLight(
        0x00d9ff,
        8,
        15
    );


luzAzul.position.set(
    -5,
    3,
    4
);


escena.add(luzAzul);


/* =====================================================
   GRUPO DEL CARRO
===================================================== */

const carro =
    new THREE.Group();


escena.add(carro);


/* =====================================================
   MATERIALES
===================================================== */

const materialCarro =
    new THREE.MeshStandardMaterial({
        color: 0x202a2f,
        metalness: 0.85,
        roughness: 0.22
    });


const materialMetal =
    new THREE.MeshStandardMaterial({
        color: 0x8c999e,
        metalness: 0.9,
        roughness: 0.2
    });


const materialNegro =
    new THREE.MeshStandardMaterial({
        color: 0x050607,
        metalness: 0.4,
        roughness: 0.25
    });


const materialVidrio =
    new THREE.MeshStandardMaterial({
        color: 0x07151b,
        metalness: 0.2,
        roughness: 0.08,
        transparent: true,
        opacity: 0.78
    });


const materialMotor =
    new THREE.MeshStandardMaterial({
        color: 0x4c565b,
        metalness: 0.85,
        roughness: 0.3
    });


const materialCromo =
    new THREE.MeshStandardMaterial({
        color: 0xbcc6c9,
        metalness: 1,
        roughness: 0.12
    });


/* =====================================================
   FUNCIÓN CUBO
===================================================== */

function cubo(
    ancho,
    alto,
    profundo,
    material
) {

    const geometria =
        new THREE.BoxGeometry(
            ancho,
            alto,
            profundo
        );

    const objeto =
        new THREE.Mesh(
            geometria,
            material
        );

    objeto.castShadow = true;

    objeto.receiveShadow = true;

    return objeto;
}


/* =====================================================
   CARROCERÍA PRINCIPAL
===================================================== */

const carroceria =
    cubo(
        6.8,
        1.15,
        3.1,
        materialCarro
    );


carroceria.position.y = 1.35;


carro.add(
    carroceria
);


/* =====================================================
   PARTE INFERIOR
===================================================== */

const inferior =
    cubo(
        7.2,
        0.45,
        3.25,
        materialNegro
    );


inferior.position.y = 0.8;


carro.add(
    inferior
);


/* =====================================================
   CABINA
===================================================== */

const cabina =
    new THREE.Group();


cabina.position.y = 2.15;


carro.add(cabina);


/* techo */

const techo =
    cubo(
        3.8,
        0.25,
        2.65,
        materialCarro
    );


techo.position.set(
    0.25,
    1.05,
    0
);


cabina.add(techo);


/* =====================================================
   VIDRIO DELANTERO
===================================================== */

const parabrisas =
    cubo(
        2.0,
        0.85,
        0.12,
        materialVidrio
    );


parabrisas.position.set(
    -0.65,
    0.62,
    1.35
);


parabrisas.rotation.z =
    -0.08;


cabina.add(
    parabrisas
);


/* =====================================================
   VIDRIO TRASERO
===================================================== */

const vidrioTrasero =
    cubo(
        1.8,
        0.8,
        0.12,
        materialVidrio
    );


vidrioTrasero.position.set(
    1.55,
    0.62,
    1.35
);


vidrioTrasero.rotation.z =
    0.15;


cabina.add(
    vidrioTrasero
);


/* =====================================================
   VENTANAS LATERALES
===================================================== */

function crearVentanaLateral(z) {

    const ventana =
        cubo(
            3.3,
            0.72,
            0.08,
            materialVidrio
        );

    ventana.position.set(
        0.35,
        2.75,
        z
    );

    return ventana;
}


carro.add(
    crearVentanaLateral(1.37)
);


carro.add(
    crearVentanaLateral(-1.37)
);


/* =====================================================
   CAPÓ ABIERTO
===================================================== */

const capo =
    new THREE.Group();


capo.position.set(
    -2.65,
    2.0,
    0
);


capo.rotation.z =
    THREE.MathUtils.degToRad(-45);


carro.add(capo);


const tapaCapo =
    cubo(
        3.2,
        0.18,
        2.9,
        materialCarro
    );


capo.add(
    tapaCapo
);


/* =====================================================
   MOTOR
===================================================== */

const motor =
    new THREE.Group();


motor.position.set(
    -1.7,
    1.8,
    0
);


carro.add(motor);


/* bloque */

const bloqueMotor =
    cubo(
        2.3,
        1.35,
        1.8,
        materialMotor
    );


motor.add(
    bloqueMotor
);


/* tapa */

const tapaMotor =
    cubo(
        2.0,
        0.35,
        1.5,
        materialCromo
    );


tapaMotor.position.y =
    0.85;


motor.add(
    tapaMotor
);


/* =====================================================
   CILINDROS
===================================================== */

for (
    let i = 0;
    i < 4;
    i++
) {

    const cilindro =
        new THREE.Mesh(
            new THREE.CylinderGeometry(
                0.23,
                0.23,
                0.55,
                24
            ),
            materialNegro
        );


    cilindro.position.set(
        -0.7 + i * 0.48,
        1.15,
        0
    );


    cilindro.castShadow = true;


    motor.add(
        cilindro
    );

}


/* =====================================================
   BUJÍAS
===================================================== */

for (
    let i = 0;
    i < 4;
    i++
) {

    const bujia =
        cubo(
            0.09,
            0.4,
            0.09,
            materialCromo
        );


    bujia.position.set(
        -0.7 + i * 0.48,
        1.48,
        0
    );


    motor.add(
        bujia
    );

}


/* =====================================================
   RADIADOR
===================================================== */

const radiador =
    cubo(
        0.35,
        1.4,
        2.0,
        materialCromo
    );


radiador.position.set(
    -3.15,
    1.35,
    0
);


carro.add(
    radiador
);


/* =====================================================
   VENTILADOR
===================================================== */

const ventilador =
    new THREE.Group();


ventilador.position.set(
    -2.8,
    1.35,
    0
);


carro.add(
    ventilador
);


const centroVentilador =
    new THREE.Mesh(
        new THREE.CylinderGeometry(
            0.25,
            0.25,
            0.25,
            24
        ),
        materialMetal
    );


centroVentilador.rotation.x =
    Math.PI / 2;


ventilador.add(
    centroVentilador
);


for (
    let i = 0;
    i < 6;
    i++
) {

    const aspa =
        cubo(
            0.9,
            0.12,
            0.18,
            materialMetal
        );


    aspa.rotation.y =
        Math.PI / 2;


    aspa.rotation.z =
        i * Math.PI / 3;


    ventilador.add(
        aspa
    );

}


/* =====================================================
   RUEDAS
===================================================== */

function crearRueda(x, z) {

    const rueda =
        new THREE.Group();


    rueda.position.set(
        x,
        0.75,
        z
    );


    carro.add(
        rueda
    );


    const neumatico =
        new THREE.Mesh(
            new THREE.CylinderGeometry(
                0.95,
                0.95,
                0.5,
                32
            ),
            materialNegro
        );


    neumatico.rotation.x =
        Math.PI / 2;


    neumatico.castShadow = true;


    rueda.add(
        neumatico
    );


    const rin =
        new THREE.Mesh(
            new THREE.CylinderGeometry(
                0.55,
                0.55,
                0.53,
                24
            ),
            materialCromo
        );


    rin.rotation.x =
        Math.PI / 2;


    rueda.add(
        rin
    );


    const centro =
        new THREE.Mesh(
            new THREE.CylinderGeometry(
                0.18,
                0.18,
                0.56,
                20
            ),
            materialNegro
        );


    centro.rotation.x =
        Math.PI / 2;


    rueda.add(
        centro
    );


    return rueda;
}


crearRueda(
    -2.25,
    1.65
);


crearRueda(
    2.25,
    1.65
);


crearRueda(
    -2.25,
    -1.65
);


crearRueda(
    2.25,
    -1.65
);


/* =====================================================
   FAROS
===================================================== */

const materialFaro =
    new THREE.MeshStandardMaterial({
        color: 0xdffaff,
        emissive: 0x00d9ff,
        emissiveIntensity: 1.5
    });


function crearFaro(z) {

    const faro =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                0.3,
                0.5,
                0.9
            ),
            materialFaro
        );


    faro.position.set(
        -3.55,
        1.5,
        z
    );


    carro.add(
        faro
    );

}


crearFaro(1.0);
crearFaro(-1.0);


/* =====================================================
   PARRILLA
===================================================== */

const parrilla =
    cubo(
        0.18,
        0.75,
        1.5,
        materialNegro
    );


parrilla.position.set(
    -3.65,
    1.05,
    0
);


carro.add(
    parrilla
);


/* =====================================================
   PISO
===================================================== */

const piso =
    new THREE.Mesh(
        new THREE.CircleGeometry(
            20,
            64
        ),
        new THREE.MeshStandardMaterial({
            color: 0x11181c,
            metalness: .5,
            roughness: .55
        })
    );


piso.rotation.x =
    -Math.PI / 2;


piso.position.y =
    -0.2;


piso.receiveShadow = true;


escena.add(
    piso
);


/* =====================================================
   CENTRAR CARRO
===================================================== */

carro.rotation.y =
    THREE.MathUtils.degToRad(-25);


/* =====================================================
   ANIMACIÓN
===================================================== */

let motorActivo =
    true;


function animar() {

    requestAnimationFrame(
        animar
    );


    if (motorActivo) {

        ventilador.rotation.z +=
            0.08;

    }


    renderizador.render(
        escena,
        camara
    );

}


animar();


/* =====================================================
   CONTROLES
===================================================== */

document
    .getElementById("btnIzquierda")
    .addEventListener(
        "click",
        () => {

            carro.rotation.y +=
                0.25;

        }
    );


document
    .getElementById("btnDerecha")
    .addEventListener(
        "click",
        () => {

            carro.rotation.y -=
                0.25;

        }
    );


document
    .getElementById("btnMotor")
    .addEventListener(
        "click",
        () => {

            motorActivo =
                !motorActivo;

        }
    );


let capoAbierto =
    true;


document
    .getElementById("btnCapo")
    .addEventListener(
        "click",
        () => {

            capoAbierto =
                !capoAbierto;


            capo.rotation.z =
                THREE.MathUtils.degToRad(
                    capoAbierto
                        ? -45
                        : 0
                );

        }
    );


/* =====================================================
   INFORMACIÓN
===================================================== */

const informacion = {

    motor: {
        titulo: "⚙️ Motor",
        texto:
            "El motor transforma la energía de la combustión en movimiento que permite desplazar el automóvil."
    },

    radiador: {
        titulo: "🌡️ Radiador",
        texto:
            "El radiador ayuda a disipar el calor del refrigerante para mantener el motor dentro de una temperatura adecuada."
    },

    bateria: {
        titulo: "🔋 Batería",
        texto:
            "La batería proporciona energía eléctrica para arrancar el automóvil y alimentar distintos sistemas eléctricos."
    },

    alternador: {
        titulo: "⚡ Alternador",
        texto:
            "El alternador transforma energía mecánica del motor en energía eléctrica y ayuda a mantener cargada la batería."
    },

    aceite: {
        titulo: "🛢️ Aceite",
        texto:
            "El aceite reduce la fricción entre las piezas móviles y ayuda a disminuir el desgaste del motor."
    },

    bujia: {
        titulo: "🔥 Bujía",
        texto:
            "En un motor de gasolina, la bujía genera la chispa que inicia la combustión dentro del cilindro."
    }

};


document
    .querySelectorAll(".card")
    .forEach(
        tarjeta => {

            tarjeta.addEventListener(
                "click",
                () => {

                    const pieza =
                        tarjeta.dataset.pieza;

                    const dato =
                        informacion[pieza];

                    document
                        .getElementById(
                            "resultado"
                        )
                        .innerHTML = `

                            <strong>
                                ${dato.titulo}
                            </strong>

                            <p>
                                ${dato.texto}
                            </p>

                        `;

                }
            );

        }
    );


/* =====================================================
   MENÚ
===================================================== */

const menuBtn =
    document.getElementById(
        "menuBtn"
    );


const menu =
    document.getElementById(
        "menu"
    );


menuBtn.addEventListener(
    "click",
    () => {

        menu.classList.toggle(
            "abierto"
        );

    }
);


/* =====================================================
   RESPONSIVE
===================================================== */

window.addEventListener(
    "resize",
    () => {

        camara.aspect =
            contenedor.clientWidth /
            contenedor.clientHeight;

        camara.updateProjectionMatrix();


        renderizador.setSize(
            contenedor.clientWidth,
            contenedor.clientHeight
        );

    }
);