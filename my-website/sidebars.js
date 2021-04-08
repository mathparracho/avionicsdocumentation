module.exports = {
    Docs: [
        {
            Reuniões: [
                {
                    '2021': ['reuniao/21/0108r', 'reuniao/21/0113r', 'reuniao/21/0120r', 'reuniao/21/0127r',
                             'reuniao/21/0210r', 'reuniao/21/0217r', 'reuniao/21/0224r', 'reuniao/21/0303r',
                             'reuniao/21/0310r', 'reuniao/21/0317r', 'reuniao/21/0325r', 'reuniao/21/0331r',
                             'reuniao/21/0401i', 'reuniao/21/0407r'
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
                                    Integração: ['aurorav2/hardware/placas/integracao/epscdhs']
                                } 
                            ],
                        },
                        {
                            Altium: ['aurorav2/hardware/altium/tutorial', 'aurorav2/hardware/altium/drc'],
                        },
                        {
                            Fresadora: ['aurorav2/hardware/fresadora/dicas'],
                        },
                        'aurorav2/hardware/consumo', 'aurorav2/hardware/barramento'
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
                        'quimera/hardware/consumo', 'quimera/hardware/barramento'
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
                    Testes: ['conceitos/testes/telemetria', 'conceitos/testes/leituraescrita', 'conceitos/testes/cargaedescarga']
                },
                'conceitos/diagramadeclasses'
            ],
        },
        {
            Outros: ['outros/dicasgerais', 'outros/ideias', 'outros/inventario', 'outros/styleguide'],
        },
    ],
};