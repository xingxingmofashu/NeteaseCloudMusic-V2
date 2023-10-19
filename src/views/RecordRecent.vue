<template>
	<div class="main-container">
		<div class="content-wrapper">
			<div class="content-section">
				<div class="content-section-title">
					<h1 class="title">最近播放</h1>
					共{{ count }}首
				</div>
				<button class="content-button status-button button-set">
					播放全部
				</button>
				<el-tabs v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="歌曲列表" name="song">
						<ul class="search_ul">
							<li
								class="adobe-product"
								v-for="song in songs"
								:key="song.data.id"
							>
								<div
									:title="
										song.data.name.length > 21
											? song.data.name
											: ''
									"
									class="products"
									style="
										white-space: nowrap;
										text-overflow: ellipsis;
									"
								>
									<!-- 歌名 -->
									{{
										song.data.name.length > 21
											? song.data.name.substr(0, 18) +
											  "..."
											: song.data.name
									}}
								</div>
								<!-- 作者 -->
								<span class="status">
									<span class="status-circle green"></span
									>{{ song.data.ar[0].name }}
								</span>
								<!-- 歌曲时间 -->
								<span class="status">{{ song.data.dt }}</span>
								<span class="status">{{
									song.data.al.name
								}}</span>
								<div class="button-wrapper">
									<div
										class="click-svg"
										@click="playSong(song.data.id)"
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
									<div class="click-svg">
										<a :href="song.url" target="_blank">
											<svg
												t="1639296939929"
												viewBox="0 0 1024 1024"
												version="1.1"
												xmlns="http://www.w3.org/2000/svg"
												p-id="4288"
												width="40"
												height="40"
												class="icon"
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
							</li></ul
					></el-tab-pane>
					<el-tab-pane label="视频" name="video">
						<div class="content-section">
							<div class="apps-card">
								<div
									class="block"
									v-for="mv in mvs"
									@click="getMVUrl(mv.data.id)"
									:key="mv.data.id"
								>
									<el-image
										class="app-card app-img-width"
										:src="mv.data.coverUrl"
									></el-image>
									<h5 class="song-list-text">
										{{ mv.data.name || mv.data.title }}
									</h5>
								</div>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="歌单" name="playlist">
						<div class="apps-card">
							<div
								class="block"
								v-for="item in playLists"
								@click="getPlaylistDetail(item.data.id)"
								:key="item.data.id"
							>
								<div class="img">
									<el-image
										class="song-list-img app-card"
										:src="item.data.coverImgUrl"
									></el-image>
								</div>
								<h5
									:title="
										item.data.name.length > 16
											? item.data.name
											: ''
									"
									class="song-list-text"
								>
									{{
										item.data.name.length > 16
											? item.data.name.substr(0, 16) +
											  "..."
											: item.data.name
									}}
								</h5>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="专辑" name="album">
						<div class="apps-card">
							<div
								class="block"
								v-for="item in albums"
								@click="getAlbum(item.data.id)"
								:key="item.data.id"
							>
								<div class="img">
									<el-image
										class="song-list-img app-card"
										:src="item.data.picUrl"
									></el-image>
								</div>
								<h5 class="song-list-text">
									{{ item.data.name }}
								</h5>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="播客" name="dj">
						<div class="content-section">
							<div class="apps-card">
								<div
									class="block"
									v-for="item in djs"
									:key="item.data.id"
								>
									<el-image
										class="song-list-img app-card"
										:src="item.data.picUrl"
									></el-image>
									<h5 class="song-list-text">
										{{ item.data.name }}
									</h5>
									<p class="copywriter">
										{{ item.data.copywriter }}
									</p>
								</div>
							</div>
						</div>
					</el-tab-pane>
				</el-tabs>
			</div>
		</div>
	</div>
</template>
<script>
import {
	getRecordRecentSongApi,
	getRecordRecentVideoApi,
	getRecordRecentPlaylistApi,
	getRecordRecentAlbumApi,
	getRecordRecentDJApi,
	getSongApi,
	getLyricApi,
	getSongDetailApi,
} from "../request/api";
export default {
	data: () => ({
		count: 0,
		songs: [],
		playLists: [],
		mvs: [],
		albums: [],
		djs: [],
		activeName: "song",
	}),
	created() {
		this.getRecordRecentSong();
	},
	watch: {
		activeName() {
			switch (this.activeName) {
				case "song":
					this.getRecordRecentSong();
					break;
				case "video":
					this.getRecordRecentVideo();
					break;
				case "playlist":
					this.getRecordRecentPlaylist();
					break;
				case "album":
					this.getRecordRecentAlbum();
					break;
				case "dj":
					this.getRecordRecentDJ();
					break;
				default:
					break;
			}
		},
	},
	methods: {
		handleClick: function () {},
		getRecordRecentSong() {
			getRecordRecentSongApi().then((response) => {
				console.log("songs", response);
				this.count = response.data.data.total;
				this.songs = response.data.data.list;
				for (let i = 0; i < this.songs.length; i++) {
					let min = parseInt(this.songs[i].data.dt / 1000 / 60);
					let sec = parseInt((this.songs[i].data.dt / 1000) % 60);
					if (min < 10) {
						min = "0" + min;
					}
					if (sec < 10) {
						sec = "0" + sec;
					}
					this.songs[i].data.dt = min + ":" + sec;
				}
			});
		},
		getRecordRecentVideo() {
			getRecordRecentVideoApi().then((response) => {
				this.count = response.data.data.total;
				this.mvs = response.data.data.list;
			});
		},
		getRecordRecentPlaylist() {
			getRecordRecentPlaylistApi().then((response) => {
				this.count = response.data.data.total;
				this.playLists = response.data.data.list;
			});
		},
		getRecordRecentAlbum() {
			getRecordRecentAlbumApi().then((response) => {
				this.count = response.data.data.total;
				this.albums = response.data.data.list;
			});
		},
		getRecordRecentDJ() {
			getRecordRecentDJApi().then((response) => {
				this.count = response.data.data.total;
				this.djs = response.data.data.list;
			});
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
		getMVUrl(mvId) {
			this.$router.push({ path: "/play-mv", query: { mvId: mvId } });
		},
		getPlaylistDetail(playlistId) {
			this.$router.push({
				path: "/playlist-details",
				query: { playlistId: playlistId },
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
.el-pagination {
	text-align: center;
	margin-top: 5px;
}
.title {
	display: inline;
	color: var(--theme-color);
}
.button-set {
	width: 110px;
	margin-top: 10px;
	padding: 10px;
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
.fontcolor {
	color: var(--inactive-color);
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

.app-card-subtext-change {
	padding-bottom: 1px;
}

.app-img-width {
	width: 380px;
	height: 220px;
	border-radius: 10px;
	margin: 0 10px;
	cursor: pointer;
}
.click-svg {
	cursor: pointer;
}
</style>