let count  = 1;
let sum = 2;
let getFirstImage = document.querySelector(".fimg");
let getSecondImage = document.querySelector(".simg");
let getFirstComment = document.querySelector(".comment1")
let getSecondComment = document.querySelector(".comment2")
let container = document.body

function prevImage()
{
   

    count = count-1;
    sum = sum-1
    
     if(count<1)
    {
        count = 4
        sum = 5
    }

    console.log(count)
    console.log(sum)
    getFirstImage.src = 'img/p'+count+'.jpg'
    getSecondImage.src = 'img/p'+sum+'.jpg'
}

function nextImage()
{
    if(count>=4&& sum>=5)
    {
        count =0
        sum = 1
    }
    count = count+1
    sum = sum+1
    
       getFirstImage.src = 'img/p'+count+'.jpg'
    getSecondImage.src = 'img/p'+sum+'.jpg';
}

function ShowComment()
{
    getFirstComment.style.zIndex = '1000';
}

function Hidecomment()
{
    getFirstComment.style.zIndex = '-1000';
}

function ShowComment2()
{
    getSecondComment.style.zIndex = '1000';
}

function Hidecomment2()
{
    getSecondComment.style.zIndex = '-1000';
}

function GrandImg()
{
    back = document.createElement('div')
    container.appendChild(back)
    back.setAttribute("id", "bigcontainer")
    closebtn = document.createElement("button")
    closebtn.innerHTML = '<img class ="close-btn" src="img/cross.png" alt=""></img>'
    closebtn.setAttribute("onclick", "closeImg()")
    closebtn.setAttribute("id", "cross")
    back.appendChild(closebtn)
    box = document.createElement("div")
    box.setAttribute("id","box")
    back.appendChild(box)
    NewImg = document.createElement("img")
    box.appendChild(NewImg)
    NewImg.src = 'img/p'+count+'.jpg'
    NewImg.setAttribute("id","big-Img");
    para = document.createElement("p")
    box.appendChild(para)
    para.setAttribute("id", "para")
    para.innerHTML = 'these are my gallery images.<br>They are just imaginary places.<br>Just like A Day dream. IN NATURE,<br> LIGHT CREATES COLOR.IN THE PICTURE,<br>COLOR CREATES LIGHT.'
}

function Grand2Img()
{
    back = document.createElement('div')
    container.appendChild(back)
    back.setAttribute("id", "bigcontainer")
     closebtn = document.createElement("button")
    closebtn.innerHTML = '<img class ="close-btn" src="img/cross.png" alt=""></img>'
    closebtn.setAttribute("onclick", "closeImg()")
    closebtn.setAttribute("id", "cross")
    back.appendChild(closebtn)
    box = document.createElement("div")
    box.setAttribute("id","box")
    back.appendChild(box)
    NewImg = document.createElement("img")
    box.appendChild(NewImg)
    NewImg.src = 'img/p'+sum+'.jpg'
    NewImg.setAttribute("id","big-Img");
    para = document.createElement("p")
    box.appendChild(para)
    para.setAttribute("id", "para")
    para.innerHTML = 'THE BEAUTY HAS NO BOUNDARIES IN THIS PICTURE.<br>BEAUTY LIES WITHIN FOR THOSE WHO CHOOSE TO SEE.<br>BEAUTY LIES WITHIN FOR THOSE WHO CHOOSE TO SEE.<br> SUCH A SCENIC VIEW LOOKS GREAT.'
}

function closeImg()
{
    document.querySelector('#bigcontainer').remove()
     document.querySelector('#box').remove()
     document.querySelector('#big-Img').remove()
     document.querySelector('#para').remove()
}