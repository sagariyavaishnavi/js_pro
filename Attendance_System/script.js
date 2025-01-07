let classifier;
let isModelLoaded = false;
const statusElement = document.getElementById('status');
const webcamFeed = document.getElementById('webcam-feed');
const startWebcamButton = document.getElementById('start-webcam');
const stopWebcamButton = document.getElementById('stop-webcam');
const resultsSection = document.getElementById('results');
const attendanceStatus = document.getElementById('attendance-status');

async function initializeModel() {
    if (statusElement) statusElement.textContent = 'Loading model...';
    try {
        classifier = await ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/AfrrtJQc3/', () => {
            isModelLoaded = true;
            if (statusElement) statusElement.textContent = 'Model loaded successfully!';
            console.log('Model loaded successfully!');
        });
    } catch (error) {
        console.error('Error loading model:', error);
        if (statusElement) statusElement.textContent = 'Error loading model.';
    }
}

async function startWebcam() {
    if (!isModelLoaded) {
        alert('Model is not loaded yet.');
        return;
    }
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        webcamFeed.srcObject = stream;
        webcamFeed.classList.remove('hidden');
        resultsSection.classList.remove('hidden');
        startWebcamButton.classList.add('hidden');
        stopWebcamButton.classList.remove('hidden');
        classifyWebcam();
    } catch (error) {
        console.error('Error accessing webcam:', error);
        alert('Error accessing webcam. Please allow camera permissions.');
    }
}

async function classifyWebcam() {
    if (!webcamFeed.srcObject || !isModelLoaded) return;

    try {
        const results = await classifier.classify(webcamFeed);

        console.log('Classification results:', results);

        if (results.length > 0) {
            const { label, confidence } = results[0];
            console.log(`Label: ${label}, Confidence: ${confidence}`);

            if (confidence > 0.4) { 
                if (label === 'Vaishnavi') {
                    attendanceStatus.textContent = `Detected: ${label} (${(confidence * 100).toFixed(2)}%)`;
                    attendanceStatus.style.color = '#2ecc71'; 
                } else if (label === 'Others') {
                    attendanceStatus.textContent = `Detected: ${label} (${(confidence * 100).toFixed(2)}%)`;
                    attendanceStatus.style.color = '#e74c3c'; 
                }
            } else {
                attendanceStatus.textContent = 'Uncertain detection.';
                attendanceStatus.style.color = '#f1c40f'; 
            }
        } else {
            attendanceStatus.textContent = 'No face detected.';
            attendanceStatus.style.color = '#e74c3c'; 
        }
    } catch (error) {
        console.error('Error classifying webcam feed:', error);
    }

    requestAnimationFrame(classifyWebcam); 
}

function stopWebcam() {
    const stream = webcamFeed.srcObject;
    if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
    }
    webcamFeed.srcObject = null;
    webcamFeed.classList.add('hidden');
    resultsSection.classList.add('hidden');
    stopWebcamButton.classList.add('hidden');
    startWebcamButton.classList.remove('hidden');
}

if (startWebcamButton) startWebcamButton.addEventListener('click', startWebcam);
if (stopWebcamButton) stopWebcamButton.addEventListener('click', stopWebcam);

initializeModel();
