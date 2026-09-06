import axios from "axios";

const APIURL = process.env.EXPO_PUBLIC_API_URL!

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
        throw new Error("Não foi possível carregar os produtos");
    }
}

export async function getProductById(id:number) {

        const response = await axios.get(APIURL + id).then(function (result) {
            return result.data
        })
        .catch((error) => {
            console.error("Erro ao acessar api para coletar produto por id: ", error)
            throw new Error("Não foi possível carregar esse produto")
        })

        return response
}
