const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

currentActiveCircle = 1;

const update = () => {
    circles.forEach((circle, i) => {
        if (i < currentActiveCircle)
            circle.classList.add('active')
        else 
            circle.classList.remove('active')
        
        console.log("i: ", i , "currentActive: ", currentActiveCircle)
    })
}

next.addEventListener('click', () => {
    currentActiveCircle++

    if (currentActiveCircle > circles.length)
        currentActiveCircle = circles.length
   
    update()
    btnController()
    updateProgress()
    
})

prev.addEventListener('click', () => {
    currentActiveCircle--

    if (currentActiveCircle < 1)
        currentActiveCircle = 1
    
    update()
    btnController()
    updateProgress()

})

function btnController() {
    if (currentActiveCircle === 1) 
        prev.setAttribute('disabled', 'true')
    else 
        prev.removeAttribute('disabled')
    
    if (currentActiveCircle === circles.length)
        next.setAttribute('disabled', 'true')
    else
        next.removeAttribute('disabled')
}

function updateProgress() {
    progress.style.width = `${((currentActiveCircle - 1) / (circles.length -1)) *100}%`
}

