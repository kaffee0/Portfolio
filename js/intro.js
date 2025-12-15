// イントロアニメーション制御

function initIntroAnimation() {
    const introContainer = document.querySelector('.intro-container');
    const svgAnimated = document.getElementById('svg-animated');
    const svgFinal = document.getElementById('svg-final');
    const headerLogo = document.getElementById('header-logo');
    const mainContainer = document.querySelector('.main-container');
    const elements = svgAnimated.querySelectorAll('path, rect');
    
    // 自販機を最初は画面下に隠す
    mainContainer.style.transform = 'translateY(100%)';
    mainContainer.style.transition = 'transform 1s ease-in-out';
    
    // 全ての要素を順番通りに描画
    elements.forEach((element, index) => {
        let length;
        
        // rectの場合は周囲の長さを計算
        if (element.tagName === 'rect') {
            const width = parseFloat(element.getAttribute('width'));
            const height = parseFloat(element.getAttribute('height'));
            length = (width + height) * 2;
        } else {
            length = element.getTotalLength();
        }
        
        element.style.strokeDasharray = length;
        element.style.strokeDashoffset = length;
        
        // 各要素0.35秒、順番に（2.3倍速）
        const delay = index * 0.35;
        element.style.animation = `draw 0.35s ease-in-out ${delay}s forwards`;
    });
    
    // 全文字描画完了時間 (15要素 × 0.35秒 = 5.25秒)
    const drawComplete = 5250;
    
    // 描画完了後にfillアニメーション開始
    setTimeout(() => {
        elements.forEach((element) => {
            element.style.animation += `, fillText 0.5s ease-in-out forwards`;
        });
    }, drawComplete);
    
    // fill完了後にSVGを切り替え
    setTimeout(() => {
        svgAnimated.style.animation = 'fadeOut 0.3s ease-in-out forwards';
        svgFinal.style.animation = 'fadeIn 0.3s ease-in-out forwards';
    }, drawComplete + 500);
    
    // 看板持ち上げ＋自販機せり上がり
    setTimeout(() => {
        // SVGを固定位置に変更してアニメーション
        svgFinal.style.position = 'fixed';
        svgFinal.style.zIndex = '9999';
        svgFinal.style.animation = 'liftUp 1s ease-in-out forwards';
        
        // 自販機をせり上がらせる
        mainContainer.style.transform = 'translateY(0)';
        
        // svgFinalをフェードアウト＆ヘッダーロゴを表示
        setTimeout(() => {
            svgFinal.style.animation = 'fadeOut 0.5s ease-in-out forwards';
            headerLogo.classList.add('visible');
        }, 1000);
        
        // イントロコンテナを非表示
        setTimeout(() => {
            introContainer.classList.add('hidden');
            setTimeout(() => {
                introContainer.style.display = 'none';
            }, 500);
        }, 1500);
    }, drawComplete + 1500);
}

// DOMContentLoaded時に実行
window.addEventListener('DOMContentLoaded', initIntroAnimation);