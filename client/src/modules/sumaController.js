const SumaController = {};

SumaController.doSuma = async nums => {
    return await fetch('http://localhost:8081/api-calc/suma', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nums)
    })
        .then(response => response.json())
        .then(({ data }) => { return data })
        .catch(console.log);
}

export default SumaController;