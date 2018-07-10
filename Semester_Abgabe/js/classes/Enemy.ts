namespace SpaceInvader {

    export class Enemy {
        x: number;
        y: number;
        points: number;
        health: number;
        speed: number;
        direction: number; // 1 -> to right, -1 -> to left


        constructor() {
            this.health = 1;
            this.speed = 1;
            this.direction = 1;
            console.log("new enemy");


        }

        checkPosition(): boolean {
            //enemy ganz rechts oder links
            if (this.x > canvas.width - 30) {
                return true;
            } else if (this.x < 30) {
                return true;
            } else {
            return false;
            }
            

        }

        move(): void {
            this.x += this.speed * this.direction;
            
            
        }


        draw(): void {
            crc2.strokeStyle = "white";
            crc2.fillStyle = "white";
            crc2.moveTo(this.x, this.y - 2);
            crc2.lineTo(this.x + 2, this.y - 2);
            crc2.lineTo(this.x + 2, this.y - 4);
            crc2.lineTo(this.x + 6, this.y - 2);

            crc2.closePath();
            crc2.fill();
        }



    } //class enemy zu

} //namespace zu