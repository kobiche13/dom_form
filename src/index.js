import './css/main.css'
import Tooltip from './js/tooltip'

const btn = document.querySelector('.btn-popover')
let checkTooltipActivate = undefined;


btn.addEventListener('click', function(event){
    
    if (checkTooltipActivate == undefined){
        const checkTooltip = new Tooltip();
        checkTooltip.showTooltip('And here`s some amazing content. It`s very engaging. Ready?', 'Popover title', btn)
        checkTooltipActivate = document.querySelector('.popover-tooltip')
    } else {
        checkTooltipActivate.remove();
        checkTooltipActivate = undefined;
    }
})