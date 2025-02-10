import QRCode from 'qrcode'
QRCode.toFile('./sunchakro.png', 'https://sunchakro.com/', {
    color: {
        dark: '#000',
        light: '#fff'
    }
}, (err) => {
    if (err) throw err;
});
