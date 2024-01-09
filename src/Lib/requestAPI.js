import data from "../data/dataset.js";

let peliculas = data.name

const requestBody = {
    model: "gpt-3.5-turbo",
     messages: [{ 
   role: "system",
   content: `Tu eres el personaje principal de la pelicula + ${peliculas}.`
 },
 {
   role: "user",
   content: "Hola, quien eres?"
 }]
}
export const chatRequest = (apiKey, mensaje, movieName) => {

    return fetch ("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify(requestBody),
        
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
    
      
        
     

   

