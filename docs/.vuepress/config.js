module.exports = {
    base: '/A320FM/',
    title: 'A320FM Study Notes',
    description: 'Just for A319/A320',
    themeConfig: {
        lastUpdated: '最后一次编辑',
        nav: [
            { text: 'Personal Homepage', link: 'https://320wuyanzu.github.io' },
            { text: 'Home', link: '/' },
            { text: 'A330 Notes', link: 'https://320wuyanzu.github.io/410.html' },
        ],
        sidebarDepth: 2,
        sidebar: sidebar_group()
    }
}


/**
 * 折叠式侧边栏
 */
function sidebar_group() {
    let ATA21 = {
        title: 'ATA21-空调',
        children: []
    };
    let ATA22 = {
        title: 'ATA22-自动飞行',
        children: []
    };
    let ATA23 = {
        title: 'ATA23-通信',
        children: []
    };
    let ATA24 = {
        title: 'ATA24-电源',
        children: []
    };
    let ATA25 = {
        title: 'ATA25-设施设备装饰',
        children: []
    };
    let ATA26 = {
        title: 'ATA26-防火',
        children: []
    };
    let ATA27 = {
        title: 'ATA27-飞行控制',
        children: []
    };
    let ATA28 = {
        title: 'ATA28-燃油',
        children: []
    };
    let ATA29 = {
        title: 'ATA29-液压',
        children: []
    };
    let ATA30 = {
        title: 'ATA30-防雨防冰',
        children: []
    };
    let ATA31 = {
        title: 'ATA31-仪表指示记录',
        children: ['/ATA31/']
    };
    let ATA32 = {
        title: 'ATA32-起落架',
        children: []
    };
    let ATA33 = {
        title: 'ATA33-灯光',
        children: []
    };
    let ATA34 = {
        title: 'ATA34-导航',
        children: []
    };
    let ATA35 = {
        title: 'ATA35-氧气',
        children: []
    };
    let ATA36 = {
        title: 'ATA36-气源(引气)',
        children: ['/ATA36/', './ATA36/00', './ATA36/11', './ATA36/12', './ATA36/14', './ATA36/20']
    };
    let ATA38 = {
        title: 'ATA38-水和污水',
        children: []
    };
    let ATA46 = {
        title: 'ATA46-信息系统',
        children: []
    };
    let ATA47 = {
        title: 'ATA47-惰性气体系统',
        children: []
    };
    let ATA49 = {
        title: 'ATA49-APU',
        children: []
    };
    let ATA51 = {
        title: 'ATA51-标准施工及结构',
        children: []
    };
    let ATA52 = {
        title: 'ATA52-门',
        children: []
    };
    let ATA71 = {
        title: 'ATA71-动力装置(CFM56)',
        children: ['/ATA71/00', '/ATA71/10', '/ATA71/20', '/ATA71/40', '/ATA71/50', '/ATA71/70']
    };
    let ATA72 = {
        title: 'ATA72-发动机概述(CFM56)',
        children: ['/ATA72/']
    };
    let ATA73 = {
        title: 'ATA73-燃油及其控制(CFM56)',
        children: ['/ATA73/']
    };
    let ATA74 = {
        title: 'ATA74-点火(CFM56)',
        children: ['/ATA74/']
    };
    let ATA75 = {
        title: 'ATA75-空气(CFM56)',
        children: ['/ATA75/']
    };
    let ATA76 = {
        title: 'ATA76-控制(CFM56)',
        children: ['/ATA76/']
    };
    let ATA77 = {
        title: 'ATA77-指示(CFM56)',
        children: ['/ATA77/']
    };
    let ATA78 = {
        title: 'ATA78-排气(CFM56)',
        children: ['/ATA78/']
    };
    let ATA79 = {
        title: 'ATA79-滑油(CFM56)',
        children: ['/ATA79/']
    };
    let ATA80 = {
        title: 'ATA80-启动(CFM56)',
        children: ['/ATA80/']
    };
    return [
        ATA21,
        ATA22,
        ATA23,
        ATA24,
        ATA25,
        ATA26,
        ATA27,
        ATA28,
        ATA29,
        ATA30,
        ATA31,
        ATA32,
        ATA33,
        ATA34,
        ATA35,
        ATA36,
        ATA38,
        ATA46,
        ATA47,
        ATA49,
        ATA51,
        ATA52,
        ATA71,
        ATA72,
        ATA73,
        ATA74,
        ATA75,
        ATA76,
        ATA77,
        ATA78,
        ATA79,
        ATA80
    ]
}