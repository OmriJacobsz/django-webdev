var t1 = document.querySelectorAll("td")[0]
var t2 = document.querySelectorAll("td")[1]
var t3 = document.querySelectorAll("td")[2]
var t4 = document.querySelectorAll("td")[3]
var t5 = document.querySelectorAll("td")[4]
var t6 = document.querySelectorAll("td")[5]
var t7 = document.querySelectorAll("td")[6]
var t8 = document.querySelectorAll("td")[7]
var t9 = document.querySelectorAll("td")[8]
var but = document.querySelector("button")

function getNext(current) {
    if (current == "") {
        return "X"
    } else if (current == "X") {
        return "O"
    } else if (current == "O") {
        return ""
    }
}
t1.addEventListener("click", function() {
    var currentText = t1.textContent
    t1.textContent = getNext(currentText)
  })

t2.addEventListener("click", function() {
    var currentText = t2.textContent
    t2.textContent = getNext(currentText)
})

t3.addEventListener("click", function() {
    var currentText = t3.textContent
    t3.textContent = getNext(currentText)
  })

t4.addEventListener("click", function() {
    var currentText = t4.textContent
    t4.textContent = getNext(currentText)
})

t5.addEventListener("click", function() {
    var currentText = t5.textContent
    t5.textContent = getNext(currentText)
  })

t6.addEventListener("click", function() {
    var currentText = t6.textContent
    t6.textContent = getNext(currentText)
})

t7.addEventListener("click", function() {
    var currentText = t7.textContent
    t7.textContent = getNext(currentText)
  })

t8.addEventListener("click", function() {
    var currentText = t8.textContent
    t8.textContent = getNext(currentText)
})

t9.addEventListener("click", function() {
    var currentText = t9.textContent
    t9.textContent = getNext(currentText)
  })

but.addEventListener("click", function() {
    t1.textContent = ""
    t2.textContent = ""
    t3.textContent = ""
    t4.textContent = ""
    t5.textContent = ""
    t6.textContent = ""
    t7.textContent = ""
    t8.textContent = ""
    t9.textContent = ""
})
