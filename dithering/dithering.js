let black;
let ditherType = 'atkinson';
let threshold = 50;
let invertgak = 'no';
//var ditheralgorithm = ['atkinson', 'floydsteinberg', 'bayer', 'none'];
//let changealgorithm = 'atkinson';
let w = 800;
let h = 600;

let gambar;




function setup() {
    w = 700
    h = 450
    let canvas = createCanvas(w,h);
    canvas.parent('output-riso'); 

    //gui = createGui('dither machinnnnn');

    // set opacity range with magic variables
    //gui.addGlobals('ditheralgorithm');
    background(100);
}





function draw() {
    // Once you have the image you can do what you like with it.  Here I am resizing it to the height of the canvas while maintaining the aspect ratio and displaying it as the background. 
    if(gambar){
      if(gambar.height && gambar.height !== h){
        //gambar.resize(gambar.width*h/gambar.height, h)
        resizeCanvas(gambar.width, gambar.height)
        w = gambar.width
        h = gambar.height
        pixelDensity(1);
        black = new Riso('black'); //create black layer
      }


      background(220);
      //let threshold = map(mouseX, 0, width, 0, 255); //change dither threshold with mouse position
      //let threshold = 255; //
     clearRiso();

    let dithered = ditherImage(gambar, ditherType, threshold);//pass image to dither
    black.image(dithered, 0, 0); //draw dithered image

                        // pick a algorithm
                //        switch(ditheralgorithm) {
      
                  //          case 'atkinson':
                    //          ditherType = 'atkinson';
                      //        break;
                      
                      //      case 'floydsteinberg':
                        //      ditherType = 'floydsteinberg';
                        //      break;
                      
                         //   case 'bayer':
                         //     ditherType = 'bayer';
                         //     break;
                      
                     //       case 'none':
                       //       ditherType = 'none';
                         //     break;
                    
                      
                          //}



  if (invertgak == 'no') {  drawRiso(); } else { 
        drawRiso();
        filter(INVERT);
    }
  

    } else {
      background(200);
    }
  }


  function handleFile() {
    const selectedFile = document.getElementById('upload');
    const myImageFile = selectedFile.files[0];
    let urlOfImageFile = URL.createObjectURL(myImageFile);
    gambar = loadImage(urlOfImageFile);
  }


  function changealgorithm(type) {
    ditherType =  type;
    console.log ("algorithm change to >>", ditherType);
  }

  function changethreshold(numbers) {
    threshold = numbers;
    console.log ("threshold value change to >>", threshold);
  }

  
  

//function keyReleased() { //function to change dither type with a keypress
//  if (key == 1) ditherType = 'atkinson';
//  else if (key == 2) ditherType = 'floydsteinberg';
//  else if (key == 3) ditherType = 'bayer';
//  else if (key == 4) ditherType = 'none';
//  else if (key == 5) exportRiso();
//}