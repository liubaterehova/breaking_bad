getSelectedCharacters(state, { payloud }) {
    function filteredByStatus(characterCards, status) {
        let cards = new Map();
        for (let card of characterCards) {
            if (!cards.has(card.status)) {
                cards.set(card.status, [card]);
            } else cards.get(card.status).push(card);
        }
        const arrForStatus = Array.from(cards);
        console.log("arrForStatus", arrForStatus);
        return {...state,
            characterCards: arrForStatus,
        };
    }
}