export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=VhuLZF2M33Brv75rJ5Pn2r3QbchGknAG&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifts = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifts;
}