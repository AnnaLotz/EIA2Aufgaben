/*  Aufgabe: Aufgabe 10 : Canvas Animation
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 24.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var L10_Animation;
(function (L10_Animation) {
    function drawBackground() {
        drawWater();
        drawSeaGrass(275, 400);
        drawSeaGrass(290, 425);
        drawSeaGrass(150, 390);
        // Save und den restored wieder skalieren
        L10_Animation.crc2.scale(0.5, 0.5);
        drawSeaGrass(480, 780);
        drawSeaGrass(410, 800);
        drawSeaGrass(375, 790);
        L10_Animation.crc2.setTransform(1.0, 0, 0, 1.0, 0, 0);
        drawSeaGrass(75, 460);
        drawStoneBackground();
        drawSand();
        L10_Animation.crc2.scale(0.5, 0.5);
        drawSeaGrass(395, 1180);
        drawSeaGrass(360, 1200);
        drawSeaGrass(415, 1230);
        drawSeaGrass(450, 1210);
        L10_Animation.crc2.scale(2, 2);
        drawStoneA(200, 575);
        drawStoneB(680, 620);
        drawChest(750, 460);
    }
    L10_Animation.drawBackground = drawBackground;
    function drawWater() {
        let gradient = L10_Animation.crc2.createLinearGradient(50, 0, 10, 300);
        gradient.addColorStop(0, "#63B4FF");
        gradient.addColorStop(1, "#3C68E8");
        L10_Animation.crc2.fillStyle = gradient;
        L10_Animation.crc2.fillRect(0, 0, 1000, 700);
    }
    function drawStoneBackground() {
        L10_Animation.crc2.beginPath();
        L10_Animation.crc2.fillStyle = "rgb(166, 166, 166)";
        L10_Animation.crc2.moveTo(0, 510);
        L10_Animation.crc2.lineTo(50, 425);
        L10_Animation.crc2.lineTo(90, 415);
        L10_Animation.crc2.lineTo(115, 330);
        L10_Animation.crc2.lineTo(130, 365);
        L10_Animation.crc2.lineTo(175, 387);
        L10_Animation.crc2.lineTo(275, 520);
        L10_Animation.crc2.closePath();
        L10_Animation.crc2.stroke();
        L10_Animation.crc2.fill();
        L10_Animation.crc2.beginPath();
        L10_Animation.crc2.fillStyle = "rgb(179, 179, 179)";
        L10_Animation.crc2.moveTo(150, 470);
        L10_Animation.crc2.lineTo(180, 395);
        L10_Animation.crc2.lineTo(215, 385);
        L10_Animation.crc2.lineTo(225, 360);
        L10_Animation.crc2.lineTo(248, 390);
        L10_Animation.crc2.lineTo(275, 380);
        L10_Animation.crc2.lineTo(320, 420);
        L10_Animation.crc2.lineTo(330, 480);
        L10_Animation.crc2.lineTo(425, 660);
        L10_Animation.crc2.closePath();
        L10_Animation.crc2.stroke();
        L10_Animation.crc2.fill();
    }
    function drawSand() {
        L10_Animation.crc2.beginPath();
        L10_Animation.crc2.fillStyle = "rgba(237, 192, 44, 1)";
        let gradient = L10_Animation.crc2.createLinearGradient(0, 550, 0, 700);
        gradient.addColorStop(0, "#F5DC32");
        gradient.addColorStop(1, "#D1B15A");
        L10_Animation.crc2.fillStyle = gradient;
        L10_Animation.crc2.moveTo(0, 475);
        L10_Animation.crc2.quadraticCurveTo(50, 475, 85, 440);
        L10_Animation.crc2.quadraticCurveTo(175, 380, 255, 460);
        L10_Animation.crc2.quadraticCurveTo(375, 540, 470, 480);
        L10_Animation.crc2.quadraticCurveTo(560, 430, 645, 480);
        L10_Animation.crc2.quadraticCurveTo(730, 530, 780, 480);
        L10_Animation.crc2.quadraticCurveTo(800, 450, 1000, 450);
        L10_Animation.crc2.lineTo(1000, 700);
        L10_Animation.crc2.lineTo(0, 700);
        L10_Animation.crc2.closePath();
        L10_Animation.crc2.stroke();
        L10_Animation.crc2.fill();
    }
    function drawChest(_x, _y) {
        L10_Animation.crc2.lineWidth = 1;
        L10_Animation.crc2.strokeStyle = "rgb(0, 0, 0)";
        L10_Animation.crc2.beginPath();
        L10_Animation.crc2.fillStyle = "rgb(102, 51, 0)";
        L10_Animation.crc2.moveTo(_x, _y); //A
        L10_Animation.crc2.lineTo(_x, _y + 50); //B
        L10_Animation.crc2.lineTo(_x + 100, _y + 100); //C
        L10_Animation.crc2.lineTo(_x + 100, _y + 50); //D
        L10_Animation.crc2.lineTo(_x, _y); //A
        L10_Animation.crc2.fill();
        L10_Animation.crc2.stroke();
        L10_Animation.crc2.beginPath();
        L10_Animation.crc2.moveTo(_x, _y); //A
        L10_Animation.crc2.lineTo(_x + 50, _y); //G
        L10_Animation.crc2.lineTo(_x + 150, _y + 50); //E
        L10_Animation.crc2.lineTo(_x + 100, _y + 50); //D 
        L10_Animation.crc2.lineTo(_x, _y); //A
        L10_Animation.crc2.fill();
        L10_Animation.crc2.stroke();
        L10_Animation.crc2.moveTo(_x + 100, _y + 100); //C
        L10_Animation.crc2.lineTo(_x + 150, _y + 100); //F
        L10_Animation.crc2.lineTo(_x + 150, _y + 50); //E
        L10_Animation.crc2.lineTo(_x + 100, _y + 50); //D
        L10_Animation.crc2.fill();
        L10_Animation.crc2.stroke();
        L10_Animation.crc2.moveTo(_x + 50, _y); //G
        L10_Animation.crc2.lineTo(_x + 25, _y - 45); //H
        L10_Animation.crc2.lineTo(_x + 125, _y + 5); //I
        L10_Animation.crc2.lineTo(_x + 150, _y + 50); //E
        L10_Animation.crc2.fill();
        L10_Animation.crc2.stroke();
        L10_Animation.crc2.closePath();
        /*
         crc2.moveTo(_x, _y); //A
         crc2.lineTo(_x , _y + 50); //B
         crc2.lineTo(_x + 100, _y + 100); //C
         crc2.lineTo(_x + 100, _y + 50); //D
         crc2.lineTo(_x + 150, _y + 50); //E
         crc2.lineTo(_x + 150, _y + 150); //F
         crc2.lineTo(_x + 50, _y); //G
         crc2.lineTo(_x + 25, _y - 45); //H
         crc2.lineTo(_x + 125, _y + 5); //I
         crc2.lineTo(_x + 135, _y + 15); //J
         crc2.lineTo(_x + 35, _y - 35); //K
         crc2.closePath();
         crc2.stroke(); */
    }
    function drawStoneA(_x, _y) {
        L10_Animation.crc2.beginPath();
        L10_Animation.crc2.strokeStyle = "rgb(77, 77, 77)";
        L10_Animation.crc2.fillStyle = "rgb(166, 166, 166)";
        L10_Animation.crc2.lineTo(_x + 35, _y + 20);
        L10_Animation.crc2.lineTo(_x + 30, _y + 50);
        L10_Animation.crc2.lineTo(_x + 10, _y + 60);
        L10_Animation.crc2.lineTo(_x - 20, _y + 55);
        L10_Animation.crc2.lineTo(_x - 30, _y + 50);
        L10_Animation.crc2.lineTo(_x - 40, _y + 25);
        L10_Animation.crc2.lineTo(_x, _y);
        L10_Animation.crc2.closePath();
        L10_Animation.crc2.stroke();
        L10_Animation.crc2.fill();
    }
    function drawStoneB(_x, _y) {
        L10_Animation.crc2.beginPath();
        L10_Animation.crc2.fillStyle = "rgb(166, 166, 166)";
        L10_Animation.crc2.lineTo(_x - 20, _y + 20);
        L10_Animation.crc2.lineTo(_x - 60, _y + 25);
        L10_Animation.crc2.lineTo(_x - 90, _y + 18);
        L10_Animation.crc2.lineTo(_x - 80, _y - 20);
        L10_Animation.crc2.lineTo(_x - 50, _y - 40);
        L10_Animation.crc2.lineTo(_x - 10, _y - 25);
        L10_Animation.crc2.lineTo(_x, _y);
        L10_Animation.crc2.closePath();
        L10_Animation.crc2.stroke();
        L10_Animation.crc2.fill();
    }
    function drawSeaGrass(_x, _y) {
        L10_Animation.crc2.strokeStyle = "rgb(34, 51, 0)";
        L10_Animation.crc2.lineWidth = 1;
        let gradient = L10_Animation.crc2.createLinearGradient(0, 250, 0, 600);
        gradient.addColorStop(0, "#2B731D");
        gradient.addColorStop(1, "#195C22");
        L10_Animation.crc2.fillStyle = gradient;
        L10_Animation.crc2.beginPath();
        L10_Animation.crc2.moveTo(_x, _y);
        L10_Animation.crc2.quadraticCurveTo(_x - 25, _y - 40, _x - 5, _y - 75);
        L10_Animation.crc2.quadraticCurveTo(_x + 10, _y - 100, _x, _y - 125);
        L10_Animation.crc2.quadraticCurveTo(_x + 20, _y - 100, _x + 10, _y - 75);
        L10_Animation.crc2.quadraticCurveTo(_x - 5, _y - 40, _x + 18, _y);
        L10_Animation.crc2.closePath();
        L10_Animation.crc2.stroke();
        L10_Animation.crc2.fill();
    }
})(L10_Animation || (L10_Animation = {})); //namespace
//# sourceMappingURL=Background.js.map