import { shulbStnofMialsPus } from '../shulbStnofMialsPus';
import React from 'react';
import { Text } from 'react-native-gesture-handler';
import { View, TouchableOpacity, Image, Dimensions, ImageBackground, } from 'react-native';

type TopBarViewProps = {
    onRareBullBackToPreview?: () => void; // add this prop
    setTabZoq: (tab: any) => void;
    myWidth?: number;
    tabZoq: string;
};
const { width: myWidth, height: myHeight } = Dimensions.get('window');

const VerhniyBiraSHao: React.FC<TopBarViewProps> = ({ tabZoq, setTabZoq, onRareBullBackToPreview }) => {

    const handleBackPress = () => {
        if (tabZoq === 'Reveal the Rare Bull' && onRareBullBackToPreview) {
            onRareBullBackToPreview();
        } else {
            setTabZoq('Reveal the Rare Bull');
        }
    };

    return (
        <View style={{
            justifyContent: 'space-between',




            alignItems: 'center',




            alignSelf: 'center',




            zIndex: 10,




            flexDirection: 'row',




            width: myWidth * 0.91,




        }}>
            <TouchableOpacity onPress={handleBackPress}>
                <Image  source={require('../AniheduAsetrds/CshulaniIconsInalus/retura.png')} style={{
                    height: myHeight * 0.07, width: myHeight * 0.07,
                    }} resizeMode="contain"
                />
            </TouchableOpacity>

            <ImageBackground style={[{
                marginHorizontal: myWidth * 0.025,
                width: myWidth * 0.59,
                justifyContent: 'center',
                height: myHeight * 0.089,
                overflow: 'hidden',
                alignItems: 'center',
            }]} source={require('../AniheduAsetrds/HesedpImazegsInas/topheinamescn.png')} resizeMode='stretch'>
                <Text style={[{
                    color: 'white',
                    letterSpacing: 1,
                    width: '100%',
                    paddingHorizontal: myWidth * 0.04,
                    fontFamily: shulbStnofMialsPus.anipinsSB,
                    textAlign: 'center',
                }, { fontSize: myWidth * 0.05, }]} numberOfLines={1} adjustsFontSizeToFit>
                    {tabZoq}
                </Text>
            </ImageBackground>

            <View style={[{
                width: myHeight * 0.07,
            }]} />
        </View>
    );
};

export default VerhniyBiraSHao;
