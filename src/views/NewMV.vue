<template>
	<div class="main-container">
		<MainHeader></MainHeader>
		<div class="content-wrapper">
			<!--MV开始 -->
			<div class="content-section">
				<div class="apps-card">
					<div
						class="block"
						v-for="mv in mvs"
						@click="getMVUrl(mv.id)"
						:key="mv.id"
					>
						<el-image
							class="app-card app-img-with"
							:src="mv.cover"
						></el-image>
						<h5 class="song-list-text">{{ mv.name }}</h5>
					</div>
				</div>
			</div>
			<!-- MV结束 -->
		</div>
	</div>
</template>
<script>
import { getMVFirstApi } from "../request/api";
import configJSON from "../../config";
import MainHeader from "../components/MainHeader.vue";
export default {
	data: () => ({
		mvs: [],
	}),
	created() {
		this.getMVFirst();
	},
	components: {
		MainHeader,
	},
	methods: {
		getMVFirst() {
			getMVFirstApi({ limit: configJSON.limit }).then((response) => {
				this.mvs = response.data.data;         
			});
		},
        getMVUrl(mvId){
            this.$router.push({path:'/play-mv',query:{mvId:mvId}})
        }
	},
};
</script>
<style scoped>
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

.app-img-with {
	width: 380px;
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