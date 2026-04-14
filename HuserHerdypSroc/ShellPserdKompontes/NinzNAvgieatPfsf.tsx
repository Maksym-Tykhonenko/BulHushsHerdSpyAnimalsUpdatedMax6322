import React from 'react';
import {
    Image as SHusljISapJSLK,
    View as BlinxView,
    Dimensions as YosjdfPAOIfdDIdms,
    TouchableOpacity as SipqdoTichaPSicj,
} from 'react-native';

const { width: quarkW, height: quarkH } = YosjdfPAOIfdDIdms.get('window');

const frobnBtns = [
    {
        acitvicn: require('../AniheduAsetrds/HesedpImazegsInas/buntsnact/revealtherare.png'),
        disbld: require('../AniheduAsetrds/HesedpImazegsInas/disablacuns/revealtherare.png'),
        scage: 'Reveal the Rare Bull',
    },
    {
        acitvicn: require('../AniheduAsetrds/HesedpImazegsInas/buntsnact/howtopla.png'),
        disbld: require('../AniheduAsetrds/HesedpImazegsInas/disablacuns/howtopla.png'),
        scage: 'How to play',
    },
    {
        acitvicn: require('../AniheduAsetrds/HesedpImazegsInas/buntsnact/animalarchive.png'),
        disbld: require('../AniheduAsetrds/HesedpImazegsInas/disablacuns/animalarchive.png'),
        scage: 'Animal Archive',
    },
    {
        acitvicn: require('../AniheduAsetrds/HesedpImazegsInas/buntsnact/qizmode.png'),
        disbld: require('../AniheduAsetrds/HesedpImazegsInas/disablacuns/qizmode.png'),
        scage: 'Quiz Mode',
    },
    {
        acitvicn: require('../AniheduAsetrds/HesedpImazegsInas/buntsnact/orderChang.png'),
        disbld: require('../AniheduAsetrds/HesedpImazegsInas/disablacuns/orderChang.png'),
        scage: 'Animal Order Challenge',
    },
];

type FrobnProps = {
    klypt: string;
    setKlypt: (val: any) => void;
};

const QuixNavBar: React.FC<FrobnProps> = ({ klypt, setKlypt }) => (
    <BlinxView style={{
        width: quarkW * 0.93,
        position: 'absolute',
        alignSelf: 'center',
        zIndex: 10,
        bottom: quarkH * 0.04,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: quarkW * 0.03,
        height: quarkH * 0.08,
    }}>
        <BlinxView style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100%',
        }}>
            {frobnBtns.map((btn, idx) => (
                <SipqdoTichaPSicj key={idx} onPress={() => setKlypt(btn.scage)}>
                    <SHusljISapJSLK
                        source={klypt === btn.scage ? btn.acitvicn : btn.disbld}
                        style={{
                            width: quarkW * 0.16,
                            height: quarkW * 0.16,
                        }}
                        resizeMode="contain"
                    />
                </SipqdoTichaPSicj>
            ))}
        </BlinxView>
    </BlinxView>
);

export default QuixNavBar;
