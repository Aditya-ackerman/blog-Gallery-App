let getEmail = document.querySelector(".comment-id");
let getcomment = document.querySelector(".Mycomment");
let container = document.querySelector(".PostForm");

window.addEventListener("DOMContentLoaded", setupItems)
function addcommnent()
{
   let value1 = getEmail.value
   let value2  = getcomment.value;
   let showBox = document.createElement('div')
   container.appendChild(showBox)
   showBox.innerHTML = '<article class = "PostComment" ><p class="showEmail">'+value1+'</p><p class="showcommet">'+value2+'</p></article>'
   getEmail.value = ''
   getcomment.value = ''
   const information = { value1, value2 };
   let items = localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[];
   items.push(information)
   localStorage.setItem('list', JSON.stringify(items))
   return items
}



function setupItems()
{
   items = addcommnent()
   items.forEach(function(item)
   {
     let showBox = document.createElement('div')
   container.appendChild(showBox)
   showBox.innerHTML = '<article class = "PostComment" ><p class="showEmail">'+item.value1+'</p><p class="showcommet">'+item.value2+'</p></article>'
   getEmail.value = ''
   getcomment.value = ''
      console.log(item.value1)
   })
}

function additems(value1, value2)
{
   let showBox = document.createElement('div')
   container.appendChild(showBox)
   showBox.innerHTML = '<article class = "PostComment" ><p class="showEmail">'+value1+'</p><p class="showcommet">'+value2+'</p></article>'
   getEmail.value = ''
   getcomment.value = ''
}


// localStorage.setItem('orange', JSON.stringify([ 'item1', 'item2']))
// const oranges = JSON.parse(localStorage.getItem('orange'))
// console.log(oranges)

   