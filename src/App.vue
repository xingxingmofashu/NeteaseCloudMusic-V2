<template>
	<div id="app">
		<Background></Background>
		<div class="app">
			<Header></Header>
			<Aplayer></Aplayer>
			<div class="wrapper">
				<LeftSide></LeftSide>

				<router-view :key="key"></router-view>
			</div>
		</div>
	</div>
</template>

<script>
import Background from "@/components/Background.vue";
import Header from "@/components/Header.vue";
import LeftSide from "@/components/Left.vue";
import Aplayer from "@/components/Aplayer.vue";
import "./assets/main.css";
export default {
	components: {
		Header,
		LeftSide,
		Background,
		Aplayer,
	},
	computed: {
		key() {
			return this.$route.fullPath;
		},
	},
};
</script>
