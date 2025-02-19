const coinlists = document.querySelector("#coinlists")
const reroadBtn = document.querySelector("#reroadBtn")


window.addEventListener("DOMContentLoaded", ()=>{
})
reroadBtn.addEventListener("click",()=>{
    getData()
    // location.reload()
})


async function getData() {
    const repsonse = await fetch("https://api.coinpaprika.com/v1/tickers")
    const coinDatas = await repsonse.json()
    const filterd = coinDatas.filter((v)=> (v.rank > 0)  && (v.rank <= 100))
    renderUi(filterd)
    
}

function renderUi(data){
    let lists = ""
    lists += `
    <tr class="border">
        <th class="m-1">순위</th>
        <th class="m-1">종목</th>
        <th class="m-1">기호</th>
        <th class="m-1">가격(KRW)</th>
        <th class="m-1">총 시가</th>
        <th class="m-1">거래량(24h)</th>
        <th class="m-1">변동(24h)</th>
    </tr>`
    for(let coinData of data){
        lists += `
        <tr>
            <td class="text-end">${coinData.rank}</td>
            <td>${coinData.name}</td>
            <td>${coinData.symbol}</td>
            <td class="text-end">&#8361; ${parseInt(coinData.quotes.USD.price * 1440).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
            <td class="text-end">${parseInt(coinData.quotes.USD.market_cap / 1000000)}M</td>
            <td class="text-end">${parseInt(coinData.quotes.USD.volume_24h / 1000000)}M</td>
            <td class="text-end">${coinData.quotes.USD.volume_24h_change_24h}%</td>
        </tr>
        `
    }
    coinlists.innerHTML = lists
}

