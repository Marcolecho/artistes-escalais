const contacts = [
    { nom: "BOLZONELLO", prenom: 'Jacqueline', role: 'Présidente', numero: '0000000000', mail: 'mail@mail.fr' },
    { nom: "BOLZONELLO2", prenom: 'Jacqueline2', role: 'Vice-présidente', numero: '0000000000', mail: 'mail@mail.fr' },
    { nom: "BOLZONELLO3", prenom: 'Jacqueline3', role: 'Trésorière', numero: '0000000000', mail: 'mail@mail.fr' },
    { nom: "BOLZONELLO4", prenom: 'Jacqueline4', role: 'Secrétaire', numero: '0000000000', mail: 'mail@mail.fr' },
    { nom: "BOLZONELLO", prenom: 'Jacqueline', role: 'Présidente', numero: '0000000000', mail: 'mail@mail.fr' },
    { nom: "BOLZONELLO2", prenom: 'Jacqueline2', role: 'Vice-présidente', numero: '0000000000', mail: 'mail@mail.fr' },
    { nom: "BOLZONELLO3", prenom: 'Jacqueline3', role: 'Trésorière', numero: '0000000000', mail: 'mail@mail.fr' },
    { nom: "BOLZONELLO4", prenom: 'Jacqueline4', role: 'Secrétaire', numero: '0000000000', mail: 'mail@mail.fr' },
    { nom: "BOLZONELLO", prenom: 'Jacqueline', role: 'Présidente', numero: '0000000000', mail: 'mail@mail.fr' },
    { nom: "BOLZONELLO2", prenom: 'Jacqueline2', role: 'Vice-présidente', numero: '0000000000', mail: 'mail@mail.fr' },
    { nom: "BOLZONELLO3", prenom: 'Jacqueline3', role: 'Trésorière', numero: '0000000000', mail: 'mail@mail.fr' },
    { nom: "BOLZONELLO4", prenom: 'Jacqueline4', role: 'Secrétaire', numero: '0000000000', mail: 'mail@mail.fr' },
    { nom: "BOLZONELLO", prenom: 'Jacqueline', role: 'Présidente', numero: '0000000000', mail: 'mail@mail.fr' },
    { nom: "BOLZONELLO2", prenom: 'Jacqueline2', role: 'Vice-présidente', numero: '0000000000', mail: 'mail@mail.fr' },
    { nom: "BOLZONELLO3", prenom: 'Jacqueline3', role: 'Trésorière', numero: '0000000000', mail: 'mail@mail.fr' },
    { nom: "BOLZONELLO4", prenom: 'Jacqueline4', role: 'Secrétaire', numero: '0000000000', mail: 'mail@mail.fr' },
];

const drawContact = () => {
    const containerContact = document.getElementById('contact-container');
    contacts.forEach((contact) => {
        const divContact = document.createElement('div');
        divContact.className = 'contact';
        divContact.innerHTML = `
            <p><strong>${contact.nom} ${contact.prenom}</strong></p>
            <p><strong>Mail :</strong> ${contact.mail}</p>
            <p><strong>Numero :</strong> ${contact.numero}</p>
        `;
        containerContact.appendChild(divContact);
    });
}


export {drawContact};