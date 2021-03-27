var Name = document.getElementById("site-name");
var Url = document.getElementById("site-url");

var siteItems;
if(localStorage.getItem("sitedata")==null)
{ 
  siteItems=[];
}
else
{
siteItems=JSON.parse(localStorage.getItem("sitedata"));
displaySite();
}

//add function
function addSite()
{

var siteItem=
{
site_name: Name.value,
site_Url:Url.value,

}
if(siteItem.site_name=="")
{
var errorName=`<p class="alert alert-danger">Name Is Required </p>`;

document.getElementById("alert-name").innerHTML=errorName;


}
else if(siteItem.site_Url=="")
{
  var errorUrl=` <p class="alert alert-danger">Url Is Required </p>`;
  document.getElementById("alert-url").innerHTML=errorUrl;
}
else{
  document.getElementById("alert-url").innerHTML="";
  document.getElementById("alert-name").innerHTML="";
siteItems.push(siteItem);
localStorage.setItem("sitedata",JSON.stringify(siteItems));
console.log(siteItems);
displaySite();
clearForm();
}

}


//display
function displaySite()
{
  var cartona="";
for(var i=0;i<siteItems.length;i++)
{
cartona+= `<div class="visit-item">
<div class="row">
  <div class="col-md-4">
    <p>${siteItems[i].site_name}</p>
  </div>
  <div class="col-md-4">
   <a href="https://${siteItems[i].site_Url}/"> <button class="btn btn-primary btn-visit" type="submit">Visit</button></a>
  <button class="btn btn-danger btn-delete" type="submit" onclick="deleteSite(${i})">delete</button>
  </div>
</div>
</div>`
}
document.getElementById("site-container").innerHTML=cartona;
}

function clearForm()
{
  Name.value="";
  Url.value="";
}

//delete

function deleteSite(i)
{
  siteItems.splice(i,1);
  localStorage.setItem("sitedata",JSON.stringify(siteItems));
  displaySite();

}

