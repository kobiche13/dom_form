export default class Tooltip{
    constructor(){
        this.tooltips = [];
    }

    showTooltip(messageTooltip, titleTooltip, element){
        const tooltipContainer = document.createElement('div');
        const tooltipTitle = document.createElement('div');
        const tooltipMessage = document.createElement('div');
        
        tooltipContainer.classList.add('popover', 'popover-tooltip');
        tooltipTitle.classList.add('popover-tooltip__title');
        tooltipMessage.classList.add('popover-tooltip__message');
        tooltipTitle.textContent = titleTooltip;
        tooltipMessage.textContent = messageTooltip;

        const containerPopover = document.querySelector('.container-popover');
        containerPopover.insertBefore(tooltipContainer, containerPopover.firstChild);
        const checkTooltipContainer = document.querySelector('.popover-tooltip');


        const id = performance.now();

        this.tooltips.push=({
            id,
            element: tooltipContainer
        });

        

       
        checkTooltipContainer.appendChild(tooltipTitle);
        checkTooltipContainer.appendChild(tooltipMessage);

        return id
    }
}