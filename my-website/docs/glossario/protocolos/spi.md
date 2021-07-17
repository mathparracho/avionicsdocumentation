---
id: spi
title: SPI
sidebar_label: SPI
---

*Escrito por Carolina Branquinho*

# Comunicação SPI (Serial Peripheral Interface)
## Definição

 
 É um protocolo de dados seriais síncronos usado por microcontroladores para comunicar-se com um ou mais dispositivos SPIs em curtas distâncias.

 Tipo de comunicação serial síncrona que faz uso do conceito mestre-escravo (master-slave).

 O gerador dos sinal de sincronismo é definido como mestre e os dispositivos que utilizam o sinal de sincronismo gerado são definidos como escravos. 


![img](/img/docs/glossario/protocolos/spi/master_slave.png)

Trabalha em regime de comunicação full-duplex, toda troca de dados acontece sempre em ambas as direções. Ou seja, cada bit trocado entre do Master para um Slave traz um bit do Slave para  o Master. 


## Pinos básicos de comunicação entre dispositivos SPI


|Pino                   |   Nome Padrão      |   Significado             |
| --------------------- |--------------------| ------------------------- |
| Do Master para o Slave| MOSI               | Master Output Slave Input |
| Do Slave para o Master| MISO               | Master Input Slave Output |
| Clock                 | SCLK               | Serial Clock              |
| Seleção de Slaves     | SS                 | Slave Select              |

## Esquema Padrão de Ligação 

![img](/img/docs/glossario/protocolos/spi/esquema_padrão.png)

Nesta imagem podemos perceber o esquema padrão de ligação da comunicação SPI. Os escravos (quadros verde, azul e roxo à direita) possuem os mesmos pinos SCLK, MOSI e MISO em comum, mas necessitam de um pino para o Slave Select (SS) para cada escravo. 

**OBS:** O pino SS (Slave Select), cuja função é selecionar um escravo, pode ser ligado a qualquer pino digital do Arduino(que faz o papel de SPI Master).

## Exemplo de Comunicação SPI com Micro SD Card Adaptor
![img](/img/docs/glossario/protocolos/spi/sdcard-diagrama-1.jpg)


| Pino Módulo | SD Pino Arduino      |
| ----------- | -------------------- |
| SS          | 4 ( Jumper Amarelo)  |
| SCK         | 13 ( Jumper Marrom)  |
| MOSI        | 11 ( Jumper Verde)   |
| MISO        | 12 ( Jumper Laranja) |
| VCC         | 5V (Jumper Vermelho) |
| GND         | GND (Jumper Preto)   |

## Polarização do Clock e fases

### Polaridade do clock (CPOL)
- A polaridade do clock pode ser 0 ou 1.

**Ex:** se setar polaridade como clock em 0, ele iniciará em 0 enquanto não ocorrer a comunicação e subirá para 1 quando precisar transmitir algum dado. Na imagem abaixo o clock (SCLK) foi setado com polaridade 0 e começa a transmitir dados quando o Clock (SCLK) sobre para 1.


![img](/img/docs/glossario/protocolos/spi/spi.JPG)

### Fase do Clock (CPHA)

Se CPHA = 0,  a informação será gravada durante a "subida" do clock (de 0 para 1).  E na "descida" do clock ocorrerá a saída da comunicação (de 1 para 0).

E, se CPHA = 1, será o contrário: a informação será gravada durante a "descida" do clock (de 1 para 0).  E na "subida" do clock ocorrerá a saída da comunicação (de 0 para 1).

![img](/img/docs/glossario/protocolos/spi/fase_do_clock.JPG)

Na imagem acima podemos ver os dois exemplos de polaridade do clock, quando CPOL = 0 e CPOL = 1.

Além disso, o sinal de SS, que funciona como seleção de escravo, é um sinal ativo em nível baixo.  Isto que significa que o dispositivo é selecionado quando este pino se encontra em nível lógico baixo, como podemos perceber pela imagem acima.

Todas as possibilidades de arranjo entre fase e polarização do clock estão explicitadas na figura abaixo:

![img](/img/docs/glossario/protocolos/spi/fase_e_polarização.JPG)

### Exemplo 
No exemplo abaixo o Clock (CPOL) está polarizado em 0 e sua fase (CPHA) é igual a 0. Então a entrada da informação é recebida durante a subida do clock e a saída, durante a descida do clock.

![img](/img/docs/glossario/protocolos/spi/spi_exemplo.JPG)


Podemos perceber que a cada mudança do clock, o MOSI (Master Out Slave In) transmite um bit do Mestre para o Escravo. Da mesma maneira, o escravo transmite informações para o mestre, caracteristico da comunicação full-duplex.

Neste exemplo, passamos como informação a letra "a" do mestre para o escravo. No alfabeto binário a letra "a" corresponde a 0110001. 


## Vantagens e Desvantagens
### Vantagens

- O protocolo (interpretação dos dados) pode ser definido livremente, o que facilita a implementação.
- Comunicação full-duplex (comunicação mais rápida).
- Os escravos não precisam de osciladores, já que utilizam o clock do mestre.
- Os escravos não precisam de endereços únicos, como ocorre no I2C.
- Não é necessário utilizar transceivers para “decodificar”/”codificar” os dados que estão sendo enviados/recebidos.

### Desvantagens

- São necessários muitos pinos na comunicação (um para cada Slave).
- Não é ideal para longas distâncias.
- Não tem um sistema de detecção de escravos no hardware. Logo, o mestre pode enviar dados para um escravo que não existe e não saber disto.
