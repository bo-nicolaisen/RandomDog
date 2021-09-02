

// load your data
let myFetchedData=loadData('https://dog.ceo/api/breeds/image/random');



//Load Data function
function loadData(apiUrl){

    console.log("fetching data");
   

    fetch(apiUrl)

    .then(   (response) => {
      // wait for fetch to complete


        return response.json();





      }
      )
      
      .then(    (data) => {
        // do something with 'data' 

        buildView(data.message);
      
      })

      .catch(

      );
}





// dom setup
// get the Dom element to work within
let app=document.getElementById("app");


function buildView(myImgUrl){


  let myTitle=document.createElement("h2");

  myTitle.innerText="En Hund";
   
let dogImg=document.createElement("img");
dogImg.src=myImgUrl;

app.appendChild(myTitle);
app.appendChild(dogImg);

}



/*
 <script> 
          
        // Get HTML head element 
        var head = document.getElementsByTagName('HEAD')[0];  
  
        // Create new link Element 
        var link = document.createElement('link'); 
  
        // set the attributes for link element  
        link.rel = 'stylesheet';  
      
        link.type = 'text/css'; 
      
        link.href = 'style.css';  
  
        // Append link element to HTML head 
        head.appendChild(link);  
    </script>
    */
   