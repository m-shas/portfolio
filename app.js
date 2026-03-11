// ═══════════════════════════════════════════════════════════════════════
//  INTERSTELLAR TESSERACT PORTFOLIO — Ultra-Realistic Edition
// ═══════════════════════════════════════════════════════════════════════

// ── SMOOTH CURSOR (lerped) ──────────────────────────────────────────────
const cur = document.getElementById('cursor');
let mxTarget = 0, myTarget = 0, mxCur = 0, myCur = 0;
document.addEventListener('mousemove', e => {
    mxTarget = e.clientX; myTarget = e.clientY;
});
function tickCursor() {
    mxCur += (mxTarget - mxCur) * 0.18;
    myCur += (myTarget - myCur) * 0.18;
    cur.style.left = mxCur + 'px';
    cur.style.top = myCur + 'px';
    requestAnimationFrame(tickCursor);
}
tickCursor();

function setCursorHover(on) {
    if (on) cur.classList.add('hover');
    else cur.classList.remove('hover');
}

// ═══════════════════════════════════════════════════════════════════════
//  NAV TREE
// ═══════════════════════════════════════════════════════════════════════
const TREE = {
    home: {
        id: 'home', label: 'HOME', sub: 'Your Name · Portfolio',
        portals: { left: 'projects', right: 'skills', down: 'contact', up: null },
        content: null, parent: null
    },
    projects: {
        id: 'projects', label: 'PROJECTS', sub: 'Choose a Mission',
        portals: { left: 'proj_blog', right: 'proj_ecom', down: 'proj_ai', up: null },
        content: null, parent: 'home'
    },
    proj_blog: {
        id: 'proj_blog', label: 'BLOG APP', sub: 'Full-Stack Blogging Platform',
        portals: { left: 'blog_stack', right: 'blog_links', down: null, up: null },
        content: null, parent: 'projects'
    },
    blog_stack: {
        id: 'blog_stack', label: 'TECH STACK', sub: 'Blog App · Technologies',
        portals: { left: null, right: null, down: null, up: null },
        content: {
            type: 'skills', title: 'BLOG APP · TECH STACK',
            items: [{ n: 'React.js', p: 90 }, { n: 'Node.js + Express', p: 85 }, { n: 'MongoDB', p: 80 },
            { n: 'JWT Auth', p: 78 }, { n: 'Tailwind CSS', p: 88 }, { n: 'REST API', p: 85 }]
        }, parent: 'proj_blog'
    },
    blog_links: {
        id: 'blog_links', label: 'LINKS', sub: 'Blog App · Resources',
        portals: { left: null, right: null, down: null, up: null },
        content: {
            type: 'links', title: 'BLOG APP · RESOURCES',
            body: 'A full-stack blogging platform with markdown support, auth, tags, and clean reading UI.',
            links: [{ l: '🌐 LIVE DEMO', h: 'https://your-blog.vercel.app' },
            { l: '💻 GITHUB', h: 'https://github.com/yourname/blog-app' },
            { l: '📄 CASE STUDY', h: '#' }]
        }, parent: 'proj_blog'
    },
    proj_ecom: {
        id: 'proj_ecom', label: 'E-COMMERCE', sub: 'Online Store Platform',
        portals: { left: 'ecom_stack', right: 'ecom_links', down: null, up: null },
        content: null, parent: 'projects'
    },
    ecom_stack: {
        id: 'ecom_stack', label: 'TECH STACK', sub: 'E-Commerce · Technologies',
        portals: { left: null, right: null, down: null, up: null },
        content: {
            type: 'skills', title: 'E-COMMERCE · TECH STACK',
            items: [{ n: 'Next.js', p: 88 }, { n: 'Stripe API', p: 82 }, { n: 'PostgreSQL', p: 80 },
            { n: 'Prisma ORM', p: 76 }, { n: 'Redis Cache', p: 72 }, { n: 'Docker', p: 70 }]
        }, parent: 'proj_ecom'
    },
    ecom_links: {
        id: 'ecom_links', label: 'LINKS', sub: 'E-Commerce · Resources',
        portals: { left: null, right: null, down: null, up: null },
        content: {
            type: 'links', title: 'E-COMMERCE · RESOURCES',
            body: 'Production-ready online store with cart, Stripe payments, order tracking and admin dashboard.',
            links: [{ l: '🌐 LIVE DEMO', h: 'https://your-store.vercel.app' },
            { l: '💻 GITHUB', h: 'https://github.com/yourname/ecom' }]
        }, parent: 'proj_ecom'
    },
    proj_ai: {
        id: 'proj_ai', label: 'AI DASHBOARD', sub: 'ML-Powered Analytics',
        portals: { left: 'ai_stack', right: 'ai_links', down: null, up: null },
        content: null, parent: 'projects'
    },
    ai_stack: {
        id: 'ai_stack', label: 'TECH STACK', sub: 'AI Dashboard · Technologies',
        portals: { left: null, right: null, down: null, up: null },
        content: {
            type: 'skills', title: 'AI DASHBOARD · TECH STACK',
            items: [{ n: 'Python / FastAPI', p: 85 }, { n: 'TensorFlow', p: 78 }, { n: 'Pandas / NumPy', p: 82 },
            { n: 'React + Recharts', p: 84 }, { n: 'AWS Lambda', p: 70 }, { n: 'PostgreSQL', p: 75 }]
        }, parent: 'proj_ai'
    },
    ai_links: {
        id: 'ai_links', label: 'LINKS', sub: 'AI Dashboard · Resources',
        portals: { left: null, right: null, down: null, up: null },
        content: {
            type: 'links', title: 'AI DASHBOARD · RESOURCES',
            body: 'Real-time ML inference dashboard with live charts, model monitoring and anomaly detection.',
            links: [{ l: '🌐 LIVE DEMO', h: 'https://your-ai.vercel.app' },
            { l: '💻 GITHUB', h: 'https://github.com/yourname/ai-dashboard' }]
        }, parent: 'proj_ai'
    },
    skills: {
        id: 'skills', label: 'SKILLS', sub: 'Navigate Your Arsenal',
        portals: { left: 'sk_frontend', right: 'sk_backend', down: 'sk_tools', up: null },
        content: null, parent: 'home'
    },
    sk_frontend: {
        id: 'sk_frontend', label: 'FRONTEND', sub: 'UI & Visual Engineering',
        portals: { left: null, right: null, down: null, up: null },
        content: {
            type: 'skills', title: 'FRONTEND SKILLS',
            items: [{ n: 'JavaScript / TypeScript', p: 92 }, { n: 'React / Next.js', p: 90 },
            { n: 'Three.js / WebGL', p: 80 }, { n: 'HTML5 / CSS3', p: 95 },
            { n: 'GSAP / Animation', p: 78 }, { n: 'UI/UX Design', p: 75 }]
        }, parent: 'skills'
    },
    sk_backend: {
        id: 'sk_backend', label: 'BACKEND', sub: 'Server & Data Systems',
        portals: { left: null, right: null, down: null, up: null },
        content: {
            type: 'skills', title: 'BACKEND SKILLS',
            items: [{ n: 'Node.js / Express', p: 87 }, { n: 'Python / FastAPI', p: 83 },
            { n: 'PostgreSQL / MySQL', p: 82 }, { n: 'MongoDB', p: 80 },
            { n: 'REST & GraphQL', p: 85 }, { n: 'Docker / DevOps', p: 72 }]
        }, parent: 'skills'
    },
    sk_tools: {
        id: 'sk_tools', label: 'TOOLS & AI', sub: 'Dev Tools & Machine Learning',
        portals: { left: null, right: null, down: null, up: null },
        content: {
            type: 'skills', title: 'TOOLS & AI',
            items: [{ n: 'Git / GitHub', p: 90 }, { n: 'TensorFlow / ML', p: 75 },
            { n: 'AWS / Cloud', p: 68 }, { n: 'Linux / Shell', p: 78 },
            { n: 'Redis / Caching', p: 72 }, { n: 'CI/CD Pipelines', p: 70 }]
        }, parent: 'skills'
    },
    contact: {
        id: 'contact', label: 'CONTACT', sub: 'Signal Across the Void',
        portals: { left: null, right: null, down: null, up: null },
        content: {
            type: 'contact', title: 'CONTACT',
            body: 'Whether you have a project, opportunity, or want to talk about spacetime — my signal is on.',
            contacts: [
                { icon: '📧', label: 'Email', val: 'you@email.com', href: 'mailto:you@email.com' },
                { icon: '💼', label: 'LinkedIn', val: '/in/yourname', href: 'https://linkedin.com' },
                { icon: '💻', label: 'GitHub', val: 'github.com/you', href: 'https://github.com' },
                { icon: '📄', label: 'Resume', val: 'Download PDF', href: '#' },
                { icon: '🐦', label: 'Twitter', val: '@yourhandle', href: 'https://twitter.com' },
                { icon: '🌐', label: 'Website', val: 'yourname.dev', href: '#' },
            ]
        }, parent: 'home'
    }
};

