// function for fetch catagoris
function loadcatagori(isTrue) {
    fetch('https://openapi.programming-hero.com/api/videos/categories')
        .then(res => res.json())
        .then(json => showCategory(json , isTrue))
         
}

// function for show catagories

function showCategory(json , isTrue) {
    
    let categoris = document.getElementById("category")
    categoris.innerHTML = ``;

    json.data.forEach(element => {
        
        let category = document.createElement("button")
        category.classList = "btn "

        if(isTrue == true) {

            category.setAttribute("onclick", `loadData(${element.category_id} ,${true})`)
        }
        else{
            category.setAttribute("onclick", `loadData(${element.category_id})`)
            
        }

        // if (category)

        category.setAttribute("id", `${element.category_id || 1000}`)

        category.innerText = `${element.category}`

        categoris.appendChild(category)

        category.addEventListener("click" , function(){

            json.data.forEach(element => {

                document.getElementById(element.category_id).classList.remove("active")
                
            }); 

            category.classList.add('active')
        })

        if (element.category_id == 1000){

            category.classList.add('active')
        }
        
    });
}
// function for loading  videos


function loadData(id ,isTrue) {    

    fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
        .then(res => res.json())
        .then(json => showData(json , isTrue))        

}
// function for showing videos

function showData(json ,isTrue) {

    if(isTrue == true){

        json.data.sort((a,b) => kToNumber(b.others.views) - kToNumber(a.others.views))
    }
    


    let cardContainer = document.getElementById("card-contianer")
    cardContainer.innerHTML = ``

    // if no videos on the tab 
    if (json.data.length == 0) {
        cardContainer.classList = ''
        cardContainer.innerHTML = `
        
        <div class="h-screen text-3xl  flex justify-center flex-col space-y-4 items-center max-h-[600px]">
            <img src="../images/Icon.png" alt="../images/Icon.png">
            <p class="text-center">Oops!! Sorry, There is no <br>content here</p>

        </div>
        
        `
    }
    // if atleast one video on the tab
    else {
        cardContainer.classList = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'
        
        json.data.forEach(element => {
    
            let card = document.createElement("div")
            card.classList = "card  bg-base-100  -z-50"

            card.innerHTML = `
                    <div class="relative">
                        <figure class="rounded-lg h-44 md:h-auto  ">
                            <img class = " w-full h-full  md:h-44" src="${element.thumbnail}" alt="Shoes" />
                            <span id="${element.others.views}"  class=" bg-black text-white p-2 absolute right-2 bottom-3 rounded-md ">${secToHour(element.others.posted_date) + "ago"} </span>
                            </figure>  
                    </div>          
            
                    <div class="card-body px-0 flex flex-row">
                    
                        <div class=" shrink-0">
                            <img class="rounded-full w-10 h-10" src="${element.authors[0].profile_picture}" alt="">
                        </div>
                        <div class="space-y-2 text-gray-700">
                            <h2 class="card-title">${element.title}</h2>
                            <p >${element.authors[0].profile_name} <span>${element.authors[0].verified ? "<img class='w-5 h-5 inline' src='../images/Twitter_Verified_Badge.svg.png' alt=''></img>" : ''}
                                </span></p>
                            <p>${element.others.views} views</p>
    
                        </div>
                    </div>
            
            `
    
            cardContainer.appendChild(card)

            // if time is not availabel this won't display the time 

            if(element.others.posted_date == ""){
                
                document.getElementById(element.others.views).style.display ="none"
                
            }
        });
        
    }

}

// while loading catagoris without shorting onclick and videos whithou shoring 

loadData(1000)
loadcatagori()


// while short by view button clicked catagories and vlidios will be shorted

function shotByView(){
    loadcatagori(true)
    loadData(1000 , true)

}

// function for converting the  views from ...k to number

function kToNumber(string){
    if (string.includes("K")) {

        let string2 = string.replace("K", "")
        return string2 *1000
    }
    else {

        return string
    }
}

