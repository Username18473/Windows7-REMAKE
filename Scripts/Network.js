function updateNetworkIcon() {
    const icon = document.getElementById('network-icon');
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    if (connection) {
        const speed = connection.downlink;

        if (speed > 10) {
            icon.src = 'Signal//signal-full.png';
        } else if (speed > 5) {
            icon.src = 'Signal/signal-excellent.png';
        } else if (speed > 2) {
            icon.src = 'Signal/signal-average.png';
        } else if (speed > 1) {
            icon.src = 'Signal/signal-medium.png';
        } else if (speed > 0.5) {
            icon.src = 'Signal/signal-low.png';
        } else {
            icon.src = 'Signal/signal-none.png';
        }
    } else {
        console.log('Network Information API is not supported in your browser.');
    }
}

setInterval(updateNetworkIcon, 1000);
updateNetworkIcon();