// ═══════════════════════════════════════════════════════════════════════
//  THREE.JS SETUP
// ═══════════════════════════════════════════════════════════════════════
const W = window.innerWidth, H = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(62, W / H, 0.01, 2000);
camera.position.set(0, 0, 14);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(W, H);
renderer.setClearColor(0x000000, 1);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;
document.body.prepend(renderer.domElement);

// Bloom
let composer = null, bloomPass = null, useBloom = false;
try {
    const rp = new THREE.RenderPass(scene, camera);
    bloomPass = new THREE.UnrealBloomPass(new THREE.Vector2(W, H), 2.2, 0.6, 0.02);
    composer = new THREE.EffectComposer(renderer);
    composer.addPass(rp);
    composer.addPass(bloomPass);
    useBloom = true;
} catch (e) { console.warn('Bloom unavailable'); }

function doRender() {
    if (useBloom && composer) composer.render();
    else renderer.render(scene, camera);
}

let STATE = 'BLACK_HOLE'; // BLACK_HOLE | GOING_IN | TESSERACT | FLYING

// ═══════════════════════════════════════════════════════════════════════
//  ENHANCED STARFIELD (with twinkling)
// ═══════════════════════════════════════════════════════════════════════
const STAR_N = 9000;
const sfPos = new Float32Array(STAR_N * 3);
const sfSize = new Float32Array(STAR_N);
const sfPhase = new Float32Array(STAR_N);
for (let i = 0; i < STAR_N; i++) {
    sfPos[i * 3] = (Math.random() - 0.5) * 600;
    sfPos[i * 3 + 1] = (Math.random() - 0.5) * 600;
    sfPos[i * 3 + 2] = (Math.random() - 0.5) * 600;
    sfSize[i] = 0.04 + Math.random() * 0.12;
    sfPhase[i] = Math.random() * Math.PI * 2;
}
const sfGeo = new THREE.BufferGeometry();
sfGeo.setAttribute('position', new THREE.BufferAttribute(sfPos, 3));
sfGeo.setAttribute('size', new THREE.BufferAttribute(sfSize, 1));

const starVertShader = `
  attribute float size;
  varying float vSize;
  void main() {
    vSize = size;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (200.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;
const starFragShader = `
  varying float vSize;
  uniform float uTime;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float alpha = smoothstep(0.5, 0.0, d);
    float twinkle = 0.7 + 0.3 * sin(uTime * 2.5 + vSize * 40.0);
    gl_FragColor = vec4(1.0, 0.96, 0.9, alpha * twinkle * 0.85);
  }
