import { chatRequest } from "../src/Lib/requestAPI.js";


const respuestaIA = jest
  .fn()
  .mockResolvedValueOnce({ choices: [{ message: "foo" }] });
//hacer una implementación falsa de fech
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: respuestaIA,
  })
);

// Pruebas para la función de promesa
describe("chatRequest", () => {
  it("Debería llamar a la respuesta con los datos adecuados", () => {
    const messages = [{ role: "user", content: "foo" }];
    chatRequest("11111", messages);
    expect(global.fetch).toBeCalledWith(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer 111111`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages,
        }),
      }
    );
  });
  it("Debería responder los mensajes de forma correcta", () => {
    const respuesta = {
      choices: [
        {
          message: {
            role: "assistant",
            content: "!Hola¡",
          },
        },
      ],
    };
    respuestaIA.mockResolvedValueOnce(respuesta);

    return chatRequest("11111" [{role:"user", content:"foo"}])
    .then((resolved) => {
        expect(resolved).tobe(respuesta);
    });
  });
});
