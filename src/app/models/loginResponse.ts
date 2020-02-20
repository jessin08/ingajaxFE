
    export interface Product {
        productId: number;
        productName: string;
    }

    export interface ProductDetails {
        productGroupId: number;
        productGroupName: string;
        products: Product[];
    }

    export interface LoginResponse {
        userToken: string;
        userType: string;
        productDetails: ProductDetails;
    }


