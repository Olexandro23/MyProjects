let map = document.getElementById("map")
let q = 0;
let str;
for(let i=1;i<=10;i++)
{
    let a = document.createElement('TR');
    for(let j=1;j<=10;j++)
    {
        let b = document.createElement('TD');
        let arr={x:i,y:j,fire:false,ship:false};
        b.dataset.x=i;
        b.dataset.y=j;
        b.dataset.fire=false;
        b.dataset.ship=false;
        b.dataset.pos=false;
        b.dataset.xStart=0;
        b.dataset.yStart=0;
        b.dataset.sizeShip=0;
        b.dataset.dir=1;//horiz
        a.append(b);
    }
    map.append(a);
}
let score = document.querySelector(".uScore .score");
let topScore = document.querySelector(".topScore");
let sAmount = 0;
window.onload = function()
{
    console.log("load")

    sAmount = localStorage.getItem("amount");
    if(sAmount != 0)
    {
        for (let i = 1; i <= sAmount; i++) 
        {
            let div = document.createElement("div");
            div.draggable = "true";
            let s = localStorage.getItem("score" + i);
            let name = localStorage.getItem("name" + i);
            div.dataset.block = i;
            div.className += "text2";
            div.className += " s";
            div.innerHTML += name + ": " + s;
            div.innerHTML += "<hr style = 'height: 2px; background: #015965;'>"
            topScore.append(div);
        }
    }
    showUModalName()
    getSc(); //Вытаскиваю элементы через getElementsByClassName
}
let sc = document.querySelector(".s");
// Кол-во. кораблей
let four = 1;
let three = 2;
let double = 3;
let one = 4;
let td = document.querySelectorAll("#map td");
for (let i = 0; i < td.length; i++) 
{
    $(td[i]).on("click", function()
    {
        if(document.querySelector("#s4").checked&&four!=0)
        {
            if(document.querySelector("#horiz").checked)
            {
                let x2;
                let y2;
                x2=parseInt($(this).attr('data-x'));
                y2=parseInt($(this).attr('data-y'));
                    if(y2<=10-3&&$(this).attr('data-ship')=="false"&& CheckCellH(x2,y2,4))
                    {
                        DrowShipH(y2,x2,4);
                        ShipTh(x2,y2,4);
                        four--;
                    }
                    else
                    {
                        alert('Невозможно поставить корабль!');
                    }
                  
            }
            else if(document.querySelector("#vertical").checked)
            {
                let x2;
                let y2;
                x2=parseInt($(this).attr('data-x'));
                y2=parseInt($(this).attr('data-y'));
                    if(x2<=10-3&&$(this).attr('data-ship')=="false"&& CheckCellV(x2,y2,4))
                    {
                        DrowShipV(y2,x2,4);
                        ShipTv(x2,y2,4);
                        four--;
                    }
                    else
                    {
                        alert('Невозможно поставить корабль!');
                    }
            }
            if(four==0)
            {
                $( "#s4" ).prop( "disabled", true );
            }
        }
        if(document.querySelector("#s3").checked&&three!=0)
        {
            if(document.querySelector("#horiz").checked)
            {
                let x2;
                let y2;
                x2=parseInt($(this).attr('data-x'));
                y2=parseInt($(this).attr('data-y'));
                if(y2<=10-2 && $(this).attr('data-ship')=="false"&& CheckCellH(x2,y2,3))
                {
                    DrowShipH(y2,x2,3);
                    ShipTh(x2,y2,3);
                    three--;
                }
                else
                {
                    alert('Невозможно поставить корабль!');
                }
                if(three==0)
                {
                    $( "#s3" ).prop( "disabled", true );
                }
            }
            else if(document.querySelector("#vertical").checked)
            {
                let x2;
                let y2;
                x2=parseInt($(this).attr('data-x'));
                y2=parseInt($(this).attr('data-y'));
                if(x2<=10-2&&$(this).attr('data-ship')=="false"&& CheckCellV(x2,y2,3))
                {
                    DrowShipV(y2,x2,3);
                    ShipTv(x2,y2,3);
                    three--;
                }
                else
                {
                    alert('Невозможно поставить корабль!');
                }

            }
        }
        if(document.querySelector("#s2").checked&&double!=0)
        {
            if(document.querySelector("#horiz").checked)
            {
                let x2;
                let y2;
                x2=parseInt($(this).attr('data-x'));
                y2=parseInt($(this).attr('data-y'));
                    if(y2<=10-1&&$(this).attr('data-ship')=="false"&& CheckCellH(x2,y2,2))
                    {
                        DrowShipH(y2,x2,2);
                        ShipTh(x2,y2,2);
                        double--;
                    }
                    else
                    {
                        alert('Невозможно поставить корабль!');
                    }
                  
            }
            else if(document.querySelector("#vertical").checked)
            {
                let x2;
                let y2;
                x2=parseInt($(this).attr('data-x'));
                y2=parseInt($(this).attr('data-y'));
                    if(x2<=10-1&&$(this).attr('data-ship')=="false"&& CheckCellV(x2,y2,2))
                    {
                        DrowShipV(y2,x2,2);
                        ShipTv(x2,y2,2);
                        double--;
                    }
                    else
                    {
                        alert('Невозможно поставить корабль!');
                    }
            }
            if(double==0)
            {
                $( "#s2" ).prop( "disabled", true );
            }
        }
        if(document.querySelector("#s1").checked&&one!=0)
        {
            if(document.querySelector("#horiz").checked)
            {
                let x2;
                let y2;
                x2=parseInt($(this).attr('data-x'));
                y2=parseInt($(this).attr('data-y'));
                    if(y2<=10&&$(this).attr('data-ship')=="false"&& CheckCellH(x2,y2,1))
                    {
                        DrowShipH(y2,x2,1);
                        ShipTh(x2,y2,1);
                        one--;
                    }
                    else
                    {
                        alert('Невозможно поставить корабль!');
                    }
                  
            }
            else if(document.querySelector("#vertical").checked)
            {
                let x2;
                let y2;
                x2=parseInt($(this).attr('data-x'));
                y2=parseInt($(this).attr('data-y'));
                    if(x2<=10&&$(this).attr('data-ship')=="false"&& CheckCellV(x2,y2,1))
                    {
                        DrowShipV(y2,x2,1);
                        ShipTv(x2,y2,1);
                        one --;
                    }
                    else
                    {
                        alert('Невозможно поставить корабль!');
                    }
            }
            if(one==0)
            {
                $( "#s1" ).prop( "disabled", true );
            }
        }
    })
}

function ShipTh(x,y,r)
{
for(let i=y-1;i<=y+r;i++)
{
    for(let j=x-1;j<=x+1;j++)
    {
        for(let s=0;s<100;s++)
        {
            if(i == $(td[s]).attr('data-y')&&j==$(td[s]).attr('data-x'))
            {
                td[s].dataset.pos="true";
            }
        }
    }
}
}
function ShipTv(x,y,r)
{
for(let j=x-1;j<=x+r;j++)
{
    for(let i=y-1;i<=y+1;i++)
    {
        for(let s=0;s<100;s++)
        {
            if(i== $(td[s]).attr('data-y')&&j==$(td[s]).attr('data-x'))
            {
                td[s].dataset.pos="true";
            }
        }
    }
}
}
function DrowShipH(y2,x2,r)
{
    let x=x2;
    let y=y2;
for(let i=0;i<r;i++)
{
    for(let j=0;j<100;j++)
    {
        if(y2 == $(td[j]).attr('data-y')&&x2==$(td[j]).attr('data-x'))
        {
            $(td[j]).css('background-color','grey');
            td[j].dataset.ship="true";
            td[j].dataset.xStart=x;
            td[j].dataset.yStart=y;
            td[j].dataset.sizeShip=r;
            td[j].dataset.dir=1;
        }
    }
    y2+=1;
}
}
function DrowShipV(y2,x2,r)
{
    let x=x2;
    let y=y2;
for(let i=0;i<r;i++)
{
    for(let j=0;j<100;j++)
    {
        if(y2 == $(td[j]).attr('data-y')&&x2==$(td[j]).attr('data-x'))
        {
            $(td[j]).css('background-color','grey');
            td[j].dataset.ship="true";
            td[j].dataset.xStart=x;
            td[j].dataset.yStart=y;
            td[j].dataset.sizeShip=r;
            td[j].dataset.dir=2;
        }
    }
    x2+=1;
}
}
function CheckCellH(x,y,r)
{
let a=0;
for(let i=1;i<=r;i++)
{
    for(let s=0;s<100;s++)
    {
        if(y == $(td[s]).attr('data-y')&&x==$(td[s]).attr('data-x')&&$(td[s]).attr('data-pos')=="true")
        {
            a++;
        }     
    }  
    y+=1; 
}
if(a==0)
{
    return true;
}
else return false;
}

