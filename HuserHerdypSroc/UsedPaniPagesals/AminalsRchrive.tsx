const { width: wisljf, height: hilsjfie } = Dimensions.get('window');
import { shulbStnofMialsPus } from '../shulbStnofMialsPus';
import React, { useState, useRef, } from 'react';
import archaminls from '../AniheduAsetrds/archaminls';
import {
    View,
    Image,
    Dimensions,
    ScrollView,
    Share,
    TouchableOpacity,
    Text,
} from 'react-native';


export default function AminalsRchrive() {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef<ScrollView>(null);

    // Dimensions
    const cardPadding = wisljf * 0.05;
    const cardRadius = wisljf * 0.04;
    const cardMarginTop = hilsjfie * 0.019;
    const badgeSize = wisljf * 0.48;
    const badgeMarginBottom = wisljf * 0.04;
    const paginatorDotSize = wisljf * 0.018;
    const paginatorDotSpacing = wisljf * 0.018;
    const textBlockPadding = wisljf * 0.045;
    const textBlockRadius = wisljf * 0.045;
    const textFontSize = wisljf * 0.035;
    const textMarginBottom = wisljf * 0.022;
    const shareBtnSize = wisljf * 0.11;

    // Paginator
    const renderPaginator = () => (
        <View style={{
            marginBottom: hilsjfie * 0.012,
            marginTop: hilsjfie * 0.012,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
        }}>
            {archaminls.map((_, idx) => (
                <View
                    key={idx}
                    style={{
                        backgroundColor: idx === activeIndex ? '#ffd700' : '#3d2a6a',
                        height: paginatorDotSize,
                        marginHorizontal: paginatorDotSpacing / 2,
                        borderRadius: paginatorDotSize / 2,
                        width: paginatorDotSize,
                    }}
                />
            ))}
        </View>
    );

    // Card
    const renderCard = (item: any, idx: number) => (
        <View key={idx} style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: wisljf,
        }}
        >
            <View style={{
                borderRadius: cardRadius,
                borderColor: '#ffd700',
                padding: cardPadding,
                backgroundColor: '#1A1139',
                borderWidth: 1.5,
                shadowColor: '#000',
                elevation: 6,
                width: wisljf * 0.93,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.18,
                shadowRadius: 8,
                alignItems: 'center',
            }}>
                {/* Animal badge */}
                <View style={{
                    justifyContent: 'center',
                    height: badgeSize,
                    alignItems: 'center',
                    marginBottom: badgeMarginBottom,
                    width: badgeSize,
                }}>
                    <Image source={item.image} style={{
                            height: badgeSize,
                            width: badgeSize,
                            resizeMode: 'contain',
                        }}
                    />
                </View>
                {/* Text blocks */}
                {item.texts.map((txt: string, i: number) => (
                    <View style={{
                        flexDirection: 'row',
                        padding: textBlockPadding,
                        backgroundColor: '#271956',
                        borderRadius: textBlockRadius,
                        alignItems: 'center',
                        width: '100%',
                        marginBottom: textMarginBottom,
                    }} key={i}
                    >
                        <Text style={{
                            color: '#fff',
                            flex: 1, fontSize: textFontSize, fontFamily: shulbStnofMialsPus.anipinsR,
                        }}>
                            {txt}
                        </Text>
                        <TouchableOpacity onPress={() => { Share.share({  message: `The leader Hush of the animal herd tells a story: ${txt}`,
                            })
                        }}>
                            <Image source={require('../AniheduAsetrds/HesedpImazegsInas/poshrTexForFrnd.png')}
                                style={{
                                    marginLeft: wisljf * 0.03,
                                    height: shareBtnSize,
                                    resizeMode: 'contain',
                                    width: shareBtnSize,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
    );

    // Handle swipe
    const onScroll = (e: any) => {
        const idx = Math.round(e.nativeEvent.contentOffset.x / wisljf);
        setActiveIndex(idx);
    };

    return (
        <View style={{
            paddingTop: cardMarginTop,
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'flex-start',
            alignItems: 'center',
        }}>
            {renderPaginator()}
            <ScrollView
                horizontal
                ref={scrollRef}
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
                pagingEnabled
                contentContainerStyle={{
                    alignItems: 'flex-start',
                }}
            >
                {archaminls.map((item, idx) => renderCard(item, idx))}
            </ScrollView>
        </View>
    );
}
