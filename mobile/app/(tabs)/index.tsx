import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/Jim-Carrey-ptbr.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">seja muito bem vindo ao nosso show!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Eu o Criador irei falar sobre o show de Truman.</ThemedText>
        <ThemedText type="subtitle">Resumo:</ThemedText>
          <ThemedText>
          O protagonista, Truman Burbank, vive uma vida aparentemente comum em uma cidade perfeita chamada Seahaven.
          Mas o que ele não sabe é que toda a sua vida é, na verdade, um reality show transmitido ao vivo para o mundo
          inteiro desde o seu nascimento. Cada detalhe da sua rotina — sua casa, vizinhos, amigos e até sua esposa — é 
          parte de um grande estúdio, com atores contratados e câmeras escondidas.
          O criador do programa, Christof, controla tudo e justifica sua vigilância dizendo que oferece a Truman uma vida melhor do
          que o mundo real poderia oferecer.
          Com o tempo, Truman começa a notar inconsistências no mundo ao seu redor — coisas fora do lugar, pessoas repetindo ações,
          comportamentos estranhos — e passa a desconfiar que há algo errado. A história se desenvolve com ele tentando entender a verdade e buscando a liberdade.<ThemedText type="defaultSemiBold">no filme acompanhamos o nosso protagonista Truman Burbank que vive uma vida aparentemente comum em uma cidade aparentemente perfeita chamada Seahaven Mas o que ele não sabe é que toda a sua vida é, na verdade, um reality show transmitido ao vivo para o mundo inteiro desde o seu nascimento.</ThemedText> Cada detalhe da sua rotina — sua casa, vizinhos, amigos e até sua esposa — é parte de um grande estúdio, com atores contratados e câmeras escondidas.{' '}
          </ThemedText>
        <ThemedText type="subtitle">Temas Centrais:</ThemedText>
        <ThemedText>
        Controle x Liberdade: A manipulação da vida de Truman representa o controle que a mídia e as estruturas sociais podem ter sobre os indivíduos.
        Realidade x Ilusão: O filme questiona o que é real, o que é construído e até que ponto confiamos no mundo à nossa volta.
        Privacidade: A exposição da vida de Truman desde o nascimento levanta questões éticas sobre vigilância e entretenimento.
        Autoconhecimento: A jornada de Truman é uma metáfora para o processo de despertar da consciência e busca pela verdade.
          
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">falarei um pouco do que acontece no filme</ThemedText>
        <ThemedText>
          no inicio do filme o truman esta vivendo sua vida rotineira por mais um dia quando pequenos erros de 
          continuidade despertam sua curiosidade um refletor cai do ceu bem na frente de truman escrito no refletor
           esta escrito Sirius (sirius) como se fosse uma estrela ele capta por engano uma transmissão de radio
            onde éra usado pela produção do programa e ele começa a perceber um comportamento artificial.  
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">o filme fala de muitas questões filosoficas eu irei citar algumas aqui.</ThemedText>
        <ThemedText>
        1. A alegoria da caverna de Platão
Truman vive em uma realidade fabricada, como os prisioneiros da caverna de Platão, 
que só viam sombras projetadas na parede e achavam que aquilo era a realidade. Quando um deles sai da caverna (como Truman faz), descobre o "mundo real" — a verdade.
2. Panoptismo (Foucault) A vigilância constante a que Truman é submetido lembra o conceito de panóptico, 
onde o controle social é feito através da sensação de estar sempre sendo observado. Isso molda o comportamento das pessoas, mesmo sem haver alguém de fato vigiando o tempo todo.
3. Livre-arbítrio vs. Determinismo Truman é colocado em um mundo onde tudo é determinado por outros. Mas sua vontade
 de sair, de conhecer o mundo, mostra a força do livre-arbítrio humano.


          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
