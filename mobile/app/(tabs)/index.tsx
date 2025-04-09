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
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">seja muito bem vindo eu desejo a você um bom dia e se não me ver novamente tenha uma boa tarde e boa noite!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">eu vou falar de um filme muito conhecido por alguns chamado o show de truman! </ThemedText>
        <ThemedText>
        lançado em 1998 dirigudo por peter weir e estrelado por jim carrey esse filme é uma mistura de ficção drama e uma pitada de critica social sendo considerado um dos melhores filmes da decada de 90<ThemedText type="defaultSemiBold">no filme acompanhamos o nosso protagonista Truman Burbank que vive uma vida aparentemente comum em uma cidade aparentemente perfeita chamada Seahaven Mas o que ele não sabe é que toda a sua vida é, na verdade, um reality show transmitido ao vivo para o mundo inteiro desde o seu nascimento.</ThemedText> Cada detalhe da sua rotina — sua casa, vizinhos, amigos e até sua esposa — é parte de um grande estúdio, com atores contratados e câmeras escondidas.{' '}
          <ThemedText>
          </ThemedText>
          O criador do programa, Christof, controla tudo e justifica sua vigilância dizendo que oferece a Truman uma vida melhor do que o mundo real poderia oferecer.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">falarei um pouco do que acontece no filme</ThemedText>
        <ThemedText>
          no inicio do filme o truman esta vivendo sua vida rotineira por mais um dia quando pequenos erros de continuidade despertam sua curiosidade um refletor cai do ceu bem na frente de truman escrito no refletor esta escrito Sirius (9 Canis Major) como se fosse uma estrela ele capta por engano uma transmissão de radio onde éra usado pela produção do programa e ele começa a perceber um comportamento artificial  
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
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
