<template>
	<div class="main-container">
		<MainHeader></MainHeader>
		<div class="content-wrapper">
			<div class="content-section">
				<div class="apps-card">
					<div class="block" v-for="item in radio" :key="item.id">
						<el-image
							class="song-list-img3 app-card"
							:src="item.picUrl"
						></el-image>
						<h5 class="song-list-text">{{ item.name }}</h5>
						<p class="copywriter">{{ item.copywriter }}</p>
					</div>
				</div>

				<div class="block">
					<el-pagination class="el-pagination"
						v-if="count != 0"
						@current-change="handleCurrentChange"
						:current-page.sync="currentPage"
						:page-size="limit"
						layout="prev, pager, next, jumper"
						:total="count"
						:background="true"
					>
					</el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import MainHeader from "../components/MainHeader.vue";
import { getDJHotApi } from "../request/api";
import configJSON from "../../config";
export default {
	data: () => ({
		radio: [],
		count: 150,
		currentPage: 1,
		limit: configJSON.limit,
	}),
	created() {
		this.getDJHot();
	},
	components: {
		MainHeader,
	},
	methods: {
		handleCurrentChange: function (currentPage) {
			this.currentPage = currentPage;
			this.getDJHot(currentPage);
		},
		getDJHot(page = 1) {
			getDJHotApi({
				limit: this.limit,
				offset: (page - 1) * this.limit,
			}).then((response) => {
				console.log(response);
				this.radio=response.data.djRadios;
				
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
.song-list-img3 {
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

.copywriter {
	text-align: center;
	color: var(--inactive-color);
	font-size: 10px;
}
</style>