import { resetErrorMessages, emptyField, validField, getPoint, mysteryNumber, showData, } from "./interface.js"
import { data } from "./db.js"

const form = document.querySelector('.form')
const childNameInput = form.querySelector('#child_name')
const motherNameInput = form.querySelector('#mother_name')
const boxElement = document.querySelector('.box-element')
const smalls = document.querySelectorAll('small')

const popup = document.getElementById('popup')
const closePopup = document.getElementById('close-popup')
const body = document.querySelector('#body')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Réinitialisation des messages d'erreur
    resetErrorMessages(smalls);

    // Vérification des champs vides et affichage des messages d'erreur si nécessaire
    const isChildNameInputEmpty = emptyField(childNameInput, smalls[0])
    const isMotherNameInputEmpty = emptyField(motherNameInput, smalls[1])

    // Si tous les champs sont renseignés, vérifier leur validité
    if(isChildNameInputEmpty && isMotherNameInputEmpty){

        // Vérification des champs valides et affichage des messages d'erreur si nécessaire
        const isChildNameValid = validField(childNameInput, smalls[0]);
        const isMotherNameValid = validField(motherNameInput, smalls[1]);

        // Si tous les champs sont valides, calculer et afficher le résultat
        if (isChildNameValid && isMotherNameValid) {
            const childPoint = getPoint(childNameInput.value.toLowerCase());
            const motherPoint = getPoint(motherNameInput.value.toLowerCase());
            const number = mysteryNumber(childPoint, motherPoint)
            
            showData(number, data, boxElement)

            // Afficher le popup si la condition est vérifiée
            popup.classList.add('visible')

            form.reset()
        }
    }

    // Close the popup when the 'x' is clicked
    closePopup.addEventListener('click', () => {
        popup.classList.remove('visible')
        window.location.reload()
    })

    // Optionally, close the popup when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.classList.remove('visible')
            window.location.reload()
        }
    })
   
})


