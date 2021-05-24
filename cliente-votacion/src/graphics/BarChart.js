import React from 'react';
import { Bar } from 'react-chartjs-2'

export default function BarChart(props) {
    const candidatos = props

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
                                'rgba(255, 241, 118, 0.7)',
                                'rgba(38, 198, 218, 0.7)',
                                'rgba(244, 67, 54, 0.7)'
                            ]
                        }
                    ]
                }}
                height={400}
                width={600}
                options={{ 
                    responsive: true
                }}
            />
        </div>
    )
}