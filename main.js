const searchbox = document.querySelector('#searchbox input');
searchbox.addEventListener('keyup', (e) => {
    if (searchbox.value !== "") {
        document.querySelector('#searchbox span:nth-child(2)').classList.remove('block');
        document.querySelector('#searchbox span:nth-child(2)').classList.add('hidden');
    } else{
        document.querySelector('#searchbox span:nth-child(2)').classList.remove('hidden');
        document.querySelector('#searchbox span:nth-child(2)').classList.add('block');
    }
})

const searchBox = document.querySelector('#searchbox');
const closeSearch = document.querySelector('#closeSearch');
searchBox.addEventListener('click' , ()=>{
    searchBox.classList.add('bg-white');
    searchBox.classList.add('shadow-md');

    closeSearch.classList.remove('hidden');
})

closeSearch.addEventListener('click' , () => {
    searchBox.classList.remove('bg-white');
    searchBox.classList.remove('shadow-md');
    closeSearch.classList.add('hidden');
    searchbox.value = "";
    document.querySelector('#searchbox span:nth-child(2)').classList.remove('hidden');
    document.querySelector('#searchbox span:nth-child(2)').classList.add('block');
})


