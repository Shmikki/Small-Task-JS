const panels = document.querySelectorAll('.panel');

let currentPanel;

const addOpen = (e) => {

    if(currentPanel === undefined){
        currentPanel = e.currentTarget;
        currentPanel.classList.add('open');
        return
    }

    if(currentPanel !== e.currentTarget){
        currentPanel.classList.remove('open','open-active');
        currentPanel = e.currentTarget;
        currentPanel.classList.add('open');

    }

}

const addOpenActive = () =>{
    currentPanel.classList.add('open-active');
}

panels.forEach(panel => panel.addEventListener('click',addOpen));
panels.forEach(panel => panel.addEventListener('transitionend',addOpenActive));
