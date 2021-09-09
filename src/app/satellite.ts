
export class Satellite {
	name: string;
	orbitType: string;
	type: string;
	operational: boolean;
	launchDate: string;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
			this.name = name;
			this.type = type;
			this.operational = operational;
			this.orbitType = orbitType;
			this.launchDate = launchDate;
	}

	isSpaceDebris(): boolean {
		let warning: boolean;
		if (this.type.toLowerCase() === 'space debris') {
				warning = true;
		} else {
				warning = false;
		}
		return warning;
	}
}