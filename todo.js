
const ul = document.querySelector('ul');
const addForm = document.querySelector('.addForm');
const search = document.querySelector('.search textarea');


const createNewTodo = todo =>{

    const html = `
    <li class="collection-item">
        <div> ${todo} <a href="#!" class="secondary-content"><i class="material-icons delete deep-orange-text text-lighten-4">delete</i></a></div>
    </li>
`
    ul.innerHTML+=html;

}



addForm.addEventListener('submit', e => {

    e.preventDefault();
    
    const todo = addForm.entTodo.value.trim();

    if(todo.length){
        createNewTodo(todo);
        addForm.reset();
    }
});

ul.addEventListener('click', e =>{

    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.parentElement.remove();
    }
})


const filteredList = term =>{

    Array.from(ul.children)
        .filter(item => !item.textContent.toLowerCase().includes(term))
        .forEach(item =>item.classList.add('filtered'))


    Array.from(ul.children)
        .filter(item => item.textContent.toLowerCase().includes(term))
        .forEach(item => item.classList.remove('filtered'))


}



search.addEventListener('keyup', () =>{

    const term = search.value.toLowerCase().trim();
    
    filteredList(term);
})
