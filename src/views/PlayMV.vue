<template>
	<div class="main-container">
		<div class="content-wrapper">
			<div class="content-section">
				<video
					controls
					autoplay
					loop
					:src="mvUrl"
					style="width: 100%; border-radius: 10px"
				></video>
				<h4 class="fontcolor">MV评论</h4>

				<div class="content-section mv-top">
					<div class="apps-card">
						<div
							class="app-card app-mv"
							v-for="item in mvComments"
							:key="item.id"
						>
							<img
								:src="item.user.avatarUrl"
								alt=" "
								width="50 "
								class="mv-img"
							/>
							<span>{{ item.user.nickname }}</span>
							<div
								class="
									app-card__subtext
									app-mv-text app-card-sub-text-change
								"
							>
								{{ item.content }}
							</div>
							<div
								class="
									app-card__subtext
									app-mv-text app-card-sub-text-change
								"
							>
								<span style="float: left"
									>{{ item.likedCount }} 赞</span
								>
								<span style="float: right">{{
									item.timeStr
								}}</span>
							</div>
						</div>
					</div>
					<div class="block">
						<el-pagination
							class="el-pagination"
							v-if="mvCount != 0"
							@current-change="handleCurrentChange"
							:current-page.sync="currentPage"
							:page-size="15"
							layout="prev, pager, next, jumper"
							:total="mvCount"
							:background="true"
						>
						</el-pagination>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import configJSON from "../../config";
import { getMVUrlApi, getCommentMVApi } from "../request/api";
export default {
	data: () => ({
		mvUrl: "",
		currentPage: 1,
		mvCount: 0,
		mvComments: [],
		limit: configJSON.limit,
	}),
	created() {
		this.getMVUrl();
		this.getCommentMV();
	},
	methods: {
		handleCurrentChange: function (currentPage) {
			this.currentPage = currentPage;
			this.getCommentMV(currentPage);
		},
		getMVUrl() {
			getMVUrlApi(this.$route.query.mvId).then((response) => {
				this.mvUrl = response.data.data.url;
			});
		},
		getCommentMV(page = 1) {
			getCommentMVApi({
				id: this.$route.query.mvId,
				limit: this.limit,
				offset: (page - 1) * this.limit,
			}).then((response) => {
				this.mvComments=response.data.comments;
				this.mvCount = response.data.total;
			});
		},
	},
};
</script>
<style scoped>
.fontcolor {
	color: var(--inactive-color);
}
.el-pagination {
	text-align: center;
	margin-top: 5px;
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
</style>