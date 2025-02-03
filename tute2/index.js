import QRCode from 'qrcode'
QRCode.toFile('./tbqr-bg.png', 'https://techbaan.com/info', {
    color: {
        dark: '#252525',
        light: '#fff'
    }
}, (err) => {
    if (err) throw err;
});
