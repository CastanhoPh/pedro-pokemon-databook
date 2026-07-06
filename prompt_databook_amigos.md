# INSTRUÇÕES PARA A IA (ChatGPT ou Claude)

Você vai me ajudar a criar um **databook Pokémon da minha jornada** (ou da jornada de um amigo), no **mesmo formato exato** do exemplo completo que está logo abaixo, na seção "EXEMPLO DE REFERÊNCIA".

Esse exemplo é o databook de outra pessoa (Pedro). Não copie os dados dele — use-o **apenas como modelo de estrutura, seções, nível de detalhe e estilo de escrita**. No final, você deve gerar um novo arquivo `.md`, com a mesma estrutura, mas preenchido com as minhas respostas.

## Como conduzir a entrevista

Me faça perguntas **uma seção de cada vez**, na ordem abaixo. Não pule pra próxima seção até eu confirmar que terminamos a atual. Sempre que eu responder algo ambíguo ou incompleto, peça esclarecimento antes de seguir (não invente dados que eu não te dei).

### 1. Identidade e regras gerais
- Nome do treinador.
- Quais jogos/hacks/ROMs ele jogou, **em ordem cronológica** (ex: Red → Yellow → FireRed → ... ). Pode haver jogos de fangame/hack com nomes de região fictícios.
- A qual região geográfica real (Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, Galar, Paldea, ou uma região fictícia de hack) cada jogo pertence. Uma mesma região pode se repetir em jogos diferentes (ex: Kanto aparece em Red, Yellow, FireRed...) — isso é normal e deve ser registrado.
- Regras especiais da jornada: existe um ponto em que ele destrava Mega Evolução? Gigantamax? Terastalização? Existe um "título mundial" ou ponto culminante da jornada? Ele recomeça do zero em algum momento?

### 2. Cronologia e tabela de capítulos
Depois de ter a lista de jogos, monte:
- Uma linha do tempo (Capítulo 1 → Capítulo 2 → ...).
- Uma tabela: # | Capítulo (jogo) | Região.
- Uma contagem de regiões geográficas distintas vs. total de capítulos/títulos (uma região que se repete conta 1x na distinção, mas N vezes nos títulos).

### 3. Time campeão de cada capítulo
Para cada capítulo, pergunte:
- Quais os 6 Pokémon do time que venceu aquele capítulo?
- Quem foi o MVP (o Pokémon de destaque/o líder daquele time)?
- Algum desses Pokémon já existia de um capítulo anterior (reaproveitado) ou são todos novos daquele capítulo? Se reaproveitado, de qual capítulo veio.
- Alguma observação relevante (ex: "time inteiro em Mega Evolução", "Pokémon X é shiny", "Pokémon Y tem Habilidade Oculta").

### 4. Capturas adicionais por capítulo
Além do time principal, quais outros Pokémon foram capturados naquele capítulo (mas não entraram no time de 6)? Se não houve nenhuma captura extra, registre isso também.

### 5. Mecânicas especiais (Mega Evolução / Gigantamax / Z-Moves / Formas Alternativas / Tera Type)
- Em qual capítulo cada mecânica foi desbloqueada pela primeira vez?
- Quais Pokémon ganharam essa mecânica ali? (Pode incluir Pokémon capturados em capítulos anteriores que só ganharam a Mega/Gmax/Z-Move/Forma mais tarde — isso é comum e deve ser registrado com uma nota explicando.)
- Existe algum Pokémon com forma alternativa rara (ex: Deoxys com formas selecionáveis, Necrozma, Zygarde, etc.)?

### 6. Pokémon raros
- Quais são shiny? (liste todos)
- Quais têm Hidden Ability?
- Quais são lendários? Quais são míticos? Quais são Ultra Beasts (se aplicável)?
- Alguma curiosidade sobre algum desses (ex: "primeiro shiny da coleção").

### 7. Time Final (se houver um "campeão mundial"/pico da jornada)
Se existir um time definitivo de 6 Pokémon representando o auge da jornada, para cada um pergunte:
- Origem (onde foi capturado).
- Level, Nature, Item, Ability.
- IVs e EVs (se o treinador não souber, pode pular ou usar valores perfeitos como padrão).
- Função em batalha (ex: sweeper físico, suporte defensivo, atacante especial).
- 4 ataques.
- Uma observação/curiosidade sobre esse Pokémon dentro da jornada.

