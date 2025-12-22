
const token = '';
async function fetchWebApi(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method,
        body:JSON.stringify(body)
    });
    return await res.json();
}
export async function GET(request){
    // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
    try{
        const top_tracks =  (await fetchWebApi(
            'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
        )).items;

        const top_artists =  (await fetchWebApi(
            'v1/me/top/artists?time_range=long_term&limit=5', 'GET'
        )).items;
        
        const recently_played =  (await fetchWebApi(
            'v1/me/player/recently-played?limit=1', 'GET'
        ));
        console.log(recently_played);
        let result = {
            top_tracks: top_tracks, 
            top_artists: top_artists,
            recently_played: recently_played
        };

        return new Response(JSON.stringify(result), {
            status: 201,
            headers: {'Content-Type': 'application/json'}
        });
    }

    catch (err) {
        console.error(err);
        return({ message: "Error fetching data" });
    }
    
}