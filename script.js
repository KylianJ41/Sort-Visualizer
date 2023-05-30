const stickArr = document.querySelector('main section')

var selectedSort = ""
/* The two variables below depends on which 
speed is selected by the user. Normal speed by default */
var classicDelay = 100
var shortDelay = 50

const mergeText = document.querySelector('#merge')
const quickText = document.querySelector('#quick')
const heapText = document.querySelector('#heap')
const insertText = document.querySelector('#insert')
const bubbleText = document.querySelector('#bubble')

const slow = document.querySelector('#slow')
const normal = document.querySelector('#normal')
const fast = document.querySelector('#fast')

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

slow.addEventListener('click', (e) => {

    slow.style.backgroundColor = '#e95420'
    normal.style.backgroundColor = '#989898'
    fast.style.backgroundColor = '#989898'

    classicDelay = 400
    shortDelay = 200

})

normal.addEventListener('click', (e) => {

    slow.style.backgroundColor = '#989898'
    normal.style.backgroundColor = '#e95420'
    fast.style.backgroundColor = '#989898'

    classicDelay = 170
    shortDelay = 85
})

fast.addEventListener('click', (e) => {

    slow.style.backgroundColor = '#989898'
    normal.style.backgroundColor = '#989898'
    fast.style.backgroundColor = '#e95420'

    classicDelay = 90
    shortDelay = 40
})

// _____________________________________________________________

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function christmasTree() {

    for (let i = 0; i < stickArr.children.length; i++) {
        stickArr.children[i].style.backgroundColor = 'green'
    }

}

async function bubbleSort() {

    let swap = true

    while (swap) {
        
        swap = false
        let i_max = stickArr.children.length - 1

        for (let i = 0; i < i_max; i++) {

            if (parseInt(stickArr.children[i].textContent) > parseInt(stickArr.children[i + 1].textContent)) {
                //console.log(stickArr.children[i].textContent + ' > ' + stickArr.children[i + 1].textContent)
                stickArr.children[i].style.backgroundColor = 'red'
                //await delay(300)
                stickArr.insertBefore(stickArr.children[i + 1], stickArr.children[i])
                /*stickArr.children[i+1].style.backgroundColor = 'green'
                await delay(200)*/
                swap = true
            }
            else {
                stickArr.children[i].style.backgroundColor = 'white'
                //console.log(stickArr.children[i].textContent + ' < ' + stickArr.children[i + 1].textContent)
            }
            await delay(classicDelay)
        }
        stickArr.children[stickArr.children.length - 1].style.backgroundColor = 'white'
        i_max--
    }

    christmasTree()
}

async function insertSort() {

    for (let i = 1; i < stickArr.children.length; i++) { // we start at 1 since the first elem is already sorted
    
        let v = i

        while (v > 0 && parseInt(stickArr.children[v-1].textContent) > parseInt(stickArr.children[v].textContent)) {
            stickArr.children[v].style.backgroundColor = 'red'
            await delay(classicDelay)
            stickArr.insertBefore(stickArr.children[v], stickArr.children[v-1])
            v--
        }

        if (v != i) {
            await delay(shortDelay)
            stickArr.children[v].style.backgroundColor = 'green'
            await delay(classicDelay)
            stickArr.children[v].style.backgroundColor = 'white'
        }

    }

    christmasTree()
}

async function heapify(i, len) {

	let left = 2 * i + 1
	let right = 2 * i + 2
	let high = i

	if (left < len && parseInt(stickArr.children[left].textContent) > parseInt(stickArr.children[high].textContent))
		high = left
		
	if (right < len && parseInt(stickArr.children[right].textContent) > parseInt(stickArr.children[high].textContent))
		high = right
		
	if (high != i) {
	
        stickArr.children[i].style.backgroundColor = 'red'
        stickArr.children[high].style.backgroundColor = 'red'
        await delay(classicDelay)

        let temp = stickArr.children[i].cloneNode(true);
        let replaceChild = stickArr.children[high].cloneNode(true);
        stickArr.replaceChild(replaceChild, stickArr.children[i]);
        stickArr.replaceChild(temp, stickArr.children[high]);

        stickArr.children[i].style.backgroundColor = 'green'
        stickArr.children[high].style.backgroundColor = 'green'
        await delay(shortDelay)

        stickArr.children[i].style.backgroundColor = 'white'
        stickArr.children[high].style.backgroundColor = 'white'
		await heapify(high, len)
	}

}

async function buildMaxHeap(len) {

    let node_i = Math.floor((len / 2) - 1)

    for (; node_i >= 0; node_i--)
        await heapify(node_i, len)
}

