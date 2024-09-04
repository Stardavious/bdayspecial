// Disable context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Prevent common shortcuts
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 'U' || e.key === 'S' || e.key === 'I' || e.key === 'J')) {
        e.preventDefault();
    }
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
    }
});

// Monitor for DevTools open (not always reliable)
let devtoolsOpen = false;
const threshold = 160;

setInterval(function() {
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    if ((widthThreshold && heightThreshold) || window.Firebug || window.sidebar?.addPanel) {
        if (!devtoolsOpen) {
            devtoolsOpen = true;
            alert('Developer tools detected!');
        }
    } else {
        devtoolsOpen = false;
    }
}, 1000);
