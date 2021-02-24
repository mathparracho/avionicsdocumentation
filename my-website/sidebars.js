module.exports = {
    docs: [
        {
            Reuniões: [
                {
                    '2021': ['reuniao/21/0801r', 'reuniao/21/1301r', 'reuniao/21/2001r', 'reuniao/21/2701r', 'reuniao/21/1002r',
                       'reuniao/21/1702r', 'reuniao/21/2402r'
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
            Outros: ['outros/dicasgerais', 'outros/ideias', 'outros/styleguide'],
        }
    ],
};