import baseApi from "./config";

interface ProdutoPayload {
    nome: string;
    preco: number;
    foto?: File;
    categoria: string;
    descricao: string;

}
export function cadastroProduto(payload: ProdutoPayload) {
    return baseApi.post("/produto", payload);
}

export function listarProduto() {
    return baseApi.get("/produto");
}