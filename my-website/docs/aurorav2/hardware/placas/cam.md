---
id: cam
title: CAM
sidebar_label: CAM
---

Usamos duas câmeras Quelima SQ12 Mini no foguete, uma apontando para cima e outra para baixo. Nesta página temos um breve estudo sobre as capacidades dessa câmera, como operá-la, o resultado de alguns testes feitos e como podemos fazer para integrá-la ao foguete.

![img](/img/docs/aurora/hardware/cams.jpg)

## Usando a Câmera
A SQ12 possui:
- Uma entrada mini USB
- Um slot de cartão microSD
- Um botão de Modo
- Um botão de on/off
- Um botão de reset

Suas características:
- Pode gravar em 1280x720 e em 1920x1080
- Tira fotos com 12MP com resolução de 4032x3024
- É compatível com um cartão de até 32GB
- Ângulo de visão da lente: 155 graus

Quando a câmera está carregada, pressionar o botão de on/off a liga e o LED fica permanentemente azul. Isso indica que no modo standby. Ligar a câmera descarregada ou sem o cartão microSD fará os LEDs azul e vermelho piscarem simultaneamente por 5 segundos e depois apagarem. 

Para carregar a câmera, conecte-a no computador através do cabo mini USB. O LED vermelho fica piscando enquanto a bateria estiver sendo carregada. Depois que tiver terminado, o LED ficará constantemente aceso.

Existem 3 modos possíveis: gravar em 720p, gravar em 1080p e tirar foto. Além disso, a câmera pode ser configurada para modo noturno e para modo de detecção de movimento. 

O modo padrão quando a câmera é iniciada é o de 720p. Aperte o botão Modo uma vez pra alterar pra 1080p e uma segunda vez pra alterar pra foto. Depois de selecionado o modo desejado, aperte o botão de on/off pra começar a gravar ou tirar a foto. No primeiro caso, o LED vai piscar e depois permanecer apagado enquanto estiver gravando. Já no segundo caso o LED vai piscar no momento em que a foto é feita e depois volta a ficar aceso.

Para ativar o modo noturno pressione o botão de on/off por dois segundos e solte. Para desligar é a mesma coisa. 

A ativação do modo de detecção de movimento pode ser feita em 720p e em 1080p. Vá para o modo desejado e pressione o botão de Modo por 3 segundos para ativar. A gravação é iniciada quando algum movimento é detectado.

Parte interna da câmera:

![img](/img/docs/aurora/hardware/camopen1.jpg)

![img](/img/docs/aurora/hardware/camopen2.jpg)

A bateria interna da câmera é uma LiPo, logo varia de 4.2V (completamente carregada) a 2.7V (completamente descarregada). Sua capacidade é de 200mAh. A tensão para carga é de 5V.
## Testes
Pra diferenciar, uma das câmeras é chamada de preta e a outra de branca (essa é a que tem uma faixa branca de adesivo embaixo dos botões)
### Tempo de Carga
- Teste 1-branca: 
- Teste 1-preta:

### Tempo Gravando
- Teste 1-branca (720p): 40min
- Teste 2-branca (1080p): 8min
- Teste 1-preta (720p): 35min
- Teste 2-preta (1080p): 

### Teste de imagem
#### 720p
<iframe src="https://drive.google.com/file/d/143g6DFIdr5MWDK8CQkfaOSXlGVvIr4ay/preview" width="100%" height="480" allowfullscreen="allowfullscreen"></iframe>

#### 1080p
<iframe src="https://drive.google.com/file/d/19KBzzOv6EgZHda-dK3Szl28xCJ_rxRMJ/preview" width="100%" height="480" allowfullscreen="allowfullscreen"></iframe>

#### Foto
![img](/img/docs/aurora/hardware/cam_pic.jpg)

## Integração no Foguete
[Em Progresso]

A ideia é prender as câmeras no foguete de maneira que uma esteja apontando pra cima e outra pra baixo. Uma placa com baterias fará o fornecimento de energia para as duas durante o vôo. Como a gravação é iniciada apenas com o aperto do botão de on/off, devemos começar a gravação imediatamente antes do foguete ser lançado.

A placa das câmeras, ou CAM, terá duas baterias 18650 em paralelo e um TP4056 utilizado para recarregá-las sem removê-las do circuito. Terá também dois conectores mini-lock usados para alimentar as câmeras.

## Referências
- https://www.youtube.com/watch?v=pFxlfeo9nwk&ab_channel=LGyn
- https://org-info.mobi/manual/sq12-en.htm