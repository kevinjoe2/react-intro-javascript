const apiKey = 'pxeH7unUCtbubeESEYl84AA7PdfJS5ta';
const urlApi = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const getImage = async () => {
    try {
        const resp = await fetch(urlApi);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    } catch (error) {
        console.error(error);
    }
}

getImage();
