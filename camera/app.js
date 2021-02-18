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

// Take a picture when cameraTrigger is tapped
cameraTrigger.onclick = function() {
    // rest assured, this will do nothing.
    // track.stop();
	
	console.log('capturing')
	capturedImage = track.grabFrame()
	console.log('captured')
};

// Start the video stream and "pretend" to scan QR code
window.addEventListener("load", cameraStart, false);
