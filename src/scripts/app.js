//import Vue from 'vue';

Vue.createApp({

	data() {
		return {
			perspective: 100,
			rotateX: 0,
			rotateY: 0,
			rotateZ: 0
		};
	},

	methods: {
		resetPerspective() {
			this.perspective = 100;
			this.rotateX = 0;
			this.rotateY = 0;
			this.rotateZ = 0;
		},

		copyPerspective() {

			const elem = document.createElement('textarea');
			elem.setAttribute('readonly', '');
			elem.style.position = 'absolute';
			elem.style.top = '-9999px';
			elem.value = `transform: ${this.boxStyle.transform}`;
			document.body.appendChild(elem);
			elem.select();
			document.execCommand('copy',);
			document.body.removeChild(elem);
		}
	},

	computed: {
		boxStyle() {
			return {
				transform: `perspective(${this.perspective}px)
				rotateX(${this.rotateX}deg)
				rotateY(${this.rotateY}deg)
				rotateZ(${this.rotateZ}deg)`
			};
		}
	}
}).mount('#app');