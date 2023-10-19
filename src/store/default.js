import Icon from '../assets/Icon'

export default {
    //左菜单
    lefMenu: [{
        key: 'recommend',
        title: '推荐',
        menus: [{
            name: '发现音乐',
            alias: '',
            key: 'index',
            url: '/',
            icon: Icon.menu
        }, {
            name: '歌曲搜索',
            alias: '',
            key: 'search-song',
            url: '/search-song?keyworks=',
            icon: Icon.search
        }, {
            name: '播客',
            alias: '',
            key: 'hot-dj',
            url: '/hot-dj',
            icon: Icon.radio
        }]
    }, {
        key: 'my-music',
        title: '我的音乐',
        menus: [{
            name: '最近播放',
            alias: '',
            key: 'record-recent',
            url: '/record-recent',
            icon: Icon.recentlyPlayed
        }, {
            name: '我的播客',
            alias: '',
            key: 'my-podcast',
            url: '/my-podcast',
            icon: Icon.radio
        }]
    }, {
        key: 'create-playlist',
        title: '创建的歌单',
        menus: []
    }, {
        key: 'favorites-playlist',
        title: '收藏的歌单',
        menus: []
    }],
    //头部菜单
    headerMenu: [{
        name: '个性推荐',
        key: 'music',
        url: '/music',
        new: false
    }, {
        name: '专辑',
        key: 'album-newest',
        url: '/album-newest',
        new: false
    }, {
        name: '排行榜',
        key: 'top-list',
        url: '/top-list',
        new: false
    }, {
        name: '歌手',
        key: 'singers',
        url: '/singers',
        new: false
    }, {
        name: 'MV',
        key: 'new-mv',
        url: '/new-mv',
        new: false
    }],
    //搜索关键字
    songKeyWorks: '',
    //歌曲搜索总数
    songCount: '',
    //歌单总数
    playlistCount: '',
    //mv总数
    mvCount: '',
    audioInfo: [{
        name: '东西（Cover：林俊呈）',
        artist: '纳豆',
        url: 'https://cdn.moefe.org/music/mp3/thing.mp3',
        cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
        lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc',
    }],
}