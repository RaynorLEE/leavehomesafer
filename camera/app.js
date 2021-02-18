//jsQR = import('./jsQR.js').jsQR;
import('./qr-scanner.min.js').then((module) => {
    QrScanner = module.default;
	console.log('Scanner loaded')
    // https://github.com/nimiq/qr-scanner
});

// Set constraints for the video stream
var constraints = { video: { facingMode: "environment" }, audio: false };
var track = null;
var capturedImage = null;

// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger");

// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(function(error) {
            console.error("Cannot start camera", error);
        });
}

function decodeQRCode(str) {
	let base64str = str.substr(14);
	let jsonstr = atob(base64str);
	console.log(jsonstr)
	let content = JSON.parse(jsonstr)
	let name = content['nameEn']
	return name
}

// Take a picture when cameraTrigger is tapped
cameraTrigger.onclick = function() {
    // rest assured, this will do nothing.
    // track.stop();
	
	console.log('capturing')
	let capture = new ImageCapture(track);
	capture.grabFrame().then(bitmap => {
		capturedImage = bitmap;   // ImageBitmap
		console.log('captured'); 
		console.log('' + capturedImage.height + ', ' + capturedImage.width)
		QrScanner.scanImage(bitmap)
		    .then(result => {
				console.log(result);
				let name = decodeQRCode(result);
				window.location.href = './enter.html?name=' + encodeURI(name)
			})
		    .catch(error => console.log(error || 'No QR code found.'));
	})
	return false
};

// Start the video stream and "pretend" to scan QR code
window.addEventListener("load", cameraStart, false);
