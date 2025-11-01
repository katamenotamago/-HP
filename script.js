document.addEventListener('DOMContentLoaded', () => {
    // 必要な要素を取得
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelectorAll('.nav-links a');

    // メニュー開閉機能を登録
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }
    
    // メニュー内のリンクをクリックした際の処理を登録
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // メニューの開閉を行う関数
    function toggleMenu() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    }

    // メニューを閉じる関数
    function closeMenu() {
        // スムーズスクロールを動作させるため、遅延を設ける
        setTimeout(() => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }, 100); 
    }
});