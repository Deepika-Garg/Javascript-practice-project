const quoteArray=[
    "Hello World!", "Welcome to random Quote Generator", "Quotes are selected from a given array",
    "quotes will not repeat until the array shows all the quotes", "Enjoy!"
]
function generateQuote()
{
    const paraElement=document.getElementById("paragraph");
    // for(i=0;i<quoteArray.length;i++)
    // {
    let qouteIdx=(Math.floor(Math.random()*5));
        if()
        paraElement.innerText=quoteArray[qouteIdx];
        
    //}
}
