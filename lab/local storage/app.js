const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'user123';
const user = {
    name: 'Peter',
    age: 45,
    hobbies: ['Ski','Hockey','Soccer']
};

storeBtn.addEventListener('click', ()=> {
 
    sessionStorage.setItem('id', userId);
    localStorage.setItem('user', JSON.stringify(user));
    
});

retrBtn.addEventListener('click', () => {
   const extractedId =  localStorage.getItem('id');
   const extractedUser = JSON.parse(localStorage.getItem('user'));
   console.log(extractedUser);
   if (extractedId) {
    console.log('Got the Id - '+ extractedId);
   } else {
    console.log('Could not find id.');
   }
})
