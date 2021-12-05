(function() {
  'use strict'

  let link = location.hash.substring(1)

  if (['portfolio', 'story', 'contact'].includes(link)) {
    document.body.dataset.page = link
  }

  document.addEventListener('DOMContentLoaded', setScrollbarOffset)

  function setScrollbarOffset() {
    document.documentElement.style.setProperty('--scrollbar-offset', `${innerWidth - document.documentElement.clientWidth}px`)
  }

  window.addEventListener('resize', () => {
    if (!document.documentElement.classList.contains('fixed')) {
      setScrollbarOffset()
    }
  })

  document.getElementById('intro').addEventListener('click', (event) => {
    if (event.currentTarget.paused) {
      document.getElementById('play').classList.add('active')

      event.currentTarget.play()
    } else {
      event.currentTarget.pause()
    }
  })

  document.getElementById('intro').addEventListener('pause', (event) => {
    document.getElementById('play').classList.remove('active')
  })

  document.getElementById('intro').addEventListener('contextmenu', (event) => {
    event.preventDefault()
  })

  document.querySelectorAll('#filters button').forEach((button) => {
    button.addEventListener('click', filter)
  })

  function filter(event) {
    event.currentTarget.classList.toggle('active')

    document.getElementById('tiles').classList.toggle(event.currentTarget.textContent)

    setScrollbarOffset()
  }

  const content = [
    {
      media: [
        {
          type: 'video',
          file: 'PulitzerFB_v3.mp4'
        }
      ],
      text: 'In this exciting project for Pulitzer Amsterdam, commissioned by Orange Hotel Marketing, I got to make a Facebook advertising video for their fall promotion. I animated the outline of the Amsterdam canal houses using Adobe After Effects. Combining this animation with pictures, text and the falling leaves in Premiere Pro, made for a successful result that taught me a lot. The promotion videos were released across Facebook and Instagram in 5 different languages.'
    }, {
      media: [
        {
          type: 'video',
          file: 'Campinav3.mp4'
        }, {
          type: 'video',
          file: 'MilieuV3.mp4'
        }, {
          type: 'video',
          file: '1 Uitgemolken Den Haag v2.mp4'
        }, {
          type: 'image',
          file: '2 Biteback.png'
        }
      ],
      text: 'As a voluntary member of animal rights organization Bite Back, I have helped edit videos and design social media posts. I have created videos to support the campaign ‘Uitgemolken’ which advocates for cows that are being used for their milk. I have also made images for Instagram that combine text and compelling images found online.'
    }, {
      media: [
        {
          type: 'video',
          file: 'Jizen.mp4'
        }, {
          type: 'video',
          file: 'Sebastien_FINAL_Kort.mp4'
        }, {
          type: 'image',
          file: 'Potjes.jpg'
        }
      ],
      text: 'Jizen Responsible Marketing was founded to challenge conventional hiring practices based on experience only. Rather, a company should look at the person and their complete set of qualities, personality etc. In the first ‘season’ of this project, I was recruited as a video editor, contributing to the campaign for a new product as well as helping other participants with their personal branding. So far, I have made promotional videos, interviews and designs for characters of the product.'
    }, {
      media: [
        {
          type: 'video',
          file: 'Instructie Invition.mp4'
        }
      ],
      text: 'What is the best way to teach new employees how to complete various complex tasks? This was the question posed by Invition, a company that produces customized products to protect gadgets like smartphones and tablets. Together, we created short instructional videos that explain every step in the process clearly and in a concise way. In this project, I had to forget about fancy visuals and effects and focus on getting the information across in the best way possible.'
    }, {
      media: [
        {
          type: 'image',
          file: '1 Under your Wing poster.jpg'
        }, {
          type: 'video',
          file: '2 game trailer under your wing.mp4'
        }, {
          type: 'image',
          file: '3 Controls.jpg'
        }, {
          type: 'image',
          file: '4 Map1.5.jpg'
        }
      ],
      text: 'This game was made for the Global Game Jam, an event that brings together game developers, artists and musicians to make a game in under 48 hours. Together with four other team members, I made the 2D puzzle/platformer ‘Under Your Wing’. In this game, a miner is trapped in a coal mine together with his canary bird. The objective is to escape together, solving puzzles along the way. In this project I was responsible for a multitude of jobs like: game concept, puzzle design, social media (Twitter), game poster and game trailer. This was a very interesting project which taught me more about making games.'
    }, {
      media: [
        {
          type: 'video',
          file: 'Vmarkt opening HOOG.mp4'
        }
      ],
      text: 'Vmarkt is a vegan supermarket that opened their second store in Utrecht in 2021. As a vegan myself (since 2017), I offered to make a video during their first day. In this short video, made for social media, people can get a first look inside the store.'
    }, {
      media: [
        {
          type: 'video',
          file: 'Symposium_ Sterk in Sport, ben jij erbij_.mp4'
        }
      ],
      text: 'In this full time job as Content & Social Media Marketeer, I was responsible for the daily content on social media, as well as communications within the company. A very diverse job that taught me a lot about marketing and social media. One of my favorite assignments was to create a short video, inviting my colleagues to a symposium about sports physiotherapy. I decided to combine motion graphics with footage of colleagues themselves to create a dynamic video. The complete campaign resulted in the most confirmed attendees to a symposium yet!'
    }, {
      media: [
        {
          type: 'video',
          file: '1 Rabbit Run.mp4'
        }, {
          type: 'image',
          file: '2 Rabbit gif.gif'
        }
      ],
      text: 'Rabbit Run is a 2D platformer in which you are a rabbit, racing to collect all carrots as quickly as possible. Once you return to your home, you can try again, racing your fastest time. This was my very first game project, made together with programmer Julian Vos. In this project I was responsible for all game art, music and sound effects. It was especially interesting to learn how to animate a running rabbit.'
    }, {
      media: [
        {
          type: 'video',
          file: '1 Map_oceania.mp4'
        }, {
          type: 'video',
          file: '2 Oceania_clip.mp4'
        }
      ],
      text: 'In 2017/2018 I traveled across Australia, New Zealand, Fiji and Taiwan. When I came back, I made a film using the footage that I took. This project allowed me to practice animation, for which I used Motion. To capture the feel of the different legs of the journey, I used music by local artists and newsclips to tell the story.'
    }, {
      media: [
        {
          type: 'video',
          file: 'Pip3.mp4'
        }, {
          type: 'video',
          file: 'Pip2.mp4'
        }
      ],
      text: 'Arita Baaijens is a modern day explorer, who lived in the Sahara desert for 20 years before returning to the Netherlands to explore her home country. During the project ‘Paradijs in de Polder’ I got to support this inspiring individual, making videos to accompany her newest book. My main objective during this project was to mirror Arita’s outlook on nature and the way in which humans interact with nature. This meant choosing a rather minimal way of video editing, showing nature and people in a calm way and letting nature ‘speak for itself’.'
    }
  ]
  let tile
  let page = 0

  function update(to, from = true) {
    document.getElementById('bullets').children[page].classList.remove('active')

    if (from) {
      const media = document.getElementById('content').children[page]

      media.classList.remove('open')

      if (media.tagName === 'VIDEO') {
        media.pause()
      }
    }

    page = to

    document.getElementById('content').children[page].classList.add('open')
    document.getElementById('bullets').children[page].classList.add('active')

    document.getElementById('left').classList.toggle('hidden', page === 0)
    document.getElementById('right').classList.toggle('hidden', page === content[tile].media.length - 1)
  }

  document.querySelectorAll('#tiles > *').forEach((thumbnail) => {
    thumbnail.addEventListener('click', open)
  })

  function open(event) {
    for (let i = document.getElementById('content').childElementCount - 2; i >= 0; i--) {
      document.getElementById('content').children[i].remove()
    }

    let element = event.currentTarget
    for (tile = 0; element = element.previousElementSibling; tile++);

    const media = []
    for (let i = 0; i < content[tile].media.length; i++) {
      if (content[tile].media[i].type === 'image') {
        media.push(document.createElement('img'))
      } else {
        media.push(document.createElement('video'))

        media[i].preload = 'auto'
        media[i].controls = true
        media[i].controlsList = 'nodownload'

        media[i].addEventListener('contextmenu', (event) => {
          event.preventDefault()
        })
      }

      document.getElementById('content').insertBefore(media[i], document.getElementById('content').lastElementChild)
    }
    for (let i = 0; i < content[tile].media.length - 1; i++) {
      media[i][content[tile].media[i].type === 'image' ? 'onload' : 'oncanplaythrough'] = () => {
        media[i + 1].src = `media/${content[tile].media[i + 1].file}`
      }
    }

    media[0].src = `media/${content[tile].media[0].file}`
    document.getElementById('content').lastElementChild.textContent = content[tile].text
    document.getElementById('content').scrollTop = 0

    const bullets = document.getElementById('bullets')
    bullets.classList.toggle('hidden', content[tile].media.length === 1)
    for (let i = bullets.childElementCount; i < content[tile].media.length; i++) {
      const bullet = document.createElement('li')

      bullet.addEventListener('click', () => update(i))
      bullets.appendChild(bullet)
    }
    update(0, false)
    for (let i = bullets.childElementCount; i > content[tile].media.length; i--) bullets.lastElementChild.remove()

    document.documentElement.classList.add('fixed')
    document.getElementById('modal').style.setProperty('--scrollbar-offset', `${document.getElementById('content').offsetWidth - document.getElementById('content').clientWidth}px`)
  }

  document.getElementById('left').addEventListener('click', () => update(page - 1))
  document.getElementById('right').addEventListener('click', () => update(page + 1))

  document.addEventListener('keydown', (event) => {
    if (document.documentElement.classList.contains('fixed')) {
      if (event.key === 'ArrowLeft') {
        if (!document.getElementById('left').classList.contains('hidden')) {
          update(page - 1)
        }
      } else if (event.key === 'ArrowRight') {
        if (!document.getElementById('right').classList.contains('hidden')) {
          update(page + 1)
        }
      } else if (event.key === 'Escape') {
        close(document.getElementById('modal'))
      }
    }
  })

  document.getElementById('modal').addEventListener('click', (event) => {
    if (event.target.tagName === 'DIV') {
      close(event.currentTarget)
    }
  })

  function close(modal) {
    const media = modal.getElementsByClassName('open')[0]

    if (media.tagName === 'IMG') {
      media.onload = null
    } else {
      media.oncanplaythrough = null
      media.pause()
    }

    document.documentElement.classList.remove('fixed')

    setScrollbarOffset()
  }

  document.querySelectorAll('nav button').forEach((button) => {
    button.addEventListener('click', navigate)
  })

  function navigate(event) {
    link = event.currentTarget.dataset.link

    if (link === 'home') {
      history.replaceState(null, document.title, location.pathname)
    } else {
      location.hash = link
    }

    document.body.className = 'fadeout'

    document.body.addEventListener('animationend', () => {
      if (document.documentElement.classList.contains('fixed')) {
        close(document.getElementById('modal'))
      } else if (!document.getElementById('intro').paused) {
        document.getElementById('intro').pause()
      }

      document.body.removeAttribute('class')
      document.body.dataset.page = link

      document.documentElement.scrollTop = 0

      setScrollbarOffset()
    }, { once: true })

    document.getElementsByTagName('aside')[0].classList.remove('open')
  }

  document.getElementById('menu').addEventListener('click', () => {
    document.getElementsByTagName('aside')[0].classList.toggle('open')
  })
})()
