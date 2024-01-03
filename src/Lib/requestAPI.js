
export const chatRequest = (apiIngresada, mensaje) => {

    return fetch ("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiIngresada}`,
        },
        body: JSON.stringify(mensaje),
    })
    };
    

