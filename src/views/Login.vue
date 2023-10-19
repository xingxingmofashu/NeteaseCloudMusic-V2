<template>
	<div>
		<div v-if="type == 1" class="m-layer w3lhny-register">
			<div class="iconhny">
				<span class="fa fa-user-plus"></span>
			</div>
			<div class="register-form">
				<fieldset>
					<div class="form">
						<div class="form-row">
							<span class="fa fa-user"></span>
							<input
								type="text"
								class="form-text"
								placeholder="Account"
								required=""
								v-model="phone"
							/>
						</div>
						<div class="form-row">
							<span class="fa fa-lock"></span>

							<input
								type="password"
								class="form-text"
								placeholder="Password"
								required=""
								v-model="password"
							/>
						</div>
						<div class="form-row button-login">
							<button class="btn btn-login" @click="login">
								Sign Up
							</button>
						</div>
					</div>
				</fieldset>
			</div>
			<span class="create-account">Or Continue With!</span>
			<div class="social-media">
				<span title="邮箱登录" @click="changeType(2)" class="fb type"
					><span class="fa fa-facebook"></span
				></span>
				<span title="验证码登录" @click="changeType(3)" class="tw type"
					><span class="fa fa-twitter"></span
				></span>
			</div>
			<p class="already">
				Already have an account <a href="#">Sign In</a>
			</p>
		</div>
		<div v-if="type == 2" class="m-layer w3lhny-register">
			<div class="iconhny">
				<span class="fa fa-user-plus"></span>
			</div>
			<div class="register-form">
				<fieldset>
					<div class="form">
						<div class="form-row">
							<span class="fa fa-envelope"></span>
							<input
								type="email"
								v-model="email"
								class="form-text"
								placeholder="Email Address"
								required=""
							/>
						</div>
						<div class="form-row">
							<span class="fa fa-lock"></span>

							<input
								type="password"
								class="form-text"
								placeholder="Password"
								required=""
								v-model="password"
							/>
						</div>
						<div class="form-row button-login">
							<button class="btn btn-login" @click="login">
								Sign Up
							</button>
						</div>
					</div>
				</fieldset>
			</div>
			<span class="create-account">Or Continue With!</span>
			<div class="social-media">
				<span title="验证码登录" @click="changeType(3)" class="fb type"
					><span class="fa fa-twitter"></span
				></span>

				<span
					title="账号密码登录"
					@click="changeType(1)"
					class="pi type"
					><span class="fa fa-pinterest"></span
				></span>
			</div>
			<p class="already">
				Already have an account <a href="#">Sign In</a>
			</p>
		</div>
		<div v-if="type == 3" class="m-layer w3lhny-register">
			<div class="iconhny">
				<span class="fa fa-user-plus"></span>
			</div>
			<div class="register-form">
				<fieldset>
					<div class="form">
						<div class="form-row">
							<span class="fa fa-user"></span>
							<input
								type="text"
								class="form-text"
								placeholder="Account"
								required=""
								v-model="phone"
							/>
						</div>
						<div class="form-row">
							<input
								type="text"
								class="form-text"
								placeholder="Captcha"
								required=""
								style="width: 70%"
								v-model="captcha"
							/>
							<button
								@click="getCaptcha"
								style="
									width: 25%;
									align-items: center;
									background: rgb(255, 255, 255);
									background: #028882;
									border-radius: 20px;
									border: 0px;
									color: rgb(0, 70, 67);
									cursor: pointer;
									font-size: 16px;
									padding: 10px 10px;
									transition: all 0.2s ease 0s;
									font-weight: 600;
									margin-left: 10px;
								"
								class="btn-login"
							>
								验证码
							</button>
						</div>

						<div class="form-row button-login">
							<button class="btn btn-login" @click="login">
								Sign Up
							</button>
						</div>
					</div>
				</fieldset>
			</div>
			<span class="create-account">Or Continue With!</span>
			<div class="social-media">
				<span
					title="账号密码登录"
					@click="changeType(1)"
					class="pi type"
					><span class="fa fa-pinterest"></span
				></span>
				<span title="邮箱登录" @click="changeType(2)" class="fb type"
					><span class="fa fa-facebook"></span
				></span>
			</div>
			<p class="already">
				Already have an account <a href="#">Sign In</a>
			</p>
		</div>
		<div class="m-mask">&nbsp;</div>
	</div>
