import './Style.css'

export function Tabela() {
    return (
        <section>

            <table>
                <thead>
                    <tr>
                        <th>Horário</th>
                        <th>Segunda</th>
                        <th>Terça</th>
                        <th>Quarta</th>
                        <th>Quinta</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>19:00</td>
                        <td>Estrutura de Dados</td>
                        <td>Desenvolvimento Front-End</td>
                        <td>Engenharia de Software</td>
                        <td>---</td>
                    </tr>
                    <tr>
                        <td>19:45</td>
                        <td>Estrutura de Dados</td>
                        <td>Engenharia de Software</td>
                        <td>Engenharia de Software</td>
                        <td>Redes de Computadores</td>
                    </tr>
                    <tr>
                        <td>20:45</td>
                        <td>Modelagem de Banco de Dados</td>
                        <td>Engenharia de Software</td>
                        <td>Estrutura de Dados</td>
                        <td>Redes de Computadores</td>
                    </tr>
                    <tr>
                        <td>21:30</td>
                        <td>Modelagem de Banco de Dados</td>
                        <td>---</td>
                        <td>Desenvolvimento Front-End</td>
                        <td>Redes de Computadores</td>
                    </tr>
                    <tr>
                        <td>22:15</td>
                        <td>Modelagem de Banco de Dados</td>
                        <td>---</td>
                        <td>Desenvolvimento Front-End</td>
                        <td>---</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}