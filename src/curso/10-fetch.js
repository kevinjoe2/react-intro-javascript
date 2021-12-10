const apiKey = 'pxeH7unUCtbubeESEYl84AA7PdfJS5ta';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then( resp => resp.json() )
    .catch( console.warn )
    .then( ({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    } )
    .catch( console.warn )