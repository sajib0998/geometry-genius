function calculateTriangleArea(){
    // base
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    
    // height
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    
    // calculate area
    const area = 0.5 * base * height;

    // where to see
    const totalArea = document.getElementById('total-area');
    totalArea.innerText = area;
   

}

// rectangle

function calculateRectangleArea(){
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthValue = rectangleWidthInput.value;
    const width  = parseFloat(rectangleWidthValue);

    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthValue = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthValue)

    area = width * length;

    const totalArea = document.getElementById('rectangle-total');
    totalArea.innerText = area;
}
