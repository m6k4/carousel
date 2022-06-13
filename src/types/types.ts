export interface SingleProduct { 
    id: number;
    name: string;
    price: number;
}

export interface Location {
    label: string;
}

export interface AllegroLocally {
    location: Location;
}

export interface Image {
    alt: string;
    url: string;
}

export interface Publication {
    endingAt: Date;
    startingAt: Date;
}

export interface Seller {
    id: string;
}

export interface Sale {
    amount: string;
    currency: string;
}

export interface Price {
    sale: Sale;
}

export interface BuyNow {
    active: boolean;
    price: Price;
}

export interface Cart {
    active: boolean;
}

export interface Price2 {
    amount: string;
    currency: string;
}

export interface Advertisement {
    active: boolean;
    price: Price2;
}

export interface Current {
    amount: string;
    currency: string;
}

export interface Price3 {
    current: Current;
}

export interface Auction {
    active: boolean;
    price: Price3;
}

export interface SellingMode {
    buyNow: BuyNow;
    cart: Cart;
    advertisement: Advertisement;
    auction: Auction;
}

export interface Shipping {
    priceWithDeliveryLabel: string;
}

export interface View {
    type: string;
    url: string;
}

export interface ApiResponse {
    allegroLocally: AllegroLocally;
    id: string;
    images: Array<Image>;
    name: string;
    publication: Publication;
    seller: Seller;
    sellingMode: SellingMode;
    shipping: Shipping;
    view: View;
}

export interface ProductDTO {
    name: string, 
    images: Array<Image>,
    location: Location,
    publication: Publication,
}