/*  Aufgabe: Abschlussaufgabe - Space Invaders
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var SpaceInvader;
(function (SpaceInvader) {
    function drawBackground() {
        //Black background
        SpaceInvader.crc2.fillStyle = "black";
        SpaceInvader.crc2.fillRect(0, 0, SpaceInvader.canvas.width, SpaceInvader.canvas.height);
        //Lines
        SpaceInvader.crc2.fillStyle = "white";
        SpaceInvader.crc2.fillRect(0, 560, SpaceInvader.canvas.width, 2);
    }
    SpaceInvader.drawBackground = drawBackground;
})(SpaceInvader || (SpaceInvader = {}));
//# sourceMappingURL=Background.js.map