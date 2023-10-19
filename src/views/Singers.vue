<template>
	<div class="main-container">
		<MainHeader></MainHeader>
		<div class="content-wrapper">
			<div class="content-section qx">
				<ul>
					<li
						class="content-button status-button"
						@click="getTopListArtist(1)"
					>
						华语
					</li>
					<li
						class="content-button status-button"
						@click="getTopListArtist(2)"
					>
						欧美
					</li>
					<li
						class="content-button status-button"
						@click="getTopListArtist(3)"
					>
						韩国
					</li>
					<li
						class="content-button status-button"
						@click="getTopListArtist(4)"
					>
						日本
					</li>
				</ul>
				<div class="apps-card">
					<div
						class="block img-size"
						v-for="item in artists"
						@click="getArtistAlbum(item.id)"
						:key="item.id"
					>
						<div
							style="
								width: 220px;
								height: 220px;
								margin-left: 15px;
							"
						>
							<img
								:src="item.img1v1Url"
								alt=""
								class="song-list-img2 app-card"
							/>
						</div>
						<h5 class="song-list-text">{{ item.name }}</h5>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import MainHeader from "../components/MainHeader.vue";
import { getTopListArtistApi } from "../request/api.js";

export default {
	data: () => ({
		artists: [],
	}),
	components: {
		MainHeader,
	},
	created() {
		this.getTopListArtist();
	},
	methods: {
		getTopListArtist(type = 1) {
			getTopListArtistApi({type:type}).then((response) => {
                this.artists=response.data.list.artists;
			});
		},
		getArtistAlbum(singerId) {
			this.$router.push({
				path: "/artist-album",
				query: { singerId: singerId },
			});
		},
	},
};
</script>
<style scoped>
.content-button {
	text-decoration: none;
}

.song-list-img2 {
	width: 220px;
	height: 220px;
	border-radius: 50%;
	margin: 0 10px;
	cursor: pointer;
}

.song-list-text {
	text-align: center;
	font-weight: 500;
	cursor: pointer;
}

.qx {
	margin-top: 0;
}

.qx ul {
	display: flex;
	flex-direction: row;
	margin: 10px 0;
	padding: 0;
}

.qx ul li {
	list-style: none;
	margin-left: 10px;
	cursor: pointer;
}
</style>