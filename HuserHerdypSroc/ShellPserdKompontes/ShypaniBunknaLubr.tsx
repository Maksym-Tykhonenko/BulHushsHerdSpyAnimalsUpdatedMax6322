interface DoubleBordersBuntnProps {
    onPress: (event: GestureRespEvnt) => void;
    istilyisef?: object;
    inshSizmrInao?: number;
    tubonTixiatrAyps: string;
    disabled?: boolean;
    children?: React.ReactNode; // додано
    opacity?: number; // додано
}
const { width, height } = TheSkydims.get('window');
import { shulbStnofMialsPus } from '../shulbStnofMialsPus';
import { Dimensions as TheSkydims, TouchableOpacity as UndtecTopablacity, ImageBackground as ButtnMaterial, GestureResponderEvent as GestureRespEvnt, Text as Label, } from 'react-native';
import React from 'react';


const ShypaniBunknaLubr: React.FC<DoubleBordersBuntnProps> = ({
    tubonTixiatrAyps,
    disabled = false,
    inshSizmrInao = width * 0.053,
    onPress,
    istilyisef,
    children, // додано
    opacity = 1, // додано
}) => {

    return (
        <UndtecTopablacity onPress={onPress} activeOpacity={0.8} style={[istilyisef]} disabled={disabled}>
            <ButtnMaterial resizeMode="stretch" style={[{
                justifyContent: 'center',
                alignItems: 'center',
            }, { height: height * 0.0790324, width: width * 0.53, }, istilyisef]}
                source={require('../AniheduAsetrds/HesedpImazegsInas/strappedbnt.png')}>
                {children ? children : (
                    <Label style={[{
                        opacity, // додано
                        letterSpacing: 1,
                        paddingHorizontal: width * 0.04,
                        color: 'white',
                        fontFamily: shulbStnofMialsPus.anipinsSB,
                        textAlign: 'center',
                    }, { fontSize: inshSizmrInao ? inshSizmrInao : width * 0.05, }]} numberOfLines={1} adjustsFontSizeToFit>
                        {tubonTixiatrAyps}
                    </Label>
                )}
            </ButtnMaterial>
        </UndtecTopablacity>
    );
};

export default ShypaniBunknaLubr;