console.log('Exercise14');

async function AddItem(item) {
    await time()
    let div = document.createElement("div")
    div.innerHTML = item
    document.body.append(div)
}

const time = () => {
    return new Promise((resolve, reject) => {
        t = 1 + Math.random() * 6
        setTimeout(() => {
            resolve()
        }, t * 1000);
    })
}
async function main() {
   let s= setInterval(() => {
        let last = document.body.getElementsByTagName("div")
        last = last[last.length - 1]
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
        }
        else {
            last.innerHTML = last.innerHTML + "."
        }
    }, 300);

    let text = ["Initialising Hacking",
        "Reading Files",
        " Password files detected",
        " Sending all passwords and personal files to server",
        "Cleaning up"]

    for (const item of text) {
        await AddItem(item)
    }
    await time()
    clearInterval(s)
}
main()
