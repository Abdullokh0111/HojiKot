








function gg(a) {
    try {

        if (isNaN(a)) throw new Error("Invalid input: Faqat son kiriting!");
        console.log("To'g'ri son kiritdingiz!", a);
        
    } catch(error) {

        console.log(error.message);
        

    }


}

gg("asdfg")