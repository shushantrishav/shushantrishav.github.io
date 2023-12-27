$(document).ready(function () {
    var entries = [
      { label: "Python" },
      { label: "JavaScript" },
      { label: "HTML" },
      { label: "CSS" },
      { label: "Machine Learning" },
      { label: "C Programming" },
      { label: "Data Science" },
      { label: "Linux" },
      { label: "React" },
      { label: "SCSS" },
      { label: "Django"},

    ];
    var container = document.getElementById('map');
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;
    var settings = {
      height: containerHeight,
      width: containerWidth,
      entries: entries,
      radius: 75,
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
    var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
  });