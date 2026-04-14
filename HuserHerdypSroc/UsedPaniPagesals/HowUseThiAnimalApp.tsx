import { ScrollView } from 'react-native-gesture-handler';
import React from 'react';
import {
    Text,
    View,
    Dimensions,
    Image,
} from 'react-native';

export default function HowUseThiAnimalApp() {
    const { width: shwilk, height: hetirjma } = Dimensions.get('window');

    // Розміри та відступи
    const cardPadding = shwilk * 0.06;
    const cardRadius = shwilk * 0.04;
    const cardMarginTop = hetirjma * 0.019;
    const treeSize = shwilk * 0.19;
    const textFontSize = shwilk * 0.045;
    const textLineHeight = shwilk * 0.062;
    const textMarginTop = hetirjma * 0.03;

    return (
        <View style={{
            alignItems: 'center',
            backgroundColor: 'transparent',
            justifyContent: 'flex-start',
            flex: 1,
            paddingTop: cardMarginTop,
        }}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: hetirjma * 0.2304353, }}>
                <View style={{
                    borderColor: '#ffd700',

                    elevation: 6,

                    backgroundColor: '#1A1139',

                    borderWidth: 1.5,

                    borderRadius: cardRadius,
                    padding: cardPadding,
                    shadowOpacity: 0.18,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },




                    shadowRadius: 8,
                    alignItems: 'center',
                    width: shwilk * 0.92,
                }}>

                    <Image source={require('../AniheduAsetrds/HesedpImazegsInas/topimagofonb/tree.png')}
                        style={{
                            height: treeSize,
                            marginBottom: shwilk * 0.04,
                            
                            resizeMode: 'contain',
                            width: treeSize,
                        }}
                    />
                    {/* Текст правил */}
                    <Text style={{
                        textAlign: 'left',
                        color: '#fff',
                        lineHeight: textLineHeight,
                        fontFamily: 'System',
                        marginTop: textMarginTop,
                        fontWeight: '400',
                        fontSize: textFontSize,
                    }}>
                        {`The investigation unfolds in silence and observation. Each player receives a secret animal role with a specific way of behaving. Stay in character, speak with intention, and never reveal your role directly.

One of the players is the Rare Bull. They know the truth – but must hide it. The others must watch closely, ask careful questions, and notice what doesn’t quite fit.

The group explores a shared location, discusses freely, and slowly forms suspicions. Some roles mislead, others observe, and a few remember everything that’s said.

When the time feels right, the group makes a single accusation. If the Rare Bull is exposed, the forest speaks. If not, silence wins.

In this game, how you speak matters more than what you say.`}
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}
