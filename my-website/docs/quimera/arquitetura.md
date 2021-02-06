---
id: arquitetura
title: Arquitetura
sidebar_label: Arquitetura
---

## Introdução
Após muitos anos desenvolvendo apenas foguetes de combustível sólido, em 2021 a Minerva Rockets estabeleceu como novo objetivo projetar, construir e, posteriormente, lançar um foguete híbrido. Para poder atender aos novos requisitos, mudanças se fazem necessárias na aviônica. O objetivo deste texto é apresentar os novos requisitos e as soluções encontradas pela equipe da aviônica para atendê-los.  

## Requisitos
Dividimos os requisitos de missão em duas categorias: os fundamentais e os benéficos. Enquanto que os fundamentais são práticas internas tornadas obrigatórias ou são cruciais para o sucesso da missão, os benéficos são aqueles requisitos que gostaríamos de ver sendo atendidos porém não necessariamente conseguiremos fazê-lo. 

### Fundamentais
É de extrema importância para todas as fases do vôo que tenhamos êxito nas seguintes atividades: manipulação de dados, comando e controle. Além disso, continuamos com nossa arquitetura modular (já iniciada em projetos anteriores) e procuramos manter ao máximo o uso de técnicas já validadas pela equipe. 

#### Manipulação de Dados
A manipulação dos dados consiste de 3 eventos: **aquisição**, **salvamento** e **transmissão**. A aquisição é feita pelos sensores a bordo do foguete. Esses dados são recebidos pelo microcontrolador do módulo da aviônica central e processados. Para futura análise, eles são salvos em um cartão microSD ao mesmo tempo em que são transmitidos via telemetria wireless para nossa equipe de solo.

#### Comando
O evento de ignição depende do controle de válvulas presentes no foguete híbrido. Portanto, é necessário que comandos de open/close cheguem às válvulas. Entretanto, existem dois requisitos que surgem por questões de segurança, tanto dos operadores quanto da missão:
- Deve existir uma distância considerável entre os operadores e o foguete.  
- A comunicação que envia os comandos para as válvulas não pode ser feita via wireless.

Além disso, a partir da leitura dos dados adquiridos através dos sensores a eletrônica embarcada deve ser capaz de executar comandos de forma autônoma e sem interferência humana.

#### Controle
Os sinais de comando devem ser executados de forma correta. Essas atividades são: 
- Ejeção de cada um dos paraquedas nos momentos corretos.
- Abertura do air brake no ângulo ideal para que o apogeu atingido seja o mais próximo possível do objetivo.
- Atuação das válvulas do tanque de oxidante (momento de fill e/ou de abort) e da câmara de combustão (ignição).

### Benéficos
#### Modularidade
A modularidade é um requisito antigo dentro da equipe e gostaríamos de continuar mantendo-a assim. Sua vantagem é a facilidade que temos de integração de módulos já projetados em novos designs.
#### Simplicidade
Trazemos como conceito geral para o projeto o princípio de design *KISS* (Keep It Simple, Stupid). De acordo com ele, nossos sistemas devem ser o mais simples possível, evitando complexidades desnecessárias que só trarão dificuldades no futuro. É importante lembrar que *simples* não significa fácil ou simplório. Na verdade, é possível que o design mais simples acabe sendo complexo - e não há problemas nisso. Entretanto, o simples eventualmente caminha para algo mais fácil do que aquilo que é desnecessariamente intrincado.
#### Preço Baixo
Nossos recursos são escassos, portanto devemos sempre optar pelo ponto ótimo entre as soluções favoráveis financeiramente e as soluções que têm melhor desempenho. Buscaremos utilizar componentes já possuídos pela equipe e, quando isso não for possível, faremos uma pesquisa ampla sobre qual componente escolher em função do custo-benefício.
## Arquitetura
A eletrônica embarcada do Aurora v2 contava com os seguintes sistemas: 
- Electrical Power System (EPS): sistema responsável pelo fornecimento de energia.
- Command and Data Handling System (CDHS): sistema contendo os sensores de pressão, temperatura, posição e movimento inercial; contém também o microcontrolador responsável pelo processamento desses dados, o transmissor deles e o adaptador do cartão microSD onde eles são salvos.
- Recovery (REC): sistema contendo os altímetros Off The Shelf e o mecanismo responsável pelo controle dos motores.
- Camboards (CAM): sistema responsável pelo controle das câmeras.

Todos eles estarão presentes no Aurora v3 - e daí percebemos a importância da modularidade em nossos projetos. Entretanto, para atender aos novos requisitos um dos sistemas será modificado e outros serão adicionados. Veja a lista dessas novas adições:
- Recovery (REC): o objetivo do sistema ainda é o mesmo, porém no v3 o subsistema da Recuperação fará a ejeção dos paraquedas de modo pirotécnico. Para atender a isso, o sistema deve ser capaz de fornecer a corrente correta para os skibs (ou e-matches) e a placa deve possuir os conectores necessários para eles.
- Apogee Control System (ACS): este sistema lida com a acepção de dados de pressão e temperatura que servirão na determinação da velocidade do foguete e de sua altitude. Eles serão processados e, através de um algoritmo desenvolvido por nós, serão utilizados para atuar um mecanismo de lâminas - chamado de air brake - cujo objetivo é aumentar o arrasto aerodinâmico do foguete. Dessa maneira teremos maior controle sobre a altura do apogeu alcançado.
- Propulsion Sensing and Control System (PSCS): este sistema é responsável pela acepção dos dados de pressão e temperatura do tanque de oxidante e da câmara de combustão. Além disso, ele faz a interface com as válvulas desses recipientes, permitindo que sejam controladas em solo para que seja feito o abort/fill/ignição.

Um sensor adicional mas que não faz parte de nenhum desses sistemas é o sensor de AoA (Angle of Attack). Com ele nós podemos determinar o ângulo entre o nariz do foguete e o vetor do fluxo relativo do ar.

Além disso, outros detalhes tiveram que ser observados:
- Quick-release da coifa com a aviônica
- Cabo umbilical + Quick-release do datalogger com o foguete

## Nova REC
<br />
<br />
<br />

## Apogee Control System (ACS)
### ACS - Pitot Tube
<br />
<br />
<br />

#### Comunicação Coifa-Aviônica
<br />
<br />
<br />

### ACS - Air Brake
<br />
<br />
<br />

## Propulsion Sensing and Control System (PSCS)
<br />
<br />
<br />

### PSCS - Sensors
<br />
<br />
<br />

### PSCS - Valves
<br />
<br />
<br />

### PSCS - Ignition Sensing
<br />
<br />
<br />
