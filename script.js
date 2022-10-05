

const api_url ="https://zenquotes.io/api/quotes/";

 async function getmyapi() {
 
 const response = await fetch();
   var data = await response.json();
  console.log(data);}


 getmyapi(api_url);





 fetch()
 .then(res => {
   return res.json();
 })
