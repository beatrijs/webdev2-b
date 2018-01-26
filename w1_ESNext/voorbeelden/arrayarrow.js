let names = [ "Groucho", "Karl","Ingeborg"];
names.filter(l =>   l.length < 8) // ["Groucho", "Karl"]
	.map(l => l.length)
	.forEach(l => console.log("lengte: " + l)
	);

