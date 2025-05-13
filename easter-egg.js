const medicalEmojis = ["🥼", "💊", "🧪", "🔬", "🦠", "🌡", "📋", "❤️", "🎓", "👨⚕", "👩⚕"];
let eggCount = 0;

document.querySelector('.logo').addEventListener('click', function(e) {
    e.preventDefault();
    if(eggCount >= 3) return;
    
    // Create emoji explosion
    const container = document.getElementById('easter-container');
    const logoRect = this.getBoundingClientRect();
    
    for(let i = 0; i < 25; i++) {
        const emoji = document.createElement('div');
        emoji.textContent = medicalEmojis[Math.floor(Math.random() * medicalEmojis.length)];
        emoji.style.position = 'absolute';
        emoji.style.left = `${logoRect.left + logoRect.width/2}px`;
        emoji.style.top = `${logoRect.top + logoRect.height/2}px`;
        emoji.style.fontSize = `${Math.random() * 2 + 1}rem`;
        emoji.style.animation = `emojiFloat ${Math.random() * 2 + 2}s ease-out forwards`;
        container.appendChild(emoji);
        
        setTimeout(() => emoji.remove(), 2000);
    }

    // Open link after animation
    setTimeout(() => {
        window.open(this.parentElement.querySelector('area').href, '_blank');
    }, 1000);

    eggCount++;
    if(eggCount === 3) {
        setTimeout(() => alert('Congratulations! You found the secret!'), 1500);
    }
});