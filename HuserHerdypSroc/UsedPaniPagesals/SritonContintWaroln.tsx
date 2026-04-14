import HowUseThiAnimalApp from './HowUseThiAnimalApp';
import NinzNAvgieatPfsf from '../ShellPserdKompontes/NinzNAvgieatPfsf';
import VerhniyBiraSHao from '../ShellPserdKompontes/VerhniyBiraSHao';
import AminalsRchrive from './AminalsRchrive';
import PreviewQuiz from './HerdQizScens/PreviewQuiz';
import React, { useEffect, useState as useSnazz } from 'react';
import {
    Dimensions as OoiadjSIfdksjDidsfk,
    SafeAreaView as FrobSafe,
    View as QojsdfILKfNsfd,
    Image as ZidisjfMSNFahoi,
} from 'react-native';
type Qlartype =
    | 'Settings'
    | 'Reveal the Rare Bull'
    | 'How to play'
    | 'Animal Archive'
    | 'Quiz Mode'
    | 'Animal Order Challenge'
    | 'Points Exchange';

const { width: karplw, height: hAidfjn } = OoiadjSIfdksjDidsfk.get('window');
import ZoqQwexComp from './RareTheVealreBull';


const SritonContintWaroln: React.FC = () => {
    const [tabState, setTabState] = useSnazz<Qlartype>('Reveal the Rare Bull');
    const [quizFlag, setQuizFlag] = useSnazz(false);
    const [challengeFlag, setChallengeFlag] = useSnazz(false);

    const [stageFlag, setStageFlag] = useSnazz<'welcome' | 'addPlayers' | 'assignRoles' | 'game'>('welcome');

    const renderScene = (screenKey: Qlartype) => {
        switch (screenKey) {
            case 'Reveal the Rare Bull':
                return <ZoqQwexComp setActiveTab={setTabState} gameStage={stageFlag} setGameStage={setStageFlag} />;
            case 'How to play':
                return <HowUseThiAnimalApp />;
            case 'Animal Archive':
                return <AminalsRchrive />;
            case 'Quiz Mode':
                return <PreviewQuiz setTabZoq={setTabState} quizStarted={quizFlag} setQuizStarted={setQuizFlag} mode="quiz" />;
            case 'Animal Order Challenge':
                return <PreviewQuiz setTabZoq={setTabState} quizStarted={challengeFlag} setQuizStarted={setChallengeFlag} mode="challenge" />;
            default:
                return null;
        }
    };

    useEffect(() => {
        if (tabState !== 'Quiz Mode') setQuizFlag(false);
        if (tabState !== 'Animal Order Challenge') setChallengeFlag(false);
        if (tabState !== 'Reveal the Rare Bull') setStageFlag('welcome');
    }, [tabState]);

    return (
        <QojsdfILKfNsfd style={{ flex: 1, height: hAidfjn, width: karplw, backgroundColor: '#02020E', }}>
            <FrobSafe />
            <ZidisjfMSNFahoi style={{
                opacity: (tabState === 'Reveal the Rare Bull' && stageFlag === 'welcome') || (tabState === 'Quiz Mode' && !quizFlag) ? 0 : 1,
                height: hAidfjn,
                alignSelf: 'center',
                bottom: 0,
                width: karplw * 1.04,
                position: 'absolute',
            }} resizeMode='cover'
                source={require('../AniheduAsetrds/HesedpImazegsInas/aprandbcka.png')}
            />
            {!(tabState === 'Reveal the Rare Bull' && stageFlag === 'welcome') && (
                <VerhniyBiraSHao tabZoq={tabState}
                    setTabZoq={setTabState}
                    onRareBullBackToPreview={() => {
                        setStageFlag('welcome');
                    }}
                />
            )}
            <QojsdfILKfNsfd style={{ flex: 1, zIndex: 1 }}>
                {renderScene(tabState)}
            </QojsdfILKfNsfd>
            {((tabState === 'Reveal the Rare Bull' && stageFlag === 'welcome') || tabState === 'How to play') && (
                <NinzNAvgieatPfsf klypt={tabState} setKlypt={setTabState} />
            )}
        </QojsdfILKfNsfd>
    );
};

export default SritonContintWaroln;