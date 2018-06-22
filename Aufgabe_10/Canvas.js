/*  Aufgabe: Aufgabe 10 : Canvas Animation
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 22.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var L10_Animation;
(function (L10_Animation) {
    window.addEventListener("load", init);
    var imgData;
    let fishs = [];
    let bubbles = [];
    let anchors = [];
    let chains = [];
    function init(_event) {
        L10_Animation.canvas = document.getElementsByTagName("canvas")[0];
        L10_Animation.crc2 = L10_Animation.canvas.getContext("2d");
        console.log(L10_Animation.crc2);
        L10_Animation.drawBackground();
        imgData = L10_Animation.crc2.getImageData(0, 0, L10_Animation.canvas.width, L10_Animation.canvas.height);
        //Fische
        for (let i = 0; i < 8; i++) {
            let oneFish = new L10_Animation.Fish();
            oneFish.x = Math.random() * L10_Animation.crc2.canvas.width;
            oneFish.y = Math.random() * L10_Animation.crc2.canvas.height - 200;
            oneFish.speed = (Math.random() + 1) * 0.5;
            fishs.push(oneFish);
        }
        //Bubbles links
        for (let i = 0; i < 12; i++) {
            let oneBubble = new L10_Animation.Bubble();
            oneBubble.x = Math.random() * (100 - 300) + 300;
            oneBubble.y = Math.random() * 325;
            oneBubble.r = (Math.random() + 0.1) * 6;
            bubbles.push(oneBubble);
        }
        //Bubbles rechts
        for (let i = 0; i < 20; i++) {
            let oneBubble = new L10_Animation.Bubble();
            oneBubble.x = Math.random() * (750 - 900) + 900;
            oneBubble.y = Math.random() * 480;
            oneBubble.r = Math.random() * 10;
            bubbles.push(oneBubble);
        }
        //Anker
        window.setTimeout(sinkAnchor, 10);
        function sinkAnchor() {
            for (let i = 0; i < 1; i++) {
                console.log("anker");
                let oneAnchor = new L10_Animation.Anchor();
                oneAnchor.x = 590;
                //oneAnchor.y = -10;
                oneAnchor.y = 0;
                anchors.push(oneAnchor);
            }
        }
        //Kette
        for (let i = 0; i < 1; i++) {
            let oneChain = new L10_Animation.Chain();
            oneChain.x = 603;
            oneChain.y = -128;
            chains.push(oneChain);
        }
        animate();
    } //init zu
    function animate() {
        window.setTimeout(animate, 10);
        L10_Animation.crc2.clearRect(0, 0, L10_Animation.crc2.canvas.width, L10_Animation.crc2.canvas.height);
        L10_Animation.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    } //animate zu
    function moveObjects() {
        //Fische
        for (let i = 0; i < fishs.length; i++) {
            fishs[i].moveForward();
            //um die fische neu zu spawnen, wenn sie aus dem Bild schwimmen
            if (fishs[i].x < -200) {
                fishs[i].x = L10_Animation.canvas.width + 50;
                fishs[i].y = Math.random() * L10_Animation.crc2.canvas.height - 200;
            }
        }
        //Luftblasen
        for (let i = 0; i < bubbles.length; i++) {
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
        //Anker               
        for (let i = 0; i < anchors.length; i++) {
            if (anchors[i].y == 644) {
                anchors[i].x = 590;
                anchors[i].y = 644;
            }
            else {
                anchors[i].move();
            }
        }
        //Kette
        for (let i = 0; i < chains.length; i++) {
            if (chains[i].y == 519 + i) {
                chains[i].y = 519 + i;
            }
            else {
                chains[i].move();
            }
        }
    } //moveObjects zu
    function drawObjects() {
        for (let i = 0; i < fishs.length; i++)
            fishs[i].draw();
        for (let i = 0; i < bubbles.length; i++)
            bubbles[i].draw();
        for (let i = 0; i < anchors.length; i++)
            anchors[i].draw();
        for (let i = 0; i < chains.length; i++)
            chains[i].draw();
    } //drawObjects zu
})(L10_Animation || (L10_Animation = {})); //namespace zu
//# sourceMappingURL=Canvas.js.map