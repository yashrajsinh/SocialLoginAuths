import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SOCIALS } from '../providers/IconsProvide';

const RegisterScreen = ({ route }: any) => {
  const { provider, token, name, email, photo, id } = route.params || {};

  const cleanPhoto = photo?.replace('=s96-c', '=s400-c');

  const social = Object.values(SOCIALS).find(
    item => item.provider === provider,
  );

  return (
    <View style={styles.container}>
      {/* PROFILE */}
      <View style={styles.top}>
        {cleanPhoto && (
          <Image
            source={{ uri: cleanPhoto }}
            style={styles.avatar}
            resizeMode="cover"
          />
        )}

        {name && <Text style={styles.name}>{name}</Text>}
        {email && <Text style={styles.email}>{email}</Text>}
      </View>

      {/* CARD */}
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <Text style={styles.smallLabel}>Signed in with</Text>

          <View style={styles.providerRow}>
            {social?.icon && <Image source={social.icon} style={styles.icon} />}
            <Text style={styles.provider}>{provider}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        {id && <InfoRow label="User ID" value={id} />}
        {token && <InfoRow label="Access Token" value={token} small />}
      </View>
    </View>
  );
};

const InfoRow = ({ label, value, small = false }: any) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text
      style={[styles.infoValue, small && { fontSize: 11 }]}
      numberOfLines={2}
    >
      {value}
    </Text>
  </View>
);

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1220',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  top: {
    alignItems: 'center',
    marginBottom: 35,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#1E293B',
  },

  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  email: {
    fontSize: 13,
    color: '#94A3B8',
    marginTop: 3,
  },

  card: {
    backgroundColor: '#111827',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#1F2937',
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  smallLabel: {
    fontSize: 12,
    color: '#6B7280',
  },

  providerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  icon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },

  provider: {
    fontSize: 13,
    color: '#E5E7EB',
    fontWeight: '600',
  },

  divider: {
    height: 1,
    backgroundColor: '#1F2937',
    marginVertical: 14,
  },

  infoRow: {
    marginBottom: 12,
  },

  infoLabel: {
    fontSize: 11,
    color: '#6B7280',
    marginBottom: 2,
  },

  infoValue: {
    fontSize: 13,
    color: '#F9FAFB',
    fontWeight: '500',
  },
});
