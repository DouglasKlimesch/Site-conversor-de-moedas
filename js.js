const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".curency-select")
const currencySelectTo = document.querySelector(".select-convert-to")

function convertValueTo() {

    let inputConvertValue = document.querySelector(".input-value").value

    let currencyValueToConvert = document.querySelector(".currency-value-to-convert")

    const realToday = 4.2
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.2
    const biticoinToday = 8.2



    if (currencySelectTo.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputConvertValue / dolarToday)
    }

    if (currencySelectTo.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ue-UE", {
            style: "currency",
            currency: "EUR"

        }).format(euroToday / inputConvertValue)


    }
    if (currencySelectTo.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ing-UK", {
            style: "currency",
            currency: "GBP"

        }).format(libraToday / inputConvertValue)

    }
    if (currencySelectTo.value == "biticoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("", {
            style: "currency",
            currency: "BTC"

        }).format(biticoinToday / inputConvertValue)

    }

    if (currencySelectTo.value == "real")
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format( realToday)


}


function changeCurrencyTo() {

    const currencyNameto = document.getElementById("currency-to-name")
    const currencyImgto = document.querySelector(".currency-img-to")

    if (currencySelectTo.value == "dolar") {
        currencyNameto.innerHTML = " Dolar Americano"
        currencyImgto.src = "./assets/Dolar.png"

    }
    if (currencySelectTo.value == "euro") {
        currencyNameto.innerHTML = " Euro"
        currencyImgto.src = "./assets/Euro.png"

    }
    if (currencySelectTo.value == "libra") {
        currencyNameto.innerHTML = "Libra"
        currencyImgto.src = "./assets/libra.png"

    }
    if (currencySelectTo.value == "biticoin") {
        currencyNameto.innerHTML = " Biticoin"
        currencyImgto.src = "./assets/bitcoin.png"
    }
    if (currencySelectTo.value == "real") {
        currencyNameto.innerHTML = " Real"
        currencyImgto.src = "./assets/real.png"

    }
    convertValueTo()
}

function convertValue() {

    let inputConvertValue = document.querySelector(".input-value").value

    let currencyValueToConvert = document.querySelector(".currency-value-to-convert")

    const currencyValueConverted = document.querySelector(".currency-value")


    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.2
    const biticoinToday = 8.2



    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputConvertValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ue-UE", {
            style: "currency",
            currency: "EUR"

        }).format(inputConvertValue / euroToday)


    }
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ing-UK", {
            style: "currency",
            currency: "GBP"

        }).format(inputConvertValue / libraToday)

    }
    if (currencySelect.value == "biticoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("", {
            style: "currency",
            currency: "BTC"

        }).format(inputConvertValue / biticoinToday)

    }

}
function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = " Dolar Americano"
        currencyImg.src = "./assets/Dolar.png"


    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = " Euro"
        currencyImg.src = "./assets/Euro.png"

    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"

    }
    if (currencySelect.value == "biticoin") {
        currencyName.innerHTML = " Biticoin"
        currencyImg.src = "./assets/bitcoin.png"


    }
    convertValue()
}
currencySelectTo.addEventListener("change", changeCurrencyTo)

currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValueTo, convertValue)