function CheckCellV(x,y,r)
{
let a=0;
for(let i=1;i<=r;i++)
{
    for(let s=0;s<100;s++)
    {
        if(y == $(td[s]).attr('data-y')&&x==$(td[s]).attr('data-x')&&$(td[s]).attr('data-pos')=="true")
        {
            a++;
        }     
    }  
    x+=1; 
}
if(a==0)
{
    return true;
}
else return false;
}
//=----------------------------------=BOT=--------------------------------------------=\\
let map2 = document.getElementById("map2")
let q2 = 0;
let str2;
for(let i=1;i<=10;i++)
{
let a = document.createElement('TR');
for(let j=1;j<=10;j++)
{
    let b = document.createElement('TD');
    let arr={x:i,y:j,fire:false,ship:false};
    b.dataset.x=i;
    b.dataset.y=j;
    b.dataset.fire=false;
    b.dataset.ship=false;
    b.dataset.pos=false;
    b.dataset.xStart=0;
    b.dataset.yStart=0;
    b.dataset.sizeShip=0;
    b.dataset.dir=1;
    a.append(b);
}
map2.append(a);
}
// Кол-во. кораблей
let four2 = 1;
let three2 = 2;
let double2 = 3;
let one2 = 4;
let td2 = document.querySelectorAll("#map2 td");

