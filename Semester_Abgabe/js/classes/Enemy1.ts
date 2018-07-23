namespace SpaceInvader {

    export class Enemy1 extends Enemy {


        constructor() {
            super();        
        }

        draw(): void {
            crc2.strokeStyle = "white";
            crc2.fillStyle = "white";
            crc2.moveTo(this.x, this.y - 6);
            crc2.lineTo(this.x + 3, this.y - 6);
            crc2.lineTo(this.x + 3, this.y - 9);
            crc2.lineTo(this.x + 6, this.y - 6);
            crc2.lineTo(this.x + 12, this.y - 6);
            crc2.lineTo(this.x + 12, this.y - 3);
            crc2.lineTo(this.x + 6, this.y - 3);
            crc2.lineTo(this.x + 6, this.y);
            crc2.lineTo(this.x + 9, this.y);
            crc2.lineTo(this.x + 9, this.y - 9);
            crc2.lineTo(this.x + 12, this.y - 9);
            crc2.lineTo(this.x + 12, this.y - 15);
            crc2.lineTo(this.x + 9, this.y - 15);
            crc2.lineTo(this.x + 9, this.y - 18);
            crc2.lineTo(this.x + 6, this.y - 18);
            crc2.lineTo(this.x + 6, this.y - 21);
            crc2.lineTo(this.x + 3, this.y - 21);
            crc2.lineTo(this.x + 3, this.y - 24);            
            crc2.lineTo(this.x - 3, this.y - 24);
            crc2.lineTo(this.x - 3, this.y - 21);
            crc2.lineTo(this.x - 6, this.y - 21);
            crc2.lineTo(this.x - 6, this.y - 18);
            crc2.lineTo(this.x - 9, this.y - 18);
            crc2.lineTo(this.x - 9, this.y - 15);
            crc2.lineTo(this.x - 12, this.y - 15);
            crc2.lineTo(this.x - 12, this.y - 9);
            crc2.lineTo(this.x - 9, this.y - 9);
            crc2.lineTo(this.x - 9, this.y);
            crc2.lineTo(this.x - 6, this.y);
            crc2.lineTo(this.x - 6, this.y - 3);
            crc2.lineTo(this.x - 12, this.y - 3);
            crc2.lineTo(this.x - 12, this.y - 6);
            crc2.lineTo(this.x - 6, this.y - 6);
            crc2.lineTo(this.x - 3, this.y - 9);            
            crc2.lineTo(this.x - 3, this.y - 6);
            crc2.closePath();
            crc2.fill();
            
            //sollte das Auge geben:
//            crc2.strokeStyle = "black";
//            crc2.fillStyle = "black";
//            crc2.moveTo(this.x + 3, this.y - 12);
//            crc2.lineTo(this.x + 6, this.y - 12);
//            crc2.lineTo(this.x + 6, this.y - 15);
//            crc2.lineTo(this.x + 3, this.y - 15);
//            crc2.lineTo(this.x + 3, this.y - 12);
//            crc2.closePath();
//            crc2.stroke();            
//            crc2.fill();
        }


    } //class enemy zu

} //namespace zu