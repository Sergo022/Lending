const allSkeleton = document.querySelectorAll('.skeleton')
window.addEventListener('load', function(){
    allSkeleton.forEach(item=>{
        item.classList.remove('skeleton')
    })
})

const allSkeleton1 = document.querySelectorAll('.skeleton-1')
window.addEventListener('load', function(){
    allSkeleton1.forEach(item=>{
        item.classList.remove('skeleton-1')
    })
})
