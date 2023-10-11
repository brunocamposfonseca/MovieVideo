/* Chave API */
const API_KEY = "0e71046b67b711ad5149a45fe704f3de";
const API_BASE = 'https://api.themoviedb.org/3'

const basicFetch = async (route: string) => {
    const req = await fetch(`${API_BASE}${route}`);
    const json = await req.json();
    return json;
}

/* categorias */
export default {
    GetMovieList: async () => {
        return [
            {
                name: "trending",
                title: "Em alta",
                path: await basicFetch( `/trending/all/week?api_key=${API_KEY}&language=pt-BR` ),
            },
            {
                name: "action",
                title: "Ação",
                path: await basicFetch( `/discover/movie?api_key=${API_KEY}&with_genres=28&language=pt-BR` ),
            },
            {
                name: "crime",
                title: "Crime",
                path: await basicFetch( `/discover/movie?api_key=${API_KEY}&with_genres=80&language=pt-BR` ),
            },
            {
                name: "comedy",
                title: "Comédia",
                path: await basicFetch( `/discover/movie?api_key=${API_KEY}&with_genres=35&language=pt-BR` ),
            },
            {
                name: "animation",
                title: "Animação",
                path: await basicFetch( `/discover/tv?api_key=${API_KEY}&with_genres=16&language=pt-BR` ),
            },
            {
                name: "scienceFiction",
                title: "Ficção científica",
                path: await basicFetch( `/discover/movie?api_key=${API_KEY}&with_genres=878&language=pt-BR` ),
            },
            {
                name: "mistery",
                title: "Mistério",
                path: await basicFetch( `/discover/tv?api_key=${API_KEY}&with_genres=9648` ),
            }
        ]
    }
}

/* Chamada de uma função assíncrona com o path da categoria */
