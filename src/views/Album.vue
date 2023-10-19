<template>
	<div class="main-container">
		<div class="main-header">
			<span class="menu-link-main">专辑</span>
		</div>
		<div class="content-wrapper">
			<div class="content-section song-detail">
				<div class="apps-card">
					<div class="app-song-detail song-list-wrap">
						<div class="cover-img-size">
							<img :src="album.picUrl" alt=" " class="mv-img" />
						</div>
						<div class="song-info">
							<h3 class="song-list-title">
								{{ album.name }}
							</h3>
							<div class="author">
								<img
									:src="artistPicUrl"
									width="50px"
									style="border-radius: 50%"
								/>
								<span>{{ artistName }}</span>
							</div>
							<button
								class="content-button status-button button-set"
							>
								播放全部
							</button>
							<div class="tags">
								<p>专辑ID：{{ album.id }}</p>
							</div>
							<p class="introduction">
								简介：{{
									description.length > 20
										? description.substr(0, 21) + "..."
										: description
								}}
							</p>
						</div>
					</div>
				</div>
				<div class="content-section">
					<div class="content-section-title">歌曲</div>
					<ul class="search_ul">
						<li
							class="adobe-product"
							v-for="item in albumSongs"
							:key="item.id"
						>
							<div class="products">{{ item.name }}</div>
							<span class="status">
								<span class="status-circle green"></span>
								{{ item.ar[0].name }}</span
							>

							<span class="status">{{ item.dt }}</span>
							<span class="status">{{ item.al.name }}</span>
							<div class="button-wrapper">
								<div
									class="click-svg"
									@click="playSong(item.id)"
								>
									<svg
										t="1639295337775"
										class="icon"
										viewBox="0 0 1024 1024"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										p-id="2313"
										width="40"
										height="40"
									>
										<path
											d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z"
											p-id="2314"
											fill="#e6e6e6"
										></path>
										<path
											d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z"
											p-id="2315"
											fill="#e6e6e6"
										></path>
									</svg>
								</div>
								<div
									class="click-svg"
									v-if="item.mv != 0"
									@click="getMVUrl(item.mv)"
								>
									<svg
										t="1639296179055"
										class="icon"
										viewBox="0 0 1024 1024"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										p-id="3387"
										width="40"
										height="40"
									>
										<path
											d="M0 76.8h158.72v125.952H0V76.8z m209.92 0v870.4h606.208v-870.4H209.92z m147.456 193.536c5.12 0 10.24 1.024 14.336 4.096l153.6 108.544 153.6 108.544c12.288 8.192 15.36 26.624 8.192 39.936-2.048 4.096-5.12 7.168-8.192 9.216l-153.6 108.544-153.6 108.544c-12.288 8.192-27.648 4.096-34.816-9.216-3.072-5.12-4.096-10.24-4.096-15.36V299.008c0-15.36 10.24-27.648 24.576-28.672zM868.352 76.8H1024v125.952H868.352V76.8zM0 260.096h158.72V389.12H0V260.096z m868.352 0H1024V389.12H868.352V260.096zM0 447.488h158.72v129.024H0V447.488z m868.352 0H1024v129.024H868.352V447.488zM0 633.856h158.72v129.024H0V633.856z m868.352 0H1024v129.024H868.352V633.856zM0 820.224h158.72v125.952H0V820.224z m868.352 0H1024v125.952H868.352V820.224z"
											fill="#e6e6e6"
											p-id="3388"
										></path>
									</svg>
								</div>
								<div
									class="click-svg"
									@click="DownloadSong(item.id)"
								>
									<a target="_blank" download>
										<svg
											t="1639296939929"
											class="icon"
											viewBox="0 0 1024 1024"
											version="1.1"
											xmlns="http://www.w3.org/2000/svg"
											p-id="4288"
											width="40"
											height="40"
										>
											<path
												d="M918.3 468.6c-18.8 0-34 15.2-34 34v309.6c0 6.6-14.4 18.7-38 18.7H190.2c-23.5 0-38-12.1-38-18.7V486c0-18.8-15.2-34-34-34s-34 15.2-34 34v326.3c0 24.8 12.8 48.4 35 64.7 19.4 14.2 44.6 22 71 22h656.1c26.4 0 51.6-7.8 71-22 22.2-16.3 35-39.9 35-64.7V502.6c0-18.7-15.3-34-34-34z"
												fill="#e6e6e6"
												p-id="4289"
											></path>
											<path
												d="M450.4 679.4c17.8 18 41.5 28 66.8 28.1h0.5c25.1 0 48.8-9.7 66.6-27.4l154.4-152.8c13.3-13.2 13.5-34.7 0.2-48.1-13.2-13.3-34.7-13.5-48.1-0.2L551.3 617.1c0.6-2.6 1-5.3 1-8.1V149.1c0-18.8-15.2-34-34-34s-34 15.2-34 34V609c0 3.2 0.5 6.3 1.3 9.3L345.9 477.1c-13.2-13.3-34.7-13.5-48.1-0.2-13.3 13.2-13.5 34.7-0.2 48.1l152.8 154.4z"
												fill="#e6e6e6"
												p-id="4290"
											></path>
										</svg>
									</a>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { getAlbumApi, getSongApi,getLyricApi ,getSongDetailApi , } from "../request/api";
