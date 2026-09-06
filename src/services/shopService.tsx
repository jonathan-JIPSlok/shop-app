import axios from "axios";

const APIURL = "https://dummyjson.com/products/";

export const mensCategoryList = ["mens-shirts", "mens-shoes", "mens-watches"]
export const womensCategoryList = ["womens-bags", "womens-dresses", "womens-jewellery", "womens-shoes", "womens-watches"]


export default async function getProducts(categoryList:string[]) {

    try {
        const promises = categoryList.map(async (category) => {
            const response = await axios.get(APIURL + "category/" + category, { params: {limit: 0 } });
            return response.data.products;
        });

        const results = await Promise.all(promises);
        const arrayProducts = results.flat();

        return arrayProducts;
    } catch (error) {
        console.error("Erro ao acessar api: ", error);
        return [];
    }
}

export async function getProductById(id:number) {

        const response = await axios.get(APIURL + id).then(function (result) {
            return result.data
        })
        .catch((error) => {
            console.log("Erro ao acessar api: ", error)
            return []
        })

        return response
}
