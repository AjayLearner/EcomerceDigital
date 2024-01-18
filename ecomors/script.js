let carddata=JSON.parse(localStorage.getItem("addtocard"))||[]
let app=document.querySelector(".border")
  function display(products){
    app.innerHTML=null
  products.forEach((e)=>{
   let divs=document.createElement("div")
   let img=document.createElement("img")
   img.src=e.img
   let h2=document.createElement("h2")
   h2.textContent=e.brand
   let h3=document.createElement("h4")
   h3.textContent=e.name
   let h31=document.createElement("h3")
   h31.textContent="Rs:"+e.price
   let h32=document.createElement("h3")
   h32.textContent="Size:"+e.size
   let h33=document.createElement("h4")
   h33.textContent=e.category
   let btn=document.createElement("button")
   btn.textContent="AddToCart"
   btn.addEventListener("click",()=>{
      if(addtocard(e.id)===true){
        carddata.push(e)
        localStorage.setItem("addtocard",JSON.stringify(carddata))
        alert("Item added to the cart")
      }
      else{
        alert("Item already in the cart")
      }
   })
   divs.append(img,h2,h3,h31,h32,h33,btn)
   app.append(divs)
  })
}
display(products)
let fil= document.querySelector("#cate")
fil.addEventListener("change",()=>{
  if(fil.value==='All'){
      display(products);
  }
  else{
      let filtered=products.filter(function(el){
          return el.category===fil.value;
      })
      display(filtered);

  }
 })
 function addtocard(id){
  for(let i=0;i<carddata.length;i++){
    if(carddata[i].id==id){
      return false;
    }
  }
  return true;
 }