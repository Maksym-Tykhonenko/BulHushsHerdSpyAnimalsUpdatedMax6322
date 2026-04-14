import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, Modal, Share } from 'react-native';
import { shulbStnofMialsPus } from '../../shulbStnofMialsPus';
import trusmis from './trusmis';
import ShypaniBunknaLubr from '../../ShellPserdKompontes/ShypaniBunknaLubr';
import ResultScreen from './ResultScreen';

const { width: oepiw, height: snah } = Dimensions.get('window');

const TRUE_ICON = require('../../AniheduAsetrds/HesedpImazegsInas/truth.png');
const FALSE_ICON = require('../../AniheduAsetrds/HesedpImazegsInas/nottr.png');
const SHARE_BTN_IMG = require('../../AniheduAsetrds/HesedpImazegsInas/poshrTexForFrnd.png');
const CORRECT_ICON = require('../../AniheduAsetrds/HesedpImazegsInas/truth.png');
const WRONG_ICON = require('../../AniheduAsetrds/HesedpImazegsInas/nottr.png');
const HOME_BTN_ICON = require('../../AniheduAsetrds/HesedpImazegsInas/listbt.png');

function getRandomQuestions(arr: any[], count: number) {
    const used = new Set();
    const res = [];
    while (res.length < count) {
        const idx = Math.floor(Math.random() * arr.length);
        if (!used.has(idx)) {
            used.add(idx);
            res.push(arr[idx]);
        }
    }
    return res;
}

