/*  Aufgabe: Aufgabe 10 : Canvas Animation
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 21.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace L10_Animation {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    var imgData: ImageData;
    export let canvas: HTMLCanvasElement;

    let fishs: Fish[] = [];
    let bubbles: Bubble[] = [];
    let anchors: Anchor[] = [];


    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        drawBackground();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < 8; i++) {
            let oneFish: Fish = new Fish();
            oneFish.x = Math.random() * crc2.canvas.width;
            oneFish.y = Math.random() * crc2.canvas.height - 200;
            oneFish.speed = Math.random() + 0.2;
            fishs.push(oneFish);
        }

        //Bubbles links
        for (let i: number = 0; i < 12; i++) {
            let oneBubble: Bubble = new Bubble();
            oneBubble.x = Math.random() * (100 - 300) + 300;
            oneBubble.y = Math.random() * 325;
            oneBubble.r = Math.random() * 5;
            bubbles.push(oneBubble);
        }

        //Bubbles rechts
        for (let i: number = 0; i < 20; i++) {
            let oneBubble: Bubble = new Bubble();
            oneBubble.x = Math.random() * (750 - 900) + 900;
            oneBubble.y = Math.random() * 480;
            oneBubble.r = Math.random() * 10;
            bubbles.push(oneBubble);
        }

        //Anker
        for (let i: number = 0; i < 1; i++) {
            console.log("anker");
            let oneAnchor: Anchor = new Anchor();
            oneAnchor.x = 590;
            oneAnchor.y = 500;
            anchors.push(oneAnchor);
        }


        animate();


    } //init zu

    function animate(): void {
        window.setTimeout(animate, 10);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);

        moveObjects();
        drawObjects();
    }

    function moveObjects(): void {


        for (let i: number = 0; i < fishs.length; i++) {
            fishs[i].moveForward();

            //um die fische neu zu spawnen, wenn sie aus dem Bild schwimmen
            if (fishs[i].x < -200) {
                fishs[i].x = canvas.width + 50;
                fishs[i].y = Math.random() * crc2.canvas.height - 200;
            }
        }
        
        for (let i: number = 0; i < fishs.length; i++)
            fishs[i].moveUpAndDown();

        for (let i: number = 0; i < bubbles.length; i++) {
            bubbles[i].move();

            //Luftblasen links:
            if (bubbles[i].x < 500 && bubbles[i].y < -50) {
                bubbles[i].x = Math.random() * (100 - 300) + 300;
                bubbles[i].y = Math.random() * 100 + 325;
            }
            //Luftblasen rechts
            if (bubbles[i].x > 500 && bubbles[i].y < -50) {
                bubbles[i].x = Math.random() * (750 - 900) + 900;
                bubbles[i].y = Math.random() * 10 + 470;
            }
        }

        for (let i: number = 0; i < anchors.length; i++) {            
            
            if (anchors[i].y == 644) {
                anchors[i].x = 590;
                anchors[i].y = 644;
                
            } else {
                anchors[i].move();
            }
        }

    } //moveObjects zu

    function drawObjects(): void {
        for (let i: number = 0; i < fishs.length; i++)
            fishs[i].draw();
        crc2.setTransform(1.0, 0, 0, 1.0, 0, 0);
        for (let i: number = 0; i < bubbles.length; i++)
            bubbles[i].draw();
        for (let i: number = 0; i < anchors.length; i++) {
            anchors[i].draw();
        }
    }


} //namespace zu