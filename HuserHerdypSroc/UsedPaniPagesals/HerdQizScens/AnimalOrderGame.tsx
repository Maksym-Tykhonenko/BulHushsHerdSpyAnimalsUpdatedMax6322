import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity, Animated } from 'react-native';
import { shulbStnofMialsPus } from '../../shulbStnofMialsPus';

const { width: gihiws, height: rofeh } = Dimensions.get('window');

const ANIMALS = [
    { id: 'bull', name: 'Bull', image: require('../../AniheduAsetrds/HesedpImazegsInas/gaeminals/bull.png') },
    { id: 'bear', name: 'Bear', image: require('../../AniheduAsetrds/HesedpImazegsInas/gaeminals/bear.png') },
    { id: 'wolf', name: 'Wolf', image: require('../../AniheduAsetrds/HesedpImazegsInas/gaeminals/wolf.png') },
    { id: 'owl', name: 'Owl', image: require('../../AniheduAsetrds/HesedpImazegsInas/gaeminals/owl.png') },
    { id: 'deer', name: 'Deer', image: require('../../AniheduAsetrds/HesedpImazegsInas/gaeminals/deer.png') },
    { id: 'lynx', name: 'Lynx', image: require('../../AniheduAsetrds/HesedpImazegsInas/gaeminals/lynx.png') },
];

const GAME_TIME = 10;

interface Props {
    onGameEnd: (score: number, reason: 'timeout' | 'wrong') => void;
}

const getRandomAnimals = (count: number) => {
    const shuffled = [...ANIMALS].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
};

const getFieldAnimals = (targetAnimals: typeof ANIMALS) => {
    const fieldAnimals: { id: string; name: string; image: any; x: number; y: number }[] = [];
    const positions = [
        { x: gihiws * 0.08, y: rofeh * 0.28 },
        { x: gihiws * 0.6, y: rofeh * 0.35 },
        { x: gihiws * 0.05, y: rofeh * 0.52 },
        { x: gihiws * 0.08, y: rofeh * 0.72 },
        { x: gihiws * 0.55, y: rofeh * 0.68 },
        { x: gihiws * 0.35, y: rofeh * 0.45 },
    ];

    const shuffledPositions = [...positions].sort(() => Math.random() - 0.5);
    const allAnimals = [...ANIMALS].sort(() => Math.random() - 0.5);
    
    allAnimals.forEach((animal, index) => {
        if (index < shuffledPositions.length) {
            fieldAnimals.push({
                ...animal,
                x: shuffledPositions[index].x,
                y: shuffledPositions[index].y,
            });
        }
    });

    return fieldAnimals;
};