function drawBotMap()
{
if(document.querySelector("#e").checked)
{
    let direction=0;
    direction=parseInt(Math.random()*2+1);
    if(direction==1)//horizontal
    {
        //4
        let x2=parseInt(Math.random()*10+1);
        let y2=parseInt(Math.random()*7+1);
        do
        {
            for(let s=0;s<100;s++)
            {
                if($(td2[s]).attr('data-x')==x2&&$(td2[s]).attr('data-y')==y2)
                {
                    if(CheckCellHB(x2,y2,4))
                    {
                        DrowShipHB(y2,x2,4);
                        ShipThB(x2,y2,4);
                        four2--;
                    }
                }
            }
        }while(four2!=0);
//3
        do
        {
            let x2=parseInt(Math.random()*10+1);
            let y2=parseInt(Math.random()*8+1);
            for(let s=0;s<100;s++)
            {
                if($(td2[s]).attr('data-x')==x2&&$(td2[s]).attr('data-y')==y2)
                {
                    if(CheckCellHB(x2,y2,3))
                    {
                        DrowShipHB(y2,x2,3);
                        ShipThB(x2,y2,3);
                        three2--;
                    }
                }
            }
        }
        while(three2!=0);
//2
        do
        {
            let x2=parseInt(Math.random()*10+1);
            let y2=parseInt(Math.random()*9+1);
            for(let s=0;s<100;s++)
            {
                if($(td2[s]).attr('data-x')==x2&&$(td2[s]).attr('data-y')==y2)
                {
                    if(CheckCellHB(x2,y2,2))
                    {
                        DrowShipHB(y2,x2,2);
                        ShipThB(x2,y2,2);
                        double2--;
                    }
                }
            }
        }while(double2!=0);
//1
        do
        {
            let x2=parseInt(Math.random()*10+1);
            let y2=parseInt(Math.random()*10+1);

            for(let s=0;s<100;s++)
            {
                if($(td2[s]).attr('data-x')==x2&&$(td2[s]).attr('data-y')==y2)
                {
                    if(CheckCellHB(x2,y2,1))
                    {
                        DrowShipHB(y2,x2,1);
                        ShipThB(x2,y2,1);
                        one2--;
                    }
                }
            }
        }while(one2!=0);
    }
    else if( direction==2)//vertical
    {
        //4
            let x2=parseInt(Math.random()*7+1);
            let y2=parseInt(Math.random()*10+1);
            do{
            for(let s=0;s<100;s++)
            {
                if($(td2[s]).attr('data-x')==x2&&$(td2[s]).attr('data-y')==y2)
                {
                    if(CheckCellVB(x2,y2,4))
                    {
                        DrowShipVB(y2,x2,4);
                        ShipTvB(x2,y2,4);
                        four2--;
                    }
                }
            }
        }while(four2!=0);
//3
        do
        {
            let x2=parseInt(Math.random()*8+1);
            let y2=parseInt(Math.random()*10+1);
            for(let s=0;s<100;s++)
            {
                if($(td2[s]).attr('data-x')==x2&&$(td2[s]).attr('data-y')==y2)
                {
                    if(CheckCellVB(x2,y2,3))
                    {
                        DrowShipVB(y2,x2,3);
                        ShipTvB(x2,y2,3);
                        three2--;
                    }
                }
            }
        }while(three2!=0);
//2
        do
        {
            let x2=parseInt(Math.random()*9+1);
            let y2=parseInt(Math.random()*10+1);
            for(let s=0;s<100;s++)
            {
                if($(td2[s]).attr('data-x')==x2&&$(td2[s]).attr('data-y')==y2)
                {
                    if(CheckCellVB(x2,y2,2))
                    {
                        DrowShipVB(y2,x2,2);
                        ShipTvB(x2,y2,2);
                        double2--;
                    }
                }
            }
        }while(double2!=0);
//1
        do
        {
            let x2=parseInt(Math.random()*10+1);
            let y2=parseInt(Math.random()*10+1);
            for(let s=0;s<100;s++)
            {
                if($(td2[s]).attr('data-x')==x2&&$(td2[s]).attr('data-y')==y2)
                {
                    if(CheckCellVB(x2,y2,1))
                    {
                        DrowShipVB(y2,x2,1);
                        ShipTvB(x2,y2,1);
                        one2--;
                    }
                }
            }
        }while(one2!=0);
    }
}

if(document.querySelector("#m").checked)
{
    let direction=0;
    direction=parseInt(Math.random()*2+1);

    if(direction == 1)
    {
        let x2=parseInt(Math.random()*10+1);
        let y2=parseInt(Math.random()*7+1);
        do
        {
            for(let s=0;s<100;s++)
            {
                if($(td2[s]).attr('data-x')==x2&&$(td2[s]).attr('data-y')==y2)
                {
                    if(CheckCellHB(x2,y2,4))
                    {
                        DrowShipHB(y2,x2,4);
                        ShipThB(x2,y2,4);
                        four2--;
                    }
                }
            }
        }while(four2!=0);
    }
    else
    {
        let x2=parseInt(Math.random()*7+1);
        let y2=parseInt(Math.random()*10+1);
        do{
            for(let s=0;s<100;s++)
            {
                if($(td2[s]).attr('data-x')==x2&&$(td2[s]).attr('data-y')==y2)
                {
                    if(CheckCellVB(x2,y2,4))
                    {
                        DrowShipVB(y2,x2,4);
                        ShipTvB(x2,y2,4);
                        four2--;
                    }   
                }
            }
        }while(four2!=0);
    }

    direction=parseInt(Math.random()*2+1);

    if(direction == 1)
    {
        do
        {
            let x2=parseInt(Math.random()*10+1);
            let y2=parseInt(Math.random()*8+1);
            for(let s=0;s<100;s++)
            {
                if($(td2[s]).attr('data-x')==x2&&$(td2[s]).attr('data-y')==y2)
                {
                    if(CheckCellHB(x2,y2,3))
                    {
                        DrowShipHB(y2,x2,3);
                        ShipThB(x2,y2,3);
                        three2--;
                    }
                }
            }
        }
        while(three2!=0);
    }
    else
    {
        do
        {
            let x2=parseInt(Math.random()*8+1);
            let y2=parseInt(Math.random()*10+1);
            for(let s=0;s<100;s++)
            {
                if($(td2[s]).attr('data-x')==x2&&$(td2[s]).attr('data-y')==y2)
                {
                    if(CheckCellVB(x2,y2,3))
                    {
                        DrowShipVB(y2,x2,3);
                        ShipTvB(x2,y2,3);
                        three2--;
                    }
                }
            }
        }while(three2!=0);
    }
    
    direction=parseInt(Math.random()*2+1);

    if(direction == 1)
    {
        do
        {
            let x2=parseInt(Math.random()*10+1);
            let y2=parseInt(Math.random()*9+1);
            for(let s=0;s<100;s++)
            {
                if($(td2[s]).attr('data-x')==x2&&$(td2[s]).attr('data-y')==y2)
                {
                    if(CheckCellHB(x2,y2,2))
                    {
                        DrowShipHB(y2,x2,2);
                        ShipThB(x2,y2,2);
                        double2--;
                    }
                }
            }
        }while(double2!=0);
    }
    else
    {
        do
        {
            let x2=parseInt(Math.random()*9+1);
            let y2=parseInt(Math.random()*10+1);
            for(let s=0;s<100;s++)
            {
                if($(td2[s]).attr('data-x')==x2&&$(td2[s]).attr('data-y')==y2)
                {
                    if(CheckCellVB(x2,y2,2))
                    {
                        DrowShipVB(y2,x2,2);
                        ShipTvB(x2,y2,2);
                        double2--;
                    }
                }
            }
        }while(double2!=0);
    }
    
    direction=parseInt(Math.random()*2+1);

    if(direction == 1)
    {
        do
        {
            let x2=parseInt(Math.random()*10+1);
            let y2=parseInt(Math.random()*10+1);
            for(let s=0;s<100;s++)
            {
                if($(td2[s]).attr('data-x')==x2&&$(td2[s]).attr('data-y')==y2)
                {
                    if(CheckCellHB(x2,y2,1))
                    {
                        DrowShipHB(y2,x2,1);
                        ShipThB(x2,y2,1);
                        one2--;
                    }
                }
            }
        }while(one2!=0);
    }
    else
    {
        do
        {
            let x2=parseInt(Math.random()*10+1);
            let y2=parseInt(Math.random()*10+1);
            for(let s=0;s<100;s++)
            {
                if($(td2[s]).attr('data-x')==x2&&$(td2[s]).attr('data-y')==y2)
                {
                    if(CheckCellVB(x2,y2,1))
                    {
                        DrowShipVB(y2,x2,1);
                        ShipTvB(x2,y2,1);
                        one2--;
                    }
                }
            }
        }while(one2!=0);
    }
}

if(document.querySelector("#h").checked)
    {
        //4
        let direction=0;
        direction=parseInt(Math.random()*2+1);
        if( direction==1)//horizontal
        {
            let x2=parseInt(Math.random()*10+1);
            let y2=parseInt(Math.random()*7+1);;
            do{
                for(let s=0;s<100;s++)
                {
                    if($(td2[s]).attr('data-x')==x2&&$(td2[s]).attr('data-y')==y2)
                    {
                        if(CheckCellHB(x2,y2,4))
                        {
                            DrowShipHB(y2,x2,4);
                            ShipThB(x2,y2,4);
                            four2--;
                        }
                    }
                }
            }while(four2!=0);
        }
        else //vertical
        {
            let x2=parseInt(Math.random()*7+1);
            let y2=parseInt(Math.random()*10+1);
            do{
                for(let s=0;s<100;s++)
                {
                    if($(td2[s]).attr('data-x')==x2&&$(td2[s]).attr('data-y')==y2)
                    {
                        if(CheckCellVB(x2,y2,4))
                        {
                            DrowShipVB(y2,x2,4);
                            ShipTvB(x2,y2,4);
                            four2--;
                        }
                    }
                }
            }while(four2!=0);
        }
        //3
        do
        {
            let direction=0;
            direction=parseInt(Math.random()*2+1);
            if( direction==1)//horizontal
            {
                let x2=parseInt(Math.random()*10+1);
                let y2=parseInt(Math.random()*8+1);
                for(let s=0;s<100;s++)
                {
                    if($(td2[s]).attr('data-x')==x2&&$(td2[s]).attr('data-y')==y2)
                    {
                        if(CheckCellHB(x2,y2,3))
                        {
                            DrowShipHB(y2,x2,3);
                            ShipThB(x2,y2,3);
                            three2--;
                        }
                    }
                }
            }
            else//vertical
            {
                let x2=parseInt(Math.random()*8+1);
                let y2=parseInt(Math.random()*10+1);
                for(let s=0;s<100;s++)
                {
                    if($(td2[s]).attr('data-x')==x2&&$(td2[s]).attr('data-y')==y2)
                    {
                        if(CheckCellVB(x2,y2,3))
                        {
                            DrowShipVB(y2,x2,3);
                            ShipTvB(x2,y2,3);
                            three2--;
                        }
                    }
                }
            }
        }while(three2!=0);
        //2
        do
        {
            let direction=0;
            direction=parseInt(Math.random()*2+1);
            if( direction==1)//horizontal
            {
                let x2=parseInt(Math.random()*10+1);
                let y2=parseInt(Math.random()*9+1);
                for(let s=0;s<100;s++)
                {
                    if($(td2[s]).attr('data-x')==x2&&$(td2[s]).attr('data-y')==y2)
                    {
                        if(CheckCellHB(x2,y2,2))
                        {
                            DrowShipHB(y2,x2,2);
                            ShipThB(x2,y2,2);
                            double2--;
                        }
                    }
                }
            }
            else//vertical
            {
                let x2=parseInt(Math.random()*9+1);
                let y2=parseInt(Math.random()*10+1);
                for(let s=0;s<100;s++)
                {
                    if($(td2[s]).attr('data-x')==x2&&$(td2[s]).attr('data-y')==y2)
                    {
                        if(CheckCellVB(x2,y2,2))
                        {
                            DrowShipVB(y2,x2,2);
                            ShipTvB(x2,y2,2);
                            double2--;
                        }
                    }
                }
            }
        }while(double2!=0);
        //1
        do
        {
            let x2=parseInt(Math.random()*10+1);
            let y2=parseInt(Math.random()*10+1);
            for(let s=0;s<100;s++)
            {
                if($(td2[s]).attr('data-x')==x2&&$(td2[s]).attr('data-y')==y2)
                {
                    if(CheckCellHB(x2,y2,1))
                    {
                        DrowShipHB(y2,x2,1);
                        ShipThB(x2,y2,1);
                        one2--;
                    }
                }
            }
        }while(one2!=0);
}
}

