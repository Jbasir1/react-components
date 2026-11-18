import "../App.css"

const EnterText = () =>{
    return(
    <div class="input-container">
    <input type="text" id="input" required=""/>
    <label for="input" class="label">Enter Text</label>
    <div class="underline"></div>
    </div>
    );
}

export default EnterText