let screen=document.querySelector("input");
let buttons=document.querySelectorAll("button");
let buttontext;
let screenValue="";
for(item of buttons)
{
    item.addEventListener("click",(e)=>
    {
    buttontext=e.target.innerText;
    if(buttontext=='X')
    {
        buttontext='*';
        screenValue+=buttontext;
        screen.value=screenValue;
    }
    else if(buttontext=='=')
    {
        screen.value=eval(screenValue);

    }
    else if(buttontext=='C')
    {
        screenValue="";
        screen.value="";
    }
    else
    {
        screenValue+=buttontext;
        screen.value=screenValue;
    }


    })
}