`;
const starUniforms = { uTime: { value: 0 } };
const starMat = new THREE.ShaderMaterial({
    vertexShader: starVertShader, fragmentShader: starFragShader,
    uniforms: starUniforms, transparent: true, depthWrite: false,
    blending: THREE.AdditiveBlending
});
const stars = new THREE.Points(sfGeo, starMat);
scene.add(stars);

// ═══════════════════════════════════════════════════════════════════════
//  GARGANTUA BLACK HOLE — Enhanced
// ═══════════════════════════════════════════════════════════════════════
const bhGroup = new THREE.Group();
scene.add(bhGroup);

// Event Horizon sphere
const horizonMesh = new THREE.Mesh(
    new THREE.SphereGeometry(3, 128, 128),
    new THREE.MeshBasicMaterial({ color: 0x000000 })
);
bhGroup.add(horizonMesh);

// ── CUSTOM SHADER ACCRETION DISK ────────────────────────────────────────
const diskVertShader = `
  varying vec2 vUv;
  varying float vRadius;
  void main() {
    vUv = uv;
    // Compute radius from center
    vRadius = length(position.xy);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const diskFragShader = `
  uniform float uTime;
  uniform float uInnerR;
  uniform float uOuterR;
  varying vec2 vUv;
  varying float vRadius;

  // Simple noise
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y
    );
  }
  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * noise(p);
      p *= 2.1; a *= 0.5;
    }
    return v;
  }

  void main() {
    // Normalized radius
    float r = (vRadius - uInnerR) / (uOuterR - uInnerR);
    if (r < 0.0 || r > 1.0) discard;

    // Angle from UV
    float angle = atan(vUv.y - 0.5, vUv.x - 0.5);

    // Turbulent bands
    float turbulence = fbm(vec2(angle * 3.0 + uTime * 0.6, r * 8.0 - uTime * 0.3));
    float turbulence2 = fbm(vec2(angle * 5.0 - uTime * 0.9, r * 12.0 + uTime * 0.15));

    // Brightness falloff: brighter near horizon
    float brightness = pow(1.0 - r, 1.8) * 1.5;
    brightness += turbulence * 0.35 + turbulence2 * 0.15;
    brightness = clamp(brightness, 0.0, 1.5);

    // Color: hot white near center -> orange -> red -> dim
    vec3 hotWhite = vec3(1.0, 0.95, 0.8);
    vec3 orange   = vec3(1.0, 0.55, 0.1);
    vec3 deepRed  = vec3(0.6, 0.12, 0.02);
    vec3 dim      = vec3(0.15, 0.03, 0.0);

    vec3 col;
    if (r < 0.15) col = mix(hotWhite, orange, r / 0.15);
    else if (r < 0.45) col = mix(orange, deepRed, (r - 0.15) / 0.3);
    else col = mix(deepRed, dim, (r - 0.45) / 0.55);

    col *= brightness;

    // Edge softness
    float edgeAlpha = smoothstep(0.0, 0.08, r) * smoothstep(1.0, 0.85, r);

    // Slight flicker
    float flicker = 0.92 + 0.08 * sin(uTime * 7.0 + angle * 2.0);

    gl_FragColor = vec4(col * flicker, edgeAlpha * 0.92);
  }
`;

const diskUniforms = {
    uTime: { value: 0 },
    uInnerR: { value: 3.0 },
    uOuterR: { value: 14.0 }
};

function mkShaderDisk(innerR, outerR, rx, speed) {
    const geo = new THREE.RingGeometry(innerR, outerR, 256, 4);
    const mat = new THREE.ShaderMaterial({
        vertexShader: diskVertShader,
        fragmentShader: diskFragShader,
        uniforms: {
            uTime: { value: 0 },
            uInnerR: { value: innerR },
            uOuterR: { value: outerR }
        },
        transparent: true, side: THREE.DoubleSide,
        depthWrite: false, blending: THREE.AdditiveBlending
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = rx;
    mesh.userData.speed = speed;
    bhGroup.add(mesh);
    return mesh;
}

// Main disk layers
const mainDisk = mkShaderDisk(3.0, 14.0, Math.PI / 2, 1.0);
// Gravitational lensing arches (tilted copies)
const lensArch1 = mkShaderDisk(3.0, 6.0, Math.PI / 2.25, 0.7);
const lensArch2 = mkShaderDisk(3.0, 5.0, Math.PI / 2.55, 0.9);
const lensUnder1 = mkShaderDisk(3.0, 5.5, -Math.PI / 2.3, 0.65);
const lensUnder2 = mkShaderDisk(3.0, 4.0, -Math.PI / 2.7, 0.85);
const shaderDisks = [mainDisk, lensArch1, lensArch2, lensUnder1, lensUnder2];

// Photon ring (thin, bright)
function mkRing(ri, ro, col, op, rx) {
    const m = new THREE.Mesh(
        new THREE.RingGeometry(ri, ro, 256),
        new THREE.MeshBasicMaterial({
            color: col, side: THREE.DoubleSide, transparent: true, opacity: op,
            depthWrite: false, blending: THREE.AdditiveBlending
        })
    );
    m.rotation.x = rx;
    bhGroup.add(m);
    return m;
}
const photonRing = mkRing(3.0, 3.15, 0xffffff, 0.95, Math.PI / 2);

// ── ATMOSPHERIC GLOW LAYERS ──────────────────────────────────────────
for (let i = 0; i < 4; i++) {
    const r = 3.5 + i * 0.6;
    const op = 0.04 - i * 0.008;
    const glow = new THREE.Mesh(
        new THREE.SphereGeometry(r, 32, 32),
        new THREE.MeshBasicMaterial({
            color: 0xff6600, transparent: true, opacity: Math.max(0.005, op),
            side: THREE.BackSide, depthWrite: false, blending: THREE.AdditiveBlending
        })
    );
    bhGroup.add(glow);
}

// ── GRAVITATIONAL LENSING RING (oscillating) ─────────────────────────
const lensRingGeo = new THREE.TorusGeometry(3.3, 0.06, 16, 128);
const lensRingMat = new THREE.MeshBasicMaterial({
    color: 0xffcc88, transparent: true, opacity: 0.15,
    blending: THREE.AdditiveBlending, depthWrite: false
});
const lensRing = new THREE.Mesh(lensRingGeo, lensRingMat);
lensRing.rotation.x = Math.PI / 2;
bhGroup.add(lensRing);

// ── PARTICLE JETS (polar) ────────────────────────────────────────────
function makeJet(dirY) {
    const count = 400;
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count); // speed factor per particle
    for (let i = 0; i < count; i++) {
        const spread = Math.random() * 0.25;
        pos[i * 3] = (Math.random() - 0.5) * spread;
        pos[i * 3 + 1] = dirY * (3.0 + Math.random() * 18);
        pos[i * 3 + 2] = (Math.random() - 0.5) * spread;
        vel[i] = 0.5 + Math.random() * 1.5;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
        size: 0.05, color: dirY > 0 ? 0xffaa66 : 0xff8844,
        transparent: true, opacity: 0.35,
        blending: THREE.AdditiveBlending, depthWrite: false
    });
    const pts = new THREE.Points(geo, mat);
    pts.userData.dirY = dirY;
    pts.userData.vel = vel;
    bhGroup.add(pts);
    return pts;
}
const jetTop = makeJet(1);
const jetBot = makeJet(-1);

bhGroup.rotation.x = 0.22;

// ═══════════════════════════════════════════════════════════════════════
//  SPEED LINES (for transitions)
// ═══════════════════════════════════════════════════════════════════════
const speedLineCount = 200;
const slPos = new Float32Array(speedLineCount * 6); // two endpoints per line
const slGeo = new THREE.BufferGeometry();
slGeo.setAttribute('position', new THREE.BufferAttribute(slPos, 3));
const speedLines = new THREE.LineSegments(slGeo,
    new THREE.LineBasicMaterial({
        color: 0xffeedd, transparent: true, opacity: 0,
        blending: THREE.AdditiveBlending, depthWrite: false
    })
);
speedLines.visible = false;
scene.add(speedLines);

function initSpeedLines(dir) {
    // dir: [dx, dy, dz] normalized direction
    const positions = slGeo.attributes.position.array;
    for (let i = 0; i < speedLineCount; i++) {
        const px = (Math.random() - 0.5) * 12;
        const py = (Math.random() - 0.5) * 16;
        const pz = (Math.random() - 0.5) * 12;
        const len = 1.5 + Math.random() * 3;
        positions[i * 6] = px;
        positions[i * 6 + 1] = py;
        positions[i * 6 + 2] = pz;
        positions[i * 6 + 3] = px + dir[0] * len;
        positions[i * 6 + 4] = py + dir[1] * len;
        positions[i * 6 + 5] = pz + dir[2] * len;
    }
    slGeo.attributes.position.needsUpdate = true;
}

// ═══════════════════════════════════════════════════════════════════════
//  TESSERACT ROOM GEOMETRY
// ═══════════════════════════════════════════════════════════════════════
const tessGroup = new THREE.Group();
tessGroup.visible = false;
scene.add(tessGroup);

// Fog for depth
scene.fog = null; // We'll enable it in tesseract mode

const COL_COPPER = 0xb87333;
const COL_AMBER = 0xc8922a;
const COL_WARM = 0xf5deb3;
const COL_PINK = 0xff4488;

function addLine(parent, x1, y1, z1, x2, y2, z2, color, opacity) {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(
        new Float32Array([x1, y1, z1, x2, y2, z2]), 3
    ));
    const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity });
    parent.add(new THREE.Line(geo, mat));
}

