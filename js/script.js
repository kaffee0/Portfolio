// キラキラエフェクトを生成
function createSparkles() {
    const sparkleContainer = document.getElementById('sparkles');
    const sparkleCount = 50;

    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 3 + 's';
        sparkle.style.animationDuration = (Math.random() * 2 + 2) + 's';
        sparkleContainer.appendChild(sparkle);
    }
}

// ボタンにマウスを追従するグリッターを追加
function initButtonSparkles() {
    const button = document.querySelector('.glitter-button');
    
    if (!button) return;
    
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const sparkle = document.createElement('div');
        sparkle.style.position = 'absolute';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.width = '6px';
        sparkle.style.height = '6px';
        sparkle.style.background = 'white';
        sparkle.style.borderRadius = '50%';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.animation = 'twinkle 0.6s ease-out forwards';
        button.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 600);
    });
}

// カラースウォッチをクリックでエフェクト
function initColorSwatches() {
    document.querySelectorAll('.color-swatch').forEach(swatch => {
        swatch.addEventListener('click', function() {
            const color = getComputedStyle(this).backgroundColor;
            console.log('選択された色:', color);
            
            // 視覚的フィードバック
            const original = this.style.transform;
            this.style.transform = 'scale(1.3) rotate(360deg)';
            setTimeout(() => {
                this.style.transform = original;
            }, 300);
        });
    });
}

// ページロード時の初期化
window.addEventListener('load', () => {
    createSparkles();
    initButtonSparkles();
    initColorSwatches();
});

// スクロールでの追加エフェクト（オプション）
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    const windowHeight = window.innerHeight;
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        
        if (cardTop < windowHeight * 0.85) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});