export default function AnimalOrderGame({ onGameEnd }: Props) {
    const [timeLeft, setTimeLeft] = useState(GAME_TIME);
    const [score, setScore] = useState(0);
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [targetSequence, setTargetSequence] = useState<typeof ANIMALS>([]);
    const [fieldAnimals, setFieldAnimals] = useState<ReturnType<typeof getFieldAnimals>>([]);
    const [gameOver, setGameOver] = useState(false);
    const [endReason, setEndReason] = useState<'timeout' | 'wrong'>('timeout');
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const progressAnim = useRef(new Animated.Value(1)).current;
    const [animationDuration, setAnimationDuration] = useState(GAME_TIME * 1000);

    const generateNewTask = () => {
        const sequenceLength = Math.min(3, ANIMALS.length);
        const newSequence = getRandomAnimals(sequenceLength);
        setTargetSequence(newSequence);
        setFieldAnimals(getFieldAnimals(newSequence));
        setCurrentTaskIndex(0);
    };

    useEffect(() => {
        generateNewTask();
    }, []);

    const startTimer = (duration: number) => {
        if (timerRef.current) clearInterval(timerRef.current);
        
        progressAnim.setValue(1);
        setAnimationDuration(duration);
        
        Animated.timing(progressAnim, {
            toValue: 0,
            duration: duration,
            useNativeDriver: false,
        }).start();

        timerRef.current = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timerRef.current!);
                    setEndReason('timeout');
                    setGameOver(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    useEffect(() => {
        if (gameOver) return;
        startTimer(GAME_TIME * 1000);

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [gameOver]);

    useEffect(() => {
        if (gameOver) {
            onGameEnd(score, endReason);
        }
    }, [gameOver]);

    const handleAnimalPress = (animalId: string) => {
        if (gameOver) return;

        const expectedAnimal = targetSequence[currentTaskIndex];
        if (expectedAnimal && animalId === expectedAnimal.id) {
            setScore(prev => prev + 1);
            if (currentTaskIndex === targetSequence.length - 1) {
                setTimeLeft(prev => {
                    const newTime = Math.min(prev + 5, 10);
                    startTimer(newTime * 1000);
                    return newTime;
                });
                generateNewTask();
            } else {
                setCurrentTaskIndex(prev => prev + 1);
            }
        } else {
            setEndReason('wrong');
            setGameOver(true);
        }
    };

    const progressWidth = progressAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%'],
    });

    return (
        <View style={{ flex: 1 }}>
            {/* Task Panel */}
            <View style={{
                position: 'absolute',
                top: rofeh * 0.02,
                alignSelf: 'center',
                backgroundColor: '#1A1139',
                borderRadius: gihiws * 0.04,
                borderWidth: 2,
                borderColor: '#FFB301',
                paddingHorizontal: gihiws * 0.05,
                paddingVertical: rofeh * 0.015,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
            }}>
                {targetSequence.map((animal, index) => (
                    <View key={index} style={{
                        marginHorizontal: gihiws * 0.02,
                        opacity: index < currentTaskIndex ? 0.4 : 1,
                    }}>
                        <Image
                            source={animal.image}
                            style={{
                                width: gihiws * 0.12,
                                height: gihiws * 0.12,
                                resizeMode: 'contain',
                            }}
                        />
                        {index < currentTaskIndex && (
                            <View style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Image
                                    source={require('../../AniheduAsetrds/HesedpImazegsInas/truth.png')}
                                    style={{
                                        width: gihiws * 0.06,
                                        height: gihiws * 0.06,
                                        resizeMode: 'contain',
                                    }}
                                />
                            </View>
                        )}
                    </View>
                ))}
            </View>

            {/* Timer Bar */}
            <View style={{
                position: 'absolute',
                top: rofeh * 0.12,
                alignSelf: 'center',
                width: gihiws * 0.7,
                height: rofeh * 0.015,
                backgroundColor: '#2B2360',
                borderRadius: gihiws * 0.02,
                overflow: 'hidden',
                zIndex: 10,
            }}>
                <Animated.View style={{
                    width: progressWidth,
                    height: '100%',
                    backgroundColor: timeLeft <= 5 ? '#FF4444' : '#FFB301',
                    borderRadius: gihiws * 0.02,
                }} />
            </View>

            {/* Score */}
            <View style={{
                position: 'absolute',
                top: rofeh * 0.15,
                alignSelf: 'center',
                zIndex: 10,
            }}>
                <Text style={{
                    fontFamily: shulbStnofMialsPus.anipinsM,
                    fontSize: gihiws * 0.05,
                    color: '#FFB301',
                }}>Score: {score}</Text>
            </View>

            {/* Field Animals */}
            {fieldAnimals.map((animal, index) => (
                <TouchableOpacity
                    key={`${animal.id}-${index}`}
                    onPress={() => handleAnimalPress(animal.id)}
                    style={{
                        position: 'absolute',
                        left: animal.x,
                        top: animal.y,
                        zIndex: 5,
                    }}
                >
                    <Image
                        source={animal.image}
                        style={{
                            width: gihiws * 0.22,
                            height: gihiws * 0.22,
                            resizeMode: 'contain',
                        }}
                    />
                </TouchableOpacity>
            ))}
        </View>
    );
}
