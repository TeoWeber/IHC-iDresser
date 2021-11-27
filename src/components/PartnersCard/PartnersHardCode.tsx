import { Order } from "../../App"

interface Partner {
    id: number;
    name: string;
    services: Array<Order>;
  }

export const Partners:Array<Partner> = [
    {
        id: 0,
        name: "Billy's Clothing",
        services: [
            {service: "Costura", price:30.0},
            {service: "Lavagem", price:30.0},
        ]
    },
    {
        id: 1,
        name: "Costumes S.A.",
        services: [
            {service: "Empréstimo", price:15.0},
            {service: "Costura", price:30.0},
            {service: "Lavagem", price:30.0},
        ]
    },
    {
        id: 2,
        name: "Not Enough Dresses",
        services: [
            {service: "Empréstimo", price:15.0},
            {service: "Lavagem", price:30.0},
        ]
    },
    {
        id: 3,
        name: "Sole Mates",
        services: [
            {service: "Costura", price:15.0},
            {service: "Empréstimo", price:30.0},
        ]
    },
    {
        id: 4,
        name: "Donut-Ella Versace",
        services: [
            {service: "Lavagem", price:15.0},
            {service: "Costura", price:30.0},
        ]
    },
    {
        id: 5,
        name: "Sew You",
        services: [
            {service: "Costura", price:15.0},
            {service: "Lavagem", price:30.0},
        ]
    },
    {
        id: 6,
        name: "Itches & Stitches",
        services: [
            {service: "Lavagem", price:15.0},
            {service: "Costura", price:30.0},
        ]
    },
    {
        id: 7,
        name: "Fashion Selection",
        services: [
            {service: "Lavagem", price:15.0},
            {service: "Empréstimo", price:30.0},
            {service: "Costura", price:30.0},
        ]
    },

]