class Bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=70;
		this.body=Bodies.circle(this.x, this.y, 70, options)
		
		World.add(world, this.body);

	}
	display()
	{
			
			var bobpos=this.body.position;		

			push()
			fill("pink");
			translate(bobpos.x, bobpos.y);
			imageMode(CENTER);
			ellipse(0,0,this.r);
			pop()
			
	}

}