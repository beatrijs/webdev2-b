function Triangle(sideA,sideB,sideC) {
	this.sideA = sideA;
	this.sideB = sideB;
	this.sideC = sideC;
	this.semip =  () =>  {return (this.sideA + this.sideB + this.sideC) / 		2};
	this.getArea =  () => {
		let c = this.semip() * (this.semip() - this.sideA) * (this.semip() - 			this.sideB) * (this.semip ()- this.sideC);
		return Math.sqrt( c );
	}
}
let triangle = new Triangle(3,4,5);
triangle.getArea();