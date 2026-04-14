import { View, Text, Dimensions, Image } from 'react-native';
import ResultScreen from './ResultScreen';
import { shulbStnofMialsPus } from '../../shulbStnofMialsPus';
import ShypaniBunknaLubr from '../../ShellPserdKompontes/ShypaniBunknaLubr';
import QuizScreen from './QuizScreen';
import AnimalOrderGame from './AnimalOrderGame';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';

const { width: gihiws, height: rofeh } = Dimensions.get('window');

const QUESTIONS = [
    { word: 'Snowflake', options: ['Ice', 'Sand', 'Ash'], correct: 0 },
    { word: 'Roadmap', options: ['Plan', 'Sleep', 'Freeze'], correct: 0 },
    { word: 'Drum', options: ['Rhythm', 'Silence', 'Glass'], correct: 0 },
    { word: 'Feather', options: ['Light', 'Heavy', 'Solid'], correct: 0 },
    { word: 'Tunnel', options: ['Passage', 'Surface', 'Peak'], correct: 0 },
    { word: 'Echo', options: ['Sound', 'Color', 'Weight'], correct: 0 },
    { word: 'Torch', options: ['Flame', 'Snow', 'Water'], correct: 0 },
    { word: 'Hill', options: ['Slope', 'Depth', 'Sink'], correct: 0 },
    { word: 'Ink', options: ['Write', 'Freeze', 'Ring'], correct: 0 },
    { word: 'Lantern', options: ['Light', 'Shadow', 'Stone'], correct: 0 },
    { word: 'Clockface', options: ['Numbers', 'Roots', 'Smoke'], correct: 0 },
    { word: 'Harbor', options: ['Ships', 'Desert', 'Fire'], correct: 0 },
    { word: 'Signal', options: ['Message', 'Weight', 'Stone'], correct: 0 },
    { word: 'Frost', options: ['Cold', 'Heat', 'Steam'], correct: 0 },
    { word: 'Path', options: ['Direction', 'Noise', 'Blur'], correct: 0 },
    { word: 'Wheel', options: ['Rotate', 'Melt', 'Float'], correct: 0 },
    { word: 'Cave', options: ['Dark', 'Bright', 'Open'], correct: 0 },
    { word: 'Bell', options: ['Ring', 'Sink', 'Burn'], correct: 0 },
    { word: 'Riverbank', options: ['Shore', 'Sky', 'Flame'], correct: 0 },
    { word: 'Pulse', options: ['Beat', 'Stone', 'Silence'], correct: 0 },
];

interface Props {
    setTabZoq?: (tab: any) => void;
    quizStarted?: boolean;
    setQuizStarted?: (v: boolean) => void;
    mode?: 'quiz' | 'challenge';
}

