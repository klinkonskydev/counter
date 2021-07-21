const initCount  = document.querySelector('#counter-init')
const endCount = document.querySelector('#counter-end')
const skipCount = document.querySelector('#counter-jump')

const startBtn = document.querySelector('#start-btn')

const counting = document.querySelector('#counter')

const count = () =>{
    
    if( initCount.value.length == 0 || endCount.value.length == 0)
    {
        counting.innerHTML = 'Impossible Count'
    } 
    else
    {
            counting.innerHTML = 'Contagem: </br>'
            
            var init = Number(initCount.value)
            var end = Number(endCount.value)
            var skip = Number(skipCount.value)

            switch( skip ){

                case 0:
                    window.alert('[ERROR] -- skip 0 dont is valid, skip receive 1')
                    skip = 1;
                    break;
            }

            if( init < end  )
            {
                for( let i = init;  i <= end; i += skip ){
                    counting.innerText += ` \u{1F449}${i} `
                }
            } else{

                for( let i = init;  i >= end; i -= skip ){
                    counting.innerText += ` \u{1F449}${i} `
                }
            }


        }

    }