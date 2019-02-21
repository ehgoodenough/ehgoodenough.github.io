import Preact from "preact"

import "views/Mount.view.less"
import "@fortawesome/fontawesome-free/css/all.css"

const portfolio = {
    "games": [
        {
            "title": "Else Return Home",
            "image": require("images/else-return-home.gif"),
            "link": "https://ackleyrc.itch.io/else-return-home",
            "jam": "Global Game Jam 2019",
        },
        {
            "title": "Twitch Chat Lobby",
            "image": require("images/twitch-chat-lobby.png"),
            "link": "https://globalgamejam.org/2018/games/twitch-chat-lobby",
            "jam": "Global Game Jam 2018"
        },
        {
            "title": "Stake your Acclaim",
            "image": require("images/stake-your-acclaim.png"),
            "link": "https://ldjam.com/events/ludum-dare/40/stake-your-acclaim",
            "jam": "Ludum Dare 40",
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
            "title": "Plug-n-Play",
            "image": require("images/plug-n-play.gif"),
            "link": "https://ldjam.com/events/ludum-dare/39/plug-and-play",
            "jam": "Ludum Dare 39",
        },
        {
            "title": "Fool's Gold",
            "image": require("images/fools-gold-2.gif"),
            "link": "https://ehgoodenough.itch.io/fools-gold",
            "jam": "Seattle Indies Jam 2017",
        },
        {
            "title": "WootWare",
            "image": require("images/wootware.gif"),
            "link": "https://ehgoodenough.github.io/microgames",
            "jam": "Woot Jam 2017",
        },
        {
            "title": "Punch-a-Bunch",
            "image": require("images/punch-a-bunch.gif"),
            "link": "https://globalgamejam.org/2017/games/shining-dragon-showdown-sunset-against-shadows",
            "jam": "Global Game Jam 2017",
        },
        {
            "title": "Salt Pile",
            "image": require("images/salt-pile.gif"),
            "link": "http://ludumdare.com/compo/ludum-dare-37/?action=preview&uid=41870",
            "jam": "Ludum Dare 37",
        },
        {
            "title": "Fracture",
            "image": require("images/fracture.gif"),
            "link": "https://globalgamejam.org/2016/games/fracture",
            "jam": "Global Game Jam 2016",
        },
        {
            "title": "Overclock.exe",
            "image": require("images/overclock.gif"),
            "link": "http://js13kgames.com/entries/overclockexe",
            "jam": "JS13K 2016",
        },
        {
            "title": "Stick Them With the Pointy End",
            "image": require("images/stick-em-1.png"),
            "link": "http://ludumdare.com/compo/ludum-dare-36/?action=preview&uid=41870",
            "jam": "Ludum Dare 36",
        },
        {
            "jam": "Social Justice Jam 2016",
            "image": require("images/nodapl.png"),
            "link": "https://ehgoodenough.github.io/nodapl",
        },
        {
            "title": "Stack",
            "image": require("images/stack.gif"),
            "jam": "A9VS Hackathon 2016",
        },
        {
            "title": "Wearwolf",
            "image": require("images/wearwolf.gif"),
            "link": "http://ludumdare.com/compo/ludum-dare-35/?action=preview&uid=41870",
            "jam": "Ludum Dare 35",
        },
        {
            "image": require("images/roguelike.gif"),
            "jam": "7DRL 2016",
        },
        {
            "title": "Snake-on-a-Plane",
            "image": require("images/snake-on-a-plane.gif"),
            "link": "http://ehgoodenough.github.io/snake-on-a-plane/v0.0.2/",
            "jam": "GDC Plane Jam 2016",
        },
        {
            "title": "Sproutsong",
            "image": require("images/sproutsong.gif"),
            "link": "http://ludumdare.com/compo/ludum-dare-34/?action=preview&uid=41870",
            "jam": "Ludum Dare 34",
        },
        {
            "title": "Papercut",
            "image": require("images/papercut.gif"),
            "link": "https://github.com/ehgoodenough/papercut/releases",
            "jam": "Playfab Jam 2015",
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
            "title": "Jumpdude",
            "image": require("images/jumpdude-1.gif"),
            "jam": "Yeah Good Enough Jam 2014",
        },
        {
            "title": "Whoami",
            "image": require("images/whoami.gif"),
            "link": "http://ehgoodenough.github.io/whoami/v0.1.9",
            "jam": "ChaDevs Jam 2014",
        },
        {
            "title": "Inverse Worlds",
            "image": require("images/inverse-worlds.png"),
            "link": "http://ludumdare.com/compo/ludum-dare-30/?action=preview&uid=41870",
            "jam": "Ludum Dare 30",
        },
        {
            "title": "Nothingness",
            "image": require("images/nothingness.png"),
            "link": "http://mocsarcade.github.io/nothingness/",
            "jam": "UTC CPSC4910",
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
                <header>
                    <img class="Avatar" src={require("images/me.jpg")}/>
                    <div class="Introduction">
                        <p><b>Howdy!</b></p>
                        <p>My name is Andrew.</p>
                        <p>I <i class="fas fa-heart"/> game jams.</p>
                    </div>
                </header>
                <section class="Games">
                    <div class="Entries">
                        {portfolio.games.map((game) => (
                            <GameEntry game={game}/>
                        ))}
                    </div>
                </section>
                <footer>
                    <div class="SocialLinks">
                        <a class="SocialLink" href="https://twitter.com/ehgoodenough" target="_blank">
                            <i class="fab fa-twitter"/>
                        </a>
                        <a class="SocialLink"  href="https://github.com/ehgoodenough" target="_blank">
                            <i class="fab fa-github"/>
                        </a>
                        <a class="SocialLink"  href="https://twitch.tv/yeahgoodenough" target="_blank">
                            <i class="fab fa-twitch"/>
                        </a>
                        <a class="SocialLink"  href="https://www.npmjs.com/~ehgoodenough" target="_blank">
                            <i class="fab fa-npm"/>
                        </a>
                    </div>
                </footer>
            </div>
        )
    }
}

class GameEntry {
    render() {
        return (
            <a class="Entry" style={this.style}
                href={this.props.game.link} target="_blank">
                <div class="Cover">
                    <div class="Text">
                        {this.props.game.jam}
                    </div>
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
