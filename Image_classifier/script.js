let classifier;
let img;

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/khTfpduG7/");

function gotResult(results) {
    // Display the results
    console.log(results)
    let label = results[0].label;
    let confidence = (results[0].confidence * 100).toFixed(2);
    document.getElementById("myResult").innerHTML = label + "<br>Confidence: " + confidence + "%";
}

function handleFileUpload(event) {
  const file = event.target.files[0]; // Get the uploaded file
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const image = document.getElementById("previewImage");
      image.src = e.target.result;
      image.style.display = "block";
    };
    reader.readAsDataURL(file); // Read the file as a data URL for the image source
  } else {
    console.log("No file selected.");
  }
}
  
function handleClassify(event){
  const image = document.getElementById("previewImage");

  document.getElementById("myResult").innerHTML = "Classifying....";
  if(image && image.src){
    classifier.classify(image, gotResult);
    return;
  }
  console.log("first upload file");
}