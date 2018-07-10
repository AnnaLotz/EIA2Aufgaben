var SpaceInvader;
(function (SpaceInvader) {
    window.addEventListener("load", init);
    let imgData;
    let breite = (window.innerWidth);
    let hoehe = (window.innerHeight);
    SpaceInvader.movingObjects = [];
    SpaceInvader.enemys = [];
    SpaceInvader.score = 0;
    function init(_event) {
        SpaceInvader.canvas = document.getElementsByTagName("canvas")[0];
        SpaceInvader.crc2 = SpaceInvader.canvas.getContext("2d");
        SpaceInvader.drawBackground();
        imgData = SpaceInvader.crc2.getImageData(0, 0, SpaceInvader.canvas.width, SpaceInvader.canvas.height);
        if (breite > hoehe) {
            SpaceInvader.canvas.style.setProperty("height", hoehe + "px");
        }
        else if (hoehe > breite) {
            SpaceInvader.canvas.style.setProperty("width", breite + "px");
        }
        console.log("Breite: " + breite);
        console.log("Hoehe: " + hoehe);
        createObjects();
        SpaceInvader.createListener();
        animate();
    } //init zu
    function createObjects() {
        SpaceInvader.player = new SpaceInvader.Player();
        for (let i = 0; i < 10; i++) {
            let enemy = new SpaceInvader.Enemy1();
            enemy.x = 108 + i * 37;
            enemy.y = 318;
            SpaceInvader.enemys.push(enemy);
        }
        for (let j = 0; j < 10; j++) {
            let enemy = new SpaceInvader.Enemy1();
            enemy.x = 105 + j * 37;
            enemy.y = 281;
            SpaceInvader.enemys.push(enemy);
        }
    } //createObjects zu
    function shoot() {
        //if (player.bullets < 1) {
        let laser = new SpaceInvader.Laser();
        SpaceInvader.movingObjects.push(laser);
        SpaceInvader.player.bullets += 1;
        //}
    }
    SpaceInvader.shoot = shoot;
    function animate() {
        window.setTimeout(animate, 20); //framerate: 50 fps -> 20 ms
        SpaceInvader.crc2.clearRect(0, 0, SpaceInvader.crc2.canvas.width, SpaceInvader.crc2.canvas.height);
        SpaceInvader.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    } //animate zu
    function moveObjects() {
        for (let i = 0; i < SpaceInvader.movingObjects.length; i++) {
            SpaceInvader.movingObjects[i].move();
            SpaceInvader.movingObjects[i].checkPosition();
        }
        for (let i = 0; i < SpaceInvader.enemys.length; i++) {
            if (SpaceInvader.enemys[i].checkPosition() == true) {
                for (let i = 0; i < SpaceInvader.enemys.length; i++) {
                    SpaceInvader.enemys[i].y += 20;
                    SpaceInvader.enemys[i].direction *= -1;
                }
            }
            SpaceInvader.enemys[i].move();
        }
        if (SpaceInvader.player.movingDirection < 0) {
            SpaceInvader.player.moveLeft();
        }
        else if (SpaceInvader.player.movingDirection > 0) {
            SpaceInvader.player.moveRight();
        }
    }
    function drawObjects() {
        SpaceInvader.player.draw();
        for (let i = 0; i < SpaceInvader.enemys.length; i++) {
            SpaceInvader.enemys[i].draw();
        }
        for (let i = 0; i < SpaceInvader.movingObjects.length; i++) {
            SpaceInvader.movingObjects[i].draw();
        }
    }
})(SpaceInvader || (SpaceInvader = {})); // namespace zu
//# sourceMappingURL=main.js.map