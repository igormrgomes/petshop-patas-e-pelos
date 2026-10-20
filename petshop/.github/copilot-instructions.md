# Instruções para o Copilot — petshop (frontend)

## Sobre o projeto
Frontend do PetShop Patas & Pelos, projeto de curso. HTML, CSS e JavaScript puro (sem frameworks).
Páginas em `paginas/`, scripts em `js/`. Publicado no Netlify. Fala com o backend `petshop-servidor`
(projeto separado, publicado no Render) pela constante ENDERECO_BACKEND no topo de cada script.

## Idioma
Português do Brasil em respostas, comentários e nomes.

## IDs e campos existentes (não alterar nem inventar)
- cadastro_pet.html: form_cadastro_pet, nome_pet, especie_pet, raca_pet, dono_pet, telefone_dono,
  cep_dono, rua_dono, bairro_dono, cidade_dono, uf_dono, select_estado_dono, select_cidade_dono
- lista_pets.html: tabela_pets
- agendar.html: form_agendamento, pet_id, servico, data, hora, observacoes
- lista_agendamentos.html: tabela_agendamentos, filtro_data
- Campos enviados/recebidos do backend: os mesmos nomes acima (nome_pet, pet_id, etc.)

## Padrões
- fetch com async/await, dois await; conferir resposta.ok antes de comemorar.
- Listas montadas com for + innerHTML +=, sempre limpando o elemento antes.
- Eventos com addEventListener; preventDefault em submit.
- Sem bibliotecas, frameworks ou CDNs novos sem me perguntar.

## Proibido
- Alterar IDs de elementos existentes.
- Reescrever funções que funcionam e não fazem parte da tarefa pedida.
- Mudar ENDERECO_BACKEND.
- Criar arquivos fora de paginas/, js/ e css/ sem me avisar.

## Como testo
Abro a página no navegador (local ou Netlify) e confiro o Console (F12).