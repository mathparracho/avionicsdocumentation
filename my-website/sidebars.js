module.exports = {
    Docs: [
        {
            Reuniões: [
                {
                    '2021': ['reuniao/21/0108r', 'reuniao/21/0113r', 'reuniao/21/0120r', 'reuniao/21/0127r',
                             'reuniao/21/0210r', 'reuniao/21/0217r', 'reuniao/21/0224r', 'reuniao/21/0303r',
                             'reuniao/21/0310r', 'reuniao/21/0317r', 'reuniao/21/0325r'
                    ],    
                },
            ],
        },
        {
            'Aurora v2': [
                {
                    Hardware: [
                        {
                            Placas: ['aurorav2/hardware/placas/eps', 'aurorav2/hardware/placas/cdhs',
                                     'aurorav2/hardware/placas/rec', 'aurorav2/hardware/placas/cam',
                                {
                                    Integração: ['aurorav2/hardware/placas/integracao/epscdhs',
                                    'aurorav2/hardware/placas/integracao/consumo'
                                ]
                                } 
                            ],
                        },
                        {
                            Altium: ['aurorav2/hardware/altium/tutorial', 'aurorav2/hardware/altium/drc'],
                        },
                        {
                            Fresadora: ['aurorav2/hardware/fresadora/dicas'],
                        }
                    ],
                },
                {
                    Software: ['aurorav2/software/git', 
                        {
                            Testes: ['aurorav2/software/testes/funcionamento', 'aurorav2/software/testes/leituraescrita'
                            ],
                        },
                    ],
                },
            ], 
        },
        {
            Quimera: [
                'quimera/arquitetura',
                {
                    Hardware: [
                        {
                        'Tubo de Pitot': ['quimera/hardware/tubodepitot/sensores'],
                        },
                    ],
                    Software: [
                        {
                        'Air Brake': ['quimera/software/airbrake/algoritmo'],
                        },
                    ],
                },
            ],
        },
        {
            Conceitos: [
                {
                    Testes: ['conceitos/testes/telemetria']
                },
                'conceitos/diagramadeclasses', 'conceitos/leituraescrita',
            ],
        },
        {
            Outros: ['outros/dicasgerais', 'outros/ideias', 'outros/inventario', 'outros/styleguide'],
        },
    ],
};