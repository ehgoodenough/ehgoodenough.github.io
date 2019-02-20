import Preact from "preact"

import "views/Mount.view.less"

const portfolio = {
    "games": [
        {"title": "asd"},
        {"title": "asd"},
        {"title": "asd"},
        {"title": "asd"},
        {"title": "asd"},
        {"title": "asd"},
    ]
}

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
                                <div class="Entry">
                                    <div class="Title">
                                        {game.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
                <div class="Introduction">
                </div>
            </div>
        )
    }
}
