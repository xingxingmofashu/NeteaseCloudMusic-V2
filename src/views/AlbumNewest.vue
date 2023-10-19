<template>
	<div class="main-container">
		<MainHeader></MainHeader>
		<div class="content-wrapper">
			<div class="content-section">
				<div class="apps-card">
					<div
						class="block"
						v-for="album in albums"
						@click="getAlbum(album.id)"
						:key="album.id"
					>
						<el-image
							class="song-list-img app-card"
							:src="album.picUrl"
						></el-image>
						<h5
							:title="album.name.length > 30 ? album.name : ''"
							class="song-list-text"
						>
							{{
								album.name.length > 30
									? album.name.substr(0, 30) + "..."
									: album.name
							}}
						</h5>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import MainHeader from "../components/MainHeader.vue";
import { getAlbumNewestApi } from "../request/api";
export default {
	data: () => ({
		albums: [],
	}),
	created() {
		this.getAlbumNewest();
	},
	components: {
		MainHeader,
	},
	methods: {
		getAlbumNewest() {
			getAlbumNewestApi().then((response) => {
				this.albums = response.data.albums;
				console.log(response);
			});
		},
		getAlbum(albumId) {
			this.$router.push({
				path: "/album",
				query: { albumId: albumId },
			});
		},
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
	margin: 5px 0;
}
</style>