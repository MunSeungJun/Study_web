const newsdata_api = "pub_7003575f4e6d07e8068f6002d1976b40d6cf3"
const resultDiv = document.querySelector("#result")
let result = ""

const newsForm = document.querySelector("#news_form")

newsForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    let query = document.querySelector("#keyword").value
    getData(query)
})

async function getData(keword) {
    const request_url = `https://newsdata.io/api/1/latest?apikey=${newsdata_api}&q=${keword}`
    const response = await fetch(request_url)
    const jsonData = await response.json()
    console.log(response)
    for(let data of jsonData.results){
        result += `
        <div class="card col-sm-6" style="width: 18rem;">
            <img src=${data.image_url} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.title}</h5>
                <p class="card-text">${data.description}</p>
                <a href=${data.link} class="btn btn-primary">기사보기</a>
            </div>
        </div>
        `
    }
    resultDiv.innerHTML = result
}