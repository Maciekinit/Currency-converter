{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.34;
        const rateCHF = 4.62;
        const rateGBP = 5.14;
        const rateUSD = 4.00;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "CHF":
                return amount / rateCHF;

            case "GBP":
                return amount / rateGBP;

            case "USD":
                return amount / rateUSD;
        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}
