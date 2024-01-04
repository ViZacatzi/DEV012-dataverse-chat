
export const chatRequest = (apiKey, mensaje) => {

    return fetch ("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify(mensaje),
    })
    };
    