function ShipThB(x,y,r)
{
for(let i=y-1;i<=y+r;i++)
{
    for(let j=x-1;j<=x+1;j++)
    {
        for(let s=0;s<100;s++)
        {
            if(i == $(td2[s]).attr('data-y')&&j==$(td2[s]).attr('data-x'))
            {
                td2[s].dataset.pos="true";
            }
        }
    }
}
}
function ShipTvB(x,y,r)
{
for(let j=x-1;j<=x+r;j++)
{
    for(let i=y-1;i<=y+1;i++)
    {
        for(let s=0;s<100;s++)
        {
            if(i== $(td2[s]).attr('data-y')&&j==$(td2[s]).attr('data-x'))
            {
                td2[s].dataset.pos="true";
            }
        }
    }
}
}
function DrowShipHB(y2,x2,r)
{
    let x=x2;
    let y=y2;
for(let i=0;i<r;i++)
{
    for(let j=0;j<100;j++)
    {
        if(y2 == $(td2[j]).attr('data-y')&&x2==$(td2[j]).attr('data-x'))
        {
            $(td2[j]).css('background-color','grey');
            td2[j].dataset.ship="true";
            td2[j].dataset.xStart=x;
            td2[j].dataset.yStart=y;
            td2[j].dataset.sizeShip=r;
            td2[j].dataset.dir=1;
        }
    }
    y2+=1;
}
}
function DrowShipVB(y2,x2,r)
{
    let x=x2;
    let y=y2;
for(let i=0;i<r;i++)
{
    for(let j=0;j<100;j++)
    {
        if(y2 == $(td2[j]).attr('data-y')&&x2==$(td2[j]).attr('data-x'))
        {
            $(td2[j]).css('background-color','grey');
            td2[j].dataset.ship="true";
            td2[j].dataset.xStart=x;
            td2[j].dataset.yStart=y;
            td2[j].dataset.sizeShip=r;
            td2[j].dataset.dir=2;
        }
    }
    x2+=1;
}
}
function CheckCellHB(x,y,r)
{
let a=0;
for(let i=1;i<=r;i++)
{
    for(let s=0;s<100;s++)
    {
        if(y == $(td2[s]).attr('data-y')&&x==$(td2[s]).attr('data-x')&&$(td2[s]).attr('data-pos')=="true")
        {
            a++;
        }     
    }  
    y+=1; 
}
if(a==0)
{
    return true;
}
else return false;
}
function CheckCellVB(x,y,r)
{
let a=0;
for(let i=1;i<=r;i++)
{
    for(let s=0;s<100;s++)
    {
        if(y == $(td2[s]).attr('data-y')&&x==$(td2[s]).attr('data-x')&&$(td2[s]).attr('data-pos')=="true")
        {
            a++;
        }     
    }  
    x+=1; 
}
if(a==0)
{
    return true;
}
else return false;
}
let flag=true;
document.querySelector('#start').addEventListener('click',function()
{
if(document.querySelector("#s4").disabled!=false&&document.querySelector("#s3").disabled!=false&&document.querySelector("#s2").disabled!=false&&document.querySelector("#s1").disabled!=false)
{
    if(document.querySelector("#auto").checked == true)
    {
        autoDraw();
    }
    $("#auto").prop("disabled", true);
    $("#e").prop("disabled", true);
    $("#m").prop("disabled", true);
    $("#h").prop("disabled", true);
    $("#clear").off('click');
    drawBotMap();
    $('.uScore .score').text('0');
    $('.bScore .score').text('0');
    Fire()
}
    else
    {
        alert('Раставьте все корабли!');
    }

})
function Fire()
{
    document.querySelector(".uName").style.color = "rgb(241, 41, 41)";
    document.querySelector(".uName").style.textShadow = "1px 1px 3px rgb(104, 21, 21)";
    document.querySelector(".bName").style.color = "black";
    document.querySelector(".bName").style.textShadow = "none";
    for(let i=0;i<100;i++)
    {     
       
        $(td2[i]).on('click',function()
        {
            let x= parseInt($(this).attr('data-x'));
            let y= parseInt($(this).attr('data-y'));
            console.log('x: '+x,'y: '+y);
            if($(td2[i]).attr('data-x')==x&&$(td2[i]).attr('data-y')==y)
            {
                if($(td2[i]).attr('data-ship')=='true'&&$(td2[i]).attr('data-fire')=='false')
                {
                    drowFireT(i);
                    if(document.querySelector("#e").checked)
                    {
                        let a =  parseInt($('.uScore .score').text());
                        $('.uScore .score').text(a+=10);
                        if(a==200)
                        {
                            showUModal();
                            onScoreDrag();
                            offMapUser();
                        }
                    }
                    if(document.querySelector("#m").checked)
                    {
                        let a =  parseInt($('.uScore .score').text());
                        $('.uScore .score').text(a+=20);
                        if(a==400)
                        {
                            showUModal();
                            onScoreDrag(); 
                            offMapUser();
                        }
                    }
                    if(document.querySelector("#h").checked)
                    {
                        let a =  parseInt($('.uScore .score').text());
                        $('.uScore .score').text(a+=30);
                        if(a==600)
                        {
                            showUModal();
                        
                            onScoreDrag();
                            offMapUser();
                        }
                    }
                  
                }
                else if($(td2[i]).attr('data-ship')=='false'&&$(td2[i]).attr('data-fire')=='false')
                {  
                    drowFireF(i)
                    offMapUser();
                    if(document.querySelector("#e").checked)
                    {
                        document.querySelector(".uName").style.color = "black";
                        document.querySelector(".uName").style.textShadow = "none";
                        document.querySelector(".bName").style.color = "rgb(241, 41, 41)";
                        document.querySelector(".bName").style.textShadow = "1px 1px 3px rgb(104, 21, 21)";
                        setTimeout(FireBotE,1000);
                    }
                    if(document.querySelector("#m").checked)
                    {
                        document.querySelector(".uName").style.color = "black";
                        document.querySelector(".uName").style.textShadow = "none";
                        document.querySelector(".bName").style.color = "rgb(241, 41, 41)";
                        document.querySelector(".bName").style.textShadow = "1px 1px 3px rgb(104, 21, 21)";
                        setTimeout(FireBotM,1000);
                    }
                    if(document.querySelector("#h").checked)
                    {
                        document.querySelector(".uName").style.color = "black";
                        document.querySelector(".uName").style.textShadow = "none";
                        document.querySelector(".bName").style.color = "rgb(241, 41, 41)";
                        document.querySelector(".bName").style.textShadow = "1px 1px 3px rgb(104, 21, 21)";
                        setTimeout(FireBotH,1000);
                    }
                }
            }
        })
    }
}
function offMapUser()
{
    for(let j=0;j<100;j++)
    {
        $(td2[j]).off("click");
    }
}
function FireBotE()
{
   
    let x=0;
    let y=0;
    x=parseInt(Math.random()*10+1);
    y=parseInt(Math.random()*10+1);
    console.log('xEazy: '+x,'yEazy: '+y);
    for(let i=0;i<100;i++)
    {
        if($(td[i]).attr('data-x')==x&&$(td[i]).attr('data-y')==y&&$(td[i]).attr('data-fire')=='false')
        {
            if($(td[i]).attr('data-ship')=='true'&&$(td[i]).attr('data-fire')=='false')
            { 
                drowFireTB(i);
                //WIN
                    let a =  parseInt($('.bScore .score').text());
                    $('.bScore .score').text(a+=10);
                    if(a==200)
                    {
                        showBModal();
                        offMapUser();
                    }
                    setTimeout(FireBotE,500);
            }
            else if($(td[i]).attr('data-ship')=='false'&&$(td[i]).attr('data-fire')=='false')
            {
                drowFireFB(i);
                setTimeout(Fire,300);
            }
        }
        else if ($(td[i]).attr('data-x')==x&&$(td[i]).attr('data-y')==y&&$(td[i]).attr('data-fire')=='true')
        {  
            FireBotE()
        }
    }
}
function FireBotM()
{
    document.querySelector(".uName").style.color = "black";
    document.querySelector(".bName").style.color = "rgb(241, 41, 41)";
    let x=0;
    let y=0;
    x=parseInt(Math.random()*10+1);
    y=parseInt(Math.random()*10+1);
    console.log('xMedium: '+x,'yMedium: '+y);
    for(let i=0;i<100;i++)
    {
        if($(td[i]).attr('data-x')==x&&$(td[i]).attr('data-y')==y&&$(td[i]).attr('data-fire')=='false')
        {
            if($(td[i]).attr('data-ship')=='true'&&$(td[i]).attr('data-fire')=='false')
            { 
                setTimeout(drowFireTB,1000,i);  
                if(drowFireTB(i)==($(td[i]).attr('data-size-ship')))
                {
                    setTimeout(FireBotM,1000);
                }  
                else if(drowFireTB(i)<($(td[i]).attr('data-size-ship')))
                {
                    setTimeout(FireBotM,1000);
                }
                else
                {
                    setTimeout(mFire,1000,x,y);
                } 
                //WIN
                    let a =  parseInt($('.bScore .score').text());
                    $('.bScore .score').text(a+=20);
                    if(a==400)
                    {
                        showBModal();
                        offMapUser();
                    }
            
            }
            else if($(td[i]).attr('data-ship')=='false'&&$(td[i]).attr('data-fire')=='false')
            {
                drowFireFB(i)
                Fire(); 
            }
        }
        else if ($(td[i]).attr('data-x')==x&&$(td[i]).attr('data-y')==y&&$(td[i]).attr('data-fire')=='true')
        {
            FireBotM();
        }
    }
}
function mFire(x,y)
{
    document.querySelector(".uName").style.color = "black";
    document.querySelector(".bName").style.color = "rgb(241, 41, 41)";
    let a=parseInt(Math.random()*4+1);
    console.log('a: '+a);
    if(a==1&&y!=1)//влево
    {
        for(let s= 0;s<100;s++)
        {
            if($(td[s]).attr('data-x')==x&&$(td[s]).attr('data-y')==y-1)
            {
                if($(td[s]).attr('data-ship')=='true'&&$(td[s]).attr('data-fire')=='false')
                { 
                    let a =  parseInt($('.bScore .score').text());
                    $('.bScore .score').text(a+=20);
                    if(a==400)
                    {
                        showBModal();
                        offMapUser();
                    }
                    setTimeout(drowFireTB,500,s);
                    setTimeout(FireBotM,800);
                }
                else if($(td[s]).attr('data-ship')=='false'&&$(td[s]).attr('data-fire')=='false')
                {
                    setTimeout(drowFireFB,500,s);
                    setTimeout(Fire,800);
                }
                else if ($(td[s]).attr('data-ship')=='false'&&$(td[s]).attr('data-fire')=='true')
                {
                    mFire(x,y);
                }
                else if($(td[s]).attr('data-ship')=='true'&&$(td[s]).attr('data-fire')=='true')
                {
                    y--;
                    mFire(x,y);
                }
            }
        }
    }
    else if(a==2&&y!=10)//вправо
    {
        for(let s= 0;s<100;s++)
        {
            if($(td[s]).attr('data-x')==x&&$(td[s]).attr('data-y')==y+1)
            {
                if($(td[s]).attr('data-ship')=='true'&&$(td[s]).attr('data-fire')=='false')
                { 
                    let a =  parseInt($('.bScore .score').text());
                    $('.bScore .score').text(a+=20);
                    if(a==400)
                    {
                        showBModal();
                    offMapUser();
                    }
                    setTimeout(drowFireTB,500,s);
                    setTimeout(FireBotM,800);
                }
                else if($(td[s]).attr('data-ship')=='false'&&$(td[s]).attr('data-fire')=='false')
                {
                    setTimeout(drowFireFB,500,s);
                    setTimeout(Fire,800);
                }
                else if ($(td[s]).attr('data-ship')=='false'&&$(td[s]).attr('data-fire')=='true')
                {
                    mFire(x,y);
                }
                else if($(td[s]).attr('data-ship')=='true'&&$(td[s]).attr('data-fire')=='true')
                {
                    y++;
                    mFire(x,y);
                }
            }
        }
    }
    else if(a==3&&x!=1)//вверх
    {
        for(let s= 0;s<100;s++)
        {
            if($(td[s]).attr('data-x')==x-1&&$(td[s]).attr('data-y')==y)
            {
                if($(td[s]).attr('data-ship')=='true'&&$(td[s]).attr('data-fire')=='false')
                { 
                    let a =  parseInt($('.bScore .score').text());
                    $('.bScore .score').text(a+=20);
                    if(a==400)
                    {
                        showBModal();
                    offMapUser();
                    }
                    setTimeout(drowFireTB,500,s);
                    setTimeout(FireBotM,800);
                }
                else if($(td[s]).attr('data-ship')=='false'&&$(td[s]).attr('data-fire')=='false')
                {
                    setTimeout(drowFireFB,500,s);
                    setTimeout(Fire,800);
                }
                else if ($(td[s]).attr('data-ship')=='false'&&$(td[s]).attr('data-fire')=='true')
                {
                    mFire(x,y);
                }
                else if($(td[s]).attr('data-ship')=='true'&&$(td[s]).attr('data-fire')=='true')
                {
                    x--;
                    mFire(x,y);
                }
            }
        }
    }
    else if(a==4&&x!=10)//вниз
    {
        for(let s= 0;s<100;s++)
        {
            if($(td[s]).attr('data-x')==x+1&&$(td[s]).attr('data-y')==y)
            {
                if($(td[s]).attr('data-ship')=='true'&&$(td[s]).attr('data-fire')=='false')
                { 
                    let a =  parseInt($('.bScore .score').text());
                    $('.bScore .score').text(a+=20);
                    if(a==400)
                    {
                        showBModal();
                        offMapUser();
                    }
                    drowFireTB(s);
                    setTimeout(drowFireTB,500,s);
                    setTimeout(FireBotM,800);
                }
                else if($(td[s]).attr('data-ship')=='false'&&$(td[s]).attr('data-fire')=='false')
                {
                    setTimeout(drowFireFB,500,s);
                    setTimeout(Fire,800);
                }
                else if($(td[s]).attr('data-ship')=='true'&&$(td[s]).attr('data-fire')=='true')
                {
                    x++;
                    mFire(x,y);
                }
            }
        }
    }
    else 
    {
        mFire(x,y);
    }

}
let xH=0;
let yH=0;
let DS=0;
function FireBotH()
{ 
    document.querySelector(".uName").style.color = "black";
    document.querySelector(".bName").style.color = "rgb(241, 41, 41)";
    if(DS==0&&xH==0&&yH==0)
    {
        let x=0;
        let y=0;
        x=parseInt(Math.random()*10+1);
        y=parseInt(Math.random()*10+1);
        console.log('xHard: '+x,'yHard: '+y);
        for(let i = 0;i<100;i++)
        {
            if($(td[i]).attr('data-x')==x&&$(td[i]).attr('data-y')==y&&$(td[i]).attr('data-fire')=='false')
            {
                if($(td[i]).attr('data-ship')=='true'&&$(td[i]).attr('data-fire')=='false')
                { 
                    setTimeout(drowFireTBH,1000,i);  
                    let a =  parseInt($('.bScore .score').text());
                    $('.bScore .score').text(a+=30);
                    if(a==600)
                    {
                        showBModal();
                        offMapUser();
                    }  
                }
                else if($(td[i]).attr('data-ship') == 'false' && $(td[i]).attr('data-fire') == 'false')
                {
                    drowFireFBH(i);
                }
            }
            else if ($(td[i]).attr('data-x')==x&&$(td[i]).attr('data-y')==y&&$(td[i]).attr('data-fire')=='true')
            {
                FireBotH(); 
            }
        }
    }
    else if(DS==1&&xH!=0&&yH!=0)
    {
        setTimeout(hFire,1000,xH,yH);
    }
}
function hFire(x,y)
{       
    document.querySelector(".uName").style.color = "black";
    document.querySelector(".bName").style.color = "rgb(241, 41, 41)";         
    xH=x;
    yH=y;
    let a2=0;
    a2=parseInt(Math.random()*4+1);
    console.log('Nap: '+a2); 
    console.log('xH: '+xH,'yH: '+yH);  
        if(a2==1&&y!=1)//влево
        {
            for(let s= 0;s<100;s++)
            {
                if($(td[s]).attr('data-x')==xH&&$(td[s]).attr('data-y')==yH-1)
                {
                    if($(td[s]).attr('data-ship')=='true'&&$(td[s]).attr('data-fire')=='false')
                    { 
                        let a =  parseInt($('.bScore .score').text());
                        $('.bScore .score').text(a+=30);
                        if(a==600)
                        {
                            showBModal();
                            offMapUser();
                        }   
                        setTimeout(drowFireTBH,600,s);
                    }
                    else if($(td[s]).attr('data-ship')=='false'&&$(td[s]).attr('data-fire')=='false')
                    {
                        setTimeout(drowFireFBH,500,s);
                    }
                    else if($(td[s]).attr('data-ship')=='true'&&$(td[s]).attr('data-fire')=='true')
                    {
                        yH--
                        hFire(xH,yH);
                    }
                    else if($(td[s]).attr('data-ship')=='false'&&$(td[s]).attr('data-fire')=='true')
                    {
                        hFire(xH,yH);
                    }
                }
            }
        }
        else if(a2==2&&y!=10)//вправо
        {
            for(let s= 0;s<100;s++)
            {
                if($(td[s]).attr('data-x')==xH&&$(td[s]).attr('data-y')==yH+1)
                {
                    if($(td[s]).attr('data-ship')=='true'&&$(td[s]).attr('data-fire')=='false')
                    { 
                        let a =  parseInt($('.bScore .score').text());
                        $('.bScore .score').text(a+=30);
                        if(a==600)
                        {
                            showBModal();
                            offMapUser();
                        }   
                        setTimeout(drowFireTBH,600,s);
                    }
                    else if($(td[s]).attr('data-ship')=='false'&&$(td[s]).attr('data-fire')=='false')
                    {
                        setTimeout(drowFireFBH,500,s);
                    }
                    else if($(td[s]).attr('data-ship')=='true'&&$(td[s]).attr('data-fire')=='true')
                    {
                        yH++
                        hFire(xH,yH);
                    }
                    else if($(td[s]).attr('data-ship')=='false'&&$(td[s]).attr('data-fire')=='true')
                    {
                        hFire(xH,yH);
                    }
                }
            }
        }
        else if(a2==3&&x!=1)//вверх
        {
            for(let s= 0;s<100;s++)
            {
                if($(td[s]).attr('data-x')==xH-1&&$(td[s]).attr('data-y')==yH)
                {
                    if($(td[s]).attr('data-ship')=='true'&&$(td[s]).attr('data-fire')=='false')
                    { 
                        let a =  parseInt($('.bScore .score').text());
                        $('.bScore .score').text(a+=30);
                        if(a==600)
                        {
                            showBModal();
                            offMapUser();
                        }   
                        setTimeout(drowFireTBH,600,s);
                    }
                    else if($(td[s]).attr('data-ship')=='false'&&$(td[s]).attr('data-fire')=='false')
                    {
                        setTimeout(drowFireFBH,500,s);
                    }
                    else if($(td[s]).attr('data-ship')=='true'&&$(td[s]).attr('data-fire')=='true')
                    {
                        xH--
                        hFire(xH,yH);
                    }
                    else if($(td[s]).attr('data-ship')=='false'&&$(td[s]).attr('data-fire')=='true')
                    {
                        hFire(xH,yH);
                    }
                }
            }
        }
        else if(a2==4&&x!=10)//вниз
        {
            for(let s= 0;s<100;s++)
            {
                if($(td[s]).attr('data-x')==xH+1&&$(td[s]).attr('data-y')==yH)
                {
                    if($(td[s]).attr('data-ship')=='true'&&$(td[s]).attr('data-fire')=='false')
                    { 
                        let a =  parseInt($('.bScore .score').text());
                        $('.bScore .score').text(a+=30);
                        if(a==600)
                        {
                            showBModal();
                            offMapUser();
                        }   
                        setTimeout(drowFireTBH,600,s);
                    }
                    else if($(td[s]).attr('data-ship')=='false'&&$(td[s]).attr('data-fire')=='false')
                    {
                        setTimeout(drowFireFBH,500,s);
                    }
                    else if($(td[s]).attr('data-ship')=='true'&&$(td[s]).attr('data-fire')=='true')
                    {
                        xH++
                        hFire(xH,yH);
                    }
                    else if($(td[s]).attr('data-ship')=='false'&&$(td[s]).attr('data-fire')=='true')
                    {
                       hFire(xH,yH);
                    }
                }
            }
        }
    else 
    {
        hFire(xH,yH);
    }
}
function drowFireT(i)
{
    let xS = parseInt($(td2[i]).attr('data-x-start'));
    let yS = parseInt($(td2[i]).attr('data-y-start'));
    let d = parseInt($(td2[i]).attr('data-dir'));
    let s = parseInt($(td2[i]).attr('data-size-ship'));
    let a=0;
    $(td2[i]).css('background-image','url("fire2.png")');
    td2[i].dataset.fire='true';
    if(d==1)
    {
        for(let is=0;is<s;is++)
        { 
            let y2=yS+is;
            for(let j=0;j<100;j++)
            {
                if($(td2[j]).attr('data-y')==y2&&$(td2[j]).attr('data-x')==xS&&$(td2[j]).attr('data-fire')=='true')
                {
                    a++;
                }
            }
        }

        if(a==s)
        {
            for(let i2=yS-1;i2<=yS+s;i2++)
            {
                for(let j=xS-1;j<=xS+1;j++)
                {
                    for(let e=0;e<100;e++)
                    {
                        if(i2 == $(td2[e]).attr('data-y')&&j==$(td2[e]).attr('data-x')&&'false' == $(td2[e]).attr('data-ship'))
                        {
                            $(td2[e]).css('background-image','url("prom.png")');
                            td2[e].dataset.fire=true;
                        }
                        else if(i2 == $(td2[e]).attr('data-y')&&j==$(td2[e]).attr('data-x')&&'true' == $(td2[e]).attr('data-ship'))
                        {
                            $(td2[e]).css('background-image','url("fire2.png")');
                            td2[e].dataset.fire=true;
                        }
                    }
                }
            }
        }
    }
    if(d==2)
    {
        for(let is=0;is<s;is++)
        {
            let x2=xS+is;
            for(let j=0;j<100;j++)
            {
                if($(td2[j]).attr('data-y')==yS&&$(td2[j]).attr('data-x')==x2&&$(td2[j]).attr('data-fire')=='true')
                {
                    a++;
                }
            }
        }
        if(a==s)
        {
            for(let j=xS-1;j<=xS+s;j++)
            {
                for(let i2=yS-1;i2<=yS+1;i2++)
                {
                    for(let e=0;e<100;e++)
                    {
                        if(i2 == $(td2[e]).attr('data-y')&&j==$(td2[e]).attr('data-x')&&'false' == $(td2[e]).attr('data-ship'))
                        {
                            $(td2[e]).css('background-image','url("prom.png")');
                            td2[e].dataset.fire=true;
                        }
                        else if(i2 == $(td2[e]).attr('data-y')&&j==$(td2[e]).attr('data-x')&&'true' == $(td2[e]).attr('data-ship'))
                        {
                            $(td2[e]).css('background-image','url("fire2.png")');
                            td2[e].dataset.fire=true;
                        }
                    }
                }
            }
        }
    }
}
function drowFireF(i)
{
    $(td2[i]).css('background-image','url("prom.png")');
    td2[i].dataset.fire=true;
}
function drowFireTB(i)
{
    let xS = parseInt($(td[i]).attr('data-x-start'));
    let yS = parseInt($(td[i]).attr('data-y-start'));
    let d = parseInt($(td[i]).attr('data-dir'));
    let s = parseInt($(td[i]).attr('data-size-ship'));
    let a=0;
    $(td[i]).css('background-image','url("fire2.png")');
    td[i].dataset.fire='true';
    if(d==1)
    {
        for(let is=0;is<s;is++)
        { 
            let y2=yS+is;
            for(let j=0;j<100;j++)
            {
                if($(td[j]).attr('data-y')==y2&&$(td[j]).attr('data-x')==xS&&$(td[j]).attr('data-fire')=='true')
                {
                    a++;
                }
            }
        }

        if(a==s)
        {
            for(let i2=yS-1;i2<=yS+s;i2++)
            {
                for(let j=xS-1;j<=xS+1;j++)
                {
                    for(let e=0;e<100;e++)
                    {
                        if(i2 == $(td[e]).attr('data-y')&&j==$(td[e]).attr('data-x')&&'false' == $(td[e]).attr('data-ship'))
                        {
                          $(td[e]).css('background-image','url("prom.png")');
                            td[e].dataset.fire=true;
                        }
                        else if(i2 == $(td[e]).attr('data-y')&&j==$(td[e]).attr('data-x')&&'true' == $(td[e]).attr('data-ship'))
                        {
                            $(td[e]).css('background-image','url("fire2.png")');
                            td[e].dataset.fire=true;
                        }
                    }
                }
            }
            return a;
        }
    }
    if(d==2)
    {
        for(let is=0;is<s;is++)
        {
            let x2=xS+is;
            for(let j=0;j<100;j++)
            {
                if($(td[j]).attr('data-y')==yS&&$(td[j]).attr('data-x')==x2&&$(td[j]).attr('data-fire')=='true')
                {
                    a++;
                }
            }
        }
        if(a==s)
        {
            for(let j=xS-1;j<=xS+s;j++)
            {
                for(let i2=yS-1;i2<=yS+1;i2++)
                {
                    for(let e=0;e<100;e++)
                    {
                        if(i2 == $(td[e]).attr('data-y')&&j==$(td[e]).attr('data-x')&&'false' == $(td[e]).attr('data-ship'))
                        {
                            $(td[e]).css('background-image','url("prom.png")');
                            td[e].dataset.fire=true;
                        }
                        else if(i2 == $(td[e]).attr('data-y')&&j==$(td[e]).attr('data-x')&&'true' == $(td[e]).attr('data-ship'))
                        {
                            $(td[e]).css('background-image','url("fire2.png")');
                            td[e].dataset.fire=true;
                        }
                    }
                }
            }
            return a;
        }
    }
}
function drowFireTBH(i)
{
    let xS = parseInt($(td[i]).attr('data-x-start'));
    let yS = parseInt($(td[i]).attr('data-y-start'));
    let x = parseInt($(td[i]).attr('data-x'));
    let y = parseInt($(td[i]).attr('data-y'));
    let d = parseInt($(td[i]).attr('data-dir'));
    let s = parseInt($(td[i]).attr('data-size-ship'));
    let a=0;
    $(td[i]).css('background-image','url("fire2.png")');
    td[i].dataset.fire='true';
    if(d==1)
    {
        for(let is=0;is<s;is++)
        { 
            let y2=yS+is;
            for(let j=0;j<100;j++)
            {
                if($(td[j]).attr('data-y')==y2&&$(td[j]).attr('data-x')==xS&&$(td[j]).attr('data-fire')=='true')
                {
                    a++;
                }
            }
        }
        console.log('a: '+a);
        if(a==s)
        {
            for(let i2=yS-1;i2<=yS+s;i2++)
            {
                for(let j=xS-1;j<=xS+1;j++)
                {
                    for(let e=0;e<100;e++)
                    {
                        if(i2 == $(td[e]).attr('data-y')&&j==$(td[e]).attr('data-x')&&'false' == $(td[e]).attr('data-ship'))
                        {
                            $(td[e]).css('background-image','url("prom.png")');
                            td[e].dataset.fire=true;
                        }
                        else if(i2 == $(td[e]).attr('data-y')&&j==$(td[e]).attr('data-x')&&'true' == $(td[e]).attr('data-ship'))
                        {
                            $(td[e]).css('background-image','url("fire2.png")');
                            td[e].dataset.fire=true;
                        }
                    }
                }
            }
            DS=0;
            xH=0;
            yH=0;
            setTimeout(FireBotH,500);
        }
        else    
        {
            DS=1;
            xH=x;
            yH=y;
            setTimeout(FireBotH,500);
        }

    }
    if(d==2)
    {
        for(let is=0;is<s;is++)
        {
            let x2=xS+is;
            for(let j=0;j<100;j++)
            {
                if($(td[j]).attr('data-y')==yS&&$(td[j]).attr('data-x')==x2&&$(td[j]).attr('data-fire')=='true')
                {
                    a++;
                }
            }
        }
        console.log('a: '+a);
        if(a==s)
        {
            for(let j=xS-1;j<=xS+s;j++)
            {
                for(let i2=yS-1;i2<=yS+1;i2++)
                {
                    for(let e=0;e<100;e++)
                    {
                        if(i2 == $(td[e]).attr('data-y')&&j==$(td[e]).attr('data-x')&&'false' == $(td[e]).attr('data-ship'))
                        {
                            $(td[e]).css('background-image','url("prom.png")');
                            td[e].dataset.fire=true;
                        }
                        else if(i2 == $(td[e]).attr('data-y')&&j==$(td[e]).attr('data-x')&&'true' == $(td[e]).attr('data-ship'))
                        {
                            $(td[e]).css('background-image','url("fire2.png")');
                            td[e].dataset.fire=true;
                        }
                    }
                }
            }
            DS=0;
            xH=0;
            yH=0;
            setTimeout(FireBotH,500);
        }
        else 
        {
            DS=1;
            xH=x;
            yH=y;
            setTimeout(FireBotH,500);
        }

    }
}
function drowFireFB(i)
{
    $(td[i]).css('background-image','url("prom.png")');
    td[i].dataset.fire=true;
}
function drowFireFBH(i)
{  
    $(td[i]).css('background-image','url("prom.png")');
    td[i].dataset.fire=true;
    Fire();
}