function addRect(parent, plane, fixed, w, h, color, opacity) {
    let pts;
    if (plane === 'XY') pts = [[-w, -h, fixed], [w, -h, fixed], [w, h, fixed], [-w, h, fixed], [-w, -h, fixed]];
    else if (plane === 'XZ') pts = [[-w, fixed, -h], [w, fixed, -h], [w, fixed, h], [-w, fixed, h], [-w, fixed, -h]];
    else pts = [[fixed, -w, -h], [fixed, w, -h], [fixed, w, h], [fixed, -w, h], [fixed, -w, -h]];
    const buf = [];
    pts.forEach(([x, y, z]) => buf.push(x, y, z));
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(buf), 3));
    parent.add(new THREE.Line(geo,
        new THREE.LineBasicMaterial({ color, transparent: true, opacity })
    ));
}

// Room builder — wireframe box with bookshelves
function buildRoom(parent) {
    const RW = 5.5, RH = 7.0, RD = 6.0;
    // 12 edges
    const E = [
        [-RW, -RH, -RD, RW, -RH, -RD], [RW, -RH, -RD, RW, -RH, RD],
        [RW, -RH, RD, -RW, -RH, RD], [-RW, -RH, RD, -RW, -RH, -RD],
        [-RW, RH, -RD, RW, RH, -RD], [RW, RH, -RD, RW, RH, RD],
        [RW, RH, RD, -RW, RH, RD], [-RW, RH, RD, -RW, RH, -RD],
        [-RW, -RH, -RD, -RW, RH, -RD], [RW, -RH, -RD, RW, RH, -RD],
        [RW, -RH, RD, RW, RH, RD], [-RW, -RH, RD, -RW, RH, RD],
    ];
    // Store edge meshes for pulsing
    E.forEach(([a, b, c, d, e, f]) => {
        const mat = new THREE.LineBasicMaterial({ color: COL_AMBER, transparent: true, opacity: 0.55 });
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([a, b, c, d, e, f]), 3));
        const line = new THREE.Line(geo, mat);
        line.userData.isEdge = true;
        line.userData.baseOpacity = 0.55;
        parent.add(line);
    });

    const SH = 7;
    for (let s = 0; s <= SH; s++) {
        const y = -RH + (s / SH) * RH * 2;
        const op = s === 0 || s === SH ? 0.28 : 0.14;
        addLine(parent, -RW, y, -RD, RW, y, -RD, COL_WARM, op);
        addLine(parent, -RW, y, RD, RW, y, RD, COL_WARM, op);
    }
    for (let c = 1; c < 4; c++) {
        const x = -RW + (c / 4) * RW * 2;
        addLine(parent, x, -RH, -RD, x, RH, -RD, COL_COPPER, 0.14);
        addLine(parent, x, -RH, RD, x, RH, RD, COL_COPPER, 0.14);
    }
    for (let s = 0; s <= SH; s++) {
        const y = -RH + (s / SH) * RH * 2;
        const op = s === 0 || s === SH ? 0.22 : 0.10;
        addLine(parent, -RW, y, -RD, -RW, y, RD, COL_WARM, op);
        addLine(parent, RW, y, -RD, RW, y, RD, COL_WARM, op);
    }
    for (let c = 1; c < 4; c++) {
        const x = -RW + (c / 4) * RW * 2;
        addLine(parent, x, -RH, -RD, x, -RH, RD, COL_COPPER, 0.10);
        addLine(parent, x, RH, -RD, x, RH, RD, COL_COPPER, 0.10);
    }
    for (let c = 1; c < 3; c++) {
        const z = -RD + (c / 3) * RD * 2;
        addLine(parent, -RW, -RH, z, RW, -RH, z, COL_COPPER, 0.10);
        addLine(parent, -RW, RH, z, RW, RH, z, COL_COPPER, 0.10);
    }

    // ── Light shafts (volumetric rays) ──
    for (let i = 0; i < 5; i++) {
        const angle = (i / 5) * Math.PI * 2;
        const rayGeo = new THREE.PlaneGeometry(0.08, RH * 1.8);
        const rayMat = new THREE.MeshBasicMaterial({
            color: 0xd4a06a, transparent: true, opacity: 0.025 + Math.random() * 0.015,
            side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending
        });
        const ray = new THREE.Mesh(rayGeo, rayMat);
        ray.position.set(Math.cos(angle) * 2.5, 0, Math.sin(angle) * 2.5);
        ray.rotation.y = angle;
        ray.userData.isRay = true;
        parent.add(ray);
    }
}

