/*  Aufgabe: Abschlussaufgabe - Space Invaders
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 29.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var SpaceInvader;
(function (SpaceInvader) {
    class Enemy3 extends SpaceInvader.Enemy {
        constructor() {
            super();
            this.points = 30;
            this.width = 12;
        }
        draw() {
            SpaceInvader.crc2.beginPath();
            SpaceInvader.crc2.strokeStyle = "rgba(0,0,0,0)";
            SpaceInvader.crc2.fillStyle = "rgb(8, 252, 0)"; //green
            SpaceInvader.crc2.moveTo(this.x, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x + 3, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x + 3, this.y - 9);
            SpaceInvader.crc2.lineTo(this.x + 6, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x + 12, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x + 12, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x + 6, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x + 6, this.y);
            SpaceInvader.crc2.lineTo(this.x + 9, this.y);
            SpaceInvader.crc2.lineTo(this.x + 9, this.y - 9);
            SpaceInvader.crc2.lineTo(this.x + 12, this.y - 9);
            SpaceInvader.crc2.lineTo(this.x + 12, this.y - 15);
            SpaceInvader.crc2.lineTo(this.x + 9, this.y - 15);
            SpaceInvader.crc2.lineTo(this.x + 9, this.y - 18);
            SpaceInvader.crc2.lineTo(this.x + 6, this.y - 18);
            SpaceInvader.crc2.lineTo(this.x + 6, this.y - 21);
            SpaceInvader.crc2.lineTo(this.x + 3, this.y - 21);
            SpaceInvader.crc2.lineTo(this.x + 3, this.y - 24);
            SpaceInvader.crc2.lineTo(this.x - 3, this.y - 24);
            SpaceInvader.crc2.lineTo(this.x - 3, this.y - 21);
            SpaceInvader.crc2.lineTo(this.x - 6, this.y - 21);
            SpaceInvader.crc2.lineTo(this.x - 6, this.y - 18);
            SpaceInvader.crc2.lineTo(this.x - 9, this.y - 18);
            SpaceInvader.crc2.lineTo(this.x - 9, this.y - 15);
            SpaceInvader.crc2.lineTo(this.x - 12, this.y - 15);
            SpaceInvader.crc2.lineTo(this.x - 12, this.y - 9);
            SpaceInvader.crc2.lineTo(this.x - 9, this.y - 9);
            SpaceInvader.crc2.lineTo(this.x - 9, this.y);
            SpaceInvader.crc2.lineTo(this.x - 6, this.y);
            SpaceInvader.crc2.lineTo(this.x - 6, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x - 12, this.y - 3);
            SpaceInvader.crc2.lineTo(this.x - 12, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x - 6, this.y - 6);
            SpaceInvader.crc2.lineTo(this.x - 3, this.y - 9);
            SpaceInvader.crc2.lineTo(this.x - 3, this.y - 6);
            SpaceInvader.crc2.closePath();
            SpaceInvader.crc2.stroke();
            SpaceInvader.crc2.fill();
            SpaceInvader.crc2.fillStyle = "rgb(0, 0, 0)"; //black
            SpaceInvader.crc2.fillRect(this.x - 6, this.y - 15, 3, 3);
            SpaceInvader.crc2.fillRect(this.x + 3, this.y - 15, 3, 3);
        }
    }
    SpaceInvader.Enemy3 = Enemy3; //class enemy zu
})(SpaceInvader || (SpaceInvader = {})); //namespace zu
//# sourceMappingURL=Enemy3.js.map