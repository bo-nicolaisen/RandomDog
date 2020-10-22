
// get the Dom element to work within
let app=document.getElementById("app");

// load your data
loadData();


//Load Data function
function loadData(){

    console.log("fetching data");
   

    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => {
        //return response.text();
        return response.json();
      })
      .then((data) => {
        // do something with 'data'

        //let myData=JSON.parse(data);
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