// Corridor builder
function buildCorridor(parent, dir, hasPortal) {
    const FW = 5.5, FH = 7.0, START = 6.0, STEP = 4.5, COUNT = 12;

    for (let i = 1; i <= COUNT; i++) {
        const pos = START + i * STEP;
        const t = i / COUNT;
        const bri = Math.pow(1 - t * 0.88, 1.7);
        const fc = COL_COPPER;
        const fa = Math.max(0.05, 0.12 + bri * 0.72);
        const wa = Math.max(0.02, 0.05 + bri * 0.22);

        if (dir === 'left' || dir === 'right') {
            const x = dir === 'left' ? -pos : pos;
            addRect(parent, 'YZ', x, FH, FW, fc, fa);
            addRect(parent, 'YZ', x, FH * 0.87, FW * 0.87, COL_AMBER, fa * 0.5);
            // Innermost faint frame
            addRect(parent, 'YZ', x, FH * 0.72, FW * 0.72, COL_WARM, fa * 0.2);
            for (let s = 1; s < 7; s++) {
                const y = -FH + (s / 7) * FH * 2;
                addLine(parent, x, y, -FW, x, y, FW, COL_WARM, wa);
            }
            for (let c = 1; c < 4; c++) {
                const z = -FW + (c / 4) * FW * 2;
                addLine(parent, x, -FH, z, x, FH, z, fc, wa * 0.8);
            }
            if (i > 1) {
                const prevX = dir === 'left' ? -(START + (i - 1) * STEP) : (START + (i - 1) * STEP);
                [[-FH, -FW], [-FH, FW], [FH, -FW], [FH, FW]].forEach(([cy, cz]) => {
                    addLine(parent, prevX, cy, cz, x, cy, cz, fc, fa * 0.45);
                });
            }
        } else {
            const y = dir === 'up' ? pos : -pos;
            addRect(parent, 'XZ', y, FW, FH, fc, fa);
            addRect(parent, 'XZ', y, FW * 0.87, FH * 0.87, COL_AMBER, fa * 0.5);
            addRect(parent, 'XZ', y, FW * 0.72, FH * 0.72, COL_WARM, fa * 0.2);
            for (let s = 1; s < 7; s++) {
                const z = -FH + (s / 7) * FH * 2;
                addLine(parent, -FW, y, z, FW, y, z, COL_WARM, wa);
            }
            for (let c = 1; c < 4; c++) {
                const x = -FW + (c / 4) * FW * 2;
                addLine(parent, x, y, -FH, x, y, FH, fc, wa * 0.8);
            }
            if (i > 1) {
                const prevY = dir === 'up' ? (START + (i - 1) * STEP) : -(START + (i - 1) * STEP);
                [[-FW, -FH], [-FW, FH], [FW, -FH], [FW, FH]].forEach(([cx, cz]) => {
                    addLine(parent, cx, prevY, cz, cx, y, cz, fc, fa * 0.45);
                });
            }
        }

        // PORTAL GLOW RINGS — animated via userData
        if (i === COUNT && hasPortal) {
            const SEGS = 80, R = Math.min(FW, FH) * 0.65;
            // Multiple concentric rings for richer glow
            for (let ring = 0; ring < 3; ring++) {
                const pts = [];
                const rr = R * (1 - ring * 0.1);
                for (let s = 0; s <= SEGS; s++) {
                    const a = (s / SEGS) * Math.PI * 2;
                    if (dir === 'left' || dir === 'right') {
                        const x = dir === 'left' ? -pos : pos;
                        pts.push(x, Math.cos(a) * rr, Math.sin(a) * rr);
                    } else {
                        const yp = dir === 'up' ? pos : -pos;
                        pts.push(Math.cos(a) * rr, yp, Math.sin(a) * rr);
                    }
                }
                const geo = new THREE.BufferGeometry();
                geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pts), 3));
                const mat = new THREE.LineBasicMaterial({
                    color: COL_PINK, transparent: true,
                    opacity: ring === 0 ? 0.8 : 0.3 - ring * 0.1,
                    blending: THREE.AdditiveBlending, depthWrite: false
                });
                const line = new THREE.Line(geo, mat);
                line.userData.isPortalRing = true;
                line.userData.ringIndex = ring;
                parent.add(line);
            }
        }
    }
}

// Dust particles (enhanced — 3000, varied sizes)
const DUST_N = 3000;
const dustPts = new Float32Array(DUST_N * 3);
for (let i = 0; i < DUST_N; i++) {
    dustPts[i * 3] = (Math.random() - 0.5) * 13;
    dustPts[i * 3 + 1] = (Math.random() - 0.5) * 16;
    dustPts[i * 3 + 2] = (Math.random() - 0.5) * 14;
}
const dustGeo = new THREE.BufferGeometry();
dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPts, 3));
const dustMesh = new THREE.Points(dustGeo,
    new THREE.PointsMaterial({
        size: 0.05, color: 0xd4a06a, transparent: true, opacity: 0.5,
        blending: THREE.AdditiveBlending, depthWrite: false
    })
);
tessGroup.add(dustMesh);

