// すべて DOM が読み込まれてから実行
document.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // Custom Cursor
    // ==============================
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');

    let mouseX = 0, mouseY = 0;
    let lastX = 0, lastY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (cursor) {
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        }

        const distance = Math.hypot(mouseX - lastX, mouseY - lastY);
        if (distance > 15) {
            createFlowerTrail(mouseX, mouseY);
            lastX = mouseX;
            lastY = mouseY;
        }
    });

    function createFlowerTrail(x, y) {
        const trail = document.createElement('div');
        trail.className = 'flower-trail';
        trail.style.left = x + 'px';
        trail.style.top = y + 'px';
        trail.style.transform = 'translate(-50%, -50%)';
        trail.innerHTML = `<img src="flower-cursor.svg" style="width: 100%; height: 100%;">`;
        document.body.appendChild(trail);
        setTimeout(() => trail.remove(), 900);
    }

    // ==============================
    // Background Particles
    // ==============================
    const particlesContainer = document.getElementById('particles');

    if (particlesContainer) {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 3 + 's';
            particle.style.animationDuration = (Math.random() * 2 + 2) + 's';
            particlesContainer.appendChild(particle);
        }
    }

    // ==============================
    // Modal Elements
    // ==============================
    const modal = document.getElementById('modal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalBody = document.getElementById('modalBody');
    const modalTags = document.getElementById('modalTags');
    const closeBtn = document.getElementById('closeBtn');

    // ==============================
    // Generate Tiles from projects.js
    // ==============================
    function generateTiles() {
        const grid = document.querySelector('.grid');

        if (!grid) {
            console.warn('grid 要素が見つからないよ');
            return;
        }
        if (typeof projects === 'undefined') {
            console.error('projects が定義されてない！ projects.js 読み込めてる？');
            return;
        }

        Object.entries(projects).forEach(([key, project], index) => {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.dataset.project = key;

            // アニメーションディレイ（自販機ボタンが順に光る感じ）
            const delay = 0.1 + index * 0.05;
            tile.style.animationDelay = `${delay}s`;

            const tileContent = document.createElement('div');
            tileContent.className = 'tile-content';

            // でっかいアイコン（商品っぽい）
            const icon = document.createElement('div');
            icon.className = 'tile-icon-main';
            icon.textContent = project.icon;

            // タイトル（商品名ラベル）
            const title = document.createElement('div');
            title.className = 'tile-title';
            title.textContent = project.label || project.title;

            // 金額（自販機の価格パネル）
            const price = document.createElement('div');
            price.className = 'tile-price';
            price.textContent = project.price || '¥---';

            tileContent.appendChild(icon);
            tileContent.appendChild(title);
            tileContent.appendChild(price);

            tile.appendChild(tileContent);
            grid.appendChild(tile);
        });
    }

    // ==============================
    // Tile Interactions (Modal / Hover)
    // ==============================
    function setupTileInteractions() {
        const tiles = document.querySelectorAll('.tile');
        if (!tiles.length) return;

        tiles.forEach(tile => {
            tile.addEventListener('click', () => {
                const projectKey = tile.dataset.project;
                const project = projects[projectKey];
                if (!project || !modal) return;

                if (modalIcon) modalIcon.textContent = project.icon;
                if (modalTitle) modalTitle.textContent = project.title;
                if (modalSubtitle) modalSubtitle.textContent = project.subtitle;
                if (modalBody) modalBody.textContent = project.body;

                if (modalTags) {
                    modalTags.innerHTML = '';
                    project.tags.forEach(tag => {
                        const tagEl = document.createElement('span');
                        tagEl.className = 'tag';
                        tagEl.textContent = tag;
                        modalTags.appendChild(tagEl);
                    });
                }

                modal.classList.add('active');
                createClickEffect(mouseX, mouseY);
            });

            tile.addEventListener('mouseenter', () => {
                if (cursor) {
                    cursor.style.width = '60px';
                    cursor.style.height = '60px';
                }
            });

            tile.addEventListener('mouseleave', () => {
                if (cursor) {
                    cursor.style.width = '40px';
                    cursor.style.height = '40px';
                }
            });
        });
    }

    // ==============================
    // Close Modal
    // ==============================
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    // ==============================
    // Hover Effects (menu / close-btn)
    // ==============================
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle && cursor) {
        menuToggle.addEventListener('mouseenter', () => {
            cursor.style.width = '50px';
            cursor.style.height = '50px';
        });
        menuToggle.addEventListener('mouseleave', () => {
            cursor.style.width = '40px';
            cursor.style.height = '40px';
        });
    }

    document.querySelectorAll('.close-btn').forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (cursor) {
                cursor.style.width = '50px';
                cursor.style.height = '50px';
            }
        });
        el.addEventListener('mouseleave', () => {
            if (cursor) {
                cursor.style.width = '40px';
                cursor.style.height = '40px';
            }
        });
    });

    // ==============================
    // Click Effect (Particle Burst)
    // ==============================
    function createClickEffect(x, y) {
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '6px';
            particle.style.height = '6px';
            particle.style.background = '#57B8FF';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';

            document.body.appendChild(particle);

            const angle = (Math.PI * 2 * i) / 12;
            const velocity = 150;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;

            let posX = x;
            let posY = y;
            let opacity = 1;

            const animate = () => {
                posX += vx * 0.016;
                posY += vy * 0.016;
                opacity -= 0.02;

                particle.style.left = posX + 'px';
                particle.style.top = posY + 'px';
                particle.style.opacity = opacity;

                if (opacity > 0) {
                    requestAnimationFrame(animate);
                } else {
                    particle.remove();
                }
            };

            animate();
        }
    }

    // ==============================
    // Init
    // ==============================
    generateTiles();
    setupTileInteractions();
});