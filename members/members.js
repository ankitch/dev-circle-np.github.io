/* Member information */

const members = [
    // rameshsyn
    {
        fullName: 'Ramesh Syangtan',
        discordUsername: 'rameshsyn#6074',
        about: 'I am teacher, developer & student from Suryabinayak, Bhaktapur. ',
        links: {
            github: 'rameshsyn',
            twitter: 'ramesh_syn',
            facebook: 'rameshsyn'
        }
    },
    // ashish
    {
        fullName: 'Ashish Acharya',
        discordUsername: 'ashish#2010',
        about: 'Developer | Designer | Student | Nepal',
        links: {
            github: 'anarchyrucks',
            twitter: 'anarchyrucks',
            facebook: 'anarchyrucks'
        }
    },
    // bibek
    {
        fullName: 'Bibek Lamsal',
        discordUsername: 'bibek',
        about: 'I am a budding Software Engineer and a Mathematics enthusiast.',
        links: {
            github: 'bibek94',
            twitter: 'bibek107',
            facebook: 'bibek.lamsal.94'
        }
    },
    // nirmalrizal
    {
        fullName: 'Nirmal Rijal',
        discordUsername: 'nirmalrizal#8173',
        about: 'Craze for Machine Learning and Data Science :)',
        links: {
            github: 'nirmalrizal53',
            twitter: 'nirmalrizal',
            facebook: 'nirmal.rijal.16'
        }
    },
    // manishmarahatta
    {
        fullName: 'Manish Marahatta',
        discordUsername: 'manishmarahatta#6214',
        about: 'developer, emacs and open source addict, craze for AI',
        links: {
            github: 'manishmarahatta',
            twitter: 'mmarahatta',
            facebook: 'mmarahatta'
        }
    },
    // nabinsademba
    {
        fullName: 'Nabin Sademba',
        discordUsername: 'Monk34#5561',
        about: 'nerd,geek :P',
        links: {
            github: 'nabins13',
            twitter: 'nabin sademba',
            facebook: 'नविन सादेम्बा लिम्बु'
        }
    },
    // amitchaudhary
    {
        fullName: 'Amit Chaudhary',
        discordUsername: 'amitness#3292',
        about: 'I love playing with data.',
        links: {
            github: 'amitness',
            facebook: 'amitify'
        }
    },
    // rajan bhattarai
    {
        fullName: 'Rajan Bhattarai',
        discordUsername: 'cdrrazan#3388',
        about: 'ROR, emacs, and Open Source Promoter',
        links: {
            github: 'cdrrazan',
            twitter: 'cdrrazan',
            facebook: 'cdrrazanme'
        }
    },
    // Animesh Risal
    {
        fullName: 'Animesh Risal',
        discordUsername: 'TenToasts#8794',
        about: 'Machine Learning, NLP, open education',
        links: {
            github: 'toastypixels',
            twitter: 'TenToasts',
            facebook: 'TenToasts'
        }
    },
    // Sabin Nepal
    {
        fullName: 'Sabin Nepal',
        discordUsername: 'neymarsabin#2179',
        about: 'I am a CSIT student and I like to collaborate.',
        links: {
            github: 'neymarsabin'
        }
    },
    // Pradip Khadka
    {
        fullName: 'Pradip Khadka',
        discordUsername: 'pradyp.me#2193',
        about: 'Developer, EDM Lover, Lifelong Learner',
        links: {
            github: 'coderpradp',
            twitter: 'pradpkhadka',
            facebook: 'iampradp'
        }
    },
    // Pratik Chaudhary
    {
        fullName: 'Pratik Chaudhary',
        discordUsername: 'AbsoluteZero#0296',
        about: 'Hacks FP',
        links: {
            github: 'AbsoluteZero273',
            twitter: 'CodeZero273'
        }
    },
    // Sujan Rijal
    {
        fullName: 'Sujan Rijal',
        discordUsername: 'Sujanrijal16#8997',
        about: 'IT student and here to contribute for new experience.',
        links: {
            github: 'Sujanrijal16',
        }
    },
    // Kiran Shahi
    {
        fullName: 'Kiran Shahi',
        discordUsername: 'Kiran Shahi#0366',
        about: 'Student | Developer | .NET',
        links: {
            github: 'kiranshahi',
            twitter: 'itskirans',
            facebook: 'itskirans',
        }
    },
    // Pramesh Bajracharya
    {
        fullName: 'Pramesh Bajracharya',
        discordUsername: 'pe.messh#5758',
        about: 'Computer Science Enginner | Tech Enthusiast ',
        links: {
            github: 'Suzal3579',
            twitter: 'suzal33',
            facebook: 'pe.messh',
            instagram: 'pe.messh'
        }
    },
    {
        fullName: 'Jenish Shrestha',
        discordUsername:'jenish1231#4002',
        about:'Student',
        links: {
            github:'jenish1231'
        }
    },
    //Ankit Chhetri 
    {
        fullName: 'Ankit Chhetri',
        discordUsername:'bhukampa#2489',
        about:'Developer | Student | Snake Charmer',
        links: {
            github:'ankitch',
            twitter:'ankit_cheetri'
        }
    }
    // add here
]
/* ====================================================================== */
const membersContainer = document.querySelector('.members')
let membersElms = '' // members elements

// Generate html of members data

members.forEach(member => {
    let memElm =
        `<div class='member'>
      <img class='member-image'
        src='https://github.com/${member.links.github}.png?size=100',
        alt='${member.fullName}'
        title='${member.fullName}'>
      <h2 class='member-username'>${member.fullName}</h2> <p title='Discord username' class='member-discord-user'>@${member.discordUsername} </p><hr>
      <p>${member.about}</p><hr>
      <div class='member-links'>
    `

    if (member.links.github) {
        memElm += `<a href='https://github.com/${member.links.github}'><i class='fa fa-github'></i></a>`
    }

    if (member.links.twitter) {
        memElm += `<a href='https://twitter.com/${member.links.twitter}'><i class='fa fa-twitter'></i></a>`
    }

    if (member.links.facebook) {
        memElm += `<a href='https://facebook.com/${member.links.facebook}'><i class='fa fa-facebook'></i></a>`
    }

    memElm += `</div></div>`

    membersElms += memElm
})

membersContainer.innerHTML = membersElms