// Finer motes for atmosphere
const moteN = 1500;
const motePts = new Float32Array(moteN * 3);
for (let i = 0; i < moteN; i++) {
    motePts[i * 3] = (Math.random() - 0.5) * 10;
    motePts[i * 3 + 1] = (Math.random() - 0.5) * 12;
    motePts[i * 3 + 2] = (Math.random() - 0.5) * 10;
}
const moteGeo = new THREE.BufferGeometry();
moteGeo.setAttribute('position', new THREE.BufferAttribute(motePts, 3));
const moteMesh = new THREE.Points(moteGeo,
    new THREE.PointsMaterial({
        size: 0.02, color: 0xffe0b0, transparent: true, opacity: 0.3,
        blending: THREE.AdditiveBlending, depthWrite: false
    })
);
tessGroup.add(moteMesh);

// Rebuild room geometry
let roomGeo = null;
function rebuildRoom(node) {
    if (roomGeo) {
        tessGroup.remove(roomGeo);
        roomGeo.traverse(obj => {
            if (obj.geometry) obj.geometry.dispose();
            if (obj.material) obj.material.dispose();
        });
    }
    roomGeo = new THREE.Group();
    buildRoom(roomGeo);
    ['left', 'right', 'up', 'down'].forEach(dir => {
        if (node.portals[dir]) buildCorridor(roomGeo, dir, true);
    });
    tessGroup.add(roomGeo);
}

// ═══════════════════════════════════════════════════════════════════════
//  HUD MANAGEMENT
// ═══════════════════════════════════════════════════════════════════════
function renderContent(c) {
    if (!c) return '';
    if (c.type === 'skills') {
        return `<div class="cp-title">${c.title}</div>` +
            c.items.map(it =>
                `<div class="skill-row">
          <div class="skill-header"><span>${it.n}</span><span>${it.p}%</span></div>
          <div class="skill-track"><div class="skill-fill" data-w="${it.p}%"></div></div>
        </div>`
            ).join('');
    }
    if (c.type === 'links') {
        return `<div class="cp-title">${c.title}</div>
      <div class="cp-body">${c.body}</div><br>
      ${c.links.map(lk => `<a class="link-btn" href="${lk.h}" target="_blank">${lk.l}</a>`).join('')}`;
    }
    if (c.type === 'contact') {
        return `<div class="cp-title">${c.title}</div>
      <div class="cp-body">${c.body}</div>
      <div class="info-grid">` +
            c.contacts.map(ct =>
                `<a class="info-card" href="${ct.href}" target="_blank">
          <span class="c-icon">${ct.icon}</span>
          <div><div class="c-label">${ct.label}</div><div class="c-val">${ct.val}</div></div>
        </a>`
            ).join('') + '</div>';
    }
    return '';
}

function updateHUD(node) {
    document.getElementById('rl-name-text').textContent = node.label;
    document.getElementById('rl-sub-text').textContent = node.sub;

    ['left', 'right', 'up', 'down'].forEach(dir => {
        const el = document.getElementById('portal-' + dir);
        const target = node.portals[dir];
        if (target) {
            el.textContent = TREE[target].label;
            el.style.display = '';
            el.style.pointerEvents = 'all';
        } else {
            el.style.pointerEvents = 'none';
            setTimeout(() => { el.style.display = 'none'; }, 400);
        }
    });

    // Breadcrumb
    const bc = document.getElementById('breadcrumb');
    bc.innerHTML = '';
    const trail = [...navStack.map(id => TREE[id] ? TREE[id].label : id.toUpperCase()), node.label];
    trail.forEach((lbl, i) => {
        if (i > 0) { const sp = document.createElement('span'); sp.className = 'bc-sep'; sp.textContent = ' › '; bc.appendChild(sp); }
        const el = document.createElement('span');
        el.className = 'bc-item' + (i === trail.length - 1 ? ' current' : '');
        el.textContent = lbl;
        if (i < trail.length - 1) { const tid = navStack[i]; el.onclick = () => jumpTo(tid, i); }
        bc.appendChild(el);
    });

    document.getElementById('btn-back').style.display = navStack.length > 0 ? '' : 'none';

    const cp = document.getElementById('content-panel');
    if (node.content) {
        cp.innerHTML = renderContent(node.content);
        cp.classList.add('visible');
        document.getElementById('room-label').style.opacity = '0.2';
        if (node.content.type === 'skills') {
            setTimeout(() => {
                cp.querySelectorAll('.skill-fill').forEach(b => { b.style.width = b.getAttribute('data-w'); });
            }, 200);
        }
        cp.querySelectorAll('.link-btn,.info-card').forEach(el => {
            el.addEventListener('mouseenter', () => setCursorHover(true));
            el.addEventListener('mouseleave', () => setCursorHover(false));
        });
    } else {
        cp.classList.remove('visible');
        cp.innerHTML = '';
        document.getElementById('room-label').style.opacity = '1';
    }
}

// ═══════════════════════════════════════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════════════════════════════════════
let currentId = 'home';
let navStack = [];
let navLocked = false;

function navigateTo(id) {
    if (navLocked) return;
    navLocked = true;
    const node = TREE[id];
    if (!node) { navLocked = false; return; }
    currentId = id;

    // Fade out HUD
    gsap.to('#room-label', { opacity: 0, duration: 0.3 });
    gsap.to('#content-panel', { opacity: 0, duration: 0.2 });
    gsap.to('.portal-label', { opacity: 0, duration: 0.2 });

    setTimeout(() => {
        rebuildRoom(node);
        updateHUD(node);

        // Staggered reveal
        gsap.fromTo('#room-label', { opacity: 0, y: 10 }, { opacity: node.content ? 0.2 : 1, y: 0, duration: 0.8, ease: 'power2.out' });
        if (node.content) {
            gsap.fromTo('#content-panel', { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out', delay: 0.15 });
        }
        const portalDirs = ['left', 'right', 'up', 'down'].filter(d => node.portals[d]);
        portalDirs.forEach((dir, i) => {
            const el = document.getElementById('portal-' + dir);
            gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 0.1 + i * 0.08, ease: 'power2.out' });
        });
        gsap.fromTo('#breadcrumb', { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.2 });

        navLocked = false;
    }, 400);
}