document.querySelector("#auto").addEventListener("change", function()
{
    if(this.checked == true)
    {
        $("#s1").prop("disabled", true);
        $("#s2").prop("disabled", true);
        $("#s3").prop("disabled", true);
        $("#s4").prop("disabled", true);
        $("#horiz").prop("disabled", true);
        $("#vertical").prop("disabled", true);
    }
    else if(this.checked == false)
    {
        $("#s1").prop("disabled", false);
        $("#s2").prop("disabled", false);
        $("#s3").prop("disabled", false);
        $("#s4").prop("disabled", false);
        $("#horiz").prop("disabled", false);
        $("#vertical").prop("disabled", false);
    }
})

let four3 = 1;
let three3 = 2;
let double3 = 3;
let one3 = 4;

function autoDraw()
{
    let direction=0;
    direction=parseInt(Math.random()*2+1);
    if(direction==1)//horizontal
    {
        let x2=parseInt(Math.random()*10+1);
        let y2=parseInt(Math.random()*7+1);
        do{
            for(let s=0;s<100;s++)
            {
                if($(td[s]).attr('data-x')==x2&&$(td[s]).attr('data-y')==y2)
                {
                    if(CheckCellH(x2,y2,4))
                    {
                        DrowShipH(y2,x2,4);
                        ShipTh(x2,y2,4);
                        four3--;
                    }
                }
            }
        }while(four3!=0);
    }
    else //vertical
    {
        let x2=parseInt(Math.random()*7+1);
        let y2=parseInt(Math.random()*10+1);
        do{
            for(let s=0;s<100;s++)
            {
                if($(td[s]).attr('data-x')==x2&&$(td[s]).attr('data-y')==y2)
                {
                    if(CheckCellV(x2,y2,4))
                    {
                        DrowShipV(y2,x2,4);
                        ShipTv(x2,y2,4);
                        four3--;
                    }
                }
            }
        }while(four3!=0);
    }
    //3
    do
    {
        let direction=0;
        direction=parseInt(Math.random()*2+1);
        if( direction==1)//horizontal
        {
            let x2=parseInt(Math.random()*10+1);
            let y2=parseInt(Math.random()*8+1);
            for(let s=0;s<100;s++)
            {
                if($(td[s]).attr('data-x')==x2&&$(td[s]).attr('data-y')==y2)
                {
                    if(CheckCellH(x2,y2,3))
                    {
                        DrowShipH(y2,x2,3);
                        ShipTh(x2,y2,3);
                        three3--;
                    }
                }
            }
        }
        else//vertical
        {
            let x2=parseInt(Math.random()*8+1);
            let y2=parseInt(Math.random()*10+1);
            for(let s=0;s<100;s++)
            {
                if($(td[s]).attr('data-x')==x2&&$(td[s]).attr('data-y')==y2)
                {
                    if(CheckCellV(x2,y2,3))
                    {
                        DrowShipV(y2,x2,3);
                        ShipTv(x2,y2,3);
                        three3--;
                    }
                }
            }
        }
    }while(three3!=0);
    //2
    do
    {
        let direction=0;
        direction=parseInt(Math.random()*2+1);
        if( direction==1)//horizontal
        {
            let x2=parseInt(Math.random()*10+1);
            let y2=parseInt(Math.random()*9+1);
            for(let s=0;s<100;s++)
            {
                if($(td[s]).attr('data-x')==x2&&$(td[s]).attr('data-y')==y2)
                {
                    if(CheckCellH(x2,y2,2))
                    {
                        DrowShipH(y2,x2,2);
                        ShipTh(x2,y2,2);
                        double3--;
                    }
                }
            }
        }
        else//vertical
        {
            let x2=parseInt(Math.random()*9+1);
            let y2=parseInt(Math.random()*10+1);
            for(let s=0;s<100;s++)
            {
                if($(td[s]).attr('data-x')==x2&&$(td[s]).attr('data-y')==y2)
                {
                    if(CheckCellV(x2,y2,2))
                    {
                        DrowShipV(y2,x2,2);
                        ShipTv(x2,y2,2);
                        double3--;
                    }
                }
            }
        }
    }while(double3!=0);
    //1
    do
    {
        let x2=parseInt(Math.random()*10+1);
        let y2=parseInt(Math.random()*10+1);
        for(let s=0;s<100;s++)
        {
            if($(td[s]).attr('data-x')==x2&&$(td[s]).attr('data-y')==y2)
            {
                if(CheckCellH(x2,y2,1))
                {
                    DrowShipH(y2,x2,1);
                    ShipTh(x2,y2,1);
                    one3--;
                }
            }
        }
    }while(one3!=0);
}
$("#clear").on("click", function()
{
    for (let i = 0; i < 100; i++) 
    {
        $(td[i]).css("background","rgb(73, 190, 236)");
        td[i].dataset.ship = false;
        td[i].dataset.fire = false;
        td[i].dataset.pos = false;
        four = 1;
        three = 2;
        double = 3;
        one = 4;
        $("#s1").prop("disabled", false);
        $("#s2").prop("disabled", false);
        $("#s3").prop("disabled", false);
        $("#s4").prop("disabled", false);
        $("#horiz").prop("disabled", false);
        $("#vertical").prop("disabled", false);
        $("#auto").prop("checked", false);
    }
})
function onScoreDrag()
{
    score.addEventListener("dragstart", function()
    {
        event.dataTransfer.setData("score", score.textContent);

        $(topScore).on("drop", function()
        {
            if(sAmount != 13)
            {
                sAmount++;
                let div = document.createElement("div");
                let s = event.dataTransfer.getData("score");
                let name = document.querySelector(".uName").textContent;
                div.className = "text2";
                div.className += " s";
                div.innerHTML += name + ": " + s;
                div.dataset.block = sAmount;
                div.draggable = "true";
                div.innerHTML += "<hr style = 'height: 2px; background: #015965;'>"
                topScore.append(div);
                localStorage.setItem("name" + sAmount, name);
                localStorage.setItem("score" + sAmount, s);
                localStorage.setItem("amount", sAmount);
                getSc();
            }
            else
            {
                alert("Максимальное количество рекордов");
            }
        })
    })
    score.addEventListener("dragend", function()
    {
        $(topScore).off("drop");
    })
}

