import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Welcome() {
  return (
    <ImageBackground
      source={require('@/assets/images/academy-background.png')}
      style={styles.welcome}
      resizeMode="cover">
      <View style={styles.overlay}>
        <Image
          style={styles.logo}
          source={require('@/assets/images/crest.png')}
          accessibilityLabel="Academia Society"
          resizeMode="contain"
        />

        <View style={styles.heading}>
          <Text style={styles.h1}>Home based</Text>

          <Text style={styles.h2}>
            <Text style={styles.em}>Academia</Text> Society
          </Text>

          <Text style={styles.description}>CREATE YOUR OWN BOOK CLUB</Text>
        </View>

        <View style={styles.footer}>
          <Pressable style={styles.appleButton} accessibilityRole="button">
            <Image
              style={styles.appleIcon}
              source={require('@/assets/images/apple.png')}
              accessibilityLabel="Apple"
              resizeMode="contain"
            />
            <Text style={styles.appleText}>CONTINUE WITH APPLE</Text>
          </Pressable>

          <View style={styles.socialButtons}>
            <Pressable
              style={styles.socialButton}
              accessibilityRole="button"
              accessibilityLabel="Continue with Google">
              <Text style={styles.socialText}>G</Text>
            </Pressable>

            <Pressable
              style={styles.socialButton}
              accessibilityRole="button"
              accessibilityLabel="Continue with Facebook">
              <Text style={styles.socialText}>f</Text>
            </Pressable>

            <Pressable
              style={styles.socialButton}
              accessibilityRole="button"
              accessibilityLabel="Continue with email">
              <Text style={styles.socialText}>✉</Text>
            </Pressable>
          </View>

          <Text style={styles.terms}>
            By continuing I agree with the{'\n'}
            Terms & Conditions and Privacy & Cookie Policy
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 80,
    paddingBottom: 40,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  logo: {
    width: 193,
    height: 173,
  },
  heading: {
    alignItems: 'center',
  },
  h1: {
    fontFamily: 'serif',
    fontSize: 44,
    lineHeight: 64,
    color: '#f3ede0',
  },
  h2: {
    fontFamily: 'serif',
    fontSize: 44,
    lineHeight: 64,
    color: '#f3ede0',
  },
  em: {
    fontStyle: 'italic',
  },
  description: {
    marginTop: 24,
    fontSize: 13,
    letterSpacing: 1.5,
    color: '#cbbf9f',
  },
  footer: {
    width: '100%',
    alignItems: 'center',
  },
  appleButton: {
    width: '100%',
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    borderRadius: 29,
    backgroundColor: '#7a705f',
  },
  appleIcon: {
    width: 22,
    height: 22,
  },
  appleText: {
    fontSize: 14,
    letterSpacing: 1.5,
    color: '#f3ede0',
  },
  socialButtons: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    marginTop: 12,
  },
  socialButton: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: 'rgba(122, 112, 95, 0.6)',
  },
  socialText: {
    fontSize: 18,
    color: '#f3ede0',
  },
  terms: {
    marginTop: 16,
    fontSize: 11,
    lineHeight: 16,
    textAlign: 'center',
    color: '#cbbf9f',
  },
});