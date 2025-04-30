import qrcode from 'qrcode-terminal';

qrcode.generate('Bienvenidos a Full Stack');

qrcode.generate('http://cei.es',{small: true}, function (qrcode) {
    console.log(qrcode);
});