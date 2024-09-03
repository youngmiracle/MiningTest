interface LevelExampleLanguageProps {
    id: number,
    name: string,
    className: string,
    linkLvlFirst: string,
    linkLvlSecond: string,
    linkLvlThird: string,
    languageIcon: any, 
    description: string,
    imgPhon?: any,
    classNameBackground: string,
    linkBrowser: string
}

export const LevelExampleLanguage: LevelExampleLanguageProps[] = [
    {
        id: 1,
        name: "C#",
        className: "LevelSection",
        linkLvlFirst: "C#TestLVL1",
        linkLvlSecond: "C#TestLVL2",
        linkLvlThird: "C#TestLVL3",
        languageIcon: require('../components/assets/images/C/cSharpWhite.png'),
        description: "C# — объектно-ориентированный язык программирования общего назначения. Разработан в 1998—2001 годах группой инженеров компании Microsoft",
        imgPhon: require('../components/assets/images/MainPage/phonC.png'),
        classNameBackground: "LevelSection__background",
        linkBrowser: "https://metanit.com/sharp/tutorial/1.1.php"
    },
    {
        id: 2,
        name: "SQL",
        className: "LevelSection LevelSectionReverse",
        linkLvlFirst: "SQLTestLVL1",
        linkLvlSecond: "SQLTestLVL2",
        linkLvlThird: "SQLTestLVL3",
        languageIcon: require('../components/assets/images/SQL/sqlWhite.png'),
        description: "SQL — декларативный язык программирования, применяемый для создания, модификации и управления данными в реляционной базе данных, управляемой соответствующей системой управления базами данных.",
        imgPhon: require('../components/assets/images/MainPage/phonSQL.png'),
        classNameBackground: "LevelSection__background LevelSection__backgroundSecond",
        linkBrowser: "https://metanit.com/sharp/tutorial/1.1.php"
    }
]