const form = document.querySelector("form")

form.addEventListener("submit",function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#Weight").value)
    const results = document.querySelector("#result")
    const name = document.querySelector("#name").value
    const Category = document.querySelector("#data")

    if (height === "" || height < 0 || isNaN(height)){
        results.innerHTML = "Please enter a valid height"
    }else if (weight === "" || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please enter a valid weight"
    }else{
        const BMI = (weight/((height*height)/10000)).toFixed(1)
        results.innerHTML = `${name} Your BMI is ${BMI}`

         if (BMI < 18.6) {
        Category.innerHTML = `${name} you are in Under weight Range! `
        }else if (BMI >= 18.6 && BMI < 25) {
        Category.innerHTML = `${name} you are in Normal Range!`
        }else {
            Category.innerHTML = `${name} you are in over Weight Range!`
        }
    }
})

