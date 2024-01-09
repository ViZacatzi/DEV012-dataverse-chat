export const chatRequest = (apiKey, bodymensaje) => {
    return fetch ("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify(bodymensaje),
       
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al realizar la solicitud');
        }
        return response.json();
    })
    .catch(error => {
        console.error('Error en la solicitud:', error);
        throw error;
    });
};
    
      
        
     

   

