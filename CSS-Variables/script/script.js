const inputs = Array.from(document.querySelectorAll('input'));
const colorWell = document.querySelector('#base');


function handleChange(){
    const suffix = this.dataset.sizing || "";
    document.body.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}


inputs.forEach(input => input.addEventListener("mousemove", handleChange));
inputs.forEach(input => input.addEventListener("change",handleChange));
colorWell.addEventListener("input",handleChange);