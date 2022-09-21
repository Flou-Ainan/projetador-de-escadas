import './App.css';
import { useEffect, useRef} from 'react';
import p5 from 'p5';

function Escada(props) {
    
    function sketch(p) {
        p.setup = function() {
            //Dados de Inicialização
            let alturaCM = props.altura
            let espelhoCM = props.espelho
            let pisoCM = props.piso
            let baseCM = 0
            let degQuant = 0

            let alturaCanvasPX = 400
            let larguraCanvas = 600


    
    
            //Cria o Canvas
            p.createCanvas(larguraCanvas, alturaCanvasPX);
            p.background(200);
    
            // Set colors
            p.fill(100, 100, 100);
            p.stroke(127, 63, 120, 0);
    
            // Gerador da escada
            let alturaDeg = alturaCM - espelhoCM 
            let distanciaDeg = 0
            // Ultimo Degrau do andar superior
            p.rect(
                0,
                alturaCanvasPX-alturaCM,
                2,
                espelhoCM
            )
    
            //  --- Montagem da escada ---- //
    
            // Projeto de Objeto escada como estrutura de dados
            // Projeto de loop que varre o objeto escada
            //let i = 0;
            /* while(i < escada.degraus.length){
                let degrau = escada.degraus[i]
                console.log(
                    degrau.altura + 
                    degrau.piso + 
                    degrau.espelho
                    )
            } */
    
            while(alturaDeg >= 1){
                p.rect(
                    distanciaDeg,  //Distancia em relação a parede
                    alturaCanvasPX-alturaDeg, // Posição Y do degrau
                    pisoCM, //tamanho do espelho do degrau 
                    alturaDeg // altura do degrau 
                )
                alturaDeg -= espelhoCM
                distanciaDeg += pisoCM
                degQuant += 1
                baseCM += pisoCM 
    
            }
            degQuant += 1
            console.log(degQuant)
            console.log(baseCM)
        }
    }
    
    
    
    
    
    
    // create a reference to the container in which the p5 instance should place the canvas
    const p5ContainerRef = useRef();
    useEffect(() => {
        // On component creation, instantiate a p5 object with the sketch and container reference 
        const p5Instance = new p5(sketch, p5ContainerRef.current);

        // On component destruction, delete the p5 instance
        return () => {
            p5Instance.remove();
        }
    });

    return (
        <div className="Escada" ref={p5ContainerRef} />
    );
}


export default Escada;