"use strict";
exports.__esModule = true;
exports.getArtistAlbumApi = exports.getArtistSongsApi = exports.getTopListArtistApi = exports.getAlbumApi = exports.getTopListApi = exports.getAlbumNewestApi = exports.getUserCloudApi = exports.getDJHotApi = exports.getCommentMVApi = exports.getMVUrlApi = exports.getMVFirstApi = exports.getPlayListTrackAllApi = exports.getPlayListCommentApi = exports.getPlaylistDetailApi = exports.getRecordRecentDJApi = exports.getRecordRecentAlbumApi = exports.getRecordRecentPlaylistApi = exports.getRecordRecentVideoApi = exports.getRecordRecentSongApi = exports.getUserDJApi = exports.getUserPlayListApi = exports.getSubCountApi = exports.getSongDetailApi = exports.getLyricApi = exports.getSongApi = exports.getPlayListsApi = exports.getNewMusicApi = exports.getMusicInfoApi = exports.logoutApi = exports.captchaLoginApi = exports.getCaptchaApi = exports.emailLoginApi = exports.cellPhoneLoginApi = void 0;
var request_1 = require("./request");
var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());
var Music = /** @class */ (function () {
    function Music() {
    }
    return Music;
}());
/**
 * 歌单 ( 网友精选碟 )
 */
var PlayList = /** @class */ (function () {
    function PlayList(params) {
        this.order = params.order;
        this.cat = params.order;
        this.limit = params.limit;
        this.offset = params.offset;
    }
    return PlayList;
}());
/**
 * 手机登录
 * @param {Login} params
 * @returns {any}
 */
var cellPhoneLoginApi = function (params) { return request_1["default"].get("/login/cellphone?phone=".concat(params.phone, "&password=").concat(params.password)); };
exports.cellPhoneLoginApi = cellPhoneLoginApi;
/**
 * 邮箱登录
 * @param {any} params
 * @returns {any}
 */
var emailLoginApi = function (params) { return request_1["default"].get("/login?email=".concat(params.email, "&password=").concat(params.password)); };
exports.emailLoginApi = emailLoginApi;
/**
 * 获取验证码
 * @param {any} params
 * @returns {any}
 */
var getCaptchaApi = function (phone) { return request_1["default"].get("/captcha/sent?phone=".concat(phone)); };
exports.getCaptchaApi = getCaptchaApi;
/**
 * 验证码登录
 * @param {any} params
 * @returns {any}
 */
var captchaLoginApi = function (params) { return request_1["default"].get("/login/cellphone?phone=".concat(params.phone, "&captcha=").concat(params.captcha)); };
exports.captchaLoginApi = captchaLoginApi;
/**
 * 退出登录
 * @returns
 */
var logoutApi = function () { return request_1["default"].get("/logout"); };
exports.logoutApi = logoutApi;
/**
 * 搜索
 * @param {Music} params
 * @returns {any}
 */
var getMusicInfoApi = function (params) { return request_1["default"].get("cloudsearch?keywords=".concat(params.keywords, "&limit=").concat(params.limit, "&offset=").concat(params.offset, "&type=").concat(params.type)); };
exports.getMusicInfoApi = getMusicInfoApi;
/**
 * 推荐新音乐
 * @param {number} limit
 * @returns
 */
var getNewMusicApi = function (limit) {
    if (limit === void 0) { limit = 10; }
    return request_1["default"].get("/personalized/newsong?limit=".concat(limit));
};
exports.getNewMusicApi = getNewMusicApi;
/**
 * 歌单 ( 网友精选碟 )
 * @param {PlayList} params
 * @returns {any}
 */
var getPlayListsApi = function (params) {
    if (params === void 0) { params = new PlayList({ order: 'hot', cat: '全部', limit: 50, offset: 0 * 50 }); }
    return request_1["default"].get("top/playlist?limit=".concat(params.limit, "&offset=").concat(params.offset));
};
exports.getPlayListsApi = getPlayListsApi;
/**
 * 获取音乐 url
 * @param {number|string} params
 * @returns {any}
 */
var getSongApi = function (ids) { return request_1["default"].get("song/url?id=".concat(ids)); };
exports.getSongApi = getSongApi;
/**
 * 获取歌词
 * @param {number} id
 * @returns {any}
 */
var getLyricApi = function (id) { return request_1["default"].get("lyric?id=".concat(id)); };
exports.getLyricApi = getLyricApi;
/**
 * 获取歌曲详情
 * @param {number} id
 * @returns {any}
 */
var getSongDetailApi = function (id) { return request_1["default"].get("song/detail?ids=".concat(id)); };
exports.getSongDetailApi = getSongDetailApi;
/**
 * 获取用户信息 , 歌单，收藏，mv, dj 数量
 * @returns {any}
 */
var getSubCountApi = function () { return request_1["default"].get("/user/subcount"); };
exports.getSubCountApi = getSubCountApi;
/**
 * 获取用户歌单
 * @param {number} id
 * @returns {any}
 */
var getUserPlayListApi = function (id) { return request_1["default"].get("/user/playlist?uid=".concat(id)); };
exports.getUserPlayListApi = getUserPlayListApi;
/**
 * 获取用户电台
 * @param {number} uid
 * @returns {any}
 */
var getUserDJApi = function (uid) { return request_1["default"].get("/user/dj?uid=".concat(uid)); };
exports.getUserDJApi = getUserDJApi;
/**
 * 最近播放-歌曲
 * @param {number} limit
 * @returns {any}
 */
