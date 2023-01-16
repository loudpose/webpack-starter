import { map } from "lodash";
import GSAP from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
GSAP.registerPlugin(ScrollTrigger);

import Page from "../../classes/Page";

export default class Example extends Page {
	constructor() {
		super({
			id: "example1",
			element: "example1",
			elements: {},
		});
	}

	create() {
		this.serviceItems = map(
			document.querySelectorAll(".home__services__item"),
			(el) => el
		);
		this.serviceContainer = document.getElementById("services");

		this.timeline = GSAP.timeline({
			default: { ease: "none" },
		});

		this.timeline.fromTo(
			"#services__item__1",
			{ yPercent: 1, autoAlpha: 0 },
			{ yPercent: 0, autoAlpha: 1 }
		);
		this.timeline.fromTo(
			"#services__item__2",
			{ yPercent: 1, autoAlpha: 0 },
			{ yPercent: 0, autoAlpha: 1 }
		);
		this.timeline.fromTo(
			"#services__item__3",
			{ yPercent: 1, autoAlpha: 0 },
			{ yPercent: 0, autoAlpha: 1 }
		);

		ScrollTrigger.create({
			animation: this.timeline,
			trigger: "#services",
			start: "top top",
			// end: "bottom bottom",
			end: "+=4000",
			// scroller: {},
			scrub: true,
			pin: true,
			markers: true,
			// pinSpacing: false,
			anticipatePin: 1,
		});
	}
}
