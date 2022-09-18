import './App.css';
import { useEffect, useRef} from 'react';
import p5 from 'p5';

function Escada() {
    // create a reference to the container in which the p5 instance should place the canvas
    const p5ContainerRef = useRef();
    useEffect(() => {
        // On component creation, instantiate a p5 object with the sketch and container reference 
        const p5Instance = new p5(sketch, p5ContainerRef.current);

        // On component destruction, delete the p5 instance
        return () => {
            p5Instance.remove();
        }
    }, []);

    return (
        <div className="Escada" ref={p5ContainerRef} />
    );
}



function sketch(p) {
  // p is a reference to the p5 instance this sketch is attached to
  p.setup = function() {
    p.createCanvas(720, 400);
    p.background(170);
  
    // Set colors
    p.fill(204, 101, 192, 127);
    p.stroke(127, 63, 120);
  
    // A rectangle
    p.rect(40, 120, 120, 40);
  

  p.draw = function() {
      // your draw code here
  }
}
}


export default Escada;