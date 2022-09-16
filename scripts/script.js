window.onload=()=>{
    // declarables
    // html elements
    const grid= document.querySelector('.grid');
    const gridArr=[,,,,,,,,];
    // functions
    // create grid boxes
    const fillGrid=()=>{
        for(const key in gridArr){
            const div= document.createElement('div');
            div.setAttribute('id',key);
            div.onclick=select(key);
        }
    }
}