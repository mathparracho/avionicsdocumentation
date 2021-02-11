module.exports = {
    docs: [
        {
            Reuniões: ['reuniao/0801r', 'reuniao/1301r', 'reuniao/2001r', 'reuniao/2701r', 'reuniao/1002r'],
        },
        {
            'Aurora v2': [
                {
                    Hardware: [
                        {
                            Placas: ['aurorav2/hardware/placas/eps', 'aurorav2/hardware/placas/cdhs', 'aurorav2/hardware/placas/rec', 'aurorav2/hardware/placas/cam',
                                {
                                    Integração: ['aurorav2/hardware/placas/integracao/epscdhs']
                                } 
                            ],
                        },
                        {
                            Altium: ['aurorav2/hardware/altium/drc'],
                        },
                        {
                            Fresadora: ['aurorav2/hardware/fresadora/dicas'],
                        }
                    ],
                },
                {
                    Software: ['aurorav2/software/testes'],
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
            Outros: ['outros/dicasgerais', 'outros/styleguide', 'outros/ideias'],
        }
    ],
};