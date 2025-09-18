function Todo() {
    function callFun(){
        alert("Hello World")
    }
    return (
        <div>
            <h1>Tanvi,s Todo</h1>

            <img src="https://plus.unsplash.com/premium_photo-1666777246899-053e06efdb35?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJpcmR8ZW58MHx8MHx8fDA%3D" alt="Tanvi photo " class="photo" />
            <ul>
                <li>Invengt new sky</li>
                <li>Climb a mountain</li>
                <li>Run a marathon</li>
                <li>Feed a stray dog</li>
            </ul>
            <button onClick={callFun}>click here</button>
        </div>
    )
}
export default Todo;