### 8. Hall da Fama
- Pokémon assinatura/destaque de cada capítulo (o mais marcante daquele momento, pode ou não ser o MVP).
- Ranking de quais Pokémon foram campeões (apareceram em algum time vencedor) mais vezes, do maior pro menor número de títulos.
- (Opcional) Ranking de quantas vezes cada Pokémon foi MVP especificamente.
- Times extras, se fizer sentido pro treinador: um "time reserva de elite" (Pokémon fortes não usados no time final), um "time reserva" (esquadrão alternativo), e uma lista de "Pokémon disponíveis" (todo campeão que não está em nenhum desses times).

### 9. Conquistas especiais
Pequenos marcos simbólicos: primeiro parceiro, primeiro lendário, primeiro mítico, primeiro shiny, primeira Mega, Pokémon com mais títulos, golpe/movimento mais marcante, etc.

### 10. Situação atual
A jornada está concluída ou em andamento? Qual foi (ou vai ser) o capítulo final? Alguma observação de fechamento.

## Ao final

Depois de reunir todas as respostas, gere o arquivo `.md` completo, replicando **exatamente a mesma estrutura de títulos e seções** do exemplo abaixo (mesmos `#`, `##`, `###`, tabelas, separadores `---`, listas), só que com os dados que eu te dei. Não invente Pokémon, capítulos ou números que eu não tenha fornecido — se faltar alguma informação, me pergunte antes de preencher.

---

# EXEMPLO DE REFERÊNCIA (estrutura a seguir — não copiar os dados)

# Databook Pokémon — Jornada de Pedro

## Regras de organização

- Cada Pokémon aparece na região onde Pedro o capturou pela primeira vez.
- Pokémon usados novamente em hacks, regiões posteriores ou revisitas não contam como nova captura — aparecem apenas nos times campeões seguintes como reaproveitamento.
- Algumas regiões geográficas foram visitadas mais de uma vez, em jogos diferentes: Kanto (Red, Yellow, FireRed, LeafGreen e Radical Red), Hoenn (Emerald, Omega Ruby e Quetzal), Unova (Black e Black 2) e Kalos (Y e X). Cada visita conta como um título/capítulo separado, mas soma apenas 1x na contagem de regiões geográficas distintas.
- Antes de Kalos, Pedro não tinha acesso à Mega Evolução.
- Em Kalos (Y), Pedro adquiriu suas primeiras Mega Evoluções entre os Pokémon que já havia capturado.
- Radical Red marca o título mundial de Pedro com seu Time Final.
- Após o título mundial, Pedro iniciou uma nova jornada em Galar, recomeçando com um time totalmente novo e desbloqueando a era Gigantamax. Galar é a 15ª região geográfica e seu 23º título.

---

## Cronologia da história

Kanto (Red) → Kanto (Yellow) → Kanto (FireRed) → Kanto (LeafGreen) → Ilhas Laranja → Johto → Hoenn (Emerald) → Sinnoh → Unova (Black) → Unova (Black 2) → Light Platinum → Kalos (Y) → Kalos (X) → Roria → Hoenn (Omega Ruby) → Alola → Mega Light Platinum → Glazed → Dark Rising → Hoenn (Quetzal) → Unbound → Radical Red → Galar

### Capítulos (jogo) × Regiões

| # | Capítulo (jogo) | Região |
|---|-----------------|--------|
| 1 | Red | Kanto |
| 2 | Yellow | Kanto |
| 3 | FireRed | Kanto |
| ... | ... | ... |
| 23 | Sword & Shield | Galar |

> Regiões geográficas distintas: 15. Títulos/capítulos: 23.

---

## Times campeões de Pedro

### Kanto (Red)
Charizard, Pikachu, Lapras, Snorlax, Kabutops e Hitmonlee.

### Kanto (Yellow)
Pikachu, Charizard, Blastoise, Venusaur, Lapras e Snorlax. Charizard, Lapras e Snorlax foram capturados em Red e reaproveitados aqui.

*(... uma seção `### Capítulo` para cada capítulo da cronologia, sempre listando os 6 Pokémon do time e, quando houver, a nota de reaproveitamento/MVP/shiny/HA)*

---

