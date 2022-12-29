export interface BakeryItemType{
    id:number,
    name:string,
    description:string,
    price:number
    image:string
}
const Items:BakeryItemType[]=[
    {
        id:1,
        name:"Cake",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        price:15,
        image:"cake.jpeg",
    },
    {
        id:2,
        name:"Bagel",
        price:10,
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        image:"bagel.jpeg",
    },
    {
        id:3,
        name:"Croissant",
        price:5,
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        image:"crossiant.jpeg",
    },
    {
        id:4,
        name:"Ice cream",
        price:25.00,
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        image:"icecream.jpeg",
    },
    {
        id:5,
        name:"Donut",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        price:15,
        image:"donut.jpeg",
    },
    {
        id:6,
        name:"Bagel",
        price:10.00,
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        image:"bagel.jpeg",
    },
    {
        id:7,
        name:"Ice cream",
        price:5.00,
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        image:"icecream.jpeg",
    },
    {
        id:8,
        name:"Croissant",
        price:25.00,
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        image:"crossiant.jpeg",
     }
]
export default Items;