topScore.addEventListener("dragover", function()
{
    event.preventDefault();
})

let colReccord=0; //количество занесенных рекордов
function getSc()
{
    //sc = document.querySelectorAll(".s");
    sc = document.querySelector(".topScore").children;//elementChildrens - коллеция детей списка
    for (var i=0;i<sc.length; i++) 
    {
        if (sc[i].classList.contains('s'))
        {
            colReccord++;
        }
    }

    console.log("Количество записей в рекодной таблице=")
    console.log(colReccord)

    for (let i = 0; i < sc.length; i++) 
    {
    $(sc[i]).on("dragstart", function()
    {
        let a = $(this).attr("data-block");
        event.dataTransfer.setData("block", a)
        console.log(event.dataTransfer.getData("block"));
    })
}
}

let trash = document.querySelector(".trash");
console.log(trash);

window.addEventListener("drop", function()
{
    let c = event.dataTransfer.getData("block");
    //let c = $(this).attr("data-block");
    console.log(c);
    for (let i = 0; i < sc.length; i++) 
    {
        if($(sc[i]).attr("data-block") == c)
        {
            console.log("ok");
            sc[i].remove();
            localStorage.removeItem("name" + c);
            localStorage.removeItem("score" + c);
            sAmount--;
            let q = parseInt(localStorage.getItem("amount"));
            q--;
            localStorage.setItem("amount", q);
        }
    }
})

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.height = innerHeight;
canvas.width = innerWidth;
var ch = canvas.height,
	 cw = canvas.width;

