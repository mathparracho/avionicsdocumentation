module.exports = {
    docs: [
        {
            Reuniões: ['reuniao/0801r', 'reuniao/1301r', 'reuniao/2001r'],
        },
        {
            'Aurora v2': [
                {
                    Software: [
                        {
                            Protocolos: ['aurorav2/software/protocolos/i2c', 'aurorav2/software/protocolos/spi'],
                        },
                    'aurorav2/software/testes'],
                },
                {
                    Hardware: [
                        {
                            Altium: ['aurorav2/hardware/altium/drc'],
                        },
                        {
                            Placas: ['aurorav2/hardware/placas/eps', 'aurorav2/hardware/placas/cdhs', 'aurorav2/hardware/placas/rec', 'aurorav2/hardware/placas/cam',
                                {
                                    Integração: ['aurorav2/hardware/placas/integracao/epscdhs']
                                } 
                            ],
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