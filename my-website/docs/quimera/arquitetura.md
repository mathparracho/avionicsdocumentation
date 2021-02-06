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

Veja abaixo a arquitetura completa da eletrônica do Quimera:

![img](/img/docs/quimera/arquitetura/fullrocket.png)

## Nova REC
![img](/img/docs/quimera/arquitetura/rocketREC.png)

Os paraquedas no Aurora eram acionados através da ação de motores controlados pela aviônica. No Quimera os motores serão substituídos por Electric Matches - também chamados de e-matches ou skibs. De acordo com as informações do fabricante dos skibs que nós utilizamos, a corrente necessária para ativá-los é de 400 mA. Como verificamos no projeto passado que a corrente que seria utilizada pelos motores era de 450 mA, ou seja, maior, e que nós já éramos capazes de fornecer isso, podemos inferir que não haverá problemas no novo design.

Um outro detalhe no uso dos skibs é a boa-prática de se colocar resistores de pulldown nos pinos de entrada. Isso evita que a tensão nesses pinos flutue e o skib seja acionado inadvertidamente.

O subsistema de Recuperação exige apenas dois skibs, um para cada paraquedas. Para isso, utilizaremos dois conectores de duas vias na placa da REC. 

## Apogee Control System (ACS)
![img](/img/docs/quimera/arquitetura/rocketACS.png)
### ACS - Pitot Tube
O tubo de Pitot fica na coifa do foguete e serve para calcular a velocidade de deslocamento, o que permite à aviônica se orientar e poder controlar de forma eficiente o air brake.

Utilizando o príncipio de Bernoulli podemos obter o valor da velocidade através de duas medidas distintas: a pressão estática e a pressão total - ou seja, a pressão do fluido não sofrendo ação da velocidade do foguete e a pressão com ação da velocidade. 

O modelo utilizado no Aurora Quimera é bem simples: dois sensores de pressão medindo cada tipo de pressão e um sensor de temperatura para controle de dados. Todos estes sensores são conectados à PMM, onde o Teensy irá calcular a velocidade e trabalhar em cima disso. 

A temperatura será medida por um termopar tipo K e um  módulo Max6675. Até o momento não foi possível determinar qual sensor de pressão será utilizado. Os principais candidatos são sensores de pressão absoluta ou transdutores de pressão.

#### Comunicação Coifa-Aviônica
Entre o ACS-Pitot e o módulo central da aviônica existe o módulo da Recuperação. 

### ACS - Air Brake
Uma das novidades do Quimera é a utilização do Air Brake, cuja função é auxiliar o foguete a atingir o apogeu desejado com maior precisão.

A partir dos dados coletados dos sensores são calculadas a velocidade e a posição do foguete. A partir dessas informações é determinado o apogeu esperado. Se esse apogeu for maior que o desejado, é acionado o motor que controla as lâminas do Air Brake e essas por sua vez se abrem na lateral do foguete, aumentando a força de arrasto e diminuindo o apogeu do foguete.

O Air Brake também pode ser usado para diminuir a velocidade de queda na fase de recuperação do foguete.

O motor que vai controlar o Air Brake vai ser um servo motor com tensão de alimentação de  6v. Após um estudo de diferentes opções, chegamos em dois possíveis modelos: o Spektrum A6180 e o MG996R. O MG996R tem um torque de operação maior e é mais barato, no entanto sua documentação na internet é um pouco imprecisa comparada com a do Spektrum.

O algoritmo de controle do Air Brake é sistema de controle de malha fechada, ou seja, a saída do sistema é utilizada como entrada, gerando um ciclo.

Aqui temos um fluxograma que resume como o algoritmo de controle do Air Brake vai funcionar.

O estado do foguete é lido pelos sensores e depois passa por um filtro de Kalman, que prevê o comportamento do foguete e compara a previsão com os dados do sensor. Isso diminui os ruídos e mescla os dados do altímetro, do tubo de pitot e do acelerômetro pra ter um dado mais confiável  de modo a se chegar numa medição mais precisa. Esse estado do foguete é então comparado com valores experimentais pré-definidos de qual deve ser o ângulo de abertura do Air Brake. Esse valor é mandado pro motor, que gera um novo estado do foguete e o ciclo se repete.

Importante ressaltar que esse algoritmo só entra em ação quando o motor para de queimar.

## Propulsion Sensing and Control System (PSCS)
![img](/img/docs/quimera/arquitetura/rocketPSCS.png)
### PSCS - Sensors
O PSCS irá sensoriar tanto a pressão quanto a temperatura do tanque do oxidante e da câmara de combustão. Os dados obtidos servirão para que nosso microcontrolador possa controlar as válvulas de forma segura e eficiente. Além disso, esses dados servirão para análise e estudos futuros.

O tanque terá uma temperatura de ambiente (até 40°) e uma pressão de 5 a 5,8 MPa. Por estas razões, foi escolhido um transdutor de pressão PFT que mede até 10MPa e funciona até 100°C.

A câmara possui condições mais extremas. Com a combustão, temos uma  temperatura de até 300°C e uma pressão que varia entre 3 MPa e 6 MPa. Por isso, foi utilizado um termopar tipo K com módulo interfaceador Max6675 para medição de temperatura. Já a medição de pressão será feita com um sensor de pressão que funciona em altas temperaturas, que você pode encontrar com o nome de Type 6025A.

### PSCS - Valves
A aviônica vai ser responsável pelo controle de duas válvulas: a da câmara de 
combustão e a válvula de vent.

A válvula de vent só precisa ser aberta ou fechada, ou seja, não é necessário modular o quanto de fluido que a atravessa. Por conta disso optamos pela utilização de uma válvula solenóide para o seu controle. A solenóide da parker foi escolhida por ter um baixo consumo de potência aliado a uma pressão diferencial máxima alta.

A válvula da câmara de combustão, por outro lado, futuramente será modulada, portanto foi decidido que teríamos uma válvula esfera controlada por um motor. Pela necessidade de velocidade e precisão do controle foi escolhido um servo motor para fazer essa atuação. Foram consideradas válvulas esferas já motorizadas, entretanto as encontradas tem pressão máxima de operação muito baixas e tempo de abertura muito alto.

[falar da válvula esfera escolhida]

### PSCS - Ignition Sensing
<br />
<br />
<br />
