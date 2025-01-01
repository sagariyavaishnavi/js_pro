function calculateCube() {
  const side = document.getElementById("cubeSide").value;
  const volume = Math.pow(side, 3);
  const surfaceArea = 6 * Math.pow(side, 2);
  document.getElementById("cubeResult").innerText = `Result:\nVolume: ${volume}\nSurface Area: ${surfaceArea}`;
}

function calculateSphere() {
  const radius = document.getElementById("sphereRadius").value;
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  const surfaceArea = 4 * Math.PI * Math.pow(radius, 2);
  document.getElementById("sphereResult").innerText = `Result:\nVolume: ${volume}\nSurface Area: ${surfaceArea}`;
}

function calculateCylinder() {
  const radius = document.getElementById("cylinderRadius").value;
  const height = document.getElementById("cylinderHeight").value;
  const volume = Math.PI * Math.pow(radius, 2) * height;
  const surfaceArea = 2 * Math.PI * radius * (radius + height);
  document.getElementById("cylinderResult").innerText = `Result:\nVolume: ${volume}\nSurface Area: ${surfaceArea}`;
}

function calculateCone() {
  const radius = document.getElementById("coneRadius").value;
  const height = document.getElementById("coneHeight").value;
  const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
  const slantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
  const surfaceArea = Math.PI * radius * (radius + slantHeight);
  document.getElementById("coneResult").innerText = `Result:\nVolume: ${volume}\nSurface Area: ${surfaceArea}`;
}

function calculateEllipsoid() {
  const r1 = parseFloat(document.getElementById("ellipsoid-radius1").value);
  const r2 = parseFloat(document.getElementById("ellipsoid-radius2").value);
  const r3 = parseFloat(document.getElementById("ellipsoid-radius3").value);
  const volume = (4 / 3) * Math.PI * r1 * r2 * r3;
  const p = 1.6075; // Approximation constant
  const surfaceArea = 4 * Math.PI * Math.pow(
      ((Math.pow(r1, p) * Math.pow(r2, p) + Math.pow(r1, p) * Math.pow(r3, p) + Math.pow(r2, p) * Math.pow(r3, p)) / 3),
      (1 / p)
  );
  document.getElementById("ellipsoidResult").innerText = `Result:\nVolume: ${volume.toFixed(2)}\nSurface Area: ${surfaceArea.toFixed(2)}`;
}

function calculatePyramid() {
  const base = document.getElementById("pyramidBase").value;
  const height = document.getElementById("pyramidHeight").value;
  const volume = (1 / 3) * Math.pow(base, 2) * height;
  const slantHeight = Math.sqrt(Math.pow(height, 2) + Math.pow(base / 2, 2));
  const surfaceArea = Math.pow(base, 2) + 2 * base * slantHeight;
  document.getElementById("pyramidResult").innerText = `Result:\nVolume: ${volume}\nSurface Area: ${surfaceArea}`;
}

function calculateTetrahedron() {
  const edge = document.getElementById("tetrahedronEdge").value;
  const volume = (Math.pow(edge, 3)) / (6 * Math.sqrt(2));
  document.getElementById("tetrahedronResult").innerText = `Result:\nVolume: ${volume}`;
}

function calculateHemisphere() {
  const radius = document.getElementById("hemisphereRadius").value;
  const volume = (2 / 3) * Math.PI * Math.pow(radius, 3);
  const surfaceArea = 3 * Math.PI * Math.pow(radius, 2);
  document.getElementById("hemisphereResult").innerText = `Result:\nVolume: ${volume}\nSurface Area: ${surfaceArea}`;
}

function calculateTorus() {
  const radius = document.getElementById("torusRadius").value;
  const tubeRadius = document.getElementById("torusTubeRadius").value;
  const volume = 2 * Math.PI * Math.PI * radius * Math.pow(tubeRadius, 2);
  const surfaceArea = 4 * Math.PI * Math.PI * radius * tubeRadius;
  document.getElementById("torusResult").innerText = `Result:\nVolume: ${volume}\nSurface Area: ${surfaceArea}`;
}