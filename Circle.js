const circleArea = ( radius ) => {
    return Math.PI * radius * radius;  
};

const   circlePerimeter = ( radius ) => {
    return 2 * Math.PI * radius; 
};
// console.log( `Dairenin alanı: ${circleArea(5)}` );
// console.log( `Dairenin çevresi: ${circlePerimeter(5)}` );
module.exports = {
    circleArea,
    circlePerimeter
};

