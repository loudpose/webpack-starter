import Example from "./app/pages/Example-one";
import "./styles/index.scss";
class App {
	constructor() {
		this.create();
	}

	async create() {
		this.page = new Example();
		await this.page.insertHtml();

		// Application starts here
		this.start();
	}
	
	start() {
		this.page.create();
		
	}
}

new App();