</template>
<script>
import Icon from "../assets/Icon";
import {
	cellPhoneLoginApi,
	emailLoginApi,
	getCaptchaApi,
	captchaLoginApi,
	getUserPlayListApi,
} from "../request/api";
import "../assets/style.css";
import "../assets/font-awesome.min.css";
export default {
	data: () => ({
		phone: "17303864846",
		password: "haoxihuanni..",
		email: "lizhentengovo@163.com",
		captcha: "",
		type: 1, //1.手机号密码登录，2.邮箱密码登录，3.手机号验证码登录
	}),
	methods: {
		back() {
			this.$router.back();
		},
		login() {
			if (this.type == 1) {
				cellPhoneLoginApi({
					phone: this.phone,
					password: this.password,
				}).then((response) => {
					if (response.data.code == 200) {						
						getUserPlayListApi(response.data.account.id).then(
							(result) => {
								this.$store.state.lefMenu.filter(
									(x) => x.key == "create-playlist"
								)[0].menus.length = 0;
								this.$store.state.lefMenu.filter(
									(x) => x.key == "favorites-playlist"
								)[0].menus.length = 0;
								result.data.playlist.forEach(
									(element, index) => {
										if (
											element.userId ==
											response.data.account.id
										) {
											if (index == 0) {
												this.$store.commit(
													"addCreatePlayList",
													{
														name: "我喜欢的音乐",
														key: element.id,
														url: `/playlist-details?playlistId=${element.id}`,
														icon: Icon.like,
													}
												);
											} else {
												this.$store.commit(
													"addCreatePlayList",
													{
														name: element.name,
														key: element.id,
														url: `/playlist-details?playlistId=${element.id}`,
														icon: Icon.list,
													}
												);
											}
										} else {
											this.$store.commit(
												"addFavoritesPlayList",
												{
													name: element.name,
													key: element.id,
													url: `/playlist-details?playlistId=${element.id}`,
													icon: Icon.list,
												}
											);
										}
									}
								);
								this.$router.push({
									path:'/'
								});
								this.$router.go(0);
							}
						);
					}
				});
			}
			if (this.type == 2) {
				emailLoginApi({
					email: this.email,
					password: this.password,
				}).then((response) => {
					if (response.data.code == 200) {
						getUserPlayListApi(response.data.account.id).then(
							(result) => {
								this.$store.state.lefMenu.filter(
									(x) => x.key == "create-playlist"
								)[0].menus.length = 0;
								this.$store.state.lefMenu.filter(
									(x) => x.key == "favorites-playlist"
								)[0].menus.length = 0;
								result.data.playlist.forEach(
									(element, index) => {
										if (
											element.userId ==
											response.data.account.id
										) {
											if (index == 0) {
												this.$store.commit(
													"addCreatePlayList",
													{
														name: "我喜欢的音乐",
														key: element.id,
														url: `/playlist-details?playlistId=${element.id}`,
														icon: Icon.like,
													}
												);
											} else {
												this.$store.commit(
													"addCreatePlayList",
													{
														name: element.name,
														key: element.id,
														url: `/playlist-details?playlistId=${element.id}`,
														icon: Icon.list,
													}
												);
											}
										} else {
											this.$store.commit(
												"addFavoritesPlayList",
												{
													name: element.name,
													key: element.id,
													url: `/playlist-details?playlistId=${element.id}`,
													icon: Icon.list,
												}
											);
										}
									}
								);
								this.$router.push({
									path: "/",
								});
							}
						);
					}
				});
			}
			if (this.type == 3) {
				captchaLoginApi({
					phone: this.phone,
					captcha: this.captcha,
				}).then((response) => {
					if (response.data.code == 200) {
						getUserPlayListApi(response.data.account.id).then(
							(result) => {
								this.$store.state.lefMenu.filter(
									(x) => x.key == "create-playlist"
								)[0].menus.length = 0;
								this.$store.state.lefMenu.filter(
									(x) => x.key == "favorites-playlist"
								)[0].menus.length = 0;
								result.data.playlist.forEach(
									(element, index) => {
										if (
											element.userId ==
											response.data.account.id
										) {
											if (index == 0) {
												this.$store.commit(
													"addCreatePlayList",
													{
														name: "我喜欢的音乐",
														key: element.id,
														url: `/playlist-details?playlistId=${element.id}`,
														icon: Icon.like,
													}
												);
											} else {
												this.$store.commit(
													"addCreatePlayList",
													{
														name: element.name,
														key: element.id,
														url: `/playlist-details?playlistId=${element.id}`,
														icon: Icon.list,
													}
												);
											}
										} else {
											this.$store.commit(
												"addFavoritesPlayList",
												{
													name: element.name,
													key: element.id,
													url: `/playlist-details?playlistId=${element.id}`,
													icon: Icon.list,
												}
											);
										}
									}
								);
								this.$router.push({
									path: "/",
								});
							}
						);
					}
				});
			}
		},
		changeType(type) {
			this.type = type;
		},
		getCaptcha() {
			getCaptchaApi(this.phone).then((response) => {
				console.log(response);
			});
		},
	},
};
</script>
<style scoped>
.type {
	cursor: pointer;
}
.close {
	float: right;
}
.login-content {
	padding: 80px 80px 80px 80px;
	text-align: center;
}
.login-content span {
	font-size: 18px;
	height: 40px;
	line-height: 40px;
	color: white;
}
.bt_input {
	border-radius: 2px;
	border: none;
	padding: 11px 5px;
	width: 330px;
	margin-right: 20px;
	color: #333;
	margin-left: 5px;
	margin-bottom: 18px;
	background: #ffffffd9;
}
.login-button {
	background: #2d8c5fa6;
	border: none;
	padding: 12px 0px;
	color: #edefee;
	border-radius: 5px;
	width: 200px;
}

.m-layer {
	position: absolute;
	z-index: 1000;
	background: #fff;
	top: 83.5px;
	left: 503px;
	background: #0f1a1494;
	border-radius: 15px;
}

div.m-mask {
	position: fixed;
	z-index: 100;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
	background-image: url(data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==);
}
</style>