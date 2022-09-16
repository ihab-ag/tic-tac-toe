window.onload=()=>{
    // declarables
    // html elements
    const grid= document.querySelector('.grid');
    // js vars
    const gridArr=[,,,,,,,,];
    const turn='red';
    // functions
    // create grid boxes
    const fillGrid=()=>{
        for(const key in gridArr){
            const div= document.createElement('div');
            div.setAttribute('id',key);
            div.onclick=select(key);
        }
    }
    // select action
    const select= (id)=>{
        while(!gridArr[id]){
            const el = document.getElementById(id);
            el.classList= turn;
            arr[id]=turn;
            switchTurn();//todo
            checkWin();//todo
        }
    }

}