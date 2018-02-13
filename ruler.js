function drawRuler(id,width=1000,height=900,xstart=0,ystart=0,xstep=20,ystep=20,xhighlight=100,yhighlight=100)
{
	var canvas = document.getElementById(id);
	//console.log(canvas);
	var ctx = canvas.getContext("2d");
	for(var x = xstart;x <= width;x += xstep )
	{
		if(x % xhighlight == 0)
		{
			ctx.strokeStyle = "purple";
			ctx.font = "10px purple";
		}
		else
		{
			ctx.strokeStyle = "grey";
			ctx.font = "8px grey";
		}
		ctx.beginPath();
		ctx.moveTo(x,ystart);
		ctx.lineTo(x,height);
		ctx.closePath();
		ctx.stroke();
		
		ctx.strokeText(x,x,10);
	}
	for(var y = ystart;y <= height;y += ystep )
	{
		if(y % yhighlight == 0)
		{
			ctx.strokeStyle = "purple";
			ctx.font = "10px purple";
		}
		else
		{
			ctx.strokeStyle = "grey";
			ctx.font = "8px grey";
		}
		ctx.beginPath();
		ctx.moveTo(xstart,y);
		ctx.lineTo(width,y);
		ctx.closePath();
		ctx.stroke();
		
		ctx.strokeText(y,1,y);
	}
}