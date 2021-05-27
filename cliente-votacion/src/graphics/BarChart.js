import Chart from 'chart.js/auto';
import React from 'react';
import { Bar } from 'react-chartjs-2'

export default function BarChart(props) {
    const candidatos = props
    Chart.defaults.font.size = 20;
    Chart.defaults.elements.bar.borderRadius = 15;
    Chart.defaults.plugins.legend.display = false
    return (
        <div>
            <Bar
                data={{
                    labels: [candidatos.apellidos[0], candidatos.apellidos[1], candidatos.apellidos[2]],
                    datasets: [
                        {
                            label: 'cantidad de votos',
                            data:[candidatos.votos[0], candidatos.votos[1], candidatos.votos[2]], 
                            backgroundColor: [
                                'rgba(46, 204, 113, 0.7)',
                                'rgba(41, 182, 246, 0.7)',
                                'rgba(108, 52, 131, 0.7)'
                            ]
                        }
                    ]
                }}
                height={400}
                width={600}
                options={{ 
                    scales: {
                        x: {
                            grid: {
                                display: false,
                                borderColor: '#EAEDED',
                            }
                        },
                        y: {
                            grid: {
                                display: false,
                                borderColor: '#EAEDED',
                            }
                        }
                    }
                }}
            />
        </div>
    )
}