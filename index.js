let count = 0
let update_count = document.getElementById("count-el")
let decrease_count = document.getElementById("decrease-btn")
let record = document.getElementById("entry-record")
let total = document.getElementById("total-entry-record")

//Function for incrementing entries
function increment() {
    count += 1
    update_count.textContent = count
}


//function for decreamenting entries incase the user made a mistake
function decrease() {
    if (count != 0) { 
    count -= 1
    update_count.textContent = count
    }
}


entry_record = []

total_entry = 0


function save() {
    entry_record.push(count)
    total_entry += count

    if (count != 0) {
        record.textContent += JSON.stringify(count)+ " - "
    }

    count = 0
    update_count.textContent = count
    total.textContent = total_entry
} 


function revert() {
    entry_record.pop()
    console.log(entry_record)
    new_total_entry = 0
    new_record = ""

    for (i = 0; i < entry_record.length; i++) {
        new_total_entry += entry_record[i]
        new_record += JSON.stringify(entry_record[i])+ " - "
    }
    record.textContent = new_record
    console.log(new_record)
    console.log(new_total_entry)
    total_entry = new_total_entry
    total.textContent = total_entry
}

