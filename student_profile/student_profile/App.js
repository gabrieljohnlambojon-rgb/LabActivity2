import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient

      colors={['#0D47A1', '#90CAF9']}
      style={styles.container}
      start={{ x: 0.5, y: 0.5 }}
      end={{ x: 1.0, y: 1.0 }}
      type="radial">
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get
        a shareable URL.
      </Text>

      <Card style={styles.card}>
        <Card.Content>
          <ScrollView contentContainerStyle={styles.profileContainer}>
            <Text style={styles.title}>Student Profile</Text>

            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>Gabriel John Lambojon</Text>

            <Text style={styles.label}>Age:</Text>
            <Text style={styles.value}>21</Text>

            <Text style={styles.label}>Course / Year / Section:</Text>
            <Text style={styles.value}>
              BS Computer Science / 3rd Year / CS-3-3
            </Text>

            <Text style={styles.label}>About me:</Text>
            <Text style={styles.value}>
              A passionate computer science student who loves coding, game
              development, and learning new technologies.
            </Text>

            <Text style={styles.label}>Achievements:</Text>
            <Text style={styles.value}>
              • Completed personal coding
              projects
            </Text>

            <Text style={styles.label}>Skills:</Text>
            <Text style={styles.value}>
              • Java, C++, Python{'\n'}• React Native, HTML/CSS{'\n'}• Game
              development
            </Text>
          </ScrollView>
        </Card.Content>
      </Card>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  card: {
    marginHorizontal: 12,
    borderRadius: 20,
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // frosted glass
    borderColor: 'rgba(255, 255, 255, 0.4)',
    borderWidth: 1,
    backdropFilter: 'blur(10px)', // (web preview only)
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
    elevation: 8,
  },
  profileContainer: {
    paddingVertical: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
    color: '#ffffff',
  },
  label: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: '700',
    color: '#E3F2FD',
  },
  value: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 2,
    lineHeight: 20,
  },
});
