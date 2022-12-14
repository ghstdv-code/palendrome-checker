const txtInput = document.querySelector('.inputs input'),
checkBtn = document.querySelector('.inputs button'),
inforesult = document.querySelector('.inforesult');
let filterInput;


txtInput.addEventListener("keyup", () => {
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/gi, "");
    if(filterInput) return checkBtn.classList.add("active");
    else{
        checkBtn.classList.remove("active")
        inforesult.style.display = "none";
    } 
});

checkBtn.addEventListener('click', () => {
    if(txtInput.value){
        let reverseInput = filterInput.split("").reverse().join("");
        inforesult.style.display = "block";
        if(filterInput != reverseInput){
            return inforesult.innerHTML = `No, <span>'${txtInput.value}'</span> is not a palindrome`;
        }
        return inforesult.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome`;
    }
});