(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{125:function(e,a,o){"use strict";o.r(a),o.d(a,"frontMatter",(function(){return n})),o.d(a,"metadata",(function(){return i})),o.d(a,"toc",(function(){return d})),o.d(a,"default",(function(){return u}));var t=o(3),s=o(7),r=(o(0),o(146)),n={id:"arquitetura",title:"Arquitetura",sidebar_label:"Arquitetura"},i={unversionedId:"quimera/arquitetura",id:"quimera/arquitetura",isDocsHomePage:!1,title:"Arquitetura",description:"Introdu\xe7\xe3o",source:"@site/docs/quimera/arquitetura.md",slug:"/quimera/arquitetura",permalink:"/avionicsdocumentation/docs/quimera/arquitetura",editUrl:"https://github.com/gabrielaleks/avionicsdocumentation/edit/master/my-website/docs/quimera/arquitetura.md",version:"current",sidebar_label:"Arquitetura",sidebar:"Docs",previous:{title:"Protocolo de Comunica\xe7\xe3o",permalink:"/avionicsdocumentation/docs/aurorav2/software/protocolodecomm"},next:{title:"Sensores do tubo de Pitot",permalink:"/avionicsdocumentation/docs/quimera/hardware/tubodepitot/sensores"}},d=[{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",children:[]},{value:"Requisitos",id:"requisitos",children:[{value:"Fundamentais",id:"fundamentais",children:[]},{value:"Ben\xe9ficos",id:"ben\xe9ficos",children:[]}]},{value:"Arquitetura",id:"arquitetura",children:[]},{value:"Nova REC",id:"nova-rec",children:[]},{value:"Apogee Control System (ACS)",id:"apogee-control-system-acs",children:[{value:"ACS - Pitot Tube",id:"acs---pitot-tube",children:[]},{value:"ACS - Air Brake",id:"acs---air-brake",children:[]}]},{value:"Propulsion Sensing and Control System (PSCS)",id:"propulsion-sensing-and-control-system-pscs",children:[{value:"PSCS - Sensors",id:"pscs---sensors",children:[]},{value:"PSCS - Valves",id:"pscs---valves",children:[]},{value:"PSCS - Ignition Sensing",id:"pscs---ignition-sensing",children:[]}]},{value:"Angle of Attack Sensor (AoA)",id:"angle-of-attack-sensor-aoa",children:[]},{value:"Anexos",id:"anexos",children:[{value:"Componentes",id:"componentes",children:[]},{value:"Refer\xeancias",id:"refer\xeancias",children:[]}]}],c={toc:d};function u(e){var a=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},c,n,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introdu\xe7\xe3o"},"Introdu\xe7\xe3o"),Object(r.b)("p",null,"Ap\xf3s muitos anos desenvolvendo apenas foguetes de combust\xedvel s\xf3lido, em 2021 a Minerva Rockets estabeleceu como novo objetivo projetar, construir e, posteriormente, lan\xe7ar um foguete h\xedbrido. Para poder atender aos novos requisitos, mudan\xe7as se fazem necess\xe1rias na avi\xf4nica. O objetivo deste texto \xe9 apresentar os novos requisitos e as solu\xe7\xf5es encontradas pela equipe da avi\xf4nica para atend\xea-los.  "),Object(r.b)("h2",{id:"requisitos"},"Requisitos"),Object(r.b)("p",null,"Dividimos os requisitos de miss\xe3o em duas categorias: os fundamentais e os ben\xe9ficos. Enquanto que os fundamentais s\xe3o pr\xe1ticas internas tornadas obrigat\xf3rias ou s\xe3o cruciais para o sucesso da miss\xe3o, os ben\xe9ficos s\xe3o aqueles requisitos que gostar\xedamos de ver sendo atendidos por\xe9m n\xe3o necessariamente conseguiremos faz\xea-lo. "),Object(r.b)("h3",{id:"fundamentais"},"Fundamentais"),Object(r.b)("p",null,"\xc9 de extrema import\xe2ncia para todas as fases do v\xf4o que tenhamos \xeaxito nas seguintes atividades: manipula\xe7\xe3o de dados, comando e controle. Al\xe9m disso, continuamos com nossa arquitetura modular (j\xe1 iniciada em projetos anteriores) e procuramos manter ao m\xe1ximo o uso de t\xe9cnicas j\xe1 validadas pela equipe. "),Object(r.b)("h4",{id:"manipula\xe7\xe3o-de-dados"},"Manipula\xe7\xe3o de Dados"),Object(r.b)("p",null,"A manipula\xe7\xe3o dos dados consiste de 3 eventos: ",Object(r.b)("strong",{parentName:"p"},"aquisi\xe7\xe3o"),", ",Object(r.b)("strong",{parentName:"p"},"salvamento")," e ",Object(r.b)("strong",{parentName:"p"},"transmiss\xe3o"),". A aquisi\xe7\xe3o \xe9 feita pelos sensores a bordo do foguete. Esses dados s\xe3o recebidos pelo microcontrolador do m\xf3dulo da avi\xf4nica central e processados. Para futura an\xe1lise, eles s\xe3o salvos em um cart\xe3o microSD ao mesmo tempo em que s\xe3o transmitidos via telemetria wireless para nossa equipe de solo."),Object(r.b)("h4",{id:"comando"},"Comando"),Object(r.b)("p",null,"O evento de igni\xe7\xe3o depende do controle de v\xe1lvulas presentes no foguete h\xedbrido. Portanto, \xe9 necess\xe1rio que comandos de open/close cheguem \xe0s v\xe1lvulas. Entretanto, existem dois requisitos que surgem por quest\xf5es de seguran\xe7a, tanto dos operadores quanto da miss\xe3o:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Deve existir uma dist\xe2ncia consider\xe1vel entre os operadores e o foguete.  "),Object(r.b)("li",{parentName:"ul"},"A comunica\xe7\xe3o que envia os comandos para as v\xe1lvulas n\xe3o pode ser feita via wireless.")),Object(r.b)("p",null,"Al\xe9m disso, a partir da leitura dos dados adquiridos atrav\xe9s dos sensores a eletr\xf4nica embarcada deve ser capaz de executar comandos de forma aut\xf4noma e sem interfer\xeancia humana."),Object(r.b)("h4",{id:"controle"},"Controle"),Object(r.b)("p",null,"Os sinais de comando devem ser executados de forma correta. Essas atividades s\xe3o: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Eje\xe7\xe3o de cada um dos paraquedas nos momentos corretos."),Object(r.b)("li",{parentName:"ul"},"Abertura do air brake no \xe2ngulo ideal para que o apogeu atingido seja o mais pr\xf3ximo poss\xedvel do objetivo."),Object(r.b)("li",{parentName:"ul"},"Atua\xe7\xe3o das v\xe1lvulas do tanque de oxidante (momento de fill e/ou de abort) e da c\xe2mara de combust\xe3o (igni\xe7\xe3o).")),Object(r.b)("h3",{id:"ben\xe9ficos"},"Ben\xe9ficos"),Object(r.b)("h4",{id:"modularidade"},"Modularidade"),Object(r.b)("p",null,"A modularidade \xe9 um requisito antigo dentro da equipe e gostar\xedamos de continuar mantendo-a assim. Sua vantagem \xe9 a facilidade que temos de integra\xe7\xe3o de m\xf3dulos j\xe1 projetados em novos designs."),Object(r.b)("h4",{id:"simplicidade"},"Simplicidade"),Object(r.b)("p",null,"Trazemos como conceito geral para o projeto o princ\xedpio de design ",Object(r.b)("em",{parentName:"p"},"KISS")," (Keep It Simple, Stupid). De acordo com ele, nossos sistemas devem ser o mais simples poss\xedvel, evitando complexidades desnecess\xe1rias que s\xf3 trar\xe3o dificuldades no futuro. \xc9 importante lembrar que ",Object(r.b)("em",{parentName:"p"},"simples")," n\xe3o significa f\xe1cil ou simpl\xf3rio. Na verdade, \xe9 poss\xedvel que o design mais simples acabe sendo complexo - e n\xe3o h\xe1 problemas nisso. Entretanto, o simples eventualmente caminha para algo mais f\xe1cil do que aquilo que \xe9 desnecessariamente intrincado."),Object(r.b)("h4",{id:"pre\xe7o-baixo"},"Pre\xe7o Baixo"),Object(r.b)("p",null,"Nossos recursos s\xe3o escassos, portanto devemos sempre optar pelo ponto \xf3timo entre as solu\xe7\xf5es favor\xe1veis financeiramente e as solu\xe7\xf5es que t\xeam melhor desempenho. Buscaremos utilizar componentes j\xe1 possu\xeddos pela equipe e, quando isso n\xe3o for poss\xedvel, faremos uma pesquisa ampla sobre qual componente escolher em fun\xe7\xe3o do custo-benef\xedcio."),Object(r.b)("h2",{id:"arquitetura"},"Arquitetura"),Object(r.b)("p",null,"A eletr\xf4nica embarcada do Aurora v2 contava com os seguintes sistemas: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Electrical Power System (EPS): sistema respons\xe1vel pelo fornecimento de energia."),Object(r.b)("li",{parentName:"ul"},"Command and Data Handling System (CDHS): sistema contendo os sensores de press\xe3o, temperatura, posi\xe7\xe3o e movimento inercial; cont\xe9m tamb\xe9m o microcontrolador respons\xe1vel pelo processamento desses dados, o transmissor deles e o adaptador do cart\xe3o microSD onde eles s\xe3o salvos."),Object(r.b)("li",{parentName:"ul"},"Recovery (REC): sistema contendo os alt\xedmetros Off The Shelf e o mecanismo respons\xe1vel pelo controle dos motores."),Object(r.b)("li",{parentName:"ul"},"Camboards (CAM): sistema respons\xe1vel pelo controle das c\xe2meras.")),Object(r.b)("p",null,"Todos eles estar\xe3o presentes no Aurora v3 - e da\xed percebemos a import\xe2ncia da modularidade em nossos projetos. Entretanto, para atender aos novos requisitos um dos sistemas ser\xe1 modificado e outros ser\xe3o adicionados. Veja a lista dessas novas adi\xe7\xf5es:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Recovery (REC): o objetivo do sistema ainda \xe9 o mesmo, por\xe9m no v3 o subsistema da Recupera\xe7\xe3o far\xe1 a eje\xe7\xe3o dos paraquedas de modo pirot\xe9cnico. Para atender a isso, o sistema deve ser capaz de fornecer a corrente correta para os skibs (ou e-matches) e a placa deve possuir os conectores necess\xe1rios para eles."),Object(r.b)("li",{parentName:"ul"},"Apogee Control System (ACS): este sistema lida com a acep\xe7\xe3o de dados de press\xe3o e temperatura que servir\xe3o na determina\xe7\xe3o da velocidade do foguete e de sua altitude. Eles ser\xe3o processados e, atrav\xe9s de um algoritmo desenvolvido por n\xf3s, ser\xe3o utilizados para atuar um mecanismo de l\xe2minas - chamado de air brake - cujo objetivo \xe9 aumentar o arrasto aerodin\xe2mico do foguete. Dessa maneira teremos maior controle sobre a altura do apogeu alcan\xe7ado."),Object(r.b)("li",{parentName:"ul"},"Propulsion Sensing and Control System (PSCS): este sistema \xe9 respons\xe1vel pela acep\xe7\xe3o dos dados de press\xe3o e temperatura do tanque de oxidante e da c\xe2mara de combust\xe3o. Al\xe9m disso, ele faz a interface com as v\xe1lvulas desses recipientes, permitindo que sejam controladas em solo para que seja feito o abort/fill/igni\xe7\xe3o.")),Object(r.b)("p",null,"Um sensor adicional mas que n\xe3o faz parte de nenhum desses sistemas \xe9 o sensor de AoA (Angle of Attack). Com ele n\xf3s podemos determinar o \xe2ngulo entre o nariz do foguete e o vetor do fluxo relativo do ar."),Object(r.b)("p",null,"Al\xe9m disso, outros detalhes tiveram que ser observados:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Quick-release da coifa com a avi\xf4nica"),Object(r.b)("li",{parentName:"ul"},"Cabo umbilical + Quick-release do datalogger com o foguete")),Object(r.b)("p",null,"Veja abaixo a arquitetura completa da eletr\xf4nica do Quimera:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"img",src:o(256).default})),Object(r.b)("p",null,"A interface entre o ACS, o PSCS e a avi\xf4nica \xe9 feita atrav\xe9s de ",Object(r.b)("em",{parentName:"p"},"checkpoint boards"),". O objetivo dessas placas \xe9:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"fazer o fornecimento de energia para os sensores e motores"),Object(r.b)("li",{parentName:"ul"},"realizar a comunica\xe7\xe3o com os componentes distantes atrav\xe9s de conectores"),Object(r.b)("li",{parentName:"ul"},"realizar a comunica\xe7\xe3o com o teensy atrav\xe9s do barramento principal")),Object(r.b)("p",null,"Ou seja, essas placas possuir\xe3o baterias, reguladores de tens\xe3o adequados, conectores mini-fit e conectores de 40 pinos. Veja abaixo o diagrama dos sistemas com o interfaceamento realizado pelas checkpoint boards."),Object(r.b)("p",null,Object(r.b)("img",{alt:"img",src:o(257).default})),Object(r.b)("h2",{id:"nova-rec"},"Nova REC"),Object(r.b)("p",null,Object(r.b)("img",{alt:"img",src:o(258).default})),Object(r.b)("p",null,"Os paraquedas no Aurora eram acionados atrav\xe9s da a\xe7\xe3o de motores controlados pela avi\xf4nica. No Quimera os motores ser\xe3o substitu\xeddos por Electric Matches - tamb\xe9m chamados de e-matches ou skibs. De acordo com as informa\xe7\xf5es do fabricante dos skibs que n\xf3s utilizamos, a corrente necess\xe1ria para ativ\xe1-los \xe9 de 400 mA. Como verificamos no projeto passado que a corrente que seria utilizada pelos motores era de 450 mA, ou seja, maior, e que n\xf3s j\xe1 \xe9ramos capazes de fornecer isso, podemos inferir que n\xe3o haver\xe1 problemas no novo design."),Object(r.b)("p",null,"Um outro detalhe no uso dos skibs \xe9 a boa-pr\xe1tica de se colocar resistores de pulldown nos pinos de entrada. Isso evita que a tens\xe3o nesses pinos flutue e o skib seja acionado inadvertidamente."),Object(r.b)("p",null,"O subsistema de Recupera\xe7\xe3o exige apenas dois skibs, um para cada paraquedas. Para isso, utilizaremos dois conectores de duas vias na placa da REC. "),Object(r.b)("h2",{id:"apogee-control-system-acs"},"Apogee Control System (ACS)"),Object(r.b)("p",null,Object(r.b)("img",{alt:"img",src:o(259).default})),Object(r.b)("h3",{id:"acs---pitot-tube"},"ACS - Pitot Tube"),Object(r.b)("p",null,"O tubo de Pitot fica na coifa do foguete e serve para calcular a velocidade de deslocamento, o que permite \xe0 avi\xf4nica se orientar e poder controlar de forma eficiente o air brake."),Object(r.b)("p",null,"Utilizando o pr\xedncipio de Bernoulli podemos obter o valor da velocidade atrav\xe9s de duas medidas distintas: a press\xe3o est\xe1tica e a press\xe3o total - ou seja, a press\xe3o do fluido n\xe3o sofrendo a\xe7\xe3o da velocidade do foguete e a press\xe3o com a\xe7\xe3o da velocidade. "),Object(r.b)("p",null,"O modelo utilizado no Aurora Quimera \xe9 bem simples: dois sensores de press\xe3o medindo cada tipo de press\xe3o e um sensor de temperatura para controle de dados. Todos estes sensores s\xe3o conectados \xe0 PMM, onde o Teensy ir\xe1 calcular a velocidade e trabalhar em cima disso. "),Object(r.b)("p",null,"At\xe9 o momento n\xe3o nos foram apresentados os requisitos para o sensor de press\xe3o - o subsistema de Aerodin\xe2mica ainda est\xe1 trabalhando nisso. Entretanto, podemos destacar alguns candidatos a sensores. Para press\xf5es menores que 700KPa e temperaturas de at\xe9 120\xb0C, podemos utilizar sensores de press\xe3o absoluta da familia MPX. J\xe1 para press\xf5es e temperaturas maiores, podemos utilizar transdutores de press\xe3o, cuja desvantagem \xe9 seu tamanho bem superior aos dos MTX."),Object(r.b)("p",null,"A temperatura ser\xe1 medida por um termopar tipo K e um  m\xf3dulo Max6675. Ele utiliza funciona com 5V, 50mA e se comunica via SPI."),Object(r.b)("h4",{id:"comunica\xe7\xe3o-coifa-avi\xf4nica"},"Comunica\xe7\xe3o Coifa-Avi\xf4nica"),Object(r.b)("p",null,"O ACS-Pitot, presente na coifa, deve ser capaz de enviar os dados de temperatura e press\xe3o para Teensy, presente no m\xf3dulo central da avi\xf4nica. Entretanto, entre eles h\xe1 o m\xf3dulo da Recupera\xe7\xe3o. Isso inicialmente n\xe3o parece um problema, j\xe1 que podemos simplesmente colocar um cabo comunicando as eletr\xf4nicas e perpassando pela Recupera\xe7\xe3o. O problema surge quando consideramos que a coifa eventualmente ser\xe1 ejetada e o m\xf3dulo da Recupera\xe7\xe3o, expandido. Conclus\xe3o: a comunica\xe7\xe3o coifa-avi\xf4nica deve ser feita com algum tipo de cabo com conector quick-release que se desconectar\xe1 no momento em que o primeiro paraquedas for acionado. "),Object(r.b)("p",null,"A solu\xe7\xe3o encontrada foi utilizar um cabo com conectores mini-Din de 6 pinos - suficiente para o n\xfamero de sinais desejado - e duas extremidades macho. Nas placas teremos os conectores f\xeamea. A vantagem desse conector \xe9 a facilidade com que ele \xe9 removido, portanto ideal para nosso problema."),Object(r.b)("h3",{id:"acs---air-brake"},"ACS - Air Brake"),Object(r.b)("p",null,"Uma das novidades do Quimera \xe9 a utiliza\xe7\xe3o do Air Brake, cuja fun\xe7\xe3o \xe9 auxiliar o foguete a atingir o apogeu desejado com maior precis\xe3o."),Object(r.b)("p",null,"A partir dos dados coletados dos sensores s\xe3o calculadas a velocidade e a posi\xe7\xe3o do foguete. A partir dessas informa\xe7\xf5es \xe9 determinado o apogeu esperado. Se esse apogeu for maior que o desejado, \xe9 acionado o motor que controla as l\xe2minas do Air Brake e essas por sua vez se abrem na lateral do foguete, aumentando a for\xe7a de arrasto e diminuindo o apogeu do foguete. Importante ressaltar que esse algoritmo s\xf3 entra em a\xe7\xe3o quando o motor para de queimar."),Object(r.b)("p",null,"O Air Brake tamb\xe9m pode ser usado para diminuir a velocidade de queda na fase de recupera\xe7\xe3o do foguete."),Object(r.b)("p",null,"O motor que vai controlar o Air Brake vai ser um servo motor com tens\xe3o de alimenta\xe7\xe3o de 6v. Ap\xf3s um estudo de diferentes op\xe7\xf5es, chegamos em dois poss\xedveis modelos: o Spektrum A6180 e o MG996R. O MG996R tem um torque de opera\xe7\xe3o maior e \xe9 mais barato, no entanto sua documenta\xe7\xe3o na internet \xe9 um pouco imprecisa comparada com a do Spektrum. Continuamos a pesquisa e percebemos que o MG996R atendia os nossos requisitos, portanto o escolhemos. "),Object(r.b)("p",null,"O algoritmo de controle do Air Brake \xe9 sistema de controle de malha fechada, ou seja, a sa\xedda do sistema \xe9 utilizada como entrada, gerando um ciclo."),Object(r.b)("p",null,"Aqui temos um fluxograma que resume como o algoritmo de controle do Air Brake vai funcionar."),Object(r.b)("p",null,Object(r.b)("img",{alt:"img",src:o(260).default})),Object(r.b)("p",null,"O estado do foguete \xe9 lido pelos sensores e depois passa por um filtro de Kalman, que prev\xea o comportamento do foguete e compara a previs\xe3o com os dados do sensor. Isso diminui os ru\xeddos e mescla os dados do alt\xedmetro, do tubo de pitot e do aceler\xf4metro pra ter um dado mais confi\xe1vel  de modo a se chegar numa medi\xe7\xe3o mais precisa. Esse estado do foguete \xe9 ent\xe3o comparado com valores experimentais pr\xe9-definidos de qual deve ser o \xe2ngulo de abertura do Air Brake. Esse valor \xe9 mandado pro motor, que gera um novo estado do foguete e o ciclo se repete."),Object(r.b)("h2",{id:"propulsion-sensing-and-control-system-pscs"},"Propulsion Sensing and Control System (PSCS)"),Object(r.b)("p",null,Object(r.b)("img",{alt:"img",src:o(261).default})),Object(r.b)("h3",{id:"pscs---sensors"},"PSCS - Sensors"),Object(r.b)("p",null,"O PSCS ir\xe1 sensoriar tanto a press\xe3o quanto a temperatura do tanque do oxidante e da c\xe2mara de combust\xe3o. Os dados obtidos servir\xe3o para que nosso microcontrolador possa controlar as v\xe1lvulas de forma segura e eficiente. Al\xe9m disso, esses dados servir\xe3o para an\xe1lise e estudos futuros."),Object(r.b)("p",null,"O tanque ter\xe1 uma temperatura de ambiente (at\xe9 40\xb0 C) e uma press\xe3o de 5 a 5,8 MPa. Por estas raz\xf5es, foi escolhido um transdutor de press\xe3o PFT que mede at\xe9 10MPa e funciona at\xe9 100\xb0C. O PFT possui tens\xe3o de alimenta\xe7\xe3o de 10 a 30V e utiliza 3 fios para comunica\xe7\xe3o."),Object(r.b)("p",null,"A c\xe2mara possui condi\xe7\xf5es mais extremas. Com a combust\xe3o, temos uma  temperatura de at\xe9 300\xb0C e uma press\xe3o que varia entre 3 MPa e 6 MPa. Por isso, foi utilizado um termopar tipo K com m\xf3dulo interfaceador Max6675 para medi\xe7\xe3o de temperatura. J\xe1 a medi\xe7\xe3o de press\xe3o ser\xe1 feita com um sensor que funciona em altas temperaturas, que voc\xea pode encontrar com o nome de Type 6025A. Tamb\xe9m vimos alguns sensores da Omega, por\xe9m eles s\xe3o consideravelmente caros."),Object(r.b)("h3",{id:"pscs---valves"},"PSCS - Valves"),Object(r.b)("p",null,"A avi\xf4nica vai ser respons\xe1vel pelo controle de duas v\xe1lvulas: a da c\xe2mara de combust\xe3o e a v\xe1lvula de vent."),Object(r.b)("p",null,"A v\xe1lvula de vent s\xf3 precisa ser aberta ou fechada, ou seja, n\xe3o \xe9 necess\xe1rio modular o quanto de fluido que a atravessa. Por conta disso optamos pela utiliza\xe7\xe3o de uma v\xe1lvula solen\xf3ide para o seu controle. A solen\xf3ide da Parker foi escolhida por ter um baixo consumo de pot\xeancia aliado a uma press\xe3o diferencial m\xe1xima alta."),Object(r.b)("p",null,"A v\xe1lvula da c\xe2mara de combust\xe3o, por outro lado, futuramente ser\xe1 modulada, portanto foi decidido que ter\xedamos uma v\xe1lvula esfera controlada por um motor. "),Object(r.b)("p",null,"Pela necessidade de velocidade e precis\xe3o do controle foi escolhido um servo motor para fazer essa atua\xe7\xe3o. Foram consideradas v\xe1lvulas esferas j\xe1 motorizadas, entretanto as encontradas tem press\xe3o m\xe1xima de opera\xe7\xe3o muito baixas e tempo de abertura muito alto. Escolhemos uma v\xe1lvula SS-45TF8 da Swagelok e um servomotor MG996R. Veja abaixo uma imagem exemplo desse servo atuando em uma v\xe1lvula esfera. "),Object(r.b)("p",null,Object(r.b)("img",{alt:"img",src:o(262).default})),Object(r.b)("h3",{id:"pscs---ignition-sensing"},"PSCS - Ignition Sensing"),Object(r.b)("p",null,"Como comentado nos requisitos, o controle das v\xe1lvulas n\xe3o pode ser feito atrav\xe9s de telemetria wireless por ser crucial para o sucesso da miss\xe3o. Portanto, devem ter cabos entrando no foguete que se comunicam com a avi\xf4nica e controlam as v\xe1lvulas. Escolhemos um cabo \xfanico e que possui m\xfaltiplas linhas dentro dele, afinal precisamos de sinal de ground, vent, abort e ignite. Al\xe9m disso, esse cabo deve ser capaz de se desconectar facilmente do foguete ap\xf3s a igni\xe7\xe3o."),Object(r.b)("p",null,"Esse cabo tem a mesma origem que o skib respons\xe1vel pela igni\xe7\xe3o: o datalogger. Os comandos das v\xe1lvulas s\xe3o emitidos pela equipe de opera\xe7\xe3o l\xe1 e transmitidos para o foguete. O comando de ignite possui uma peculiaridade: ele simultaneamente detonar\xe1 o skib e abrir\xe1 a v\xe1lvula da c\xe2mara de combust\xe3o. Esses dois eventos devem ocorrer ao mesmo tempo para que a igni\xe7\xe3o seja bem feita."),Object(r.b)("p",null,Object(r.b)("img",{alt:"img",src:o(263).default})),Object(r.b)("p",null,"Veja abaixo o diagrama completo do PSCS:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"img",src:o(264).default})),Object(r.b)("h2",{id:"angle-of-attack-sensor-aoa"},"Angle of Attack Sensor (AoA)"),Object(r.b)("p",null,"Ser\xe1 adicionado no Quimera um sensor de \xe2ngulo de ataque (AoA), cujo objetivo \xe9 determinar o \xe2ngulo entre a linha de refer\xeancia do foguete e o vetor de movimento relativo entre o foguete e o ar. N\xf3s nos baseamos no projeto feito por um grupo da Universidade de Washington para determinar a arquitetura. Como esse sistema \xe9 completamente independente dos outros, utilizaremos um arduino pro mini junto com dois BMP280, que medir\xe3o a press\xe3o e a temperatura, e um encoder rotativo, que traduzir\xe1 o movimento mec\xe2nico do elemento mec\xe2nico exposto ao ar em pulsos el\xe9tricos, que por sua vez ser\xe3o interpretados pelo arduino."),Object(r.b)("p",null,Object(r.b)("img",{alt:"img",src:o(265).default})),Object(r.b)("h4",{id:"tempor\xe1rio"},"Tempor\xe1rio"),Object(r.b)("p",null,Object(r.b)("img",{alt:"img",src:o(266).default}),"\n",Object(r.b)("img",{alt:"img",src:o(267).default}),"\n",Object(r.b)("img",{alt:"img",src:o(268).default})),Object(r.b)("h2",{id:"anexos"},"Anexos"),Object(r.b)("h3",{id:"componentes"},"Componentes"),Object(r.b)("p",null,"Tabelas com os componentes principais em fun\xe7\xe3o do sistema:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"ACS"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Sensor de press\xe3o (a definir)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://www.baudaeletronica.com.br/modulo-sensor-de-temperatura-max6675-termopar-tipo-k.html"},"Termopar tipo K + max6675"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://www.baudaeletronica.com.br/servo-mg996r-towerpro.html?gclid=Cj0KCQiA6t6ABhDMARIsAONIYywdoMVOYOYC5DlpasZksVzCao7QQ1go2BI-NW4f3LegV_NhCYTm_n0aAkR8EALw_wcB"},"Servo motor MG996R"))))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"PSCS"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"2x ",Object(r.b)("a",{parentName:"td",href:"https://www.omega.com/en-us/pressure-measurement/pressure-transducers/p/PX119"},"Transdutor de press\xe3o PX119-1KGI"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"2x ",Object(r.b)("a",{parentName:"td",href:"https://www.baudaeletronica.com.br/modulo-sensor-de-temperatura-max6675-termopar-tipo-k.html"},"Termopar tipo K + max6675"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://ph.parker.com/br/pt/parker-2-way-normally-closed-1-4-general-purpose-solenoid-valves/u121v5595-492210c2"},"V\xe1lvula Solen\xf3ide U121V5595-492210C2"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://www.baudaeletronica.com.br/servo-mg996r-towerpro.html?gclid=Cj0KCQiA6t6ABhDMARIsAONIYywdoMVOYOYC5DlpasZksVzCao7QQ1go2BI-NW4f3LegV_NhCYTm_n0aAkR8EALw_wcB"},"Servo motor MG996R"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://www.swagelok.com/en/catalog/Product/Detail?part=SS-45TF8"},"V\xe1lvula esfera SS-45TF8"))))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"AoA"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://www.filipeflop.com/produto/placa-pro-mini-atmega328p-5v-16mhz/"},"Arduino Pro Mini"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://www.filipeflop.com/produto/sensor-de-pressao-e-temperatura-bmp280/"},"BMP280"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://www.arducore.com.br/encoder-decoder-ky-040-rotacional?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&gclid=Cj0KCQiA34OBBhCcARIsAG32uvOMu_4o9h9-uwOGpfsd3ZVaV6eMqMNjm266ZzAOhUxLJw_X3vcWvFQaAtHEEALw_wcB"},"Rotary Encoder"))))),Object(r.b)("h3",{id:"refer\xeancias"},"Refer\xeancias"),Object(r.b)("p",null,"Medi\xe7\xe3o de Temperatura da c\xe2mara de combust\xe3o: ",Object(r.b)("a",{parentName:"p",href:"https://www.rocketryforum.com/threads/high-temperature-thermocouple-for-combustion-chamber.134580/"},"https://www.rocketryforum.com/threads/high-temperature-thermocouple-for-combustion-chamber.134580/")))}u.isMDXComponent=!0},146:function(e,a,o){"use strict";o.d(a,"a",(function(){return l})),o.d(a,"b",(function(){return b}));var t=o(0),s=o.n(t);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function n(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?n(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function d(e,a){if(null==e)return{};var o,t,s=function(e,a){if(null==e)return{};var o,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||(s[o]=e[o]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var c=s.a.createContext({}),u=function(e){var a=s.a.useContext(c),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},l=function(e){var a=u(e.components);return s.a.createElement(c.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return s.a.createElement(s.a.Fragment,{},a)}},p=s.a.forwardRef((function(e,a){var o=e.components,t=e.mdxType,r=e.originalType,n=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),l=u(o),p=t,b=l["".concat(n,".").concat(p)]||l[p]||m[p]||r;return o?s.a.createElement(b,i(i({ref:a},c),{},{components:o})):s.a.createElement(b,i({ref:a},c))}));function b(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=o.length,n=new Array(r);n[0]=p;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i.mdxType="string"==typeof e?e:t,n[1]=i;for(var c=2;c<r;c++)n[c]=o[c];return s.a.createElement.apply(null,n)}return s.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},256:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/fullrocket-995cfe5e84dbdc5af9df673251ded75a.png"},257:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/boardslayout-672478fe0c13986b9eab41d1bf066485.png"},258:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/rocketREC-c376842e933f161c650d10e826de58d1.png"},259:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/rocketACS-b91eae401e807ae1c314b592a9bf3c25.png"},260:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/airbrakepseudo-e77c78a1e4c74d628d12593004a0b33d.png"},261:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/rocketPSCS-7806eaeab337b23faa4bf7f765244f7e.png"},262:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/servoballvalve-d004eceffb7afe50c3161cc987bf1dc5.png"},263:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/ignitionsensing-6dfcb28d3b7772b5409e5fd7bafe5a30.png"},264:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/PSCSdiagram-a25cb43cf312543797937060b2389d48.png"},265:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/aoasensor-49740168ba6991e75b1d50083bd25edf.png"},266:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/aoa1-adff4bc07aa0717604da568bc3996424.png"},267:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/aoa2-107de2fa063be725a6dd46b12aca747d.png"},268:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/board_checkpoint-e34970e826d03b967524ae77f84d09ac.png"}}]);