# 🏆 Pedro Pokémon Databook

Databook interativo e single-page da jornada Pokémon do Pedro — de Kanto até Galar, incluindo títulos, Pokémon lendários e shiny, Mega Evoluções, Gigantamax e Z-Moves.

## Seções

- 🏠 **Início** — visão geral da jornada
- 🎖️ **Perfil de Pedro** — treinador Campeão Mundial
- 🗺️ **Linha do Tempo** — etapas da jornada, de Kanto ao título mundial em Radical Red e o recomeço em Galar
- 🌍 **Regiões**
- ⚔️ **Times por Capítulo**
- 🛡️ **Meus Times**
- 🏅 **Títulos**
- 📕 **Pokédex**
- 📦 **Box**
- 🔮 **Mecânicas** (Mega Evolução, Gigantamax, Z-Moves)
- ✨ **Pokémon Raros** (lendários e shiny)
- 👑 **Time Final**
- 🌟 **Hall da Fama**
- 🏵️ **Conquistas**

## Estrutura do repositório

```
index.html                 # app principal (HTML + CSS)
pedro_app.js                # lógica e dados do databook
databook_pokemon_jornada_pedro.md   # databook em markdown
prompt_databook_amigos.md   # prompt de referência
deploy_netlify/              # cópia usada para deploy no Netlify
backup_*/                    # snapshots antes de mudanças estruturais
```

## Rodando localmente

Basta abrir o `index.html` em um navegador — não há build nem dependências.

## Deploy

Publicado via [Netlify](https://www.netlify.com/), usando os arquivos da pasta `deploy_netlify/`.
