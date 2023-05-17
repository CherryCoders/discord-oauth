## Versão inicial 0.0.1 @cherry/discord-oauth

Biblioteca desenvolvida para facilitar aos desenvolvedores na Cherry.

## Funcionamento

1 - Instanciando as configurações com discord

```js
import { Client, flagsResponseType } from "@cherry-code/discord-oauth";

const discord = new Client({
  oauth2: {
    response_type: "code",
    client_id: "CLIENT ID DO DISCORD",
    client_secret: "CLIENT SECRET DO DISCORD",
    redirect_uri: "URL DE REDIRECIONAMENTO DA AUTH",
    scope: flagsResponseType.IDENTIFY_WITH_EMAIL.join(" "), // flags das informações que precisa
    prompt: "consent",
  },
});
```

2 - Chave o método de autenticação async.

```js
await discord.authorize(code);
```

## Dados que podem ser recuperados

De acordo com o que foi requisitado poderá ser executado uma das funções.

- Recuperar Email e algumas infos do usuário ou só a info.

```js
const response = await discord.users.me();
response.toJSON();
```

**OBS:** Utilize o método `toJSON()` caso queira recuperar somente os dados em vez do Objeto de entidade recuperado.

**EM BREVE MAIS FUNÇÕES VEM AI CONFORME FOR PRECISANDO DURANTE OS DESENVOLVIMENTOS**
