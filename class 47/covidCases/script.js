async function getData(){
    let country = document.getElementById("inp").value;
    let response = await fetch(`https://covid19.mathdro.id/api/countries/${country}`);
    console.log(response);
    let data = await response.json();
    document.getElementById("cases").innerText = data.confirmed.value;
}