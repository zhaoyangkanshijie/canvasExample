function Taiji(size, x, y, angle) {
    this.size = size;
    this.offsetX = x;
    this.offsetY = y;
    this.angle = angle;
}

Taiji.prototype = {
    draw: function (ctx) {
        //ctx.clearRect(0, 0, 600, 600); ctx.lineWidth = 10;

        ctx.save();
        ctx.translate(this.size, this.size);
        ctx.translate(this.offsetX - this.size, this.offsetY - this.size);
        ctx.rotate(this.angle);

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI, true);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = "gray";
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI, false);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(this.size / 2, -0.5, this.size / 2, 0, Math.PI, false);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = "gray";
        ctx.lineWidth = 0;
        ctx.beginPath();
        ctx.arc(-this.size / 2, 0.5, this.size / 2, 0, Math.PI, true);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(-this.size / 2, 0, this.size / 10, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = "gray";
        ctx.beginPath();
        ctx.arc(this.size / 2, 0, this.size / 10, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();

        ctx.restore();
    },
    update: function () {
        this.angle += 0.02;
    }
}