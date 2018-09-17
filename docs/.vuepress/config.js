module.exports = {
    base: '/A320FM/',
    title: 'A320FM Study Notes',
    description: 'Just for A319/A320',
    themeConfig: {
        lastUpdated: '最后一次更新',
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
        title: 'ATA21-Air Conditioning',
        children: []
    };
    let ATA22 = {
        title: 'ATA22-Auto Flight',
        children: []
    };
    let ATA23 = {
        title: 'ATA23-Communications',
        children: []
    };
    let ATA24 = {
        title: 'ATA24-Electrical Power',
        children: []
    };
    let ATA25 = {
        title: 'ATA25-Equipment/Furnishings',
        children: []
    };
    let ATA26 = {
        title: 'ATA26-Fire Protection',
        children: []
    };
    let ATA27 = {
        title: 'ATA27-Flight Controls',
        children: []
    };
    let ATA28 = {
        title: 'ATA28-Fuel',
        children: []
    };
    let ATA29 = {
        title: 'ATA29-Hydraulic Power',
        children: []
    };
    let ATA30 = {
        title: 'ATA30-Ice/Rain Protection',
        children: []
    };
    let ATA31 = {
        title: 'ATA31-Indicating/Recording',
        children: ['/ATA31/']
    };
    let ATA32 = {
        title: 'ATA32-Landing Gear',
        children: []
    };
    let ATA33 = {
        title: 'ATA33-Lights',
        children: []
    };
    let ATA34 = {
        title: 'ATA34-Navigation',
        children: []
    };
    let ATA35 = {
        title: 'ATA35-Oxygen',
        children: []
    };
    let ATA36 = {
        title: 'ATA36-Pneumatic',
        children: ['/ATA36/', './ATA36/00', './ATA36/11', './ATA36/12', './ATA36/14', './ATA36/20']
    };
    let ATA38 = {
        title: 'ATA38-Water/Waste',
        children: []
    };
    let ATA46 = {
        title: 'ATA46-Information Systems',
        children: []
    };
    let ATA47 = {
        title: 'ATA47-Inert Gas System',
        children: []
    };
    let ATA49 = {
        title: 'ATA49-APU',
        children: []
    };
    let ATA51 = {
        title: 'ATA51-Structures',
        children: []
    };
    let ATA52 = {
        title: 'ATA52-Doors',
        children: []
    };
    let ATA70 = {
        title: 'ATA70-Power Plant',
        children: []
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
        ATA70
    ]
}

function sidebar_divide() {
    return {
        '/ATA31/': [''],
        '/ATA36/': ['', './00.md', './11.md', './12.md', './14.md', './20.md'],
        '/': ['']
    }
}