export default {
	data: () => ({
		album: {},
		albumSongs: [],
		artistPicUrl: "",
		artistName: "",
		description: "",
	}),
	created() {
		this.getAlbum();
	},
	methods: {
		getAlbum() {
			getAlbumApi(this.$route.query.albumId).then((response) => {
				this.album = response.data.album;
				this.albumSongs = response.data.songs;
				this.artistPicUrl = response.data.album.artist.picUrl;
				this.artistName = response.data.album.artist.name;
				console.log(response);
				this.description = response.data.album.description;
				for (let i = 0; i < this.albumSongs.length; i++) {
					let min = parseInt(this.albumSongs[i].dt / 1000 / 60);
					let sec = parseInt((this.albumSongs[i].dt / 1000) % 60);
					if (min < 10) {
						min = "0" + min;
					}
					if (sec < 10) {
						sec = "0" + sec;
					}
					this.albumSongs[i].dt = min + ":" + sec;
				}
			});
		},
		getMVUrl(mvId) {
			this.$router.push({ path: "/play-mv", query: { mvId: mvId } });
		},
		playSong(id) {
			getSongApi(id).then((response) => {
				this.url = response.data.data[0].url;
				getLyricApi(id).then((response) => {
					this.songLrc = response.data.lrc.lyric;
					getSongDetailApi(id).then((res) => {
						if (this.url != null) {
							this.$store.commit("addSong", {
								name: res.data.songs[0].name,
								artist: res.data.songs[0].ar[0].name,
								url: this.url,
								cover: res.data.songs[0].al.picUrl,
								lrc: this.songLrc,
							});
							(this.url = null), (this.songLrc = "");
						} else {
							alert("歌曲无版权,无法播放！");
						}
					});
				});
			});
		},
	},
};
</script>
<style scoped>
.song-detail {
	margin-top: 1px;
}

.app-song-detail {
	width: 100%;
	padding: 10px;
	background-color: var(--content-bg);
	border-radius: 14px;
	border: 1px solid var(--theme-bg-color);
	padding: 5px;
	font-size: 16px;
}

.cover-img-size {
	width: 250px;
	position: relative;
	display: inline;
}

.cover-img-size img {
	border-radius: 10px;
	display: block;
	width: 100%;
}

.click-svg {
	cursor: pointer;
}

.song-list-wrap {
	display: flex;
	flex-direction: row;
}

.song-list-title {
	font-weight: 200;
	display: inline;
	margin: 5px 0;
}

.song-info {
	display: flex;
	flex-direction: column;
	margin-left: 20px;
}

.song-info p {
	color: var(--inactive-color);
}

.author {
	display: flex;
	flex-direction: row;
	height: 50px;
	line-height: 50px;
}

.author span {
	margin-left: 15px;
}

.tags {
	display: flex;
	flex-direction: row;
}

.tags p {
	padding: 0;
	margin: 10px 0;
	font-size: 14px;
}

.tags ul {
	padding: 0;
	margin: 10px 0;
}

.tags ul li {
	margin-left: 10px;
	list-style: none;
	color: var(--inactive-color);
	font-size: 14px;
}

.mv-img {
	border-radius: 50%;
}

.app-mv {
	padding: 15px;
}

.app-mv-text {
	border-bottom: none;
}

.app-card-sub-text-change {
	padding-bottom: 1px;
}

.mv-top {
	margin-top: 1px;
}

.button-set {
	font-size: 14px;
	width: 100px;
	margin-top: 10px;
	padding: 10px;
}

.introduction {
	margin: 0;
	font-size: 14px;
}
</style>