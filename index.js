//const Base_URL=  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const Base_URL="https://api.exchangerate-api.com/v4/latest/" 


const dropdowns = document.querySelectorAll(".dropdown select");
const btn=document.querySelector("button");
const fromcurr=document.querySelector(".from select");
const tocurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");

for (let select of dropdowns){
    for (currcode in countryList){
        let newoption=document.createElement("option");
        newoption.innerHTML=currcode;
        newoption.value=currcode;
        select.append(newoption);
    if(select.name==="from"&&currcode==="USD"){
        newoption.selected="selected";
       
    }
    else     if(select.name==="to"&&currcode==="PKR"){
        newoption.selected="selected";
       
    }
    else{
        select.append(newoption);
    }
}
select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
});
}

const updateFlag=(element)=>{
    let currcode=element.value;
    let countrycode= countryList[currcode]
   
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png` ;
    let img = element.parentElement.querySelector("img");
    img.src=newsrc;
};

btn.addEventListener("click", async(evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtval=amount.value;
    console.log(amtval);
    if ( amtval===""|| amtval<1){
        amtval=1;
        amount.value="1";
    }
    
    const URL=`${Base_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
   
    try {
        let respo = await fetch(URL);

        if (!respo.ok) {
            throw new Error(`Failed to fetch data. Status: ${respo.status}`);
        }

        let data = await respo.json();
        // Handle data here
    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error gracefully (e.g., show a message to the user)
    }
    let data = await respo.json();
   
   

});
   
    