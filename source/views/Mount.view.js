import Preact from "preact"

import "views/Mount.view.less"

const portfolio = {
    "games": [
        {
            "title": "Else Return Home",
            "image": require("images/else-return-home-2.png"),
            "link": "https://ackleyrc.itch.io/else-return-home",
            "jam": "Global Game Jam 2019",
        },
        {
            "title": "Heartslingers",
            "image": require("images/heartslingers.gif"),
            "link": "https://ehgoodenough.itch.io/heartslingers",
            "jam": "Game Maker's Toolkit Jam 2017",
        },
        {
            "title": "Neko Rhythm",
            "image": require("images/neko-rhythm.gif"),
            "link": "https://ehgoodenough.itch.io/neko-rhythm",
            "jam": "Game By Its Cover Game 2017",
        },
        {
            "title": "Fool's Gold",
            "image": require("images/fools-gold.gif"),
            "link": "https://ehgoodenough.itch.io/fools-gold",
            "jam": "Seattle Indies Jam 2017",
        },
        {
            "title": "Punch-a-Bunch",
            "image": require("images/punch-a-bunch.gif"),
            "link": "https://globalgamejam.org/2017/games/shining-dragon-showdown-sunset-against-shadows",
            "jam": "Global Game Jam 2017",
        },
        {
            "title": "Bit Fighter",
            "image": require("images/bitfight.gif"),
            "link": "http://ehgoodenough.github.io/bitfight/",
            "jam": "Yeah Good Enough Jam 2015",
        },
        {
            "title": "Zompocalypse",
            "image": require("images/zompocalypse.gif"),
            "link": "http://ehgoodenough.github.io/zompocalypse/",
            "jam": "JS13K 2015",
        },
        {
            "title": "Starbox",
            "image": require("images/starbox.gif"),
            "link": "https://globalgamejam.org/2015/games/starbox",
            "jam": "Global Game Jam 2015",
        },
        {
            "title": "Whoami",
            "image": require("images/whoami.gif"),
            "link": "http://ehgoodenough.github.io/whoami/v0.1.9",
            "jam": "ChaDevs Jam 2014",
        },
        {
            "title": "OpOb",
            "image": require("images/opob-2.png"),
            "link": "http://ehgoodenough.github.io/whoami/v0.1.9",
            "jam": "Global Game Jam 2014",
        },
    ]
}

// {
//     "title": "",
//     "image": "",
//     "link": "",
//     "jam": "",
// }

export default class Mount {
    render() {
        return (
            <div class="Mount">
                <div class="Portfolio">
                    <section class="Games">
                        <header>
                            Games
                        </header>
                        <div class="Entries">
                            {portfolio.games.map((game) => (
                                <GameEntry game={game}/>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

class GameEntry {
    render() {
        return (
            <a class="Game Entry" style={this.style}
                href={this.props.game.link} target="_blank">
                <div class="Cover">
                    <div class="Title">{this.props.game.title}</div>
                    <div class="Jam">{this.props.game.jam}</div>
                </div>
            </a>
        )
    }
    get style() {
        return {
            "background-image": `url(${this.props.game.image})`
        }
    }
}
