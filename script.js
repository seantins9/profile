// 标签页切换功能
const tabBtns = document.querySelectorAll('.tab-btn');
const contentGrids = document.querySelectorAll('.content-grid');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 移除所有标签的active类
        tabBtns.forEach(b => b.classList.remove('active'));
        // 给当前点击的标签添加active类
        btn.classList.add('active');
        
        // 隐藏所有内容
        contentGrids.forEach(grid => grid.classList.remove('active'));
        // 显示对应的内容
        const targetGrid = document.getElementById(`${btn.dataset.tab}-content`);
        if (targetGrid) {
            targetGrid.classList.add('active');
        }
    });
});

// 返回顶部按钮功能
const backToTopBtn = document.getElementById('back-to-top');

// 显示/隐藏返回顶部按钮
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// 点击返回顶部
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 导航栏平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 页面加载时的渐入动画
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });

    // 为内容卡片添加渐入动画
    const cards = document.querySelectorAll('.content-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });
        
        cardObserver.observe(card);
    });
});

// 导航栏滚动效果
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}); 