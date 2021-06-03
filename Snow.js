class Snow
{
    constructor (x, y, width, height, angle)
    {
        var options = 
        {
            density: 1.0,
            friction: 0.5,
        }
        this.body= Bodies.rectangle(x, y, width, height, options);
        this.width= width;
        this.height= height;
        World.add(world, this.body);
    }

    display()
    {
        var pos= this.body.position;
        var angle= this.body.angle;

        push();
        translate(pos.x, pos.y);
        fill("brown");
        rotate(angle);
        ellipse(0, 0, this.width, this.height);
        pop();
    }
    
}