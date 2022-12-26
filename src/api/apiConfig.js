const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '7b357112471f14d9c6a8cadb83ce2d15',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;