frequency = 0.009;
amplitude = 50;
increment1 = frequency;
increment2 = frequency;
w = 0.5;
function animate(){
	c.clearRect(0,0,cw,ch);
	requestAnimationFrame(animate);
	// waveArr.forEach((wave) => {
	// 	wave.update();
	// });


	c.beginPath();
	c.moveTo(0,ch/2);
	for(let x = 0; x < cw; x++){
		for(let y = 4; y < 10; y++){
			c.lineTo(x, y * 50 + ch/2 + Math.sin(x * frequency + increment2) * amplitude * Math.sin(w));
		}
	}
	c.stroke();
	c.strokeStyle = 'rgba(0,0,155, 0.5)';
	c.closePath();

	c.beginPath();
	c.moveTo(0,ch/2);
	for(let x = 0; x < cw; x++){
		for(let y = 2; y < 10; y++){
			c.lineTo(x, y * 50 + ch/2 + Math.sin(x * frequency + increment1) * amplitude * Math.sin(w));
		}
	}
	c.stroke();
	c.strokeStyle = 'rgba(0,0,155, 0.5)';
	c.closePath();

	increment1+= 0.05;
	increment2 -= 0.03;
	w+=0.05
}
animate();




addEventListener('resize', () => {
	canvas.height = innerHeight;
	canvas.width = innerWidth;
	ch = canvas.height;
	cw = canvas.width;
});

