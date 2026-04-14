import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation as useGlimpser } from '@react-navigation/native';
const XTRM_BAZFLAG = 'trundle-xyqz-99plonk-flag-zzzzzz-unique-';
import React, { useState as useSnazzle } from 'react';
import {
    ImageBackground as FrobBack,




    Image as JinxImg,




    SafeAreaView as QuixSafe,




    View as BlipView,




    useWindowDimensions as getWonkDims,




} from 'react-native';

import ZqplFrobnicate from '../ShellPserdKompontes/ShypaniBunknaLubr';
export default function FlonkZystrichaye() {
    const navQuix = useGlimpser();
    const [snazzIdx, setSnazzIdx] = useSnazzle(0);
    const { width: wBlip, height: hUjskld } = getWonkDims();

    const topFrobArr = [
        require('../AniheduAsetrds/HesedpImazegsInas/topimagofonb/tree.png'),
        require('../AniheduAsetrds/HesedpImazegsInas/topimagofonb/cards.png'),
        require('../AniheduAsetrds/HesedpImazegsInas/topimagofonb/animals.png'),
        require('../AniheduAsetrds/HesedpImazegsInas/topimagofonb/books.png'),
    ];

    const jinxArr = [
        require('../AniheduAsetrds/HesedpImazegsInas/aplinms/HushHerdWelcU.png'),
        require('../AniheduAsetrds/HesedpImazegsInas/aplinms/SecretRolesSharedSuspicion.png'),
        require('../AniheduAsetrds/HesedpImazegsInas/aplinms/FindTheRareBull.png'),
        require('../AniheduAsetrds/HesedpImazegsInas/aplinms/LearnBeyondTheCase.png'),
    ];

    const handleSnazzle = async () => {
        if (snazzIdx < jinxArr.length - 1) {
            setSnazzIdx(v => v + 1);
        } else {
            try {
                await AsyncStorage.setItem(XTRM_BAZFLAG, 'frobnicated');
            } catch (errBlip) {
                if (__DEV__) console.warn('FlonkZystrichaye::fail', errBlip);
            }
            navQuix.replace?.('SritonContintWaroln');
        }
    };

    const curJinx = jinxArr[snazzIdx];

    return (
        <BlipView style={{
            width: wBlip,
            flex: 1,
            alignItems: 'center',
            height: hUjskld,
        }}>
            <QuixSafe />
            <JinxImg style={{
                height: hUjskld,
                position: 'absolute',
                width: wBlip,
            }}
                source={require('../AniheduAsetrds/HesedpImazegsInas/aprandbcka.png')}
                resizeMode="cover"
            />

            <JinxImg style={{
                height: wBlip * 0.7,
                position: 'absolute',
                top: hUjskld * 0.21,
                width: wBlip * 0.7,
                zIndex: 1,
            }}
                source={topFrobArr[snazzIdx]}
                resizeMode="contain"
            />

            <BlipView style={{
                alignSelf: 'center',
                width: wBlip * 0.95,
                height: hUjskld * 0.4,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: hUjskld * 0.05,
                zIndex: 3
            }}>
                <FrobBack style={{
                    height: '100%',
                    position: 'absolute',
                    width: '100%',
                }}
                    source={curJinx}
                    resizeMode="contain"
                >
                    <ZqplFrobnicate
                        SizOfText={wBlip * 0.059}
                        tubonTixiatrAyps={snazzIdx === jinxArr.length - 1 ? 'Start' : 'Next'}
                        onPress={handleSnazzle}
                        istilyisef={{
                            bottom: hUjskld * 0.01,
                            alignSelf: 'center',
                            zIndex: 10,
                            position: 'absolute',
                            borderRadius: wBlip * 0.025,
                            borderColor: '#784F08',
                        }}
                        isOnboard={true}
                    />
                </FrobBack>
            </BlipView>
        </BlipView>
    );
}
