var inputFrequency = null;
var inputRange = null;
var divContent = null;

window.addEventListener('load',()=>{
    inputFrequency = document.querySelector('#inputFrequency');
    inputRange = document.querySelector('#inputRange');
    divContent = document.querySelector('#divContent')

    inputRange.addEventListener('input',handlerInputRange);
    
})

function handlerInputRange(event){
    var frequencyValues = event.target.value; 
    inputFrequency.value = frequencyValues

    renderPodcast(frequencyValues)
}

function renderPodcast(frequencyValues){

    const foundPodcasts = realPodcasts.find(podcast=>{
        return frequencyValues === podcast.id; 
    });

    console.log(foundPodcasts)
   if(!foundPodcasts){
       divContent.textContent = 'Nao encontrado !';
   }else{
       divContent.innerHTML = 
       `
       <img src='../img/${foundPodcasts.img}'/>
       <h2>${foundPodcasts.title}</h2>
       <p>${foundPodcasts.description}</p>
       `
   }
}