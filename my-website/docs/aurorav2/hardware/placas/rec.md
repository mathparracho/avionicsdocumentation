---
id: rec
title: REC / RECB
sidebar_label: REC / RECB
---

## Objetivo
### Placa principal - REC
A função desta placa é ativar os skibs e, consequentemente, ejetar os paraquedas. Para isso, um sistema que recebe que recebe 3 sinais diferentes foi elaborado. A placa contém dois altímetros Commercial Off-The-Shelf (COTS), o StratoLogger da PerfectFlite e o PION Altimeter Lite, da Pion Labs. Ambos emitem sinais de ativação dos paraquedas drogue - quando reconhecem o apogeu - e main - quando reconhecem a altitude pré-determinada. Concomitante a esses sinais há os sinal que vêm do Teensy, localizado no CDHS. Esses sinais são enviados quando, através do processamento das informações dos barômetros, o momento certo é reconhecido. O mesmo circuito de drive com dois MOSFETs utilizado no EPS é utilizado na REC, de modo que o sinal de 3v3 enviado pelo Teensy consegue chavear os 9V utilizados na ativação dos skibs. Uma porta lógica or é construída através de 3 diodos e um resistor pull-down, de modo que quando houver pelo menos um sinal o skib será explodido. O mesmo processo ocorre na ativação dos dois paraquedas. Além disso, há uma chave RBF para que os dois altímetros COTS sejam ligados.

### Placa associada - RECB
Como os altímetros COTS são alimentados com 9V, outra placa foi adicionada. Essa placa, chamada de RECB, se comunica com a REC através de um barramento diferente localizado no extremo oposto do conector do barramento principal. Nela estão duas baterias de lithium-ion (li-ion) modelo 18650 e de voltagem nominal 3.7v em paralelo e um TP4056 cuja função é carregar as baterias. Além disso, a placa também contém o módulo COTS Featherweight GPS Tracker. A antena omnidirecional deste módulo será realocada de modo a ficar paralela ao corpo do foguete.

## Componentes
### REC

|  Componente               |      Qtd      |  Obs  |
| -------------             |  -----------  |  ------ |
| 40 pins flat connector    |       2       | 1x Barramento aviônica, 1x Barramento RECB |
| StratoLogger              |       1       | Altímetro COTS |
| Pion Altimeter            |       1       | Altímetro COTS |
| Mini-lock Connector       |       3       | 1x RBF, 1x Drogue, 1x Main |
| MOSFET                    |       4       | 2x P55N06, 2x IRF9540 |
| Resistor                  |       10      | 6x 10kΩ, 2x 100Ω, 2x (10Ω 2w) |
| Diode                     |       3       | 3x 1N4007 |

### RECB
|  Componente               |      Qtd      |  Obs  |
| -------------             |  -----------  |  ------ |
| 40 pins flat connector    |       2       | Barramento REC |
| 18650 Battery             |       2       | 3.7V |
| Battery Holder            |       1       | - |
| TP4056                    |       1       | - |
| U3V70F9                   |       1       | Bateria dos COTS |
| Mini-Lock Connector       |       1       | Carregamento da bateria |
| Featherweight GPS         |       1       | GPS COTS |

## Esquemático
### REC
![img](/img/docs/aurora/hardware/rec_schem.jpg)
### REC_EPS
![img](/img/docs/aurora/hardware/recb_schem.jpg)

## PCB
### REC
#### Versão PC104
![img](/img/docs/aurora/hardware/rec_104pcb.jpg)

#### Versão do protótipo
![img](/img/docs/aurora/hardware/rec_87pcb.jpg)

### RECB
#### Versão PC104
![img](/img/docs/aurora/hardware/recb_104pcb.jpg)

#### Versão do protótipo
![img](/img/docs/aurora/hardware/recb_87pcb.jpg)

## Simulações
### 3v3 on | 9v off | 9v off
![img](/img/docs/aurora/hardware/rec_3v3on_i.png)
![img](/img/docs/aurora/hardware/rec_3v3on_v.png)
![img](/img/docs/aurora/hardware/rec_3v3on_w.png)

### 3v3 off | 9v on | 9v off
![img](/img/docs/aurora/hardware/rec_9von_i.png)
![img](/img/docs/aurora/hardware/rec_9von_v.png)
![img](/img/docs/aurora/hardware/rec_9von_w.png)

### 3v3 off | 9v off | 9v off
![img](/img/docs/aurora/hardware/rec_alloff_i.png)
![img](/img/docs/aurora/hardware/rec_alloff_v.png)
![img](/img/docs/aurora/hardware/rec_alloff_w.png)

### 3v3 on | 9v on | 9v on
![img](/img/docs/aurora/hardware/rec_allon_i.png)
![img](/img/docs/aurora/hardware/rec_allon_v.png)
![img](/img/docs/aurora/hardware/rec_allon_w.png)

## Testes no Protótipo

:::note

Pendente

:::