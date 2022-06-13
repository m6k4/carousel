import { Publication, Location, Image, ProductDTO, Sale, SellingMode, SellingModeTypeEnum, SellingModeTypes } from "../types/types";

export class Product {
    constructor(
        private readonly name: string,
        private readonly images: Array<Image>,
        private readonly location: Location,
        private readonly publication: Publication,
        private readonly sellingMode: SellingMode
    ) {}

    static fromDTO(dto: ProductDTO): Product {
        return new Product(
            dto.name,
            dto.images,
            dto.location,
            dto.publication,
            dto.sellingMode
        );
    }

    getName(): string {
        return this.name;
    }

    getImages(): Array<Image> {
        return this.images;
    }

    getFirstImage(): Image {
        return this.images[0];
    }

    getLocation(): Location {
        return this.location;
    }

    getPublication(): Publication {
        return this.publication;
    }

    getPrice(): Sale | undefined {
        switch(this.getSellingType()) {
            case SellingModeTypeEnum.BUY_NOW:
                return this.sellingMode.buyNow.price.sale;
            case SellingModeTypeEnum.ADVERTISEMENT:
                return this.sellingMode.advertisement.price;
            case SellingModeTypeEnum.AUCTION:
                return this.sellingMode.auction.price.current;
        }
    }

    getSellingMode() : SellingMode {
        return this.sellingMode;
    }

    getSellingType() {
        return Object.keys(this.sellingMode)[0]
    }
}