async function heapSort() {

    await buildMaxHeap(stickArr.children.length)

    for (let i = stickArr.children.length - 1; i > 0; i--) {

        stickArr.children[i].style.backgroundColor = 'red'
        stickArr.children[0].style.backgroundColor = 'red'
        await delay(classicDelay)

        let temp = stickArr.children[i].cloneNode(true);
        let replaceChild = stickArr.children[0].cloneNode(true);
        stickArr.replaceChild(replaceChild, stickArr.children[i]);
        stickArr.replaceChild(temp, stickArr.children[0])

        stickArr.children[i].style.backgroundColor = 'green'
        stickArr.children[0].style.backgroundColor = 'green'
        await delay(shortDelay)
        stickArr.children[i].style.backgroundColor = 'white'
        stickArr.children[0].style.backgroundColor = 'white'

        await heapify(0, i)
    }

    christmasTree()
}

async function merge(l, m, r) {

    let i, j = 0, k = 0
    let len1 = m - l + 1
    let len2 = r - m

    let l_arr = []
    let r_arr = []

    for (i = 0; i < len1; i++) {
        l_arr[i] = stickArr.children[l + i].cloneNode(true)
    }

    for (i = 0; i < len2; i++) {
        r_arr[i] = stickArr.children[m + 1 + i].cloneNode(true)
    }

    stickArr.children[l].style.backgroundColor = 'purple'
    stickArr.children[r].style.backgroundColor = 'purple'

    i = l

    while (j < len1 && k < len2) {
        await delay(classicDelay)

        if (parseInt(l_arr[j].textContent) <= parseInt(r_arr[k].textContent)) {
            stickArr.replaceChild(l_arr[j], stickArr.children[i])
            j++
        }
        else {
            stickArr.replaceChild(r_arr[k], stickArr.children[i])
            k++
        }

        if (i == l || i == r)
            stickArr.children[i].style.backgroundColor = 'purple'

        i++
    }

    while (j < len1) {
        await delay(classicDelay)
        stickArr.replaceChild(l_arr[j], stickArr.children[i])
        j++
        i++
    }

    while (k < len2) {
        await delay(classicDelay)
        stickArr.replaceChild(r_arr[k], stickArr.children[i])
        k++
        i++
    }

    stickArr.children[l].style.backgroundColor = 'white'
    stickArr.children[r].style.backgroundColor = 'white'

}

async function merge_aux(l, r) {

    if (l >= r)
        return

    let m = Math.floor((l + r) / 2)

    await merge_aux(l, m)
    await merge_aux(m + 1, r)
    await merge(l, m, r)
}

async function mergeSort() {
    await merge_aux(0, stickArr.children.length - 1)
    christmasTree()
}

async function swap(i, j) {

    stickArr.children[i].style.backgroundColor = 'red'
    stickArr.children[j].style.backgroundColor = 'red'
    await delay(classicDelay)

    let temp = stickArr.children[i].cloneNode(true)
    let replaceChild = stickArr.children[j].cloneNode(true)
    stickArr.replaceChild(replaceChild, stickArr.children[i])
    stickArr.replaceChild(temp, stickArr.children[j])

    stickArr.children[i].style.backgroundColor = 'green'
    stickArr.children[j].style.backgroundColor = 'green'
    await delay(shortDelay)

    stickArr.children[i].style.backgroundColor = 'white'
    stickArr.children[j].style.backgroundColor = 'white'
}

async function partitionning(low, high) {

    let pivot = parseInt(stickArr.children[high].textContent)
    let i = low - 1

    // sub-array limits in purple
    stickArr.children[low].style.backgroundColor = 'purple'
    stickArr.children[high].style.backgroundColor = 'purple'

    for (let j = low; j < high; j++) {

        if (parseInt(stickArr.children[j].textContent) < pivot) {

            i++
            await swap(i, j)

            if (i == low || i == high)
                stickArr.children[i].style.backgroundColor = 'purple'

        }
    }

    i++
    await swap(i, high)

    stickArr.children[low].style.backgroundColor = 'white'
    stickArr.children[high].style.backgroundColor = 'white'

    return i
}

async function quickSort_aux(low, high) {

    if (low < high) {

        let pi = await partitionning(low, high)

        await quickSort_aux(low, pi - 1)
        await quickSort_aux(pi + 1, high)
    }
}

async function quickSort() {
        await quickSort_aux(0, stickArr.children.length - 1)
        christmasTree()
}

sortText.addEventListener('click', (e) => {

    if (selectedSort == "") {
        console.log('no sort selected')
        return
    }
    else if (selectedSort == 'merge') {
        console.log('merge sort')
        mergeSort(0, stickArr.children.length - 1)
    }
    else if (selectedSort == 'quick') {
        console.log('quick sort')
        quickSort()
    }
    else if (selectedSort == 'heap') {
        console.log('heap sort')
        heapSort()
    }
    else if (selectedSort == 'insert') {
        console.log('insert sort')
        insertSort()
    }
    else if (selectedSort == 'bubble') {
        console.log('bubble sort')
        bubbleSort()
    }

})