// ── PORTAL FLY-THROUGH (enhanced) ────────────────────────────────────
let camShakeIntensity = 0;

window.goPortal = function (dir) {
    if (navLocked || STATE !== 'TESSERACT') return;
    const node = TREE[currentId];
    const target = node && node.portals[dir];
    if (!target) return;

    STATE = 'FLYING';
    navLocked = true;

    // Hide HUD
    gsap.to('.portal-label', { opacity: 0, duration: 0.15 });
    gsap.to('#room-label', { opacity: 0, duration: 0.15 });
    gsap.to('#content-panel', { opacity: 0, duration: 0.15 });

    // Bloom burst
    if (bloomPass) gsap.to(bloomPass, { strength: 5.0, duration: 0.5, ease: 'power2.in' });

    // Speed lines
    const flyMap = { left: [-1, 0, 0], right: [1, 0, 0], up: [0, 1, 0], down: [0, -1, 0] };
    const fv = flyMap[dir];
    initSpeedLines(fv);
    speedLines.visible = true;
    gsap.fromTo(speedLines.material, { opacity: 0 }, { opacity: 0.5, duration: 0.3 });

    // FOV warp (widen then snap back)
    gsap.to(camera, {
        fov: 78, duration: 0.5, ease: 'power2.in',
        onUpdate: () => camera.updateProjectionMatrix()
    });

    // Camera shake
    camShakeIntensity = 0;
    gsap.to({ val: 0 }, { val: 0.35, duration: 0.4, ease: 'power2.in', onUpdate: function () { camShakeIntensity = this.targets()[0].val; } });

    const flyDist = 55;
    gsap.to(camera.position, {
        x: fv[0] * flyDist,
        y: fv[1] * flyDist,
        z: camera.position.z + fv[2] * flyDist,
        duration: 1.0,
        ease: 'power2.in',
        onComplete: () => {
            // Flash
            gsap.fromTo('#flash', { opacity: 0 }, {
                opacity: 0.85, duration: 0.10, yoyo: true, repeat: 1,
                onComplete: () => gsap.set('#flash', { opacity: 0 })
            });

            // Reset camera
            camera.position.set(0, 0, 14);
            camera.fov = 62; camera.updateProjectionMatrix();
            camShakeIntensity = 0;

            // Hide speed lines
            gsap.to(speedLines.material, { opacity: 0, duration: 0.3, onComplete: () => { speedLines.visible = false; } });

            // Bloom settle
            if (bloomPass) gsap.to(bloomPass, { strength: 2.2, duration: 0.8, ease: 'power2.out' });

            navStack.push(currentId);
            STATE = 'TESSERACT';
            navLocked = false;
            navigateTo(target);
        }
    });
};

window.navigateBack = function () {
    if (navLocked || navStack.length === 0) return;
    const prev = navStack.pop();
    navigateTo(prev);
};

function jumpTo(id, stackIndex) {
    if (navLocked) return;
    navStack = navStack.slice(0, stackIndex);
    navigateTo(id);
}

// ═══════════════════════════════════════════════════════════════════════
//  BLACK HOLE INTERACTION
// ═══════════════════════════════════════════════════════════════════════
const raycaster = new THREE.Raycaster();
const mouseVec = new THREE.Vector2();
let hoverBH = false;

window.addEventListener('mousemove', e => {
    mouseVec.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouseVec.y = -(e.clientY / window.innerHeight) * 2 + 1;
    if (STATE === 'BLACK_HOLE') {
        raycaster.setFromCamera(mouseVec, camera);
        const hit = raycaster.intersectObject(horizonMesh).length > 0;
        if (hit !== hoverBH) { hoverBH = hit; setCursorHover(hit); }
    }
});
window.addEventListener('click', e => {
    if (STATE !== 'BLACK_HOLE') return;
    mouseVec.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouseVec.y = -(e.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouseVec, camera);
    if (raycaster.intersectObject(horizonMesh).length > 0) enterBH();
});

['portal-left', 'portal-right', 'portal-up', 'portal-down', 'btn-back'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.addEventListener('mouseenter', () => setCursorHover(true)); el.addEventListener('mouseleave', () => setCursorHover(false)); }
});

// ═══════════════════════════════════════════════════════════════════════
//  BLACK HOLE → TESSERACT (CINEMATIC MULTI-PHASE)
// ═══════════════════════════════════════════════════════════════════════
function enterBH() {
    STATE = 'GOING_IN';
    hoverBH = false;
    setCursorHover(false);

    // Phase 1: UI fade + stars begin stretching
    gsap.to('#bh-ui', { opacity: 0, duration: 0.6 });
    gsap.to('#bh-hint', { opacity: 0, duration: 0.6 });

    // Show speed lines along Z
    initSpeedLines([0, 0, -1]);
    speedLines.visible = true;
    gsap.fromTo(speedLines.material, { opacity: 0 }, { opacity: 0.6, duration: 1.0, delay: 0.5 });

    // Bloom ramp
    if (bloomPass) gsap.to(bloomPass, { strength: 7, duration: 2.0, ease: 'power2.in' });

    // Phase 2: Spaghettification + camera shake
    gsap.to(camera, {
        fov: 150, duration: 2.8, ease: 'power3.in',
        onUpdate: () => camera.updateProjectionMatrix()
    });

    // Camera shake during entry
    camShakeIntensity = 0;
    gsap.to({ val: 0 }, {
        val: 0.6, duration: 1.5, delay: 0.8, ease: 'power2.in',
        onUpdate: function () { camShakeIntensity = this.targets()[0].val; }
    });

    // Phase 3: Flash + teleport
    gsap.fromTo('#flash', { opacity: 0 }, {
        opacity: 1, duration: 0.25, delay: 2.3, yoyo: true, repeat: 1,
        onComplete: () => gsap.set('#flash', { opacity: 0 })
    });

    // Zoom into singularity
    gsap.to(camera.position, {
        z: 0.05, y: 0, duration: 3.0, ease: 'power3.in',
        onComplete: () => {
            bhGroup.visible = false;
            stars.visible = false;
            speedLines.visible = false;
            speedLines.material.opacity = 0;
            camShakeIntensity = 0;

            camera.position.set(0, 0, 14);
            camera.lookAt(0, 0, 0);
            camera.fov = 62;
            camera.updateProjectionMatrix();

            tessGroup.visible = true;
            scene.fog = new THREE.FogExp2(0x020100, 0.006);
            STATE = 'TESSERACT';

            if (bloomPass) gsap.to(bloomPass, { strength: 2.2, radius: 0.6, duration: 1.5, ease: 'power2.out' });

            rebuildRoom(TREE['home']);
            currentId = 'home';
            navStack = [];
            navLocked = false;

            document.getElementById('tess-ui').classList.add('visible');
            updateHUD(TREE['home']);

            // Staggered HUD entrance
            gsap.fromTo('#room-label', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 1.0, ease: 'power2.out', delay: 0.2 });
            const portalDirs = ['left', 'right', 'up', 'down'].filter(d => TREE['home'].portals[d]);
            portalDirs.forEach((dir, i) => {
                const el = document.getElementById('portal-' + dir);
                gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.7, delay: 0.5 + i * 0.12, ease: 'power2.out' });
            });
        }
    });
}

