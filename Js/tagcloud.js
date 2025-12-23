$(document).ready(function () {
  var entries = [
    { label: "Golang" },
    { label: "GenAI" },
    { label: "GoRoutine" },
    { label: "LLM (RAG)" },
    { label: "Python" },
    { label: "C++" },
    { label: "FastAPI" },
    { label: "Django" },
    { label: "PostgreSQL" },
    { label: "Redis" },
    { label: "Docker" },
    { label: "Microservices" },
    { label: "AWS" },
    { label: "Linux" },
    { label: "JWT" },
    { label: "Data Science" },
    { label: "Machine Learning" },
    { label: "LightGBM" },
    { label: "SQL" },
    { label: "Git" },
    { label: "CI/CD" },
    { label: "Web3" },
    { label: "Solidity" },
    { label: "SpringBoot" },
    { label: "Gradle" },
    { label: "REST API" },
  ];
  var container = document.getElementById('map');
  if (container) {
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;
    var settings = {
      height: containerHeight,
      width: containerWidth,
      entries: entries,
      radius: 70,
      radiusMin: 75,
      bgDraw: true,
      bgColor: 'none',
      opacityOver: 1.00,
      opacityOut: 0.05,
      opacitySpeed: 6,
      fov: 800,
      speed: 0.5,
      fontToUpperCase: true,
      tooltipDiffX: 0,
      tooltipDiffY: 10,
    };
    var svg3DTagCloud = new SVG3DTagCloud(document.getElementById('holder'), settings);
  }
});