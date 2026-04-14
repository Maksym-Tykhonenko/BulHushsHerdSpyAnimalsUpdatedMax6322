import React, { useState } from 'react';
import RoleAssignmentScreen from '../ShellPserdKompontes/RoleAssignmentScreen';
import { shulbStnofMialsPus } from '../shulbStnofMialsPus';
import AddPlayersScreen from '../ShellPserdKompontes/AddPlayersScreen';
import GameScreen from '../ShellPserdKompontes/GameScreen';
import {
    Dimensions,  Image,  Text,  View,
} from 'react-native';
import ShypaniBunknaLubr from '../ShellPserdKompontes/ShypaniBunknaLubr';


type GameStage = 'welcome' | 'addPlayers' | 'assignRoles' | 'game';

// Accept gameStage and setGameStage as props
export default function RareTheVealreBull({
    gameStage,
    setGameStage,
}: {
    gameStage: GameStage,
    setGameStage: React.Dispatch<React.SetStateAction<GameStage>>,
}) {
    const { width: herdiw, height: spanimh } = Dimensions.get('window');
    const [players, setPlayers] = useState<string[]>([]);

    const handleStartGame = () => {
        setGameStage('addPlayers');
    };

    const handlePlayersConfirmed = (playerList: string[]) => {
        setPlayers(playerList);
        setGameStage('assignRoles');
    };

    const handleRolesAssigned = () => {
        setGameStage('game');
    };

    if (gameStage === 'addPlayers') {
        return <AddPlayersScreen onConfirm={handlePlayersConfirmed} onBack={() => setGameStage('welcome')} />;
    }

    if (gameStage === 'assignRoles') {
        return <RoleAssignmentScreen players={players} onComplete={handleRolesAssigned} />;
    }

    if (gameStage === 'game') {
        return <GameScreen players={players} onRestart={() => setGameStage('welcome')} />;
    }

    return (
        <View style={{ backgroundColor: 'transparent', flex: 1, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: spanimh * 0.05 }}>
            <Image source={require('../AniheduAsetrds/HesedpImazegsInas/allAnimals.png')}
                style={{
                    width: herdiw * 0.95,
                    resizeMode: 'contain',
                    top: 0,
                    height: spanimh * 0.55,
                    position: 'absolute',
                    alignSelf: 'center',
                }}
            />

            <View style={{
                borderColor: '#f4a831',
                backgroundColor: 'rgba(26, 16, 64, 0.95)',
                paddingHorizontal: herdiw * 0.06,
                bottom: spanimh * 0.16,
                marginHorizontal: herdiw * 0.05,
                borderWidth: 3,
                paddingVertical: spanimh * 0.035,
                alignItems: 'center',
                borderRadius: herdiw * 0.08,
                width: herdiw * 0.9,
                position: 'absolute',
            }}>
                <Text style={{
                    marginBottom: spanimh * 0.015,
                    fontFamily: shulbStnofMialsPus.anipinsExtrB,
                    letterSpacing: 1,
                    fontSize: herdiw * 0.065,
                    color: '#f4a831',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                }} numberOfLines={1} adjustsFontSizeToFit>
                    REVEAL THE RARE BULL
                </Text>

                <Text style={{
                    color: 'white',
                    fontSize: herdiw * 0.035,
                    textAlign: 'center',
                    paddingHorizontal: herdiw * 0.0125,
                    marginBottom: spanimh * 0.025,
                    lineHeight: herdiw * 0.055,
                    fontFamily: shulbStnofMialsPus.anipinsR,
                }}>
                    A Rare Bull is hiding in plain sight. Ask smart questions, spot inconsistencies, and follow the subtle clues others overlook
                </Text>

                <ShypaniBunknaLubr
                    istilyisef={{ marginBottom: 0 }}
                    tubonTixiatrAyps='New Investigation'
                    onPress={handleStartGame}
                />
            </View>
        </View>
    );
}
