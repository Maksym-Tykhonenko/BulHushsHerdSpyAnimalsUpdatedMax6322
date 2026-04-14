import React, { useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import { shulbStnofMialsPus } from '../shulbStnofMialsPus';
import ShypaniBunknaLubr from './ShypaniBunknaLubr';

const { width, height } = Dimensions.get('window');

const QUESTIONS = [
    'What feels most normal here—and what feels slightly off?',
    'If you had to describe this place in three words, what would they be?',
    'What\'s the first detail you noticed when we arrived?',
    'What would you do here if you were alone?',
    'What do you think most people would get wrong about this place?',
];

interface GameScreenProps {
    players: string[];
    onRestart: () => void;
}

export default function GameScreen({ players, onRestart }: GameScreenProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const changeQuestion = () => {
        setCurrentQuestionIndex((prev) => (prev + 1) % QUESTIONS.length);
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-between', paddingVertical: height * 0.05 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: width * 0.05 }}>
                <View style={{
                    backgroundColor: '#1a1040',
                    borderRadius: width * 0.06,
                    borderWidth: 3,
                    borderColor: '#f4a831',
                    padding: width * 0.06,
                    minHeight: height * 0.25,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image
                        source={require('../AniheduAsetrds/HesedpImazegsInas/sechr.png')}
                        style={{ width: width * 0.12, height: width * 0.12, resizeMode: 'contain', marginBottom: height * 0.02 }}
                    />
                    <TouchableOpacity onPress={changeQuestion} activeOpacity={0.7}>
                        <Text style={{
                            fontFamily: shulbStnofMialsPus.anipinsR,
                            fontSize: width * 0.045,
                            color: 'white',
                            textAlign: 'center',
                            lineHeight: width * 0.065,
                        }}>
                            {QUESTIONS[currentQuestionIndex]}
                        </Text>
                    </TouchableOpacity>
                </View>

                <ShypaniBunknaLubr
                    tubonTixiatrAyps={'TAP TO CHANGE QUESTION'}
                    onPress={changeQuestion}
                    istilyisef={{
                        marginTop: height * 0.03,
                        width: width * 0.7,
                    }}
                />
            </View>

            <ShypaniBunknaLubr
                tubonTixiatrAyps='END GAME'
                onPress={onRestart}
                istilyisef={{
                    position: 'absolute',
                    bottom: height * 0.05,
                    alignSelf: 'center',
                    // width: width * 0.7,
                }}
            />
        </View>
    );
}
