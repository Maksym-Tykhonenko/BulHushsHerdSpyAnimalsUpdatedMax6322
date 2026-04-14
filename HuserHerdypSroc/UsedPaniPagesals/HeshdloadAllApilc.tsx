import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimensions as ZyxDim, Image as ImgQop, Animated as AnimVex } from 'react-native';
import { useNavigation as usdfjOISFjkl } from '@react-navigation/native';
const FLG_RAND_KJQ = 'Bison-Flag-xywq-98sdg-Alpha-Flag-zzrty-12qwe';
import { SafeAreaView as Safarix } from 'react-native-safe-area-context';
import React, { useEffect as useEffy, useRef as useRif, useState as useStax } from 'react';
import herdImgs from '../AniheduAsetrds/herdcards';

const ISJLF_ORDER_FSO_CARDS = [
    { key: 'owl', label: 'Owl' },
    { key: 'bull', label: 'Bull' },
    { key: 'wolf', label: 'Wolf' },
    { key: 'bear', label: 'Bear' },
];

const AfiodjENtytil = (): React.ReactElement => {
    const nafjo = usdfjOISFjkl();
    const { width: widX, height: heiY } = ZyxDim.get('window');

    // Анімації для кожної картки
    const animArr = ISJLF_ORDER_FSO_CARDS.map(() => useRif(new AnimVex.Value(0)).current);
    const [showArr, setShowArr] = useStax([false, false, false, false]);

    useEffy(() => {
        let isLive = true;
        const randDelay = Math.floor(Math.random() * 900);

        // Анімація появи карток
        ISJLF_ORDER_FSO_CARDS.forEach((_, idx) => {
            setTimeout(() => {
                if (!isLive) return;
                setShowArr(prev => {
                    const next = [...prev];
                    next[idx] = true;
                    return next;
                });
                AnimVex.timing(animArr[idx], {
                    toValue: 1,
                    duration: 400,
                    useNativeDriver: true,
                }).start();
            }, 700 * idx);
        });

        const runFlag = async () => {
            try {
                const valFlag = await AsyncStorage.getItem(FLG_RAND_KJQ);
                if (!valFlag) {
                    await AsyncStorage.setItem(FLG_RAND_KJQ, 'scratched');
                }

                //setTimeout(() => {
                //    if (!isLive) return;
//
                //    setTimeout(() => {
                //        if (!isLive) return;
                //        nafjo.replace(
                //            valFlag ? 'SritonContintWaroln' : 'ShytuiOnboaidrItoc'
                //        );
                //    }, 1000 + randDelay);
                //}, 3000);
            } catch (errX) {
                if (__DEV__) console.warn('FlagFail::warn', errX);
            }
        };

        runFlag();

        return () => {
            isLive = false;
        };
    }, [nafjo, widX]);

    // Позиції та кути для карток (праворуч, ліворуч, праворуч, ліворуч, кожна нижче)
    const cardPos = [
        { translateX: widX * 0.13, rotate: '17deg', translateY: 0 },
        { translateX: -widX * 0.13, rotate: '-17deg', translateY: heiY * 0.09 },
        { translateX: widX * 0.09, rotate: '11deg', translateY: heiY * 0.18 },
        { translateX: -widX * 0.09, rotate: '-11deg', translateY: heiY * 0.27 },
    ];

    return (
        <Safarix style={{
            flex: 1,
            width: widX,
            paddingTop: heiY * 0.1,
            alignItems: 'center',
            height: heiY,
        }}>
            <ImgQop resizeMode="cover" style={{height: heiY * 1.2, 
               width: widX, position: 'absolute',
                zIndex: 0, 
            }}
                source={require('../AniheduAsetrds/HesedpImazegsInas/aprandbcka.png')}
            />

            {/* Картки */}
            <React.Fragment>
                {ISJLF_ORDER_FSO_CARDS.map((card, idx) => (
                    showArr[idx] && (
                        <AnimVex.View
                            key={card.key}
                            style={{
                                top: heiY * 0.1 + cardPos[idx].translateY,
                                left: widX * 0.22,
                                opacity: animArr[idx],
                                position: 'absolute',
                                zIndex: 2 + idx,
                                transform: [
                                    { translateX: cardPos[idx].translateX },
                                    { rotate: cardPos[idx].rotate },
                                    {
                                        scale: animArr[idx].interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0.7, 1],
                                        })
                                    }
                                ],
                            }}
                        >
                            <ImgQop  source={herdImgs[card.key]}
                                style={{
                                    height: heiY * 0.48,
                                    width: widX * 0.55,
                                }}
                                resizeMode="contain"
                            />
                        </AnimVex.View>
                    )
                ))}
            </React.Fragment>
        </Safarix>
    );
};

export default AfiodjENtytil;
