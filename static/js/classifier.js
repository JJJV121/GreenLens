// detect.js

let model;

async function loadModel() {
    model = await mobilenet.load();
    console.log("Model Loaded");
}
loadModel();

document.getElementById('imageUpload').addEventListener('change', function(e){
    const file = e.target.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(){
            document.getElementById('preview').src = reader.result;
        }
        reader.readAsDataURL(file);
    }
});

async function detectWaste() {
    const image = document.getElementById('preview');
    if(!image.src) return alert("Upload an image first!");

    const predictions = await model.classify(image);
    console.log(predictions);

    let wasteType="Unknown", guidance="Dispose carefully";
    const label = predictions[0].className.toLowerCase();

    if(label.includes("plastic") || label.includes("bottle")) {
        wasteType="Plastic"; guidance="Recycle in plastic bin.";
    } else if(label.includes("paper") || label.includes("book")) {
        wasteType="Paper"; guidance="Recycle in paper bin.";
    } else if(label.includes("organic") || label.includes("food")) {
        wasteType="Organic"; guidance="Compost or organic waste bin.";
    } else if(label.includes("metal") || label.includes("can")) {
        wasteType="Metal"; guidance="Recycle in metal bin.";
    } else if(label.includes("glass") || label.includes("bottle glass")) {
        wasteType="Glass"; guidance="Recycle in glass bin.";
    } else if(label.includes("electronics") || label.includes("phone") || label.includes("laptop")) {
        wasteType="E-Waste"; guidance="Take to hazardous/e-waste collection.";
    }

    document.getElementById('result').innerHTML = `
        <h3>Detected Waste Type: ${wasteType}</h3>
        <p>Suggested Disposal: ${guidance}</p>
    `;
}