document.body.style.background = 'url(' + canvas.toDataURL + ')';
let uModal = document.querySelector("#uModal");
let uSpan = document.querySelector(".uClose");

let bModal = document.querySelector("#bModal");
let bSpan = document.querySelector(".bClose");
let uModalName = document.querySelector("#uModalName");
function showUModal()
{
    
    uModal.style.display = "block";
    setTimeout(realoadMapU(),600);
    setTimeout(realoadMapB(),600);
}

$(uSpan).on("click", function()
{
    uModal.style.display = "none";

})

function showBModal()
{
   
    bModal.style.display = "block";
    setTimeout(realoadMapU(),600);
    setTimeout(realoadMapB(),600);
}

$(bSpan).on("click", function()
{
    bModal.style.display = "none";
})
function showUModalName()
{
    uModalName.style.display = "block";
}


let saveName = document.querySelector("#saveName");
saveName.addEventListener("click", function()
{
    let name = document.querySelector("#uNameInput").value;
    if(name == "")
    {
        document.querySelector(".modal-footer").innerHTML = "Введите имя!";
    }
    else
    {
        document.querySelector(".uName").innerHTML = name;
        uModalName.style.display = "none";
    }
})
$(window).on("click", function()
{
    if (event.target == uModal || event.target == bModal) 
    {
        uModal.style.display = "none";
        bModal.style.display = "none";
    }
})

function realoadMapU()
{
    for (let i = 0; i < 100; i++) 
    {
        td[i].style.background = "rgb(73, 190, 236)";
        td[i].dataset.fire=false;
        td[i].dataset.ship=false;
        td[i].dataset.pos=false;
        td[i].dataset.xStart=0;
        td[i].dataset.yStart=0;
        td[i].dataset.sizeShip=0;
        td[i].dataset.dir=1;//horiz
    }
    
}

function realoadMapB()
{
    for (let i = 0; i < 100; i++) 
    {

        td2[i].style.background = "rgb(73, 190, 236)"
        td2[i].dataset.fire=false;
        td2[i].dataset.ship=false;
        td2[i].dataset.pos=false;
        td2[i].dataset.xStart=0;
        td2[i].dataset.yStart=0;
        td2[i].dataset.sizeShip=0;
        td2[i].dataset.dir=1;//horiz
    }
    
}
function realoadBtns()
{
   
    let input = document.querySelectorAll("input");
    for (let i = 0; i < input.length; i++) 
    {
        $(input[i]).prop("disabled", false);
    }

    document.querySelector("#auto").checked = false;
    $('.uScore .score').text('0');
    $('.bScore .score').text('0');
    four = 1;
    three = 2;
    double = 3;
    one = 4;
    four2 = 1;
    three2 = 2;
    double2 = 3;
    one2 = 4;
    four3 = 1;
    three3 = 2;
    double3 = 3;
    one3 = 4;
}