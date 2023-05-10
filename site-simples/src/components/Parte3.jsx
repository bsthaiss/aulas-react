import './Style.css'
import fotoArgentina from '../assets/foto-argentina.png'

export function Parte3() {
    return (
        <section>
            <h2>Final</h2>

                <p>
                    Foi o desfecho perfeito para uma Copa do Mundo da FIFA inesquecível, com Argentina e França entregando um clássico instantâneo no Lusail Stadium.
                    A Albiceleste pareceu estar no controle, chegando ao intervalo com dois gols de vantagem graças a Lionel Messi e Ángel Di María. Porém, a França conseguiu uma emocionante reação com os dois gols do astro Kylian Mbappé.
                </p>

                <p>
                    Em uma prorrogação de tirar o fôlego, a Argentina reassumiu a liderança com o segundo gol de Messi, mas o astro francês brilhou novamente e o mesmo empatou de novo. No fim, a partida foi decidida nos pênaltis, e Gonzalo Montiel decretou o histórico triunfo da Argentina.
                </p>

                <div id='pagina-tres'>
                    <img src={fotoArgentina} alt="Campeã da Copa do Mundo 2022"  id='final'/>
                </div>

            <h2>Premiações</h2>

            <p>
                Após a entrega da taça para os argentinos, foi o momento das premiações individuais. Onde Lionel Messi, campeão e capitão da Argentina, na edição, ganhou o prêmio de melhor jogador do torneio.
                Enzo Fernández, também campeão, recebeu o prêmio de revelação da competição.
            </p>

            <p>
                Kylian Mbappé, recebeu o prêmio de segundo melhor jogador do torneio e também a Chuteira de Ouro, pois também foi o artilheiro da Copa, com 8 gols. Luka Modric, foi considerado o terceiro melhor jogador.
                O goleiro Dibu Martínez, recebeu a Luva de Ouro, por suas atuações, durante a campanha da Argentina, sendo decisivo nas penalidades.
            </p>

            <h2>Artilheiros</h2>

            <p>
                Os principais artilheiros da Copa do Mundo do Catar foram, respectivamente:
            </p>

            <ul>
                <li>Kylian Mbappé, com 8 gols.</li>
                <li>Lionel Messia, com 7 gols.</li>
                <li>Julián Álvarez, com 4 gols.</li>
                <li>Olivier Giroud, com 4 gols.</li>
                <li>Álvaro Morata, com 3 gols.</li>
                <li>Cody Gakpo, com 3 gols.</li>
                <li>Enner Valencia, com 3 gols.</li>
                <li>Gonçalo Ramos, com 3 gols.</li>
                <li>Marcus Rashford, com 3 gols.</li>
                <li>Richarlison, com 3 gols.</li>
            </ul>
        </section>
    );
}