// ═══════════════════════════════════════════════════════════════════════
//  ANIMATION LOOP
// ═══════════════════════════════════════════════════════════════════════
const clock = new THREE.Clock();
let tessT = 0;

function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    const dt = clock.getDelta();

    // Star uniforms
    starUniforms.uTime.value = t;

    // ── BLACK HOLE ──
    if (STATE === 'BLACK_HOLE' || STATE === 'GOING_IN') {
        // Shader disk animation
        shaderDisks.forEach(disk => {
            disk.material.uniforms.uTime.value = t * disk.userData.speed;
            disk.rotation.z += 0.003 * disk.userData.speed;
        });
        photonRing.rotation.z += 0.035;

        // Gravitational lensing ring oscillation
        const ls = 1.0 + Math.sin(t * 1.5) * 0.04;
        lensRing.scale.set(ls, ls, ls);
        lensRing.material.opacity = 0.12 + Math.sin(t * 2.3) * 0.05;

        // Particle jets
        [jetTop, jetBot].forEach(jet => {
            const pos = jet.geometry.attributes.position.array;
            const dirY = jet.userData.dirY;
            for (let i = 0; i < pos.length / 3; i++) {
                pos[i * 3 + 1] += dirY * jet.userData.vel[i] * 0.06;
                // Reset particles that went too far
                if (Math.abs(pos[i * 3 + 1]) > 22) {
                    pos[i * 3 + 1] = dirY * 3.0;
                    pos[i * 3] = (Math.random() - 0.5) * 0.2;
                    pos[i * 3 + 2] = (Math.random() - 0.5) * 0.2;
                }
            }
            jet.geometry.attributes.position.needsUpdate = true;
        });

        bhGroup.rotation.y = Math.sin(t * 0.18) * 0.06;
        if (stars.visible) {
            stars.rotation.y += 0.00012;
            stars.rotation.x += 0.00004;
        }
    }

    // ── TESSERACT ──
    if (STATE === 'TESSERACT' || STATE === 'FLYING') {
        tessT += 0.016;

        if (STATE === 'TESSERACT') {
            // Gentle camera breathing
            camera.position.x = Math.sin(tessT * 0.11) * 0.35;
            camera.position.y = Math.sin(tessT * 0.14) * 0.28;
            camera.lookAt(0, 0, 0);
        }

        // Room edge pulsing
        if (roomGeo) {
            roomGeo.rotation.y = Math.sin(tessT * 0.06) * 0.014;
            roomGeo.rotation.x = Math.sin(tessT * 0.07) * 0.010;

            // Pulse edges
            roomGeo.traverse(obj => {
                if (obj.userData.isEdge && obj.material) {
                    obj.material.opacity = obj.userData.baseOpacity + Math.sin(tessT * 1.2 + obj.id * 0.3) * 0.08;
                }
                // Pulsate portal rings
                if (obj.userData.isPortalRing && obj.material) {
                    const base = obj.userData.ringIndex === 0 ? 0.8 : 0.2;
                    obj.material.opacity = base + Math.sin(tessT * 2.0 + obj.userData.ringIndex) * 0.15;
                }
                // Light ray drift
                if (obj.userData.isRay) {
                    obj.material.opacity = 0.02 + Math.sin(tessT * 0.7 + obj.id * 0.5) * 0.015;
                }
            });
        }

        dustMesh.rotation.y += 0.0003;
        dustMesh.rotation.z += 0.0001;
        moteMesh.rotation.y -= 0.0002;
        moteMesh.rotation.x += 0.00015;

        if (bloomPass && STATE === 'TESSERACT') {
            bloomPass.strength = 2.2 + Math.sin(tessT * 0.9) * 0.25;
        }
    }

    // ── CAMERA SHAKE ──
    if (camShakeIntensity > 0.01) {
        camera.position.x += (Math.random() - 0.5) * camShakeIntensity;
        camera.position.y += (Math.random() - 0.5) * camShakeIntensity;
    }

    doRender();
}
animate();

// ═══════════════════════════════════════════════════════════════════════
//  RESIZE
// ═══════════════════════════════════════════════════════════════════════
window.addEventListener('resize', () => {
    const w2 = window.innerWidth, h2 = window.innerHeight;
    camera.aspect = w2 / h2;
    camera.updateProjectionMatrix();
    renderer.setSize(w2, h2);
    if (composer) composer.setSize(w2, h2);
});

// ── KEYBOARD ────────────────────────────────────────────────────────────
window.addEventListener('keydown', e => {
    if (STATE !== 'TESSERACT') return;
    const k = { ArrowLeft: 'left', ArrowRight: 'right', ArrowUp: 'up', ArrowDown: 'down' };
    if (k[e.key]) { e.preventDefault(); window.goPortal(k[e.key]); }
    if (e.key === 'Escape' || e.key === 'Backspace') window.navigateBack();
});

console.log('Tesseract Portfolio [Ultra-Realistic] loaded ✓');
