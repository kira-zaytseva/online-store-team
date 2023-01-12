export interface PetsInterface {
    id: number;
    title: string;
    information: {
        id: number;
        question: string;
        answer: string;
    }[];
    price: number;
    images: string[];
    pet: string;
    category: string;
    stock: number;
    brand: string;
    country?: string;
}
