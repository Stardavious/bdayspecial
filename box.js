document.getElementById('giftBox').addEventListener('click', function() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
    setTimeout(() => {
        window.location.href = 'greetings.html';
    }, 2000);
});
