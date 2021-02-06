---
id: rec
title: REC
sidebar_label: REC
---

## Objetivo
### Placa principal - REC
A função desta placa é ativar os motores e, consequentemente, a recuperação. Para isso, um sistema que recebe que recebe 3 sinais diferentes foi elaborado. A placa contém dois altímetros Commercial Off-The-Shelf (COTS), o StratoLogger da PerfectFlite e o PION Altimeter Lite, da Pion Labs. Ambos emitem sinais de ativação dos paraquedas drogue - quando reconhecem o apogeu - e main - quando reconhecem a altitude pré-determinada. Concomitante a esses sinais há o sinal que vêm do GY-91, localizado no CDHS. O circuito integrado de porta OR de 3 inputs CD4075B avalia os 3 sinais de ativação. Quando um deles existir, é enviada a tensão para o MOSFET, fechando o circuito e permitindo que os 9V gerados no EPS alimentem o motor, o que por sua vez ejeta os paraquedas. O mesmo processo ocorre na ativação dos dois paraquedas. Além disso, há uma chave RBF para que os dois altímetros COTS sejam ligados.

### Placa associada - REC_EPS
Como os altímetros COTS são alimentados com 7.4V, outra placa foi adicionada. Essa placa - chamada de REC_EPS - se comunica com a REC através de um barramento diferente. Nela estão duas (2) baterias de lithium-ion (li-ion) modelo 18650 e de voltagem nominal 3.7v em série e um Battery Management System modelo BMS 2S cuja função é controlar a carga dessas baterias em série. Além disso, a placa também contém o módulo COTS Featherweight GPS Tracker. A antena omnidirecional deste módulo será realocada de modo a ficar paralela ao corpo do foguete.

## Componentes
### REC

|  Componente               |      Qtd      |  Obs  |
| -------------             |  -----------  |  ------ |
| 40 pins flat connector    |       2       | 1x barramento aviônica, 1x REC_EPS |
| StratoLogger              |       1       | Altímetro COTS |
| Pion Altimeter            |       1       | Altímetro COTS |
| Mini-lock Connector       |       7       | 1x RBF, 6x Motores |
| CD4075B                   |       1       | CI de porta OR tripla |
| MOSFET                    |       2       | Drogue e Main |
| Resistor                  |       4       | 2x 1kΩ, 2x 20Ω |

### REC_EPS
|  Componente               |      Qtd      |  Obs  |
| -------------             |  -----------  |  ------ |
| 40 pins flat connector    |       2       | Barramento REC |
| BMS 2S                    |       1       | - |
| Featherweight GPS         |       1       | GPS COTS |

## Esquemático
### REC
![img](/img/docs/aurora/hardware/rec_schem.jpg)
### REC_EPS
![img](/img/docs/aurora/hardware/receps_schem.jpg)

## PCB
### REC
![img](/img/docs/aurora/hardware/rec_pcb.png)

### REC_EPS
![img](/img/docs/aurora/hardware/receps_pcb.png)

## Testes no Protótipo