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
    // const jsonData = response.results
    console.log(response)
    // for(let data in jsonData){
    //     result += `
    //     <div>${data.article_id}</div>
    //     `
    // }
    // resultDiv.innerHTML = result
}