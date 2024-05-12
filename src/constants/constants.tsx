export const manufacturers = [
    'acura',
    'mercedes',
    'toyota',
    'lexus',
    'BMW',
    'audi'
]

export const fuelType =['Fuel','electric','gas']

export const yearOfProduction = ['Year','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024']

export const FooterLinks:({title:string;links:({title:string,url:string}[])}[]) = [
    {title:'About',
    links:[
        {title:'How it works',url:'/'},
        {title:'Featured',url:'/'},
        {title:'Partnership',url:'/'},
        {title:'Business Realtion',url:'/'}
    ]
    },
    {title:'Company',
    links:[
        {title:'Events',url:'/'},
        {title:'Blog',url:'/'},
        {title:'Podcast',url:'/'},
        {title:'Invite A Friend',url:'/'}
    ]
    },
    {title:'Social',
    links:[
        {title:'Discord',url:'/'},
        {title:'Instagram',url:'/'},
        {title:'X',url:'/'},
        {title:'Facebook',url:'/'}
    ]
    }
]