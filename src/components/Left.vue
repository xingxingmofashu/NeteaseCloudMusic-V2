<template>
	<div class="left-side">
		<div>
			<div
				class="side-wrapper"
				v-for="group in groupList"
				:key="group.title"
			>
				<div class="side-title">{{ group.title }}</div>
				<div class="side-menu">
					<router-link
						:to="{ path: menu.url }"
						v-for="menu in group.menus"
						:key="menu.key"
						
						v-html="menu.icon + menu.name"
					>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Icon from "../assets/Icon";
import { mapState } from "vuex";
export default {
	name: "Left",
	data: () => ({
		Icon,
		groupList: [],
	}),
	computed: {
		...mapState(["lefMenu"]),
	},
	created() {
		this.groupList = this.lefMenu;
	},
};
</script>
<style scoped>
a {
	list-style: none;
	text-decoration: none;
}

li {
	list-style: none;
}
</style>
