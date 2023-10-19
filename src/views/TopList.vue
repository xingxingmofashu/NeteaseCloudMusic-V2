<template>
	<div class="main-container">
		<MainHeader></MainHeader>
		<div class="content-wrapper">
			<div class="content-section">
				<div class="apps-card">
					<div
						class="block"
						v-for="item in topList"
						@click="getPlaylistDetail(item.id)"
						:key="item.id"
					>
						<el-image
							class="song-list-img app-card"
							:src="item.coverImgUrl"
						></el-image>
						<h5 class="song-list-text">{{ item.name }}</h5>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { getTopListApi } from "../request/api";
import MainHeader from "../components/MainHeader.vue";
export default {
	data: () => ({
		topList: [],
	}),
	created() {
		this.getTopList();
	},
	methods: {
		getTopList() {
			getTopListApi().then((response) => {
				this.topList = response.data.list;
			});
		},
		getPlaylistDetail(playlistId) {
			this.$router.push({
				path: "/playlist-details",
				query: { playlistId: playlistId },
			});
		},
	},
	components: {
		MainHeader,
	},
};
</script>
<style scoped>
.content-button {
	text-decoration: none;
}

.song-list-img {
	width: 220px;
	height: 220px;
	border-radius: 10px;
	margin: 0 10px;
	cursor: pointer;
}

.song-list-text {
	text-align: center;
	font-weight: 500;
	cursor: pointer;
}
</style>