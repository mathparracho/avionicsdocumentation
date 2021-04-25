---
id: leituraescrita
title: Teste de Leitura e Escrita do SD
sidebar_label: Leitura e Escrita
---

*Ver [glossário](/avionicsdocumentation/docs/glossario/testes/leituraescrita) para mais informações sobre o teste*

O teste de leitura e escrita foi feito usando a biblioteca *SdFat*.

Resultados:

```cpp
Type any character to start
FreeStack: 1037
Type is FAT32
Starting print test.  Please wait.

Test of println(uint16_t)
Time 5.84 sec
File size 128.89 KB
Write 22.06 KB/sec
Maximum latency: 11296 usec, Minimum Latency: 112 usec, Avg Latency: 281 usec

Test of printField(uint16_t, char)
Time 1.93 sec
File size 128.89 KB
Write 66.68 KB/sec
Maximum latency: 39052 usec, Minimum Latency: 36 usec, Avg Latency: 85 usec

Test of println(uint32_t)
Time 9.09 sec
File size 200.00 KB
Write 22.00 KB/sec
Maximum latency: 42996 usec, Minimum Latency: 380 usec, Avg Latency: 443 usec

Test of printField(uint32_t, char)
Time 2.67 sec
File size 200.00 KB
Write 75.05 KB/sec
Maximum latency: 46644 usec, Minimum Latency: 64 usec, Avg Latency: 122 usec

Test of println(float)
Time 9.96 sec
File size 149.00 KB
Write 14.95 KB/sec
Maximum latency: 43052 usec, Minimum Latency: 376 usec, Avg Latency: 487 usec

Test of printField(float, char)
Time 3.81 sec
File size 149.00 KB
Write 39.10 KB/sec
Maximum latency: 46360 usec, Minimum Latency: 124 usec, Avg Latency: 179 usec

Done!
```