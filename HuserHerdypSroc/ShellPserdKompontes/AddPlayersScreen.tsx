import { shulbStnofMialsPus } from '../shulbStnofMialsPus';
import { Dimensions, TouchableOpacity, ScrollView, Image, View, TextInput } from 'react-native';
import ShypaniBunknaLubr from './ShypaniBunknaLubr';
import React, { useState } from 'react';

const { width, height } = Dimensions.get('window');

interface AddPlayersScreenProps {
    onConfirm: (players: string[]) => void;
    onBack: () => void;
}

export default function AddPlayersScreen({ onConfirm, onBack }: AddPlayersScreenProps) {
    const [players, setPlayers] = useState<string[]>(['Player 1', 'Player 2', 'Player 3']);

    const addPlayer = () => {
        if (players.length < 10) {
            setPlayers([...players, `Player ${players.length + 1}`]);
        }
    };

    const removePlayer = (index: number) => {
        if (players.length > 3) {
            setPlayers(players.filter((_, i) => i !== index));
        }
    };

    const updatePlayerName = (index: number, newName: string) => {
        const updatedPlayers = [...players];
        updatedPlayers[index] = newName;
        setPlayers(updatedPlayers);
    };

    return (
        <View style={{ backgroundColor: 'transparent', flex: 1, paddingHorizontal: width * 0.05 }}>
            <View style={{ flex: 1, }}>
                <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingVertical: height * 0.02, paddingBottom: height * 0.05 }}
                >
                    {players.map((player, index) => (
                        <View key={index}
                            style={{ alignItems: 'center', marginBottom: height * 0.018, flexDirection: 'row', }}
                        >
                            <View style={{
                                paddingHorizontal: width * 0.06,
                                borderColor: '#f4a831',
                                paddingVertical: height * 0.015,
                                flex: 1,
                                backgroundColor: 'rgba(26, 16, 64, 0.9)',
                                borderWidth: 2.5,
                                borderRadius: width * 0.12,
                            }}
                            >
                                <TextInput value={player} maxLength={20} onChangeText={(text) => updatePlayerName(index, text)} style={{

                                    padding: 0,
                                    fontFamily: shulbStnofMialsPus.anipinsSB,
                                    color: '#f4a831',
                                    fontSize: width * 0.048,
                                    paddingVertical: height * 0.007,
                                    textAlign: 'left',
                                }}
                                    placeholderTextColor="#f4a83180"
                                    placeholder={`Player ${index + 1}`}
                                />
                            </View>
                            {index >= 3 && (
                                <TouchableOpacity  onPress={() => removePlayer(index)}
                                    style={{ marginLeft: width * 0.03,
                                    }}
                                >  <Image
                                        source={require('../AniheduAsetrds/HesedpImazegsInas/minus.png')}
                                        style={{ width: width * 0.14, height: width * 0.14, resizeMode: 'contain' }}
                                    />
                                </TouchableOpacity>
                            )}
                        </View>
                    ))}

                    <View style={{ alignItems: 'center', marginTop: height * 0.02 }}>
                        <TouchableOpacity
                            disabled={players.length >= 7}
                            onPress={addPlayer}
                            style={{ opacity: players.length >= 7 ? 0 : 1 }}
                        >
                            <Image
                                source={require('../AniheduAsetrds/HesedpImazegsInas/plus.png')}
                                style={{ width: width * 0.16, height: width * 0.16, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

            <View style={{ paddingBottom: height * 0.05, alignItems: 'center' }}>
                <ShypaniBunknaLubr
                    onPress={() => onConfirm(players)}
                    tubonTixiatrAyps='NEXT'
                    istilyisef={{ width: width * 0.65 }}
                />
            </View>
        </View>
    );
}