## Capturas adicionais de Pedro por região

Regiões sem capturas além do time campeão não aparecem nesta lista.

### Kanto (Red)
Jolteon, Aerodactyl, Rhydon, Golem e Tauros.

*(... uma seção por capítulo que teve capturas extras)*

---

# Time Final de Pedro — Campeão Mundial

## Mega Blaziken

- Origem: Hoenn
- Level: 100
- Nature: Jolly
- Item: Blazikenite
- IVs: 31 HP / 31 Atk / 31 Def / 31 SpA / 31 SpD / 31 Spe
- EVs: 252 Atk / 4 SpD / 252 Spe
- Ability: Speed Boost
- Função: Sweeper físico
- Observação: Maior campeão de Pedro, com 8 títulos conquistados ao longo da jornada.

### Ataques
- Swords Dance
- Flare Blitz
- Close Combat
- Stone Edge

---

*(... uma seção `##` para cada um dos 6 Pokémon do Time Final, no mesmo formato acima)*

---

# Ordem de captura de Pedro

## Kanto (Red)
Charizard, Pikachu, Lapras, Snorlax, Kabutops, Hitmonlee, Jolteon, Aerodactyl, Rhydon, Golem e Tauros.

### Megas adquiridas em Kanto (Red)
Nenhuma.

*(... uma seção por capítulo, listando TODOS os Pokémon capturados ali (time + extras), e uma subseção de Megas/Gigantamax/Z-Moves/Formas adquiridas naquele capítulo, quando houver)*

---

# Hall da Fama

## Pokémon assinatura por região

- Kanto (Red): Charizard
- Kanto (Yellow): Pikachu
- ...

---

## Pokémon com mais títulos

- 8 títulos: Blaziken.
- 7 títulos: Charizard e Gengar.
- ...
- 1 título: (lista longa de todos os campeões de 1 título só)

---

## Mecânicas dominadas

- Mega Evoluções: 31
- Gigantamax: 17
- Z-Moves exclusivos: 12
- Formas alternativas: 15

### Gigantamax dominadas
- Gigantamax Inteleon.
- ...

### Z-Moves dominados
- Incinium Z (Incineroar): Malicious Moonsault.
- ...

### Formas alternativas dominadas
- Primal Groudon.
- ...

---

## Pokémon raros

- Pokémon com HA: 3, contando Ash Greninja.
- Pokémon shiny: 6.
- Lendários: 39.
- Míticos: 11.
- Ultra Beasts: 5.

---

## Títulos de Pedro

- Campeão de Kanto (Red)
- Campeão de Kanto (Yellow)
- ...
- Campeão de Galar

---

## Times de Pedro

### Time Principal
Mega Blaziken, Ash-Greninja Shiny, Mega Metagross Shiny, Mega Gengar, Marshadow e Gliscor.

### Time Reserva de Luxo
Mega Charizard X, Mega Mewtwo Y, Mega Lucario, Pikachu, Dragonite e Mega Gardevoir.

### Time Reserva
Luxray, Togekiss, Flygon, Mega Gyarados shiny, Dragapult e Mega Tyranitar.

### Pokémons Disponíveis
Todos os campeões de pelo menos um título que ainda não estão em nenhum dos 3 times acima: (lista).

---

# Conquistas especiais

- Primeiro parceiro: Charizard.
- Parceiro clássico: Original Cap Pikachu.
- Primeiro lendário: Mewtwo.
- Primeiro mítico: Mew.
- Primeiro shiny: Metagross shiny.
- Primeira Mega: Mega Charizard X.
- Maior número de títulos: Blaziken.
- Golpe exclusivo: Soul-Stealing 7-Star Strike do Marshadow.

---

# Galar — Campeão de Galar (CONCLUÍDA)

- Região: Galar (Pokémon Sword & Shield).
- Situação: concluída — Pedro é Campeão de Galar (23º título, 15ª região geográfica).
- Time campeão (6/6): Inteleon, Corviknight, Toxtricity, Coalossal, Grimmsnarl e Dragapult.
- MVP / assinatura: Dragapult.
- Mecânica da região: Gigantamax (nenhuma Mega adquirida aqui).
- Observação: após o título mundial em Radical Red, Pedro recomeçou do zero em Galar com um time totalmente novo e dominou a era Gigantamax.
