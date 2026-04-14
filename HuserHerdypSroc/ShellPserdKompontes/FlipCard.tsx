import React, { useRef, useState } from 'react';
import { View, Text, Dimensions, Animated, Image, ImageBackground } from 'react-native';
import { shulbStnofMialsPus } from '../shulbStnofMialsPus';
import ShypaniBunknaLubr from './ShypaniBunknaLubr';

const { width, height } = Dimensions.get('window');

interface RoleData {
    name: string;
    description: string;
    location?: string;
    locationDescription?: string;
    isBull: boolean;
    animalImage: any;
}

interface FlipCardProps {
    role: RoleData;
    onRevealed: () => void;
}

export default function FlipCard({ role, onRevealed }: FlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const flipAnimation = useRef(new Animated.Value(0)).current;

    const flipCard = () => {
        if (isFlipped) return;

        Animated.spring(flipAnimation, {
            toValue: 180,
            friction: 8,
            tension: 10,
            useNativeDriver: true,
        }).start(() => {
            setIsFlipped(true);
            onRevealed();
        });
    };

    const frontInterpolate = flipAnimation.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg'],
    });

    const backInterpolate = flipAnimation.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg'],
    });

    const frontOpacity = flipAnimation.interpolate({
        inputRange: [89, 90],
        outputRange: [1, 0],
    });

    const backOpacity = flipAnimation.interpolate({
        inputRange: [89, 90],
        outputRange: [0, 1],
    });

    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: width,
            flexDirection: 'column',
            flex: 0,
            // marginTop: - height * 0.12,
        }}>
            <View style={{
                width: width * 0.9,
                height: height * 0.55,
                alignItems: 'center',
                // justifyContent: 'center',
            }}>
                {/* Front Side */}
                <Animated.View
                    style={{
                        position: 'absolute',
                        width: width * 0.8,
                        height: height * 0.4,
                        backfaceVisibility: 'hidden',
                        transform: [{ rotateY: frontInterpolate }],
                        opacity: frontOpacity,
                    }}
                >
                    <ImageBackground
                        source={require('../AniheduAsetrds/HesedpImazegsInas/tvarynky/backardqest.png')}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        resizeMode="contain"
                    >
                        {/* ...no button here... */}
                    </ImageBackground>
                </Animated.View>

                {/* Back Side */}
                <Animated.View
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backfaceVisibility: 'hidden',
                        transform: [{ rotateY: backInterpolate }],
                        opacity: backOpacity,
                    }}
                >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
                        <Image
                            source={role.animalImage}
                            style={{
                                width: width * 0.8,
                                height: height * 0.4,
                                resizeMode: 'contain',
                            }}
                        />

                        {role.location && role.locationDescription && (
                            <View style={{
                                backgroundColor: '#1A1139',
                                borderRadius: width * 0.06,
                                borderWidth: 3,
                                borderColor: '#f4a831',
                                padding: width * 0.04,
                                width: width * 0.85,
                                // marginBottom: height * 0.02,
                                top: - height * 0.04,
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: height * 0.01,
                                }}>
                                    <Image
                                        source={require('../AniheduAsetrds/HesedpImazegsInas/sechr.png')}
                                        style={{ width: width * 0.1, height: width * 0.1, resizeMode: 'contain', marginRight: width * 0.02 }}
                                    />
                                    <Text style={{
                                        fontFamily: shulbStnofMialsPus.anipinsSB,
                                        fontSize: width * 0.055,
                                        color: '#f4a831',
                                        textTransform: 'uppercase',
                                    }}>
                                        {role.location}
                                    </Text>
                                </View>
                                <Text style={{
                                    fontFamily: shulbStnofMialsPus.anipinsR,
                                    fontSize: width * 0.037,
                                    color: 'white',
                                    textAlign: 'center',
                                    lineHeight: width * 0.053,
                                }}>
                                    {role.locationDescription}
                                </Text>
                            </View>
                        )}

                        {role.isBull && (
                            <View style={{
                                backgroundColor: '#1A1139',
                                borderRadius: width * 0.06,
                                borderWidth: 3,
                                borderColor: '#f4a831',
                                padding: width * 0.04,
                                width: width * 0.85,
                                marginBottom: height * 0.02,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Image
                                    source={require('../AniheduAsetrds/HesedpImazegsInas/sechr.png')}
                                    style={{ width: width * 0.1, height: width * 0.1, resizeMode: 'contain', marginRight: width * 0.02 }}
                                />
                                <Text style={{
                                    fontFamily: shulbStnofMialsPus.anipinsSB,
                                    fontSize: width * 0.1,
                                    color: '#f4a831',
                                }}>
                                    ???
                                </Text>
                            </View>
                        )}
                    </View>
                </Animated.View>
            </View>
            {!isFlipped && (
                
                    <ShypaniBunknaLubr
                        tubonTixiatrAyps='PRESS TO SEE YOUR ROLE'
                        onPress={flipCard}
                        istilyisef={{
                            width: width * 0.64,
                        }}
                        inshSizmrInao={width * 0.04}
                    />
            )}
        </View>
    );
}
