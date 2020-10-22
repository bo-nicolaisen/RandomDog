
// get the Dom element to work within
let app=document.getElementById("app");

// load your data
let myFetchedData=loadData('https://dog.ceo/api/breeds/image/random');



//Load Data function
function loadData(myUrl){

    console.log("fetching data");
   

    fetch(myUrl)

    .then((response) => {
      // wait for fetch to complete
        return response.json();
      })
      
      .then((data) => {
        // do something with 'data'
        buildView(data.message);
      
      })

      .catch(

      );
}

// dom setup
function buildView(myUrl){
   
let dogImg=document.createElement("img");
dogImg.src=myUrl;
app.appendChild(dogImg);

}