namespace SpaceInvader {

    export class Player {
        x: number;
        y: number;
        lives: number;
        movingDirection: number = 0;

        constructor() {
            this.x = 50;
            this.y = 506;
            this.lives = 3;
        }


        draw(): void {
            crc2.beginPath();
            crc2.strokeStyle = "white";
            crc2.fillStyle = "white";
            crc2.lineWidth = 1;
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 1, this.y);
            crc2.lineTo(this.x + 1, this.y + 2);
            crc2.lineTo(this.x + 3, this.y + 2);
            crc2.lineTo(this.x + 3, this.y + 7);
            crc2.lineTo(this.x + 12, this.y + 7);
            crc2.lineTo(this.x + 12, this.y + 9);
            crc2.lineTo(this.x + 15, this.y + 9);
            crc2.lineTo(this.x + 15, this.y + 18);
            crc2.lineTo(this.x - 15, this.y + 18);
            crc2.lineTo(this.x - 15, this.y + 9);
            crc2.lineTo(this.x - 12, this.y + 9);
            crc2.lineTo(this.x - 12, this.y + 7);
            crc2.lineTo(this.x - 3, this.y + 7);
            crc2.lineTo(this.x - 3, this.y + 2);
            crc2.lineTo(this.x - 1, this.y + 2);
            crc2.lineTo(this.x - 1, this.y);
            crc2.lineTo(this.x, this.y);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
        }

        moveRight(): void {
            console.log("right");
            if (this.x > canvas.width - 30) {
                this.x = canvas.width - 29;
            } else {
                this.x += 2;
            }
        }

        moveLeft(): void {
            console.log("left");
            if (this.x < 30) {
                this.x = 29;
            } else {
                this.x -= 2;
            }
        }

        shoot(): void {
            console.log("peng");
        }
    } //class player zu

} //namespace zu