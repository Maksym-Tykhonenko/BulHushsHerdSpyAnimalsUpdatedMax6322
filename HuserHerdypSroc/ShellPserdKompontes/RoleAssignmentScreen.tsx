import herdcards from '../AniheduAsetrds/herdcards';
import ShypaniBunknaLubr from './ShypaniBunknaLubr';
import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { shulbStnofMialsPus } from '../shulbStnofMialsPus';
import FlipCard from './FlipCard';

const { width, height } = Dimensions.get('window');

const LOCATIONS = [
    {
        name: 'MOONLIT CLEARING',
        description: 'A quiet open space where every movement feels exposed under pale light.',
    },
    {
        name: 'OLD PINE GROVE',
        description: 'Tall, dense trees that muffle sound and hide subtle shifts in behavior.',
    },
    {
        name: 'RAVEN\'S WATCH',
        description: 'A high woodland ridge where signals travel far and silence carries weight.',
    },
    {
        name: 'FOGBOUND HOLLOW',
        description: 'Low ground filled with drifting mist—details blur, but patterns remain.',
    },
    {
        name: 'BROKEN ANTLER PATH',
        description: 'A narrow trail marked by old signs of passage and forgotten tracks.',
    },
    {
        name: 'WHISPERING CREEK',
        description: 'Flowing water distorts sound, forcing players to listen more carefully.',
    },
    {
        name: 'NIGHTFALL THICKET',
        description: 'A tightly packed forest where proximity increases tension.',
    },
    {
        name: 'ANCIENT ROOT CIRCLE',
        description: 'Twisted roots form a natural ring—traditionally a place of judgment.',
    },
    {
        name: 'OWLSHADE CANOPY',
        description: 'Thick branches above block moonlight, favoring careful observers.',
    },
    {
        name: 'SILENT FERN FIELD',
        description: 'Soft ground absorbs footsteps; hesitation becomes noticeable.',
    },
];

const ANIMAL_ROLES = [
    { name: 'Owl', image: herdcards.owl },
    { name: 'Raven', image: herdcards.raven },
    { name: 'Lynx', image: herdcards.lynx },
    { name: 'Bear', image: herdcards.bear },
    { name: 'Deer', image: herdcards.deer },
    { name: 'Wolf', image: herdcards.wolf },
];

interface RoleAssignmentScreenProps {
    players: string[];
    onComplete: () => void;
}

interface RoleData {
    name: string;
    description: string;
    location?: string;
    locationDescription?: string;
    isBull: boolean;
    animalImage: any;
}

export default function RoleAssignmentScreen({ players, onComplete }: RoleAssignmentScreenProps) {
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [roles, setRoles] = useState<RoleData[]>([]);
    const [showCard, setShowCard] = useState(false);
    const [cardKey, setCardKey] = useState(0);

    useEffect(() => {
        assignRoles();
    }, []);

    const assignRoles = () => {
        const bullIndex = Math.floor(Math.random() * players.length);
        const selectedLocation = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];

        // Shuffle animal roles
        const shuffledAnimals = [...ANIMAL_ROLES].sort(() => Math.random() - 0.5);

        const assignedRoles: RoleData[] = players.map((_, index) => {
            if (index === bullIndex) {
                return {
                    name: 'Bull',
                    description: 'Stay calm, blend in, and answer confidently—never overexplain. If suspicion rises, redirect attention with simple "normal" facts.',
                    isBull: true,
                    animalImage: herdcards.bull,
                };
            } else {
                const animalRole = shuffledAnimals[index % shuffledAnimals.length];
                return {
                    location: selectedLocation.name,
                    description: 'Observe quietly, ask short clarifying questions, and track who contradicts themselves. Speak rarely, but speak precisely.',
                    isBull: false,
                    name: animalRole.name,
                    animalImage: animalRole.image,
                    locationDescription: selectedLocation.description,
                };
            }
        });

        setRoles(assignedRoles);
    };

    const handleCardRevealed = () => {
        setShowCard(true);
    };

    const handleNext = () => {
        if (currentPlayerIndex < players.length - 1) {
            setCurrentPlayerIndex(currentPlayerIndex + 1);
            setShowCard(false);
            setCardKey(prevKey => prevKey + 1);
        } else {
            onComplete();
        }
    };

    if (roles.length === 0) return null;

    return (
        <View style={{
            flex: 1, backgroundColor: 'transparent', alignItems: 'center',
            // paddingBottom: height * 0.1
        }}>
            <View style={{
                borderColor: '#f4a831',
                backgroundColor: 'rgba(26, 16, 64, 0.85)',
                marginTop: height * 0.03,
                borderRadius: width * 0.12,
                paddingVertical: height * 0.018,
                borderWidth: 2.5,
                paddingHorizontal: width * 0.08,
            }}>
                <Text style={{
                    fontFamily: shulbStnofMialsPus.anipinsSB, fontSize: width * 0.048, color: '#f4a831',
                }}>
                    {players[currentPlayerIndex]}
                </Text>
            </View>

            <FlipCard onRevealed={handleCardRevealed} key={cardKey} role={roles[currentPlayerIndex]}
            />

            {showCard && (
                <ShypaniBunknaLubr
                    onPress={handleNext}
                    tubonTixiatrAyps={currentPlayerIndex < players.length - 1 ? 'GOT IT' : 'START GAME'}
                    istilyisef={{
                        position: 'absolute',
                        bottom: height * 0.019,
                        alignSelf: 'center',
                    }}
                />
            )}
        </View>
    );
}
