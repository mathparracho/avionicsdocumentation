---
id: epscdhs
title: EPS + CDHS
sidebar_label: EPS + CDHS
---

*Observação*: Todos os testes nos sensores do CDHS dependem da energia fornecida pelo EPS, por isso os testes com esses sensores estão sendo armazenados nesta página.

![img](../../../../../static/img/docs/hardware/int_epscdhsfront.jpg)

## Informações sobre os módulos
- INA219
    - Comunicação: I2C
    - Documentos: [Datasheet](https://www.ti.com/lit/ds/symlink/ina219.pdf)
    - Pinos: SCL, SDA

- BMP388
    - Comunicação: I2C
    - Documentos: [Datasheet](https://www.mouser.com/pdfdocs/BST-BMP388-DS001-01.pdf), [Breakout Guide](https://learn.adafruit.com/adafruit-bmp388-bmp390-bmp3xx)
    - Pinos: SCL, SDA, SDO (HIGH)

- GY-91
    - Comunicação: I2C
    - Documentos: [MPU9250](https://invensense.tdk.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf) e [BMP280](https://cdn-shop.adafruit.com/datasheets/BST-BMP280-DS001-11.pdf) Datasheets
    - Pinos: SCL, SDA, SDO (LOW)

- MTK3339
    - Comunicação: Serial
    - Documentos: [Datasheet](https://cdn-shop.adafruit.com/datasheets/GlobalTop-FGPMMOPA6H-Datasheet-V0A.pdf)
    - Pinos: RX, TX

- LoRa RFM95W
    - Comunicação: SPI
    - Documentos: [Datasheet](https://www.hoperf.com/data/upload/portal/20190801/RFM96W-V2.0.pdf), [Breakout Guide](https://learn.adafruit.com/adafruit-rfm69hcw-and-rfm96-rfm95-rfm98-lora-packet-padio-breakouts/overview)
    - Pinos: MISO, MOSI, SCK, CS (24), RST (25), G0 (26)

- MicroSD Adapter
    - Comunicação: SPI
    - Documentos: [Breakout Guide](https://learn.sparkfun.com/tutorials/microsd-breakout-with-level-shifter-hookup-guide?_ga=2.241187777.251676394.1611503180-1140351207.1611042160)
    - Pinos: MISO, MOSI, SCK, SC (27), CD (28)

## Comunicação entre as placas
Na EPS foi verificado que os pinos de potência do barramento estavam recebendo a tensão correta. Porém, na comunicação com o flat cable foi percebido que as tensões não chegavam corretamente. Após uma análise foi percebido que o LM7805 estava mal-soldado. Após feita a correção, o problema foi corrigido.

## Testes nos módulos
### INA219

### BMP388

### GY-91

### MTK3339

### LoRa

### MicroSD Adapter

## Mudanças Necessárias
Conforme os testes foram sendo realizados, algumas mudanças foram percebidas como necessárias no circuito. São elas:
- Trocar na Board (altium) os capacitores do EPS por eletrolíticos.
- Trocar alimentação do GY-91 do VIN para o 3V3. 87:heavy_check_mark: 96:heavy_check_mark:
- Deixar apenas um resistor no SDA e outro no SCL, de preferência próximo à entrada dessas linhas no Teensy. 87:heavy_check_mark: 96:heavy_check_mark:
- Trocar layer do SCK na entrada pro Teensy. 87:heavy_check_mark: 96:heavy_check_mark:
- Trocar pino de SCK (SPI) para o pino 13. 87:heavy_check_mark: 96:heavy_check_mark:
- Trocar pino do buzzer para o pino 32. 87:heavy_check_mark: 96:heavy_check_mark: