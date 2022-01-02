export function getArtists() {
    return fetch("http://localhost:3000/artists")
    .then(response => response.json())
}