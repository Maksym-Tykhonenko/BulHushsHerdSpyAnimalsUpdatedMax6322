import React from 'react';
import { View, Dimensions, Text, TouchableOpacity, Image } from 'react-native';
import { shulbStnofMialsPus } from '../../shulbStnofMialsPus';

const { width: oepiw, height: snah } = Dimensions.get('window');

const CORRECT_ICON = require('../../AniheduAsetrds/HesedpImazegsInas/truth.png');
const WRONG_ICON = require('../../AniheduAsetrds/HesedpImazegsInas/nottr.png');
const HOME_BTN_ICON = require('../../AniheduAsetrds/HesedpImazegsInas/listbt.png');

interface Props {
    userAnswers?: { answer: string, correct: boolean }[] | number[];
    backToLevels: () => void;
    onShare?: () => void;
    notGreen?: boolean;
    questions?: any[];
    restartLevel?: () => void;
    mode?: 'quiz' | 'challenge';
    challengeScore?: number;
    bestScore?: number;
    endReason?: 'timeout' | 'wrong';
}

export default function ResultScreen({
    userAnswers = [],
    backToLevels,
    mode = 'quiz',
    challengeScore = 0,
    bestScore = 0,
    questions = [],
    endReason = 'timeout',
}: Props) {
    let correctCount = 0;
    let wrongCount = 0;

    if (mode === 'quiz' && Array.isArray(userAnswers)) {
        if (userAnswers.length > 0 && typeof userAnswers[0] === 'object') {
            correctCount = (userAnswers as { answer: string, correct: boolean }[]).filter(a => a.correct).length;
            wrongCount = userAnswers.length - correctCount;
        } else if (userAnswers.length > 0 && typeof userAnswers[0] === 'number') {
            correctCount = (userAnswers as number[]).reduce((acc, ans, idx) => 
                acc + (questions[idx] && ans === questions[idx].correct ? 1 : 0), 0);
            wrongCount = userAnswers.length - correctCount;
        }
    }

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
        }}>
            <View style={{
                width: oepiw * 0.92,
                borderRadius: oepiw * 0.06,
                backgroundColor: '#1A1139',
                borderWidth: 2,
                borderColor: '#FFD076',
                alignItems: 'center',
                paddingVertical: snah * 0.045,
                paddingHorizontal: oepiw * 0.04,
            }}>
                <Image
                    source={mode === 'challenge' 
                        ? (endReason === 'timeout' 
                            ? require('../../AniheduAsetrds/HesedpImazegsInas/timeup.png')
                            : require('../../AniheduAsetrds/HesedpImazegsInas/WrongAnimaOrder.png'))
                        : require('../../AniheduAsetrds/HesedpImazegsInas/QizComplete.png')
                    }
                    style={{
                        width: oepiw * 0.7,
                        height: mode === 'challenge' ? (endReason === 'timeout' ? snah * 0.028 : snah * 0.05) : snah * 0.05,
                        resizeMode: 'contain',
                        alignSelf: 'center',
                    }}
                />
                <Text style={{
                    fontFamily: shulbStnofMialsPus.anipinsR,
                    fontSize: oepiw * 0.04,
                    color: '#fff',
                    textAlign: 'center',
                    marginVertical: snah * 0.025,
                }}>
                    {mode === 'challenge' 
                        ? (endReason === 'timeout'
                            ? 'Time\'s up! Your reflexes have been tested. Check your score and try to beat your best!'
                            : 'Wrong animal selected! Your reflexes have been tested. Check your score and try to beat your best!')
                        : 'Report filed. Your instincts are sharper now—take that knowledge back into the next investigation'
                    }
                </Text>
                
                {mode === 'challenge' ? (
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: snah * 0.03,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#2B2360',
                            borderRadius: oepiw * 0.07,
                            paddingHorizontal: oepiw * 0.06,
                            paddingVertical: snah * 0.02,
                            marginRight: oepiw * 0.04,
                        }}>
                            <Text style={{
                                fontFamily: shulbStnofMialsPus.anipinsR,
                                fontSize: oepiw * 0.04,
                                color: '#fff',
                                marginRight: oepiw * 0.02,
                            }}>Score:</Text>
                            <Text style={{
                                fontFamily: shulbStnofMialsPus.anipinsM,
                                fontSize: oepiw * 0.06,
                                color: '#FFB301',
                            }}>{challengeScore}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#2B2360',
                            borderRadius: oepiw * 0.07,
                            paddingHorizontal: oepiw * 0.06,
                            paddingVertical: snah * 0.02,
                        }}>
                            <Text style={{
                                fontFamily: shulbStnofMialsPus.anipinsR,
                                fontSize: oepiw * 0.04,
                                color: '#fff',
                                marginRight: oepiw * 0.02,
                            }}>Best:</Text>
                            <Text style={{
                                fontFamily: shulbStnofMialsPus.anipinsM,
                                fontSize: oepiw * 0.06,
                                color: '#4CAF50',
                            }}>{bestScore}</Text>
                        </View>
                    </View>
                ) : (
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: snah * 0.03,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#2B2360',
                            borderRadius: oepiw * 0.07,
                            width: oepiw * 0.32,
                            height: snah * 0.07,
                            marginRight: oepiw * 0.07,
                            justifyContent: 'center',
                        }}>
                            <Text style={{
                                fontFamily: shulbStnofMialsPus.anipinsM,
                                fontSize: oepiw * 0.06,
                                color: '#fff',
                                marginRight: oepiw * 0.02,
                            }}>{correctCount}</Text>
                            <Image source={CORRECT_ICON} style={{
                                width: oepiw * 0.07,
                                height: oepiw * 0.07,
                                resizeMode: 'contain',
                            }} />
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#2B2360',
                            borderRadius: oepiw * 0.07,
                            width: oepiw * 0.32,
                            height: snah * 0.07,
                            justifyContent: 'center',
                        }}>
                            <Text style={{
                                fontFamily: shulbStnofMialsPus.anipinsM,
                                fontSize: oepiw * 0.06,
                                color: '#fff',
                                marginRight: oepiw * 0.02,
                            }}>{wrongCount}</Text>
                            <Image source={WRONG_ICON} style={{
                                width: oepiw * 0.07,
                                height: oepiw * 0.07,
                                resizeMode: 'contain',
                            }} />
                        </View>
                    </View>
                )}

                <TouchableOpacity
                    onPress={backToLevels}
                    style={{
                        marginTop: snah * 0.01,
                        alignSelf: 'center',
                    }}
                >
                    <Image source={HOME_BTN_ICON} style={{
                        width: oepiw * 0.15,
                        height: oepiw * 0.15,
                        resizeMode: 'contain',
                    }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
