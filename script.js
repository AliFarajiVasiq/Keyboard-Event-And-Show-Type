let btnKeyBoard =document.querySelectorAll('li')
let title = document.querySelector('.title')

document.addEventListener('keypress', function(e){
        btnKeyBoard.forEach(function(item){
            if(e.key == item.id){
                item.classList.add('hit')
                setTimeout(function(){
                    item.classList.remove('hit')
                }, 600)
            }
        })
        title.append(e.key)
})
let Backspace = document.querySelector('#Backspace')
document.addEventListener('keydown', function(e){
    if(e.key == 'Backspace'){
        let edit = title.innerHTML.slice(0, -1)
        title.innerHTML = edit
    }
    btnKeyBoard.forEach(function(btn){
        if(e.key == btn.id)
        btn.classList.add('hit')
        setTimeout(function(){
            btn.classList.remove('hit')
        }, 600)
    })
})