var getRecordRecentSongApi = function (limit) {
    if (limit === void 0) { limit = 100; }
    return request_1["default"].get("/record/recent/song?limit".concat(limit));
};
exports.getRecordRecentSongApi = getRecordRecentSongApi;
/**
 * 最近播放-视频
 * @param {number} limit
 * @returns {any}
 */
var getRecordRecentVideoApi = function (limit) {
    if (limit === void 0) { limit = 100; }
    return request_1["default"].get("/record/recent/video?limit".concat(limit));
};
exports.getRecordRecentVideoApi = getRecordRecentVideoApi;
/**
 * 最近播放-歌单
 * @param {number} limit
 * @returns {any}
 */
var getRecordRecentPlaylistApi = function (limit) {
    if (limit === void 0) { limit = 100; }
    return request_1["default"].get("/record/recent/playlist?limit".concat(limit));
};
exports.getRecordRecentPlaylistApi = getRecordRecentPlaylistApi;
/**
 * 最近播放-专辑
 * @param {number} limit
 * @returns {any}
 */
var getRecordRecentAlbumApi = function (limit) {
    if (limit === void 0) { limit = 100; }
    return request_1["default"].get("/record/recent/album?limit".concat(limit));
};
exports.getRecordRecentAlbumApi = getRecordRecentAlbumApi;
/**
 * 最近播放-播客
 * @param {number} limit
 * @returns {any}
 */
var getRecordRecentDJApi = function (limit) {
    if (limit === void 0) { limit = 100; }
    return request_1["default"].get("/record/recent/dj?limit".concat(limit));
};
exports.getRecordRecentDJApi = getRecordRecentDJApi;
/**
 * 获取歌单详情
 * @param {number} id
 * @returns {any}
 */
var getPlaylistDetailApi = function (id) { return request_1["default"].get("/playlist/detail?id=".concat(id)); };
exports.getPlaylistDetailApi = getPlaylistDetailApi;
/**
 * 获取歌单评论
 * @param {any} params
 * @returns {any}
 */
var getPlayListCommentApi = function (params) { return request_1["default"].get("/comment/playlist?id=".concat(params.id, "&limit=").concat(params.limit, "&offset=").concat(params.offset)); };
exports.getPlayListCommentApi = getPlayListCommentApi;
/**
 * 获取歌单所有歌曲
 * @param {any} params
 * @returns {any}
 */
var getPlayListTrackAllApi = function (params) { return request_1["default"].get("/playlist/track/all?id=".concat(params.id, "&limit=").concat(params.limit, "&offset=").concat(params.offset, "&timestamp=").concat(new Date().getTime())); };
exports.getPlayListTrackAllApi = getPlayListTrackAllApi;
/**
 * 最新mv
 * @returns {any}
 */
var getMVFirstApi = function (_a) {
    var _b = _a.limit, limit = _b === void 0 ? 10 : _b;
    return request_1["default"].get("/mv/first?limit=".concat(limit));
};
exports.getMVFirstApi = getMVFirstApi;
/**
 * mv 地址
 * @param {number} id
 * @returns {any}
 */
var getMVUrlApi = function (id) { return request_1["default"].get("mv/url?id=".concat(id)); };
exports.getMVUrlApi = getMVUrlApi;
/**
 * 获取MV评论
 * @param {any} params
 * @returns {any}
 */
var getCommentMVApi = function (params) { return request_1["default"].get("/comment/mv?id=".concat(params.id, "&limit=").concat(params.limit, "&offset=").concat(params.offset)); };
exports.getCommentMVApi = getCommentMVApi;
/**
 * 热门电台
 * @param {any} params
 * @returns {any}
 */
var getDJHotApi = function (params) { return request_1["default"].get("/dj/hot?limit=".concat(params.limit, "&offset=").concat(params.offset)); };
exports.getDJHotApi = getDJHotApi;
/**
 * 云盘
 * @returns {any}
 */
var getUserCloudApi = function () { return request_1["default"].get("/user/cloud"); };
exports.getUserCloudApi = getUserCloudApi;
/**
 * 最新专辑
 * @returns {any}
 */
var getAlbumNewestApi = function () { return request_1["default"].get("/album/newest"); };
exports.getAlbumNewestApi = getAlbumNewestApi;
/**
 * 所有榜单
 * @returns {any}
 */
var getTopListApi = function () { return request_1["default"].get("/toplist"); };
exports.getTopListApi = getTopListApi;
/**
 * 获取专辑内容
 * @param {number} id
 * @returns
 */
var getAlbumApi = function (id) { return request_1["default"].get("/album?id=".concat(id)); };
exports.getAlbumApi = getAlbumApi;
/**
 * 歌手榜
 * @param params
 * @returns
 */
var getTopListArtistApi = function (params) { return request_1["default"].get("/toplist/artist?type=".concat(params.type)); };
exports.getTopListArtistApi = getTopListArtistApi;
/**
 * 歌手全部歌曲
 * @param {number} id
 * @returns
 */
var getArtistSongsApi = function (id) { return request_1["default"].get("/artist/songs?id=".concat(id)); };
exports.getArtistSongsApi = getArtistSongsApi;
/**
 * 获取歌手专辑
 * @param params
 * @returns
 */
var getArtistAlbumApi = function (params) { return request_1["default"].get("artist/album?id=".concat(params.id, "&limit=").concat(params.limit, "&offset=").concat(params.offset)); };
exports.getArtistAlbumApi = getArtistAlbumApi;
