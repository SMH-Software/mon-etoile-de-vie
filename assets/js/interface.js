/**
 * Fonction pour vérifier les champs vide et afficher les erreurs
 * @param {HTMLElement} inputElement 
 * @param {HTMLElement} errorElement 
 * @returns 
 */
export const emptyField = (inputElement, errorElement) => {
    if (inputElement.value.trim() === "") {
        errorElement.innerText = "Champ obligatoire *"
        errorElement.classList.add('is_invalid')
        return false
    }
    return true
}

/**
 * Fonction pour valider les champs et afficher les erreurs si possible
 * @param {HTMLElement} inputElement 
 * @param {HTMLElement} errorElement 
 * @returns 
 */
export const validField = (inputElement, errorElement) => {
    const nameRegex = /^[a-zA-Z,éêèëïçö\s]{4,}$/

    if(!nameRegex.test(inputElement.value.trim())){
        errorElement.innerText = "Ce champ doit contenir exclusivement des lettres majuscules et/ou minuscules et doit comporter au minimum 4 caractères.";
        errorElement.classList.add('is_invalid')
        return false;
    }
    return true
}

/**
 * Fonction pour réinitialiser les messages d'erreur
 * @param {HTMLElement} smallElements 
 */
export const resetErrorMessages = (smallElements) => {
    smallElements.forEach(small => {
        small.innerText = ""
        small.classList.remove('is_invalid')
    })
}

/**
 * fonction pour calculer le point myster à partir du nom
 * @param {string} name 
 * @returns {number}
 */
export const getPoint = (name) => {
    const alphabet = [
        { lettre: 'a', valeur: 1 },{ lettre: 'b', valeur: 2 },
        { lettre: 'c', valeur: 3 },{ lettre: 'd', valeur: 4 },
        { lettre: 'e', valeur: 5 },{ lettre: 'f', valeur: 6 },
        { lettre: 'g', valeur: 7 },{ lettre: 'h', valeur: 8 },
        { lettre: 'i', valeur: 9 },{ lettre: 'j', valeur: 1 },
        { lettre: 'k', valeur: 2 },{ lettre: 'l', valeur: 3 },
        { lettre: 'm', valeur: 4 },{ lettre: 'n', valeur: 5 },
        { lettre: 'o', valeur: 6 },{ lettre: 'p', valeur: 7 },
        { lettre: 'q', valeur: 8 },{ lettre: 'r', valeur: 9 },
        { lettre: 's', valeur: 1 },{ lettre: 't', valeur: 2 },
        { lettre: 'u', valeur: 3 },{ lettre: 'v', valeur: 4 },
        { lettre: 'w', valeur: 5 },{ lettre: 'x', valeur: 6 },
        { lettre: 'y', valeur: 7 },{ lettre: 'z', valeur: 8 },
    ];

    const chaines = name.split('')
    let point = 0
    for (let element of alphabet) {
        for (let chaine of chaines){
            if (element.lettre === chaine){
                point += (element.valeur)
            }
        }
    }

    return point

}


/**
 * fonction pour calculer le chiffre myster 
 * @param {number} child 
 * @param {number} mother 
 * @returns {number}
 */
export const mysteryNumber = (child, mother) => {
    return (child + mother) % 12
}


/**
 * Fonction pour afficher les données dans le popup selon le cas choisi
 * @param {integer} value 
 * @param {Array} data 
 * @param {HTMLElement} boxElement 
 */
export const showData = (value, data, boxElement) => {
    /**
        * Fonction pour créer un tag HTML
        * @param {string} tag 
        * @returns {HTMLElement}
    */
    const createElement = (tag) => {
        const element = document.createElement(tag)
        return element
    }

    /**
     * Fonction pour ajouter les éléments à une box (ici il s'agit d'ajouter les td à notre tr dans la popup)
     * @param {HTMLElement} c1 
     * @param {HTMLElement} c2 
     * @param {HTMLElement} c3 
     * @param {HTMLElement} c4 
     */
    const addToBoxElement = (c1,c2,c3,c4) => {
        boxElement.appendChild(c1)
        boxElement.appendChild(c2)
        boxElement.appendChild(c3)
        boxElement.appendChild(c4)
    }

    const etoile = createElement('td')
    const chiffre = createElement('td')
    const symbolisme = createElement('td')
    const tradition = createElement('td')
    const img = createElement('img') 
   
    if ((value == 5) || (value == 9)){
        
        img.src = "./assets/images/feu.png"
        etoile.appendChild(img)
        chiffre.innerText = value
        symbolisme.innerText = data[0].symbolisme
        tradition.innerText = data[0].tradition

        addToBoxElement(etoile,chiffre,symbolisme,tradition)
    }

    if ((value == 2) || (value == 6) || (value == 10) ){
        img.src = "./assets/images/terre.png"
        etoile.appendChild(img)
        chiffre.innerText = value
        symbolisme.innerText = data[1].symbolisme
        tradition.innerText = data[1].tradition

        addToBoxElement(etoile,chiffre,symbolisme,tradition)
    }

    if ((value == 3) || (value == 7) || (value == 11) ){
        img.src = "./assets/images/air.png"
        etoile.appendChild(img)
        chiffre.innerText = value
        symbolisme.innerText = data[2].symbolisme
        tradition.innerText = data[2].tradition

        addToBoxElement(etoile,chiffre,symbolisme,tradition)
    }

    if ((value == 0) || (value == 4) || (value == 8) || (value == 12)){
        img.src = "./assets/images/feu.png"
        etoile.appendChild(img)
        chiffre.innerText = value
        symbolisme.innerText = data[3].symbolisme
        tradition.innerText = data[3].tradition

        addToBoxElement(etoile,chiffre,symbolisme,tradition)
    }

}
