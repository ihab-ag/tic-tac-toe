window.onload=()=>{
    // declarables
    // html elements
    const grid= document.querySelector('.grid');
    // js vars
    const gridArr=['a','b','c','d','e','f','g','h','i'];
    const score={
        'red':0,
        'yellow':0
    }
    let turn='red';
    // functions
    // create grid boxes
    const fillGrid=()=>{
        for(const key in gridArr){
            const div= document.createElement('div');
            div.setAttribute('id',key);
            div.onclick=()=>select(key);
            grid.appendChild(div);
        }
    }
    // select action
    const select= (id)=>{
        while(gridArr[id]!='red'&&gridArr[id]!='yellow'){
            const el = document.getElementById(id);
            el.classList= turn;
            gridArr[id]=turn;
            checkWin();//todo
            switchTurn();
        }
    }
    // switch player turn
    const switchTurn=()=>{
        if(turn=='red')
        turn='yellow';
        else
        turn='red';
    }
    // check win
    const checkWin=()=>{
        if(gridArr[0]==gridArr[1]&&gridArr[1]==gridArr[2]){
            for(let i=0;i<3;i++){
                const div=document.getElementById(i);
                div.style.background=turn;                
            }
            score[turn]++;
        }
        else if(gridArr[3]==gridArr[4]&&gridArr[4]==gridArr[5]){
            for(let i=3;i<6;i++){
                const div=document.getElementById(i);
                div.style.background=turn;                
            }
            score[turn]++;
        }
        else if(gridArr[6]==gridArr[7]&&gridArr[7]==gridArr[8]){
            for(let i=3;i<6;i++){
                const div=document.getElementById(i);
                div.style.background=turn;                
            }
            score[turn]++;
        }
    }
    fillGrid();
}