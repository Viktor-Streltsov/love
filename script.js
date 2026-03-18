const convertEl = document.querySelector('.convert');
const textEl = document.querySelector('.text');
const videoEl = document.querySelector('.myVideo');
const htmlEl = document.documentElement;
const heartsLayerEl = document.getElementById('heartsLayer');

let loveClicks = 0;

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    window.setTimeout(() => toast.remove(), 1750);
}

function spawnHearts(count = 14) {
    if (!heartsLayerEl) return;

    const centerLeft = window.innerWidth / 2;
    const centerTop = window.innerHeight * 0.55;

    for (let i = 0; i < count; i++) {
        const heart = document.createElement('span');
        heart.className = 'float-heart';
        heart.textContent = i % 3 === 0 ? '💘' : i % 3 === 1 ? '💖' : '❤️';

        const dx = (Math.random() - 0.5) * 140; // px
        const rot = (Math.random() - 0.5) * 220; // deg
        const dur = 900 + Math.random() * 900; // ms

        heart.style.setProperty('--dx', `${dx.toFixed(0)}px`);
        heart.style.setProperty('--rot', `${rot.toFixed(0)}deg`);
        heart.style.setProperty('--dur', `${dur.toFixed(0)}ms`);

        // Прячем расчёт в одном месте, чтобы анимация была стабильной.
        heart.style.left = `${centerLeft + (Math.random() - 0.5) * 120}px`;
        heart.style.top = `${centerTop + (Math.random() - 0.5) * 40}px`;

        heartsLayerEl.appendChild(heart);
        window.setTimeout(() => heart.remove(), dur + 100);
    }
}

function markTextVisible(visible) {
    if (!textEl) return;
    textEl.classList.toggle('is-visible', visible);
}

function markVideoVisible(visible) {
    if (!videoEl) return;
    videoEl.classList.toggle('is-visible', visible);
    if (visible) {
        videoEl.play().catch(() => {});
    } else {
        videoEl.pause();
    }
}

function toggleText() {
    loveClicks++;
    spawnHearts(16);

    if (loveClicks === 3) {
        document.body.classList.add('funny-shake');
        showToast('Сер Мормонт: любовь поймана!');
        window.setTimeout(() => document.body.classList.remove('funny-shake'), 700);
    }

    if (convertEl && convertEl.classList.contains('is-hidden')) {
        return;
    }

    if (convertEl) convertEl.classList.add('is-hidden');
    markTextVisible(true);
    markVideoVisible(false);

    htmlEl.style.backgroundImage = 'url(cupidon.jpg)';
    htmlEl.style.backgroundRepeat = 'no-repeat';
    htmlEl.style.backgroundSize = 'cover';
    htmlEl.style.backgroundPosition = 'center';
}

function toggleVideo() {
    loveClicks++;
    spawnHearts(14);

    if (loveClicks === 6) {
        document.body.classList.add('funny-shake');
        showToast('Ого! Дальше будет танец!');
        window.setTimeout(() => document.body.classList.remove('funny-shake'), 700);
    }

    const isVideoVisible = videoEl && videoEl.classList.contains('is-visible');
    if (isVideoVisible) {
        markVideoVisible(false);
        markTextVisible(true);
        return;
    }

    markTextVisible(false);
    markVideoVisible(true);
}