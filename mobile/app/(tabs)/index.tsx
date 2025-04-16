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
          source={require('@/assets/images/jim.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">seja muito bem vindo ao nosso show!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Eu o Criador irei falar sobre um dos meus atores preferidos Jim Carrey.</ThemedText>
        <ThemedText type="subtitle">informações basicas:</ThemedText>
          <ThemedText>
          Nome completo: James Eugene Carrey
          Nascimento: 17 de janeiro de 1962, em Newmarket, Ontário, Canadá
          Nacionalidade: Canadense de nascimento, naturalizado cidadão americano em 2004
          Família: Filho de uma dona de casa e de um músico/contador; cresceu em uma família humilde
          Desde cedo demonstrou talento para imitações e comédia

{' '}
          </ThemedText>
        <ThemedText type="subtitle">inicio da carreira</ThemedText>
        <ThemedText>
        Começou como comediante de stand-up aos 15 anos em clubes de Toronto
        Passou dificuldades financeiras na juventude; sua família chegou a viver em um carro por um tempo
        Ganhou visibilidade no final dos anos 80 com apresentações em programas de TV e shows de humor
        "In Living Color" (1990–1994) foi um divisor de águas: lá, Jim se destacou com personagens absurdos e carismáticos, como "Fire Marshal Bill"
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">seus filmes de sucesso dos anos 90.</ThemedText>
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
    height: 300, // aumentei aqui
    width: 500,  // e aqui
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});