export default function MightyRushQuizScreen({ setTabZoq, quizStarted, setQuizStarted, mode = 'quiz' }: Props) {
    const [started, setStarted] = useState(false);
    const [answers, setAnswers] = useState<number[]>([]);
    const [showResult, setShowResult] = useState(false);
    const [challengeScore, setChallengeScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [endReason, setEndReason] = useState<'timeout' | 'wrong'>('timeout');
    const correctCount = answers.reduce((acc, ans, idx) => acc + (ans === QUESTIONS[idx].correct ? 1 : 0), 0);

    useEffect(() => {
        if (mode === 'challenge') {
            AsyncStorage.getItem('animalOrderBestScore').then(val => {
                if (val) setBestScore(parseInt(val, 10));
            });
        }
    }, [mode]);

    const handleRestart = () => {
        setAnswers([]);
        setShowResult(false);
        setStarted(false);
        setChallengeScore(0);
    };

    const handleBackToPreview = () => {
        setAnswers([]);
        setShowResult(false);
        setStarted(false);
        setChallengeScore(0);
    };

    const handleChallengeEnd = async (score: number, reason: 'timeout' | 'wrong') => {
        setChallengeScore(score);
        setEndReason(reason);
        const storedBest = await AsyncStorage.getItem('animalOrderBestScore');
        const currentBest = storedBest ? parseInt(storedBest, 10) : 0;
        if (score > currentBest) {
            await AsyncStorage.setItem('animalOrderBestScore', score.toString());
            setBestScore(score);
        } else {
            setBestScore(currentBest);
        }
        setShowResult(true);
    };

    React.useEffect(() => {
        if (showResult && correctCount >= 16 && mode === 'quiz') {
            AsyncStorage.setItem('mightyRushPassed', 'true');
        }
    }, [showResult, correctCount, mode]);

    // --- START SCREEN ---
    if (!started) {
        return (
            <View style={{
                paddingTop: rofeh * 0.09,
                justifyContent: 'flex-end',
                paddingBottom: rofeh * 0.05,
                flex: 1,
                alignItems: 'center',
            }}>
                <Image
                    source={mode === 'challenge'
                        ? require('../../AniheduAsetrds/HesedpImazegsInas/widainls.png')
                        : require('../../AniheduAsetrds/HesedpImazegsInas/allAnimals.png')
                    }
                    style={{
                        resizeMode: mode === 'challenge' ? 'contain' : 'stretch',
                        position: 'absolute',
                        top: -rofeh * 0.04,
                        alignSelf: 'center',
                        height: rofeh * 0.7,
                        width: gihiws,
                    }}
                />
                <View style={{
                    alignItems: 'center',
                    shadowColor: '#000',
                    backgroundColor: '#1A1139',
                    borderRadius: gihiws * 0.05,
                    width: gihiws * 0.88,
                    paddingVertical: rofeh * 0.045,
                    borderColor: '#FFB301',
                    shadowOpacity: 0.2,
                    marginTop: -rofeh * 0.01,
                    shadowRadius: 10,
                    borderWidth: 1.5,
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: gihiws * 0.04,
                        paddingHorizontal: gihiws * 0.04,
                        textAlign: 'center',
                        fontFamily: shulbStnofMialsPus.anipinsR,
                    }}>
                        {mode === 'challenge'
                            ? 'Tap animals in the correct order. Finish the sequence to get a new task. Mistake or time ends = game over'
                            : 'Step into the herd of Hush and test your instincts. Each question reveals how animals in Hush\'s herd truly behave—separating fact from assumption.'
                        }
                    </Text>
                    <View style={{
                        alignSelf: 'center',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: gihiws * 0.05,
                        marginVertical: rofeh * 0.025,
                    }}>
                        {mode === 'challenge' ? null : [
                            require('../../AniheduAsetrds/HesedpImazegsInas/nottr.png'),
                            require('../../AniheduAsetrds/HesedpImazegsInas/truth.png'),
                        ].map((icon, idx) => (
                            <Image
                                key={idx}
                                source={icon}
                                style={{
                                    width: gihiws * 0.14,
                                    height: gihiws * 0.14,
                                    resizeMode: 'contain',
                                }}
                            />
                        ))}
                    </View>
                    <ShypaniBunknaLubr
                        onPress={() => {
                            setStarted(true);
                            if (setQuizStarted) setQuizStarted(true);
                        }}
                        tubonTixiatrAyps={`START`}
                        istilyisef={{}}
                    />
                </View>
            </View>
        );
    }

    // --- GAME/QUIZ SCREEN ---
    if (started && !showResult) {
        if (mode === 'challenge') {
            return (
                <AnimalOrderGame
                    onGameEnd={handleChallengeEnd}
                />
            );
        }
        return (
            <QuizScreen
                questions={QUESTIONS}
                goToResult={() => {
                    if (setQuizStarted) setQuizStarted(false);
                    setStarted(false);
                    setAnswers([]);
                }}
                userAnswers={answers}
                setUserAnswers={setAnswers}
            />
        );
    }

    // --- RESULT SCREEN ---
    if (showResult) {
        const handleShare = () => {};

        if (mode === 'challenge') {
            return (
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flex: 1,
                    paddingTop: rofeh * 0.09,
                }}>
                    <ResultScreen
                        backToLevels={() => {
                            handleBackToPreview();
                            if (setQuizStarted) setQuizStarted(false);
                        }}
                        mode="challenge"
                        challengeScore={challengeScore}
                        bestScore={bestScore}
                        endReason={endReason}
                    />
                </View>
            );
        }

        return (
            <View style={{
                alignItems: 'center',
                justifyContent: 'flex-start',
                flex: 1,
                paddingTop: rofeh * 0.09,
            }}>
                <ResultScreen
                    backToLevels={() => {
                        handleBackToPreview();
                        if (setQuizStarted) setQuizStarted(false);
                    }}
                    onShare={handleShare}
                    notGreen={true}
                    questions={QUESTIONS}
                    userAnswers={answers}
                    restartLevel={handleRestart}
                />
            </View>
        );
    }

    return null;
}
