export function getAlbums() {
    return fetch("http://localhost:3000/albums")
    .then(response => response.json())
}