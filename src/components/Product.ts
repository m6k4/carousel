import { Publication, Location, Image, ProductDTO } from "../types/types";

export class Product {
    constructor(
        private readonly name: string,
        private readonly images: Array<Image>,
        private readonly location: Location,
        private readonly publication: Publication,
    ) {}

    static fromDTO(dto: ProductDTO): Product {
        return new Product(
            dto.name,
            dto.images,
            dto.location,
            dto.publication,
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
}