////Lab6.js
//
//

let videoButton = document.getElementById("searchButton1");


function watchForm(){
    
    videoButton.addEventListener('click', (event) =>{
        event.preventDefault();
        let searchInput = document.getElementById("searchInput").value;
        console.log(searchInput);
        //GET https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY] HTTP/1.1

       let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=strict&maxResults=25&q=${searchInput}&key=AIzaSyAGL_NKPoTIveSdsVgBhKvKQXnZ7e9FJ78`
        let settings = {
            method:"GET",
            Authorization: "Bearer AIzaSyAGL_NKPoTIveSdsVgBhKvKQXnZ7e9FJ78",
            Accept: "application/json"
        };
        fetch(url,settings)
        .then(response =>{
            
            if(response.ok){
                return response.json();
            }
            throw new Error("Something went wrong!" + response.statusText);
        })
        .then(responseJSON =>{
            console.log(responseJSON);
            let imagesContainer = document.getElementById("landhere");
            imagesContainer.innerHTML = "";
            for(let index in responseJSON.items){
            
                imagesContainer.innerHTML+=    
               `<div>
               <a href = "https://www.youtube.com/watch?v=${responseJSON.items[index].id.videoId}"> ${responseJSON.items[index].snippet.title}
                <img src = "${responseJSON.items[index].snippet.thumbnails.default.url}"/>
                </a>
                </div>`
            }
            
        })
        .catch(err =>{
            console.log(err);
        })
    });
}


function init(){
    watchForm();
}

init();
//    let videoForm = document.getElementById('searchButton');
//
//function fetchVideos() {
//    
//    console.log("Entered fetchVideos");
//    let url = "https://dog.ceo/api/breeds/image/random";
//        //"https://www.googleapis.com/youtube/v3/search";
//    
//        let settings = {
//        method: "GET"
//    };
//
//    fetch(url,settings)
//    .then( response =>{
//        console.log(response);
//        
//    })
//}
//
//
//
//function watchform(){
//    
//    videoForm.addEventListener('submit', (event) =>{
//       event.preventDefault();
//        console.log("Clicked button");
//        fetchVideos();
//    });
//}
//
//
//function init(){
//    watchform;
//}
//
//init();
