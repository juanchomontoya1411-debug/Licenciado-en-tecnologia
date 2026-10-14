/* =====================================================
   MOTORLAB 3D - MODELO DE AUTO REALISTA
===================================================== */

const contenedor = document.getElementById("escena3d");

const escena = new THREE.Scene();

escena.fog = new THREE.FogExp2(0x071014, 0.025);


/* =====================================================
   CÁMARA
===================================================== */

const camara = new THREE.PerspectiveCamera(
    42,
    contenedor.clientWidth / contenedor.clientHeight,
    0.1,
    2000
);

camara.position.set(8.5, 4.8, 11);


/* =====================================================
   RENDER
===================================================== */

const renderizador = new THREE.WebGLRenderer({
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
renderizador.shadowMap.type = THREE.PCFSoftShadowMap;

renderizador.outputColorSpace =
    THREE.SRGBColorSpace;

renderizador.toneMapping =
    THREE.ACESFilmicToneMapping;

renderizador.toneMappingExposure = 1.15;

contenedor.appendChild(
    renderizador.domElement
);


/* =====================================================
   LUCES
===================================================== */

const luzAmbiente =
    new THREE.HemisphereLight(
        0xb9eaff,
        0x050709,
        2.8
    );

escena.add(luzAmbiente);


const luzPrincipal =
    new THREE.DirectionalLight(
        0xffffff,
        4.5
    );

luzPrincipal.position.set(
    7,
    11,
    8
);

luzPrincipal.castShadow = true;

luzPrincipal.shadow.mapSize.width = 2048;
luzPrincipal.shadow.mapSize.height = 2048;

luzPrincipal.shadow.camera.left = -12;
luzPrincipal.shadow.camera.right = 12;
luzPrincipal.shadow.camera.top = 12;
luzPrincipal.shadow.camera.bottom = -12;

escena.add(luzPrincipal);

// Iluminación adicional para ver mejor el carro
const luzFrontalCarro = new THREE.SpotLight(0xffffff, 5);
luzFrontalCarro.position.set(0, 5, 8);
luzFrontalCarro.target.position.set(0, 1, 0);
luzFrontalCarro.angle = Math.PI / 4;
luzFrontalCarro.penumbra = 0.6;
luzFrontalCarro.decay = 1.5;
luzFrontalCarro.distance = 30;
escena.add(luzFrontalCarro);
escena.add(luzFrontalCarro.target);

const luzSuperiorCarro = new THREE.SpotLight(0xffffff, 4);
luzSuperiorCarro.position.set(0, 10, 0);
luzSuperiorCarro.target.position.set(0, 0, 0);
luzSuperiorCarro.angle = Math.PI / 3;
luzSuperiorCarro.penumbra = 0.7;
luzSuperiorCarro.decay = 1.5;
luzSuperiorCarro.distance = 30;
escena.add(luzSuperiorCarro);
escena.add(luzSuperiorCarro.target);
/* luz azul ambiental */

const luzAzul =
    new THREE.PointLight(
        0x00d9ff,
        10,
        18
    );

luzAzul.position.set(
    -5,
    4,
    5
);

escena.add(luzAzul);


/* luz frontal */

const luzFrontal =
    new THREE.PointLight(
        0xffffff,
        5,
        15
    );

luzFrontal.position.set(
    -7,
    4,
    2
);

escena.add(luzFrontal);


/* luz trasera */

const luzTrasera =
    new THREE.PointLight(
        0x008cff,
        5,
        14
    );

luzTrasera.position.set(
    5,
    3,
    -5
);

escena.add(luzTrasera);


/* =====================================================
   GRUPO DEL CARRO
===================================================== */

const carro = new THREE.Group();

escena.add(carro);


/* =====================================================
   MATERIALES
===================================================== */

const materialCarro =
    new THREE.MeshPhysicalMaterial({
        color: 0x182329,
        metalness: 0.82,
        roughness: 0.18,
        clearcoat: 1,
        clearcoatRoughness: 0.08
    });


const materialCarroClaro =
    new THREE.MeshPhysicalMaterial({
        color: 0x34454d,
        metalness: 0.78,
        roughness: 0.2,
        clearcoat: 1,
        clearcoatRoughness: 0.08
    });


const materialNegro =
    new THREE.MeshStandardMaterial({
        color: 0x030405,
        metalness: 0.45,
        roughness: 0.28
    });


const materialGoma =
    new THREE.MeshStandardMaterial({
        color: 0x080909,
        metalness: 0.05,
        roughness: 0.88
    });


const materialVidrio =
    new THREE.MeshPhysicalMaterial({
        color: 0x06171e,
        metalness: 0.15,
        roughness: 0.04,
        transmission: 0.18,
        transparent: true,
        opacity: 0.72,
        clearcoat: 1
    });


const materialCromo =
    new THREE.MeshStandardMaterial({
        color: 0xcbd5d8,
        metalness: 1,
        roughness: 0.12
    });


const materialMetal =
    new THREE.MeshStandardMaterial({
        color: 0x657278,
        metalness: 0.92,
        roughness: 0.22
    });


const materialMotor =
    new THREE.MeshStandardMaterial({
        color: 0x303a3e,
        metalness: 0.9,
        roughness: 0.3
    });


const materialMotorOscuro =
    new THREE.MeshStandardMaterial({
        color: 0x121719,
        metalness: 0.8,
        roughness: 0.3
    });


const materialRojo =
    new THREE.MeshStandardMaterial({
        color: 0x8e0808,
        metalness: 0.35,
        roughness: 0.3
    });


const materialFaro =
    new THREE.MeshPhysicalMaterial({
        color: 0xeaffff,
        emissive: 0x00d9ff,
        emissiveIntensity: 4,
        metalness: 0.1,
        roughness: 0.05,
        clearcoat: 1
    });


const materialFreno =
    new THREE.MeshStandardMaterial({
        color: 0x9a1111,
        metalness: 0.7,
        roughness: 0.25
    });


const materialAmarillo =
    new THREE.MeshStandardMaterial({
        color: 0xffb300,
        emissive: 0xff7800,
        emissiveIntensity: 1.5
    });


const materialBateria =
    new THREE.MeshStandardMaterial({
        color: 0x101417,
        metalness: 0.35,
        roughness: 0.45
    });


/* =====================================================
   FUNCIONES DE GEOMETRÍA
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


/* caja con bordes redondeados */

function cajaRedondeada(
    ancho,
    alto,
    profundo,
    material,
    radio = 0.12
) {

    const forma =
        new THREE.Shape();

    const x = -ancho / 2;
    const y = -alto / 2;

    forma.moveTo(
        x + radio,
        y
    );

    forma.lineTo(
        x + ancho - radio,
        y
    );

    forma.quadraticCurveTo(
        x + ancho,
        y,
        x + ancho,
        y + radio
    );

    forma.lineTo(
        x + ancho,
        y + alto - radio
    );

    forma.quadraticCurveTo(
        x + ancho,
        y + alto,
        x + ancho - radio,
        y + alto
    );

    forma.lineTo(
        x + radio,
        y + alto
    );

    forma.quadraticCurveTo(
        x,
        y + alto,
        x,
        y + alto - radio
    );

    forma.lineTo(
        x,
        y + radio
    );

    forma.quadraticCurveTo(
        x,
        y,
        x + radio,
        y
    );

    const geometria =
        new THREE.ExtrudeGeometry(
            forma,
            {
                depth: profundo,
                bevelEnabled: true,
                bevelSegments: 3,
                bevelSize: radio * 0.45,
                bevelThickness: radio * 0.35,
                curveSegments: 8
            }
        );

    geometria.translate(
        0,
        0,
        -profundo / 2
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
    cajaRedondeada(
        6.9,
        1.15,
        3.15,
        materialCarro,
        0.22
    );

carroceria.position.y = 1.45;

carro.add(carroceria);


/* =====================================================
   FALDÓN INFERIOR
===================================================== */

const faldon =
    cajaRedondeada(
        7.25,
        0.42,
        3.3,
        materialNegro,
        0.12
    );

faldon.position.y = 0.82;

carro.add(faldon);


/* =====================================================
   PARACHOQUES DELANTERO
===================================================== */

const parachoquesDelantero =
    cajaRedondeada(
        0.55,
        0.58,
        3.15,
        materialCarroClaro,
        0.16
    );

parachoquesDelantero.position.set(
    -3.55,
    1.0,
    0
);

carro.add(
    parachoquesDelantero
);


/* =====================================================
   PARACHOQUES TRASERO
===================================================== */

const parachoquesTrasero =
    cajaRedondeada(
        0.5,
        0.52,
        3.12,
        materialCarro,
        0.15
    );

parachoquesTrasero.position.set(
    3.5,
    1.0,
    0
);

carro.add(
    parachoquesTrasero
);


/* =====================================================
   CABINA
===================================================== */

const cabina =
    new THREE.Group();

cabina.position.y = 2.1;

carro.add(cabina);


/* techo */

const techo =
    cajaRedondeada(
        3.8,
        0.25,
        2.7,
        materialCarro,
        0.1
    );

techo.position.set(
    0.35,
    1.08,
    0
);

cabina.add(techo);


/* =====================================================
   PILARES
===================================================== */

function crearPilar(
    x,
    z,
    rotacion = 0
) {

    const pilar =
        cubo(
            0.16,
            1.2,
            0.18,
            materialNegro
        );

    pilar.position.set(
        x,
        0.55,
        z
    );

    pilar.rotation.z =
        rotacion;

    cabina.add(pilar);
}


crearPilar(-1.45, 1.34, -0.08);
crearPilar(1.45, 1.34, 0.08);
crearPilar(-1.45, -1.34, -0.08);
crearPilar(1.45, -1.34, 0.08);


/* =====================================================
   PARABRISAS
===================================================== */

const parabrisas =
    cajaRedondeada(
        1.9,
        0.82,
        0.08,
        materialVidrio,
        0.08
    );

parabrisas.position.set(
    -0.72,
    0.63,
    1.36
);

parabrisas.rotation.z =
    -0.10;

cabina.add(
    parabrisas
);


/* =====================================================
   VIDRIO TRASERO
===================================================== */

const vidrioTrasero =
    cajaRedondeada(
        1.85,
        0.78,
        0.08,
        materialVidrio,
        0.08
    );

vidrioTrasero.position.set(
    1.55,
    0.63,
    1.36
);

vidrioTrasero.rotation.z =
    0.12;

cabina.add(
    vidrioTrasero
);


/* =====================================================
   VENTANAS LATERALES
===================================================== */

function crearVentanaLateral(z) {

    const ventana =
        cajaRedondeada(
            3.05,
            0.75,
            0.08,
            materialVidrio,
            0.08
        );

    ventana.position.set(
        0.25,
        2.73,
        z
    );

    carro.add(ventana);

    return ventana;
}


crearVentanaLateral(1.39);
crearVentanaLateral(-1.39);


/* =====================================================
   CAPÓ ABIERTO
===================================================== */

const capo =
    new THREE.Group();

capo.position.set(
    -2.65,
    2.05,
    0
);

capo.rotation.z =
    THREE.MathUtils.degToRad(-45);

carro.add(capo);


const tapaCapo =
    cajaRedondeada(
        3.25,
        0.18,
        2.95,
        materialCarro,
        0.08
    );

capo.add(tapaCapo);


/* =====================================================
   PARTE INTERNA DEL CAPÓ
===================================================== */

const aislanteCapo =
    cajaRedondeada(
        2.55,
        0.05,
        2.25,
        materialNegro,
        0.04
    );

aislanteCapo.position.y =
    -0.13;

capo.add(
    aislanteCapo
);


/* =====================================================
   MOTOR
===================================================== */

const motor =
    new THREE.Group();

motor.position.set(
    -1.65,
    1.75,
    0
);

carro.add(motor);


/* bloque */

const bloqueMotor =
    cajaRedondeada(
        2.35,
        1.35,
        1.85,
        materialMotor,
        0.12
    );

motor.add(
    bloqueMotor
);


/* parte superior */

const tapaMotor =
    cajaRedondeada(
        2.05,
        0.32,
        1.52,
        materialCromo,
        0.08
    );

tapaMotor.position.y =
    0.82;

motor.add(
    tapaMotor
);


/* logo del motor */

const logoMotor =
    new THREE.Mesh(
        new THREE.CircleGeometry(
            0.22,
            32
        ),
        new THREE.MeshStandardMaterial({
            color: 0x00d9ff,
            emissive: 0x00aacc,
            emissiveIntensity: 2
        })
    );

logoMotor.rotation.x =
    -Math.PI / 2;

logoMotor.position.y =
    1.0;

motor.add(
    logoMotor
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
                0.25,
                0.5,
                32
            ),
            materialMotorOscuro
        );

    cilindro.position.set(
        -0.72 + i * 0.48,
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
        new THREE.Mesh(
            new THREE.CylinderGeometry(
                0.055,
                0.055,
                0.42,
                16
            ),
            materialCromo
        );

    bujia.position.set(
        -0.72 + i * 0.48,
        1.45,
        0
    );

    motor.add(
        bujia
    );
}


/* =====================================================
   CABLES DE BUJÍAS
===================================================== */

for (
    let i = 0;
    i < 4;
    i++
) {

    const cable =
        new THREE.Mesh(
            new THREE.CylinderGeometry(
                0.035,
                0.035,
                0.5,
                12
            ),
            new THREE.MeshStandardMaterial({
                color: 0x050505,
                roughness: 0.6
            })
        );

    cable.position.set(
        -0.72 + i * 0.48,
        1.72,
        0
    );

    motor.add(
        cable
    );
}


/* =====================================================
   RADIADOR
===================================================== */

const radiador =
    cajaRedondeada(
        0.38,
        1.48,
        2.15,
        materialMetal,
        0.05
    );

radiador.position.set(
    -3.1,
    1.4,
    0
);

carro.add(
    radiador
);


/* =====================================================
   REJILLA DEL RADIADOR
===================================================== */

for (
    let i = 0;
    i < 12;
    i++
) {

    const rejilla =
        cubo(
            0.04,
            1.15,
            0.08,
            materialNegro
        );

    rejilla.position.set(
        -3.31,
        1.4,
        -0.95 + i * 0.17
    );

    carro.add(
        rejilla
    );
}


/* =====================================================
   VENTILADOR
===================================================== */

const ventilador =
    new THREE.Group();

ventilador.position.set(
    -2.78,
    1.4,
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
            0.28,
            32
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
    i < 7;
    i++
) {

    const aspa =
        cajaRedondeada(
            0.9,
            0.12,
            0.18,
            materialMetal,
            0.04
        );

    aspa.rotation.y =
        Math.PI / 2;

    aspa.rotation.z =
        i * Math.PI / 3.5;

    ventilador.add(
        aspa
    );
}


/* =====================================================
   BATERÍA
===================================================== */

const bateria =
    new THREE.Group();

bateria.position.set(
    -0.1,
    1.45,
    -0.82
);

carro.add(
    bateria
);


const cuerpoBateria =
    cajaRedondeada(
        0.85,
        0.62,
        0.7,
        materialBateria,
        0.08
    );

bateria.add(
    cuerpoBateria
);


/* terminales */

for (
    let i = 0;
    i < 2;
    i++
) {

    const terminal =
        new THREE.Mesh(
            new THREE.CylinderGeometry(
                0.08,
                0.08,
                0.12,
                16
            ),
            materialCromo
        );

    terminal.position.set(
        -0.22 + i * 0.44,
        0.38,
        0
    );

    bateria.add(
        terminal
    );
}


/* =====================================================
   ALTERNADOR
===================================================== */

const alternador =
    new THREE.Group();

alternador.position.set(
    -0.25,
    1.25,
    0.78
);

carro.add(
    alternador
);


const cuerpoAlternador =
    new THREE.Mesh(
        new THREE.CylinderGeometry(
            0.38,
            0.38,
            0.6,
            32
        ),
        materialCromo
    );

cuerpoAlternador.rotation.z =
    Math.PI / 2;

alternador.add(
    cuerpoAlternador
);


/* polea */

const polea =
    new THREE.Mesh(
        new THREE.CylinderGeometry(
            0.19,
            0.19,
            0.12,
            24
        ),
        materialNegro
    );

polea.rotation.z =
    Math.PI / 2;

polea.position.x =
    0.34;

alternador.add(
    polea
);


/* =====================================================
   CORREA
===================================================== */

const correa =
    new THREE.Mesh(
        new THREE.TorusGeometry(
            0.68,
            0.07,
            12,
            48
        ),
        materialNegro
    );

correa.rotation.y =
    Math.PI / 2;

correa.position.set(
    -0.75,
    1.4,
    0.8
);

carro.add(
    correa
);


/* =====================================================
   RUEDAS REALISTAS
===================================================== */

function crearRueda(
    x,
    z
) {

    const rueda =
        new THREE.Group();

    rueda.position.set(
        x,
        0.78,
        z
    );

    carro.add(
        rueda
    );


    /* neumático */

    const neumatico =
        new THREE.Mesh(
            new THREE.CylinderGeometry(
                0.92,
                0.92,
                0.58,
                48
            ),
            materialGoma
        );

    neumatico.rotation.x =
        Math.PI / 2;

    neumatico.castShadow = true;

    rueda.add(
        neumatico
    );


    /* lateral del neumático */

    const lateral =
        new THREE.Mesh(
            new THREE.CylinderGeometry(
                0.78,
                0.78,
                0.6,
                48
            ),
            materialNegro
        );

    lateral.rotation.x =
        Math.PI / 2;

    rueda.add(
        lateral
    );


    /* disco de freno */

    const disco =
        new THREE.Mesh(
            new THREE.CylinderGeometry(
                0.48,
                0.48,
                0.08,
                40
            ),
            materialMetal
        );

    disco.rotation.x =
        Math.PI / 2;

    disco.position.z =
        0.31;

    rueda.add(
        disco
    );


    /* pinza */

    const pinza =
        cajaRedondeada(
            0.18,
            0.4,
            0.12,
            materialFreno,
            0.03
        );

    pinza.position.set(
        0.32,
        0.22,
        0.37
    );

    rueda.add(
        pinza
    );


    /* rin */

    const rin =
        new THREE.Mesh(
            new THREE.CylinderGeometry(
                0.6,
                0.6,
                0.18,
                32
            ),
            materialCromo
        );

    rin.rotation.x =
        Math.PI / 2;

    rin.position.z =
        0.38;

    rueda.add(
        rin
    );


    /* centro negro */

    const centro =
        new THREE.Mesh(
            new THREE.CylinderGeometry(
                0.18,
                0.18,
                0.22,
                24
            ),
            materialNegro
        );

    centro.rotation.x =
        Math.PI / 2;

    centro.position.z =
        0.48;

    rueda.add(
        centro
    );


    /* radios */

    for (
        let i = 0;
        i < 8;
        i++
    ) {

        const radio =
            cajaRedondeada(
                0.45,
                0.055,
                0.06,
                materialNegro,
                0.02
            );

        radio.position.z =
            0.49;

        radio.rotation.z =
            i * Math.PI / 4;

        rueda.add(
            radio
        );
    }


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
   GUARDABARROS
===================================================== */

function crearGuardabarros(
    x,
    z
) {

    const guardabarros =
        new THREE.Mesh(
            new THREE.TorusGeometry(
                1.0,
                0.08,
                12,
                32,
                Math.PI
            ),
            materialCarro
        );

    guardabarros.rotation.x =
        Math.PI / 2;

    guardabarros.position.set(
        x,
        0.83,
        z
    );

    carro.add(
        guardabarros
    );
}


crearGuardabarros(-2.25, 1.55);
crearGuardabarros(2.25, 1.55);

crearGuardabarros(-2.25, -1.55);
crearGuardabarros(2.25, -1.55);


/* =====================================================
   FAROS
===================================================== */

function crearFaro(z) {

    const faro =
        cajaRedondeada(
            0.28,
            0.48,
            0.88,
            materialFaro,
            0.1
        );

    faro.position.set(
        -3.65,
        1.5,
        z
    );

    carro.add(
        faro
    );


    /* luz real */

    const luz =
        new THREE.PointLight(
            0x00eaff,
            3,
            5
        );

    luz.position.set(
        -3.9,
        1.5,
        z
    );

    carro.add(
        luz
    );
}


crearFaro(1.0);
crearFaro(-1.0);


/* =====================================================
   LUCES TRASERAS
===================================================== */

function crearLuzTrasera(z) {

    const luzTrasera =
        cajaRedondeada(
            0.22,
            0.42,
            0.72,
            new THREE.MeshStandardMaterial({
                color: 0x500000,
                emissive: 0xff0000,
                emissiveIntensity: 2
            }),
            0.08
        );

    luzTrasera.position.set(
        3.75,
        1.45,
        z
    );

    carro.add(
        luzTrasera
    );
}


crearLuzTrasera(1.0);
crearLuzTrasera(-1.0);


/* =====================================================
   PARRILLA DELANTERA
===================================================== */

const parrilla =
    cajaRedondeada(
        0.15,
        0.68,
        1.62,
        materialNegro,
        0.04
    );

parrilla.position.set(
    -3.78,
    1.05,
    0
);

carro.add(
    parrilla
);


/* barras de parrilla */

for (
    let i = 0;
    i < 7;
    i++
) {

    const barra =
        cubo(
            0.08,
            0.045,
            1.35,
            materialCromo
        );

    barra.position.set(
        -3.87,
        1.05 + i * 0.08 - 0.24,
        0
    );

    carro.add(
        barra
    );
}


/* =====================================================
   FAROS ANTINIEBLA
===================================================== */

function crearAntiniebla(z) {

    const foco =
        new THREE.Mesh(
            new THREE.SphereGeometry(
                0.14,
                20,
                20
            ),
            materialAmarillo
        );

    foco.position.set(
        -3.84,
        0.83,
        z
    );

    carro.add(
        foco
    );
}


crearAntiniebla(1.2);
crearAntiniebla(-1.2);


/* =====================================================
   ESPEJOS
===================================================== */

function crearEspejo(z) {

    const soporte =
        cubo(
            0.3,
            0.12,
            0.1,
            materialNegro
        );

    soporte.position.set(
        -0.2,
        2.75,
        z * 1.08
    );

    carro.add(
        soporte
    );


    const espejo =
        cajaRedondeada(
            0.38,
            0.22,
            0.16,
            materialCarroClaro,
            0.06
        );

    espejo.position.set(
        -0.15,
        2.85,
        z * 1.1
    );

    carro.add(
        espejo
    );
}


crearEspejo(1);
crearEspejo(-1);


/* =====================================================
   MANIJAS
===================================================== */

function crearManija(
    x,
    z
) {

    const manija =
        cajaRedondeada(
            0.42,
            0.06,
            0.05,
            materialCromo,
            0.02
        );

    manija.position.set(
        x,
        1.75,
        z
    );

    carro.add(
        manija
    );
}


crearManija(0.45, 1.59);
crearManija(0.45, -1.59);

crearManija(1.35, 1.59);
crearManija(1.35, -1.59);


/* =====================================================
   LÍNEAS DE PUERTAS
===================================================== */

function crearLineaPuerta(
    x,
    z
) {

    const linea =
        cubo(
            0.018,
            0.92,
            0.018,
            materialNegro
        );

    linea.position.set(
        x,
        1.38,
        z
    );

    carro.add(
        linea
    );
}


crearLineaPuerta(
    0.9,
    1.585
);

crearLineaPuerta(
    0.9,
    -1.585
);

crearLineaPuerta(
    1.8,
    1.585
);

crearLineaPuerta(
    1.8,
    -1.585
);


/* =====================================================
   SALIDAS DE ESCAPE
===================================================== */

for (
    let z of [-0.55, 0.55]
) {

    const escape =
        new THREE.Mesh(
            new THREE.CylinderGeometry(
                0.13,
                0.13,
                0.38,
                24
            ),
            materialCromo
        );

    escape.rotation.z =
        Math.PI / 2;

    escape.position.set(
        3.75,
        0.68,
        z
    );

    carro.add(
        escape
    );
}


/* =====================================================
   ALERÓN TRASERO
===================================================== */

const aleron =
    new THREE.Group();

aleron.position.set(
    2.8,
    2.0,
    0
);

carro.add(
    aleron
);


const ala =
    cajaRedondeada(
        0.85,
        0.12,
        2.5,
        materialCarro,
        0.05
    );

aleron.add(
    ala
);


/* soportes */

for (
    let z of [-0.85, 0.85]
) {

    const soporte =
        cubo(
            0.12,
            0.55,
            0.12,
            materialMetal
        );

    soporte.position.set(
        0,
        -0.3,
        z
    );

    aleron.add(
        soporte
    );
}


/* =====================================================
   DETALLES DEL CAPÓ
===================================================== */

for (
    let z of [-0.7, 0.7]
) {

    const entrada =
        cajaRedondeada(
            0.75,
            0.08,
            0.28,
            materialNegro,
            0.03
        );

    entrada.position.set(
        -0.8,
        0.12,
        z
    );

    capo.add(
        entrada
    );
}


/* =====================================================
   PISO
===================================================== */

const piso =
    new THREE.Mesh(
        new THREE.CircleGeometry(
            20,
            96
        ),
        new THREE.MeshStandardMaterial({
            color: 0x080d10,
            metalness: 0.35,
            roughness: 0.55
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
   PLATAFORMA BAJO EL AUTO
===================================================== */

const plataforma =
    new THREE.Mesh(
        new THREE.CylinderGeometry(
            5.5,
            5.5,
            0.18,
            64
        ),
        new THREE.MeshStandardMaterial({
            color: 0x111a1e,
            metalness: 0.8,
            roughness: 0.28
        })
    );

plataforma.position.y =
    -0.08;

plataforma.receiveShadow = true

/* =====================================================
   SHOWROOM - AROS DE LUZ
===================================================== */


/* material luminoso */

const materialLED =
    new THREE.MeshBasicMaterial({
        color: 0x00d9ff
    });


/* =====================================================
   ARO EXTERIOR
===================================================== */

const aroExterior =
    new THREE.Mesh(
        new THREE.TorusGeometry(
            5.25,
            0.055,
            16,
            128
        ),
        materialLED
    );

aroExterior.rotation.x =
    Math.PI / 2;

aroExterior.position.y =
    0.08;

escena.add(
    aroExterior
);


/* =====================================================
   ARO INTERIOR
===================================================== */

const aroInterior =
    new THREE.Mesh(
        new THREE.TorusGeometry(
            4.55,
            0.035,
            16,
            128
        ),
        materialLED
    );

aroInterior.rotation.x =
    Math.PI / 2;

aroInterior.position.y =
    0.10;

escena.add(
    aroInterior
);


/* =====================================================
   ARO CENTRAL
===================================================== */

const aroCentral =
    new THREE.Mesh(
        new THREE.TorusGeometry(
            3.75,
            0.025,
            12,
            128
        ),
        materialLED
    );

aroCentral.rotation.x =
    Math.PI / 2;

aroCentral.position.y =
    0.12;

escena.add(
    aroCentral
);
/* =====================================================
   LUCES ALREDEDOR DEL AUTO
===================================================== */

const lucesShowroom = [];


for (
    let i = 0;
    i < 12;
    i++
) {

    const angulo =
        (i / 12) *
        Math.PI *
        2;


    const radio = 5.1;


    const luz =
        new THREE.PointLight(
            0x00d9ff,
            2.8,
            5
        );


    luz.position.set(
        Math.cos(angulo) * radio,
        0.35,
        Math.sin(angulo) * radio
    );


    escena.add(
        luz
    );


    lucesShowroom.push(
        luz
    );
}
/* =====================================================
   LUZ INFERIOR DEL VEHÍCULO
===================================================== */

const luzInferior =
    new THREE.PointLight(
        0x00d9ff,
        8,
        7
    );

luzInferior.position.set(
    -1,
    0.15,
    0
);

carro.add(
    luzInferior
);


/* segunda luz inferior */

const luzInferior2 =
    new THREE.PointLight(
        0x008cff,
        6,
        6
    );

luzInferior2.position.set(
    2,
    0.15,
    0
);

carro.add(
    luzInferior2
);
/* =====================================================
   PEQUEÑOS PUNTOS LED
===================================================== */

const materialPuntoLED =
    new THREE.MeshBasicMaterial({
        color: 0x9fffff
    });


for (
    let i = 0;
    i < 24;
    i++
) {

    const angulo =
        (i / 24) *
        Math.PI *
        2;


    const radio = 5.25;


    const punto =
        new THREE.Mesh(
            new THREE.SphereGeometry(
                0.075,
                12,
                12
            ),
            materialPuntoLED
        );


    punto.position.set(
        Math.cos(angulo) * radio,
        0.12,
        Math.sin(angulo) * radio
    );


    escena.add(
        punto
    );
}
/* =====================================================
   LÍNEAS LED LATERALES
===================================================== */

const materialLEDCarro =
    new THREE.MeshBasicMaterial({
        color: 0x00d9ff
    });


function crearLineaLED(z) {

    const linea =
        new THREE.Mesh(
            new THREE.BoxGeometry(
                4.8,
                0.025,
                0.025
            ),
            materialLEDCarro
        );


    linea.position.set(
        0,
        1.02,
        z
    );


    carro.add(
        linea
    );
}


crearLineaLED(1.61);
crearLineaLED(-1.61);
/* =====================================================
   REFLEJO DE LOS FAROS
===================================================== */

function crearLuzFaro(z) {

    const luz =
        new THREE.SpotLight(
            0x00eaff,
            8,
            12,
            Math.PI / 7,
            0.5,
            1
        );


    luz.position.set(
        -3.7,
        1.55,
        z
    );


    luz.target.position.set(
        -7,
        0.2,
        z
    );


    carro.add(
        luz
    );


    carro.add(
        luz.target
    );
}


crearLuzFaro(1);
crearLuzFaro(-1);

escena.add(
    plataforma
);


/* =====================================================
   ILUMINACIÓN AZUL DEL PISO
===================================================== */

const luzPiso =
    new THREE.PointLight(
        0x00d9ff,
        6,
        12
    );

luzPiso.position.set(
    -2,
    0.1,
    3
);

escena.add(
    luzPiso
);


/* =====================================================
   CENTRADO VISUAL
===================================================== */

carro.rotation.y =
    THREE.MathUtils.degToRad(-25);

carro.position.set(
    0,
    0,
    0
);


/* calcular centro visual */

const cajaCarro =
    new THREE.Box3().setFromObject(
        carro
    );

const centroVisual =
    new THREE.Vector3();

cajaCarro.getCenter(
    centroVisual
);

camara.lookAt(
    centroVisual.x,
    centroVisual.y + 0.15,
    centroVisual.z
);


/* =====================================================
   ANIMACIÓN
===================================================== */

let motorActivo = true;

function animar() {

    requestAnimationFrame(
        animar
    );


    if (motorActivo) {

        ventilador.rotation.z +=
            0.12;

        alternador.rotation.x +=
            0.04;

        polea.rotation.x +=
            0.08;
    }

/* movimiento de los aros */

aroExterior.rotation.z += 0.0015;

aroInterior.rotation.z -= 0.002;

aroCentral.rotation.z += 0.003;


/* respiración de las luces */

const tiempo =
    performance.now() * 0.002;


lucesShowroom.forEach(
    (luz, indice) => {

        luz.intensity =
            2.4 +
            Math.sin(
                tiempo + indice
            ) * 0.8;

    }
);
    renderizador.render(
        escena,
        camara
    );
}


animar();


/* =====================================================
   CONTROLES DE ROTACIÓN
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


/* =====================================================
   BOTÓN MOTOR
===================================================== */

document
    .getElementById("btnMotor")
    .addEventListener(
        "click",
        () => {

            motorActivo =
                !motorActivo;

        }
    );


/* =====================================================
   BOTÓN CAPÓ
===================================================== */

let capoAbierto = true;

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
            "El motor transforma la energía de la combustión en movimiento. En el modelo puedes observar el bloque, cilindros, bujías, tapa y diferentes componentes auxiliares."
    },

    radiador: {
        titulo: "🌡️ Radiador",
        texto:
            "El radiador ayuda a disipar el calor del refrigerante para mantener el motor dentro de una temperatura adecuada."
    },

    bateria: {
        titulo: "🔋 Batería",
        texto:
            "La batería almacena energía eléctrica y permite alimentar los sistemas eléctricos y el motor de arranque."
    },

    alternador: {
        titulo: "⚡ Alternador",
        texto:
            "El alternador convierte energía mecánica del motor en energía eléctrica y ayuda a mantener cargada la batería."
    },

    aceite: {
        titulo: "🛢️ Aceite",
        texto:
            "El aceite reduce la fricción entre las piezas móviles y ayuda a disminuir el desgaste del motor."
    },

    bujia: {
        titulo: "🔥 Bujía",
        texto:
            "En un motor de gasolina, la bujía produce la chispa que inicia la combustión dentro del cilindro."
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

                    if (!dato) return;

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

if (
    menuBtn &&
    menu
) {

    menuBtn.addEventListener(
        "click",
        () => {

            menu.classList.toggle(
                "abierto"
            );

        }
    );
}


/* =====================================================
   RESPONSIVE
===================================================== */

window.addEventListener(
    "resize",
    () => {

        const ancho =
            contenedor.clientWidth;

        const alto =
            contenedor.clientHeight;

        camara.aspect =
            ancho / alto;

        camara.updateProjectionMatrix();

        renderizador.setSize(
            ancho,
            alto
        );

        renderizador.setPixelRatio(
            Math.min(
                window.devicePixelRatio,
                2
            )
        );

    }
);