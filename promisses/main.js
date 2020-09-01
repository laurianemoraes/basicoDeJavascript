/*var minhaPromise = function(){
    return new Promise (function(resolve, reject){
        xhr.open('GET', 'https://api.github.com/users/laurianemoraes');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status===200){
                    resolve(JSON.parse(xhr.responseText))
                }
                else{
                    reject('erro narequisição')
                }
            }
        }
    });
}
*/
axios.get('https://api.github.com/users/laurianemoraes')
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.warn(error);
});