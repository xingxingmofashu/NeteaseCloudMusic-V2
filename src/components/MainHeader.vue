<template>
	<div class="main-header">
		<a class="menu-link-main" href="#">每日推荐</a>
		<div class="header-menu">
			<router-link
				v-for="menu in menuList"
				:key="menu.key"
				:to="menu.url"
				:class="[
					'menu-link',
					menu.key == activeKey ? 'is-active' : '',
					menu.new ? 'notify' : '',
				]"
				>{{ menu.name }}</router-link
			>
			
		</div>
	</div>
</template>
<script>
import { mapState } from "vuex";

export default {
	data: () => ({
		menuList: [],
		activeKey: "",
		activeKey:''
	}),
	computed: {
		...mapState(["headerMenu"]),
	},
	created() {
		this.menuList = this.headerMenu;
		this.activeKey=this.$route.name
	},
	methods: {
		activeChange(key = "") {
			this.activeKey = key;
		},
	},
};
</script>