export default function QuizScreen({ goToResult }: { goToResult: () => void }) {
    const [questions, setQuestions] = useState<any[]>([]);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [selected, setSelected] = useState<null | 'Truth' | 'Myth'>(null);
    const [showResult, setShowResult] = useState(false);
    const [userAnswers, setUserAnswers] = useState<{ answer: string, correct: boolean }[]>([]);
    const [showResultModal, setShowResultModal] = useState(false);
    const userAnswersRef = useRef<{ answer: string, correct: boolean }[]>([]);

    useEffect(() => {
        setQuestions(getRandomQuestions(trusmis, 10));
    }, []);

    if (questions.length === 0) return null;

    const q = questions[currentIdx];

    const handleSelect = (ans: 'Truth' | 'Myth') => {
        setSelected(ans);
        setShowResult(true);
        const isCorrect = ans === q.answer;
        const newAnswer = { answer: ans, correct: isCorrect };
        const updatedAnswers = [...userAnswers, newAnswer];
        setUserAnswers(updatedAnswers);
        userAnswersRef.current = updatedAnswers;
    };

    const handleNext = () => {
        console.log('=== HANDLE NEXT ===');
        console.log('Current index:', currentIdx);
        console.log('User answers (ref):', userAnswersRef.current);
        console.log('Total answers:', userAnswersRef.current.length);
        console.log('Correct count:', userAnswersRef.current.filter(a => a.correct).length);

        if (currentIdx === 9) {
            console.log('Opening result modal with answers:', userAnswersRef.current);
            setShowResultModal(true);
        } else {
            setCurrentIdx(currentIdx + 1);
            setSelected(null);
            setShowResult(false);
            console.log('Moving to next question');
        }
        console.log('===================');
    };

    const correctIcon = q.answer === 'Truth' ? TRUE_ICON : FALSE_ICON;
    const resultBg = selected === q.answer ? '#00782E' : '#981906';

    const correctCount = userAnswersRef.current.filter(a => a.correct).length;
    const wrongCount = userAnswersRef.current.length - correctCount;

    return (
        <>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingTop: snah * 0.07,
                backgroundColor: 'transparent'
            }}>
                {/* Верхній бар */}
                <View style={{
                    width: oepiw * 0.9,
                    height: snah * 0.06,
                    borderRadius: oepiw * 0.03,
                    backgroundColor: '#1A1139',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    paddingHorizontal: oepiw * 0.04,
                    marginBottom: snah * 0.03,
                    borderWidth: 1,
                    borderColor: '#FFB301',
                }}>
                    <Text style={{
                        fontFamily: shulbStnofMialsPus.anipinsM,
                        fontSize: oepiw * 0.045,
                        color: '#FFB301',
                    }}>
                        Question {currentIdx + 1} / 10
                    </Text>
                </View>

                {/* Питання */}
                <View style={{
                    width: oepiw * 0.91,
                    backgroundColor: '#1A1139',
                    borderRadius: oepiw * 0.05,
                    paddingVertical: snah * 0.03,
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: '#FFB301',
                    marginBottom: snah * 0.03,
                    paddingHorizontal: oepiw * 0.025,
                }}>
                    <Text style={{
                        fontFamily: shulbStnofMialsPus.anipinsR,
                        fontSize: oepiw * 0.04,
                        color: '#fff',
                        textAlign: 'center',
                    }}>
                        {q.statement}
                    </Text>
                </View>

                {/* Кнопки True/False */}
                {!showResult && (
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: snah * 0.03,
                        width: oepiw * 0.8,
                    }}>
                        {[
                            {
                                label: 'Myth',
                                icon: FALSE_ICON,
                                borderColor: '#981906',
                            },
                            {
                                label: 'Truth',
                                icon: TRUE_ICON,
                            }
                        ].map((btn) => (
                            <TouchableOpacity
                                key={btn.label}
                                onPress={() => handleSelect(btn.label as 'Truth' | 'Myth')}
                                style={{

                                }}>
                                <Image source={btn.icon} style={{
                                    width: oepiw * 0.16,
                                    height: oepiw * 0.16,
                                    resizeMode: 'contain'
                                }} />
                            </TouchableOpacity>
                        ))}
                    </View>
                )}

                {/* Результат відповіді */}
                {showResult && (
                    <View style={{
                        width: oepiw * 0.91,
                        position: 'absolute',
                        alignSelf: 'center',
                        bottom: snah * 0.03,
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: oepiw * 0.91,
                            backgroundColor: resultBg,
                            borderRadius: oepiw * 0.05,
                            paddingVertical: snah * 0.03,
                            alignItems: 'center',
                            marginBottom: snah * 0.03,
                        }}>
                            <Image source={correctIcon} style={{
                                width: oepiw * 0.13,
                                height: oepiw * 0.13,
                                resizeMode: 'contain',
                                marginBottom: snah * 0.01,
                            }} />
                            <Text style={{
                                fontFamily: shulbStnofMialsPus.anipinsR,
                                fontSize: oepiw * 0.04,
                                color: '#fff',
                                textAlign: 'center',
                                marginBottom: snah * 0.01,
                                paddingHorizontal: oepiw * 0.019,
                            }}>
                                {q.explanation}
                            </Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: snah * 0.03,
                            gap: oepiw * 0.04,
                        }}>
                            <ShypaniBunknaLubr
                                tubonTixiatrAyps={'Next'}
                                onPress={handleNext}
                                istilyisef={{
                                }}
                            />
                            <TouchableOpacity
                                onPress={() => {
                                    Share.share({
                                        message: `I just completed a quiz question in the Hush's Herd Spy Animals app! My answer to "${q.statement}" was "${selected}", and it was ${selected === q.answer ? 'correct' : 'wrong'}! Can you do better? Download the app and test your instincts!`
                                    })
                                }}
                                style={{
                                }}
                            >
                                <Image source={SHARE_BTN_IMG} style={{
                                    width: snah * 0.07,
                                    height: snah * 0.07,
                                    resizeMode: 'contain'
                                }} />
                            </TouchableOpacity>
                        </View>
                    </View >
                )}
            </View>

            {/* Result Modal */}
            <Modal
                visible={showResultModal}
                animationType="fade"
                transparent={true}
                onRequestClose={() => { }}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.85)',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <ResultScreen
                        userAnswers={userAnswersRef.current}
                        backToLevels={() => {
                            setShowResultModal(false);
                            setCurrentIdx(0);
                            setSelected(null);
                            setShowResult(false);
                            setUserAnswers([]);
                            setQuestions(getRandomQuestions(trusmis, 10));
                            goToResult(); // Повертає на превью, не на результат!
                        }}
                    />
                </View>
            </Modal>
        </>
    );
}
