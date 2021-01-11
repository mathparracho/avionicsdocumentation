module.exports = {
    docs: [
        {
            Reuniões: ['reuniao/0801'],
        },
        {
            'Aurora v2': [
                {
                    Software: [ 
                        {
                            Protocolos: ['aurorav2/software/protocolos/i2c', 'aurorav2/software/protocolos/spi'],
                        }
                    ],
                },
                {
                    Hardware: [
                        {
                            Altium: ['aurorav2/hardware/altium/drc'],
                        },
                        {
                            Placas: ['aurorav2/hardware/placas/eps', 'aurorav2/hardware/placas/cdhs', 'aurorav2/hardware/placas/rec', 'aurorav2/hardware/placas/cam'],
                        },
                        {
                            Fresadora: ['aurorav2/hardware/fresadora/dicas'],
                        }
                    ],
                }
            ], 
        },
        {
            Quimera: [
                {
                    Software: [
                        {
                        'Air Break': ['quimera/software/airbreak/algoritmo'],
                        }
                    ],
                },
                {
                    Hardware: [
                        {
                        'Tubo de Pitot': ['quimera/hardware/tubodepitot/sensores'],
                        }
                    ],
                },
            ],
        },
        {
            Outros: ['outros/styleguide'],
        }
    ],
};