const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');


storeBtn.addEventListener('click', ()=> {
const userId = 'id1';
const user = {name: 'Peter', age: 45}
document.cookie = `userId=${userId}; max-age=10`;  // setting the expiration
document.cookie =`user=${JSON.stringify(user)}`;
    
});

retrBtn.addEventListener('click', () => {
   const cookieData = document.cookie.split(';');
   const data = cookieData.map(item => {
    return item.trim();
   });
    console.log(data[1].split('=')[1]); //user value
});
