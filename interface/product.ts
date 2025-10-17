import { CategotyStatus } from "@/enums/categoryStatus";
import { ProductStatus } from "@/enums/productStatus";

export interface Product{
    id: number;
    productCode: string;
    productName: string;
    price: number;
    productStatus: ProductStatus;
    description: string;
    categoryId: number;
    category: {
        id: number;
        categoryName: string;
        categoryStatus: CategotyStatus;
        categoryDescription: string;
    }
    createdAt: Date;
    image: [];
}
