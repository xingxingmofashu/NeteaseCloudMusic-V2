<template>
	<div class="header">
		<div class="header-menu">
			<h2 class="logo"><a href="/">网易云音乐</a></h2>
		</div>
		<div class="top-wrap">
			<ul>
				<li></li>
				<li @click="back">
					<img src="../assets/返回.png" alt="" />
				</li>
				<li @click="forward">
					<img src="../assets/返回2.png" alt="" />
				</li>
				<li @click="ref">
					<img src="../assets/刷新.png" alt="" />
				</li>
			</ul>
		</div>
		<div class="search-bar">
			<input
				type="text"
				placeholder="搜索"
				@keyup.enter="search"
				v-model="searchValue"
			/>
		</div>
		<div class="header-profile">
			<div style="cursor: pointer" v-html="Icon.message(1)"></div>
			<router-link to="/"
				><div
					style="margin-left: 22px; cursor: pointer"
					v-html="Icon.cloud"
				></div
			></router-link>
			<div>
				<el-dropdown>
					<span class="el-dropdown-link">
						<img
							src="../assets/头像.jpg"
							alt=""
							class="profile-img"
						/>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item class="el-dropdown-item">
							<router-link to="/login">Sign Up</router-link>
						</el-dropdown-item>
						<el-dropdown-item class="el-dropdown-item">
							<div @click="logout">Logout</div>
						</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</div>
	</div>
</template>

<script>
import defaultState from "../store/default";
import Icon from "../assets/Icon";
import { logoutApi } from "../request/api";

export default {
	data: () => ({
		Icon,
		searchValue: "",
	}),
	methods: {
		//搜索框Result的内容
		search() {
			this.$router.push({
				path: "/search-song",
				query: { keyworks: this.searchValue },
			});
		},

		forward() {
			this.$router.go(1);
		},
		ref() {
			this.$router.go(0);
		},
		back() {
			this.$router.back();
		},
		logout() {
			logoutApi().then((response) => {
				console.log(response.data.code);
				if (response.data.code == 200) {
					this.$store.state.leftMenu = defaultState.leftMenu;
					sessionStorage.clear();
					this.$router.go(0);
				}
			});
		},
	},
};
</script>

<style scoped>
.el-dropdown-menu {
	background-color: var(--theme-bg-color);
	border: 0px;
}
.el-dropdown-link {
	padding-right: 10px;
}
.el-dropdown-item a {
	text-decoration: none;
	list-style: none;
	color: #606266;
}
.header-menu a {
	text-decoration: none;
	list-style: none;
	color: white;
	cursor: pointer;
}
.logo {
	background: url(../assets/topbar.png) no-repeat 0 9999px;
}
.top-wrap {
	margin-right: 50px;
}
.top-wrap ul {
	display: flex;
	flex-direction: row;
	margin: 0;
	padding: 0;
}
.top-wrap ul li {
	list-style: none;
	margin: 0 10px;
	cursor: pointer;
	width: 16px;
	height: 16px;
}
</style>