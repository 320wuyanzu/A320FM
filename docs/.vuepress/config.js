module.exports = {
    base: '/A320FM/',
    title: 'A320FM Study Notes',
    description: 'Just for A319/A320',
    themeConfig: {
        lastUpdated: '最后一次更新',
        nav: [
            { text: 'Personal Homepage', link: 'https://320wuyanzu.github.io' },
            { text: 'Home', link: '/' },
            { text: 'A320FM Notes', items: catalog() },
            { text: 'A330 Notes', link: 'https://320wuyanzu.github.io/410.html' },
        ],
        sidebarDepth:2,
        sidebar: sidebar_divide()
    }
}
function sidebar_divide(){
    return{
        '/ATA31/':[''],
        '/ATA36/':['','./00.md','./11.md','./12.md', './14.md', './20.md'],
        '/':['']
    }
}
/**
 * 折叠式侧边栏
 */
/*
function sidebar_group(){
    return [
    {
        title: 'ATA21',
        collapsable: true,
        children:[]
    },
    {
        title: 'ATA22',
        collapsable: true,
        children:[]
    },
    {
        title: 'ATA23',
        collapsable: true,
        children:[]
    },
    {
        title: 'ATA24',
        collapsable: true,
        children:[]
    },
    {
        title: 'ATA25',
        collapsable: true,
        children:[]
    },
    {
        title: 'ATA26',
        collapsable: true,
        children:[]
    },
    {
        title: 'ATA27',
        collapsable: true,
        children:[]
    },
    {
        title: 'ATA28',
        collapsable: true,
        children:[]
    },
    {
        title: 'ATA29',
        collapsable: true,
        children:[]
    },
    {
        title: 'ATA30',
        collapsable: true,
        children:[]
    },
    {
        title: 'ATA31',
        collapsable: true,
        children:[]
    },
    {
        title: 'ATA32',
        collapsable: true,
        children:[]
    },
    {
        title: 'ATA33',
        collapsable: true,
        children:[]
    },
    {
        title: 'ATA34',
        collapsable: true,
        children:[]
    },
    {
        title: 'ATA35',
        collapsable: true,
        children:[]
    },
    {
        title: 'ATA36-Pneumatic',
        collapsable: true,
        children:['/ATA36/', './00.md', './11.md', './20.md']
    },
    {
        title: 'ATA38',
        collapsable: true,
        children:[]
    },
    {
        title: 'ATA46',
        collapsable: true,
        children:[]
    },
    {
        title: 'ATA47',
        collapsable: true,
        children:[]
    },
    {
        title: 'ATA49',
        collapsable: true,
        children:[]
    },
    {
        title: 'ATA51',
        collapsable: true,
        children:[]
    },
    {
        title: 'ATA52',
        collapsable: true,
        children:[]
    },
    {
        title: 'ATA22',
        collapsable: true,
        children:[]
    }
]}
*/
function catalog() {
    return [
        { text: 'ATA-21 Air Conditioning', link: './catalog#ata-21-air-conditioning' },
        { text: 'ATA-22 Auto Flight', link: './catalog#ata-22-auto-flight' },
        { text: 'ATA-23 Communications', link: './catalog#ata-23-communications' },
        { text: 'ATA-24 Electrical Power', link: './catalog#ata-24-electrical-power' },
        { text: 'ATA-25 Equipment/Furnishings', link: './catalog#ata-25-equipment-furnishings' },
        { text: 'ATA-26 Fire Protection', link: './catalog#ata-26-fire-protection' },
        { text: 'ATA-27 Flight Controls', link: './catalog#ata-27-flight-controls' },
        { text: 'ATA-28 Fuel', link: './catalog#ata-28-fuel' },
        { text: 'ATA-29 Hydraulic Power', link: './catalog#ata-29-hydraulic-power' },
        { text: 'ATA-30 Ice/Rain Protection', link: './catalog#ata-30-ice-and-rain-protection' },
        { text: 'ATA-31 Indicating/Recording Systems', link: '/ATA31/' },
        { text: 'ATA-32 Landing Gear', link: './catalog#ata-32-landing-gear' },
        { text: 'ATA-33 Lights', link: './catalog#ata-33-lights' },
        { text: 'ATA-34 Navigation', link: './catalog#ata-34-navigation' },
        { text: 'ATA-35 Oxygen', link: './catalog#ata-35-oxygen' },
        { text: 'ATA-36 Pneumatic', link: '/ATA36/' },
        { text: 'ATA-38 Water/Waste', link: './catalog#ata-38-water-waste' },
        { text: 'ATA-46 Information Systems', link: './catalog#ata-46-information-systems' },
        { text: 'ATA-47 Inert Gas System', link: './catalog#ata-47-inert-gas-system' },
        { text: 'ATA-49 APU', link: './catalog#ata-49-airborne-auxiliary-power' },
        { text: 'ATA-51 Structures', link: './catalog#ata-51-structures' },
        { text: 'ATA-52 Doors', link: './catalog#ata-52-doors' },
        { text: 'ATA-70 Power Plant(CFM56)', link: './catalog#ata-70-power-plant-cfm56' }
    ];
}