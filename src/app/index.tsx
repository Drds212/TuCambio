import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/colors";

type RateType = "oficial" | "paralelo";

interface RateConfig {
  id: RateType;
  label: string;
  sourceName: string;
  badgeLabel: string;
  accentColor: string;
  accentMuted: string;
  description: string;
}

const RATE_CONFIGS: Record<RateType, RateConfig> = {
  oficial: {
    id: "oficial",
    label: "BCV Oficial",
    sourceName: "Banco Central de Venezuela",
    badgeLabel: "TASA OFICIAL",
    accentColor: Colors.official,
    accentMuted: Colors.officialMuted,
    description: "Tasa BCV",
  },
  paralelo: {
    id: "paralelo",
    label: "Paralelo",
    sourceName: "Promedio paralelo",
    badgeLabel: "Promedio paralelo",
    accentColor: Colors.parallel,
    accentMuted: Colors.parallelMuted,
    description: "Promedio de cambio informal",
  },
};

export default function HomeScreen() {
  const [selectedRate, setSelectedRate] = useState<RateType>("oficial");
  const currentConfig = RATE_CONFIGS[selectedRate];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Cabecera */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>TuCambio</Text>
          <Text style={styles.headerSubtitle}>Tasa de cambio USD / VES</Text>
        </View>

        {/* Módulo Principal de Cotización (Hero Card) */}
        <View
          style={[
            styles.heroCard,
            {
              borderColor: currentConfig.accentMuted,
              shadowColor: currentConfig.accentColor,
            },
          ]}
        >
          {/* Top de la Tarjeta */}
          <View style={styles.heroCardHeader}>
            <View
              style={[
                styles.heroBadge,
                {
                  backgroundColor: currentConfig.accentMuted,
                  borderColor: currentConfig.accentColor,
                },
              ]}
            >
              <Text
                style={[
                  styles.heroBadgeText,
                  { color: currentConfig.accentColor },
                ]}
              >
                {currentConfig.badgeLabel}
              </Text>
            </View>
            <Text style={styles.heroSourceText}>
              {currentConfig.sourceName}
            </Text>
          </View>

          {/* Valor Principal */}
          <View style={styles.heroRateSection}>
            <Text style={styles.heroRatePrefix}>1 USD equivale a</Text>
            <Text style={styles.heroRateValue}>Bs. --,--</Text>
            <Text style={styles.heroDescription}>
              {currentConfig.description}
            </Text>
          </View>

          {/* Footer del Módulo */}
          <View style={styles.heroFooter}>
            <View style={styles.heroFooterItem}>
              <Text style={styles.heroFooterLabel}>Última actualización</Text>
              <Text style={styles.heroFooterValue}>
                Conectando con DolarApi...
              </Text>
            </View>
            <View style={styles.statusPill}>
              <View
                style={[
                  styles.statusDot,
                  { backgroundColor: currentConfig.accentColor },
                ]}
              />
              <Text style={styles.statusText}>En espera</Text>
            </View>
          </View>
        </View>

        {/* Selector de Tasa (Segmented Control) ahora debajo de la tarjeta */}
        <View style={styles.selectorContainer}>
          {(["oficial", "paralelo"] as RateType[]).map((type) => {
            const config = RATE_CONFIGS[type];
            const isActive = selectedRate === type;

            return (
              <Pressable
                key={type}
                onPress={() => setSelectedRate(type)}
                style={({ pressed }) => [
                  styles.selectorButton,
                  isActive && {
                    backgroundColor: Colors.card,
                    borderColor: config.accentColor,
                  },
                  pressed && { opacity: 0.8 },
                ]}
              >
                <View
                  style={[
                    styles.selectorDot,
                    {
                      backgroundColor: isActive
                        ? config.accentColor
                        : Colors.textMuted,
                    },
                  ]}
                />
                <Text
                  style={[
                    styles.selectorButtonText,
                    isActive && {
                      color: Colors.textPrimary,
                      fontWeight: "700",
                    },
                  ]}
                >
                  {config.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* Espacio reservado para las siguientes funcionalidades */}
        <View style={styles.bottomPlaceholder}>
          <Text style={styles.bottomPlaceholderText}>
            Toca el selector para alternar entre el Dólar Oficial y el Paralelo
          </Text>
        </View>
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
  },
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "800",
    color: Colors.textPrimary,
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  // Módulo Principal (Hero Card)
  heroCard: {
    backgroundColor: Colors.card,
    borderRadius: 24,
    padding: 24,
    borderWidth: 1.5,
    minHeight: 260,
    justifyContent: "space-between",
    elevation: 4,
    marginBottom: 16,
  },
  heroCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heroBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
  },
  heroBadgeText: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 0.8,
  },
  heroSourceText: {
    fontSize: 12,
    color: Colors.textMuted,
    fontWeight: "500",
  },
  heroRateSection: {
    marginVertical: 20,
  },
  heroRatePrefix: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: "500",
    marginBottom: 6,
  },
  heroRateValue: {
    fontSize: 46,
    fontWeight: "800",
    color: Colors.textPrimary,
    letterSpacing: -1,
  },
  heroDescription: {
    fontSize: 13,
    color: Colors.textMuted,
    marginTop: 8,
  },
  heroFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.06)",
    paddingTop: 16,
  },
  heroFooterItem: {
    flex: 1,
  },
  heroFooterLabel: {
    fontSize: 11,
    color: Colors.textMuted,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  heroFooterValue: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  statusPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surface,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  statusText: {
    fontSize: 11,
    color: Colors.textSecondary,
    fontWeight: "600",
  },
  // Selector (Segmented Bar)
  selectorContainer: {
    flexDirection: "row",
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 4,
    borderWidth: 1,
    borderColor: Colors.surfaceBorder,
    marginBottom: 16,
  },
  selectorButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "transparent",
  },
  selectorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  selectorButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.textSecondary,
  },
  bottomPlaceholder: {
    marginTop: 8,
    padding: 16,
    borderRadius: 14,
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.04)",
    alignItems: "center",
  },
  bottomPlaceholderText: {
    fontSize: 12,
    color: Colors.textMuted,
    textAlign: "center",
  },
});
