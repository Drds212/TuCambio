import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/colors";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Cabecera */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>TuCambio</Text>
            <Text style={styles.headerSubtitle}>Tasa de cambio USD / VES</Text>
          </View>
        </View>

        {/* Tarjetas de demostración de la paleta Dark */}
        <View style={styles.cardsContainer}>
          {/* Card Dólar Oficial */}
          <View style={[styles.card, { borderColor: Colors.officialMuted }]}>
            <View style={styles.cardHeader}>
              <Text style={[styles.cardTag, { color: Colors.official }]}>
                BCV OFICIAL
              </Text>
              <Text style={styles.cardSource}>ve.dolarapi.com</Text>
            </View>
            <Text style={styles.cardRatePlaceholder}>Bs. --,--</Text>
            <Text style={styles.cardDate}>Conectando con la API...</Text>
          </View>

          {/* Card Dólar Paralelo */}
          <View style={[styles.card, { borderColor: Colors.parallelMuted }]}>
            <View style={styles.cardHeader}>
              <Text style={[styles.cardTag, { color: Colors.parallel }]}>
                PARALELO
              </Text>
              <Text style={styles.cardSource}>Promedio</Text>
            </View>
            <Text style={styles.cardRatePlaceholder}>Bs. --,--</Text>
            <Text style={styles.cardDate}>Conectando con la API...</Text>
          </View>
        </View>

        {/* Pie de pantalla */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.textPrimary,
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  badgeLive: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primaryMuted,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(16, 185, 129, 0.3)",
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.primary,
    marginRight: 6,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "700",
    color: Colors.primary,
    letterSpacing: 0.5,
  },
  cardsContainer: {
    gap: 16,
    flex: 1,
  },
  card: {
    backgroundColor: Colors.card,
    borderRadius: 18,
    padding: 20,
    borderWidth: 1.5,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  cardTag: {
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1,
  },
  cardSource: {
    fontSize: 12,
    color: Colors.textMuted,
  },
  cardRatePlaceholder: {
    fontSize: 32,
    fontWeight: "800",
    color: Colors.textPrimary,
    marginBottom: 6,
  },
  cardDate: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  footer: {
    alignItems: "center",
    paddingVertical: 16,
  },
  footerText: {
    fontSize: 13,
    color: Colors.textMuted,
  },
});
