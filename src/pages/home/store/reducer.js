import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: "摄影",
            imgUrl: "//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
        },
        {
            id: 2,
            title: "故事",
            imgUrl: "//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
        },
        {
            id: 3,
            title: "旅行·在路上",
            imgUrl: "//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
        },
        {
            id: 4,
            title: "江苏电影",
            imgUrl: "//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
        },
        {
            id: 5,
            title: "江苏电影",
            imgUrl: "//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
        },
        {
            id: 6,
            title: "江苏电影",
            imgUrl: "//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
        },],
    homeList:[
        {
            id: 11,
            title: "少女种草清单，100个提升生活幸福感的小物，颜值超高",
            imgUrl:"//upload-images.jianshu.io/upload_images/8567915-cbe518a7dfc30271?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
            desc:"生活是需要仪式感的，我们不停的追求更好，其实就是在享受生活。 我曾经很喜欢便宜有趣的小东西。喜欢逛10元店，喜欢买一大堆看起来有用实际上鸡肋..."
        },
        {
            id: 12,
            title: "在冬天的某个早晨，我选择静静地离开",
            imgUrl:"//upload-images.jianshu.io/upload_images/3153328-a3f3608cbb97ae7a.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
            desc:"九月的情诗 续着八月的缠绵 八月的信函 写满了夏的火焰 邮差是风 而收件人更换了季节 月亮说写信人在桥下 溪水淌着呵欠，一个踉跄 留下一束沾着露.."
        },
        {
            id: 13,
            title: "投稿|140字微小说",
            imgUrl:"//upload-images.jianshu.io/upload_images/11680122-c289f8d1fa9d4717.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
            desc:"我用洪荒之力写就一文，投给简书官方专题。 很快有了回应，屏幕一闪，挂着哭脸表情说：你的文章《我很想上最牛叉专题》未能入选专题《我最牛叉》，继续加..."
        },
        {
            id: 14,
            title: "“你能不能主动一次啊，哪怕一次就好”",
            imgUrl:"//upload-images.jianshu.io/upload_images/11606545-44884bd5c8c8bbd3?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
            desc:"爱是一方的给予和另一方的索取。 但如果主动，换来的是费力不讨好，干脆就不打扰，也是一种贴心的温柔。 我有一个朋友，分享了她的一段经历。她上大学时... "
        },
        {
            id: 15,
            title: "少女种草清单，100个提升生活幸福感的小物，颜值超高",
            imgUrl:"//upload-images.jianshu.io/upload_images/8567915-cbe518a7dfc30271?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
            desc:"生活是需要仪式感的，我们不停的追求更好，其实就是在享受生活。 我曾经很喜欢便宜有趣的小东西。喜欢逛10元店，喜欢买一大堆看起来有用实际上鸡肋..."
        },
        {
            id: 16,
            title: "少女种草清单，100个提升生活幸福感的小物，颜值超高",
            imgUrl:"//upload-images.jianshu.io/upload_images/8567915-cbe518a7dfc30271?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
            desc:"生活是需要仪式感的，我们不停的追求更好，其实就是在享受生活。 我曾经很喜欢便宜有趣的小东西。喜欢逛10元店，喜欢买一大堆看起来有用实际上鸡肋..."
        },
        {
            id: 17,
            title: "少女种草清单，100个提升生活幸福感的小物，颜值超高",
            imgUrl:"//upload-images.jianshu.io/upload_images/8567915-cbe518a7dfc30271?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
            desc:"生活是需要仪式感的，我们不停的追求更好，其实就是在享受生活。 我曾经很喜欢便宜有趣的小东西。喜欢逛10元店，喜欢买一大堆看起来有用实际上鸡肋..."
        },
        {
            id: 11,
            title: "少女种草清单，100个提升生活幸福感的小物，颜值超高",
            imgUrl:"//upload-images.jianshu.io/upload_images/8567915-cbe518a7dfc30271?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
            desc:"生活是需要仪式感的，我们不停的追求更好，其实就是在享受生活。 我曾经很喜欢便宜有趣的小东西。喜欢逛10元店，喜欢买一大堆看起来有用实际上鸡肋..."
        }
    ],
    recommendList:[
        {
            id:1,
            imgUrl:"http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"
        },{
            id:2,
            imgUrl:"http://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"
        },{
            id:3,
            imgUrl:"http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
        },{
            id:4,
            imgUrl:"http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
        },{
            id:5,
            imgUrl:"http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
        },
    ]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }

}