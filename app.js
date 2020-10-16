"use strict";

const app = {
	methods: {
		select(method) {
			this.$data.selected = method;
			location.hash = method;
		},
		async getSign() {
			const sign = await fetch("sign.asc");
			this.$data.sign = await sign.text();
		}
	},
	data() {
		return {
			yen: (m => m && m[1])(location.search.match(/yen=(\d+)/)),
			methods: [
				"LINE Pay",
				"メルペイ",
				"現金",
				"Kyash",
				"PayPay",
				"d払い",
				"Revolut",
				"PayPal",
			],
			selected: "",
			sign: "",
		};
	},
};

window.addEventListener("load", () => Vue.createApp(app).mount("body"));
