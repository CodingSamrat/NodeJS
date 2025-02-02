const QRCode = require('qrcode');
const fs = require('fs');

QRCode.toFile('qrcode.png', 'https://techbaan.com', {
    color: {
        dark: '#252525',
        light: '#ffffff'  // make it transparent
    }
}, (err) => {
    if (err) throw err;
    console.log('QR Code saved as qrcode.png');
});
