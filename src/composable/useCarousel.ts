import { computed, Ref, ref } from "vue";
import { ApiResponse } from "../types/types";
import axios from "axios";
import { Product } from "../components/Product";

export default function useCarousel() {
    
    const products = ref<Array<Product>>([]);

    const getProducts = async () => {
        await axios
            .get<Array<ApiResponse>>("http://localhost:3000/offers")
            .then(response => (products.value = [
                ...response.data.map(dto => Product.fromDTO({
                    name: dto.name,
                    images: dto.images,
                    location: dto.allegroLocally.location,
                    publication: dto.publication,
                    sellingMode: dto.sellingMode,
                }))
            ]));
    }

    return {
        products: computed(() => products.value),
        getProducts
    }
}