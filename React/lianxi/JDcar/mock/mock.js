import Mock from 'mockjs'
const dataList = 
        [
            {
                icon:'iconfont icon-qq',
                name:'新车选号',
                hao:true
            },
            {
                icon:'iconfont icon-qq',
                name:'在用车选好',
                hao:true
            },
            {
                icon:'iconfont icon-qq',
                name:'新能源车换牌选号',
                hao:true
            },{
                icon:'iconfont icon-qq',
                name:'号码号段公布',
                hao:true
            },
            {
                icon:'iconfont icon-qq',
                name:'备案非本人机动车',
                hao:true
            },
            {
                icon:'iconfont icon-qq',
                name:'机动车检验预约',
                hao:true
            },
            {
                icon:'iconfont icon-qq',
                name:'新能源车换牌预约',
                hao:true
            },
            {
                icon:'iconfont icon-qq',
                name:'补换领机动车号牌',
                hao:true
            },
            {
                icon:'iconfont icon-qq',
                name:'补换领行驶证',
                hao:true
            },
            {
                icon:'iconfont icon-qq',
                name:'补换检验合格标志',
                hao:true
            },
            {
                icon:'iconfont icon-qq',
                name:'变更机动车联系方式',
                hao:true
            },
            {
                icon:'iconfont icon-qq',
                name:'机动车挂靠申请',
                hao:true
            },
            {
                icon:'iconfont icon-qq',
                name:'申领标志',
                hao:true
            },
            {
                icon:'iconfont icon-qq',
                name:'机动车转籍申请',
                hao:true
            }
        ]
Mock.mock('/api/list',()=>{
    return {
        code:1,
        data:dataList
    }
})