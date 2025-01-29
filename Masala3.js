function sleep(a) {
    return new Promise((res) => {
        setTimeout(res, a * 1000)
    })
}




async function nimadur() {
    await sleep(2);


    console.log("Ma'lumot kelib tushdi")


}


nimadur()