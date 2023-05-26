const stickArr = document.querySelector('main section')

var selectedSort = ""

const mergeText = document.querySelector('#merge')
const quickText = document.querySelector('#quick')
const heapText = document.querySelector('#heap')
const insertText = document.querySelector('#insert')
const bubbleText = document.querySelector('#bubble')

const sortText = document.querySelector('#sort')
sortText.style.cursor = 'not-allowed'

function colorText() {
    mergeText.style.color = 'white'
    quickText.style.color = 'white'
    heapText.style.color = 'white'
    insertText.style.color = 'white'
    bubbleText.style.color = 'white'

}

function undoColorText() {
    if (selectedSort != "")
        document.querySelector('#' + selectedSort).style.color = 'white'
    
    if (sortText.style.cursor == 'not-allowed')
        sortText.style.cursor = 'pointer'
}

mergeText.addEventListener('click', (e) => {

    undoColorText()
    selectedSort = 'merge'
    mergeText.style.color = '#e95420'
})

quickText.addEventListener('click', (e) => {
    
    undoColorText()
    selectedSort = 'quick'
    quickText.style.color = '#e95420'
})

heapText.addEventListener('click', (e) => {
        
    undoColorText()
    selectedSort = 'heap'
    heapText.style.color = '#e95420'
})

insertText.addEventListener('click', (e) => {
        
    undoColorText()
    selectedSort = 'insert'
    insertText.style.color = '#e95420'
})

bubbleText.addEventListener('click', (e) => {
            
    undoColorText()
    selectedSort = 'bubble'
    bubbleText.style.color = '#e95420'
})

// _____________________________________________________________

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort() {

    var swap = true

    while (swap) {
        
        swap = false

        for (let i = 0; i < stickArr.children.length - 1; i++) {

            if (parseInt(stickArr.children[i].textContent) > parseInt(stickArr.children[i + 1].textContent)) {
                console.log(stickArr.children[i].textContent + ' > ' + stickArr.children[i + 1].textContent)
                stickArr.insertBefore(stickArr.children[i + 1], stickArr.children[i])
                swap = true
            }
            else {
                console.log(stickArr.children[i].textContent + ' < ' + stickArr.children[i + 1].textContent)
            }

            await delay(100)
        }

    }

}

sortText.addEventListener('click', (e) => {

    if (selectedSort == "") {
        console.log('no sort selected')
        return
    }
    else if (selectedSort == 'merge') {
        console.log('merge sort')
        //mergeSort()
    }
    else if (selectedSort == 'quick') {
        console.log('quick sort')
        //quickSort()
    }
    else if (selectedSort == 'heap') {
        console.log('heap sort')
        //heapSort()
    }
    else if (selectedSort == 'insert') {
        console.log('insert sort')
        //insertSort()
    }
    else if (selectedSort == 'bubble') {
        console.log('bubble sort')
        bubbleSort()
    }

})

//console.log(stickArr.children[2].textContent < 50)